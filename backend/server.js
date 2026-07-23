// =============================================================================
// Huemot.com — Contact form micro-API
// Single endpoint: POST /api/contact  →  emails info@huemot.com via SMTP.
// Spam protection: honeypot field + in-memory per-IP rate limiting.
// Health check: GET /healthz
// =============================================================================

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.set('trust proxy', 1); // Render sits behind a proxy; needed for real client IP
app.use(express.json({ limit: '20kb' }));

const {
  PORT = 8080,
  SMTP_HOST,
  SMTP_PORT = 587,
  SMTP_USER,
  SMTP_PASS,
  TO_EMAIL = 'info@huemot.com',
  FROM_EMAIL,
} = process.env;

// ---------------------------------------------------------------------------
// CORS — locked to production domains + localhost for dev
// ---------------------------------------------------------------------------
const ALLOWED_ORIGINS = [
  'https://huemot.com',
  'https://www.huemot.com',
  'http://localhost:4321',
  'http://localhost:3000',
];

app.use(
  cors({
    origin(origin, cb) {
      // allow same-origin / curl (no Origin header) and whitelisted origins
      if (!origin || ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
      return cb(new Error('Not allowed by CORS'));
    },
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);

// ---------------------------------------------------------------------------
// Simple in-memory rate limiter (per IP): max 5 requests / 10 min
// ---------------------------------------------------------------------------
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map(); // ip -> [timestamps]

function rateLimited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > RATE_LIMIT;
}

// Periodically prune stale IP buckets so the map doesn't grow unbounded
setInterval(() => {
  const now = Date.now();
  for (const [ip, arr] of hits) {
    const fresh = arr.filter((t) => now - t < WINDOW_MS);
    if (fresh.length) hits.set(ip, fresh);
    else hits.delete(ip);
  }
}, WINDOW_MS).unref();

// ---------------------------------------------------------------------------
// Mail transport (lazily created & reused)
// ---------------------------------------------------------------------------
let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP is not configured (SMTP_HOST / SMTP_USER / SMTP_PASS missing).');
  }
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // true for 465, false for 587/STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    // Fail fast instead of hanging ~2 min on a bad host/credentials
    connectionTimeout: 12000,
    greetingTimeout: 12000,
    socketTimeout: 20000,
  });
  return transporter;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const SERVICES = [
  'Team Augmentation',
  'Product Engineering',
  'Digital Transformation',
  'Managed Services',
  'Salesforce',
  'AI & Automation',
  'Other',
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v) => (typeof v === 'string' ? v.trim() : '');
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  );

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------
app.get('/healthz', (_req, res) => res.json({ ok: true, service: 'huemot-contact-api' }));

app.post('/api/contact', async (req, res) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a few minutes.' });
  }

  const body = req.body || {};

  // Honeypot: real users never fill "website". Pretend success to fool bots.
  if (clean(body.website)) {
    return res.status(200).json({ ok: true });
  }

  const fullName = clean(body.fullName);
  const workEmail = clean(body.workEmail);
  const company = clean(body.company);
  const serviceInterest = clean(body.serviceInterest);
  const message = clean(body.message);

  // Validation
  const errors = [];
  if (!fullName || fullName.length > 120) errors.push('fullName');
  if (!workEmail || !EMAIL_RE.test(workEmail) || workEmail.length > 160) errors.push('workEmail');
  if (!company || company.length > 140) errors.push('company');
  if (!serviceInterest || !SERVICES.includes(serviceInterest)) errors.push('serviceInterest');
  if (!message || message.length < 10 || message.length > 2000) errors.push('message');

  if (errors.length) {
    return res.status(400).json({ error: 'Invalid submission.', fields: errors });
  }

  // Compose + send
  const subject = `New enquiry — ${serviceInterest} — ${company}`;
  const text =
    `New contact form submission from huemot.com\n\n` +
    `Name:     ${fullName}\n` +
    `Email:    ${workEmail}\n` +
    `Company:  ${company}\n` +
    `Service:  ${serviceInterest}\n\n` +
    `Message:\n${message}\n`;
  const html = `
    <h2 style="margin:0 0 12px;font-family:Arial,sans-serif">New enquiry from huemot.com</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0;color:#64748b">Name</td><td><strong>${esc(fullName)}</strong></td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#64748b">Email</td><td><a href="mailto:${esc(workEmail)}">${esc(workEmail)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#64748b">Company</td><td>${esc(company)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#64748b">Service</td><td>${esc(serviceInterest)}</td></tr>
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${esc(message)}</p>
  `;

  try {
    await getTransporter().sendMail({
      from: FROM_EMAIL || `"Huemot Website" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: `"${fullName}" <${workEmail}>`,
      subject,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    // Surface the real SMTP failure in Render logs for diagnosis
    console.error('[contact] send failed:',
      'code=', err.code || '-',
      'command=', err.command || '-',
      'responseCode=', err.responseCode || '-',
      'msg=', err.message);
    return res.status(502).json({ error: 'Could not send your message right now. Please email info@huemot.com.' });
  }
});

// Fallback
app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

// Error handler — turn CORS rejections into a clean 403 (no stack trace)
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  if (err && err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'Origin not allowed.' });
  }
  console.error('[error]', err && err.message);
  return res.status(500).json({ error: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`huemot-contact-api listening on :${PORT}`);
});
