# Huemot.com

Marketing website for **Huemot Technology Private Limited** — a static Astro site (GitHub Pages) plus a single-endpoint contact API (Render).

```
huemot-website/
├── site/       → Astro static site  → GitHub Pages (huemot.com)
├── backend/    → Express micro-API   → Render (api.huemot.com)
└── .github/workflows/deploy-pages.yml
```

- **Frontend:** Astro, zero client frameworks. 8 pages, fully static.
- **Backend:** Node + Express, one endpoint `POST /api/contact` → emails `info@huemot.com`.
- **Careers** is not a page — nav/footer link out to the Rivvra ATS
  (`https://www.rivvra.com/careers/huemot-technology`); `/careers/` also has a static redirect.

---

## 1. Frontend (`site/`)

### Local dev
```bash
cd site
npm install
npm run dev          # http://localhost:4321
```

### Build
```bash
cd site
npm run build        # outputs static files to site/dist/
npm run preview      # serve the production build locally
```

### Structure
| Path | What |
|------|------|
| `src/pages/*.astro` | One file per route (`index`, `about`, `services`, `salesforce`, `ai-automation`, `engage`, `case-studies`, `contact`) |
| `src/layouts/BaseLayout.astro` | `<head>`, SEO/OG/canonical, header, footer, counter + mobile-nav scripts |
| `src/components/` | Header, Footer, PageHero, PillButton, StatCounter, ContactForm, etc. |
| `src/data/site.js` | Nav, offices, contact info, SEO map, **`API_BASE`** |
| `public/` | `CNAME`, `robots.txt`, `sitemap.xml`, favicons, `brand/` logos, `careers/index.html` |

### Swapping the logo
The real logo lives at `site/public/brand/huemot-logo-trim.png` (transparent, trimmed).
The header and footer reference it directly; favicons (`favicon-32.png`, `favicon-192.png`,
`apple-touch-icon.png`) were generated from it. Replace the file (keep the name) to update the mark;
regenerate favicons from the new artwork if the shape changes.

### Contact API base URL
Set in `src/data/site.js`:
```js
export const API_BASE = 'https://api.huemot.com';
```
For local end-to-end testing against a local backend, change it to `http://localhost:8080`.

---

## 2. Backend (`backend/`)

### Local dev
```bash
cd backend
npm install
cp .env.example .env     # fill in SMTP credentials
npm run dev              # http://localhost:8080
```

### Endpoints
| Method | Path | Purpose |
|--------|------|---------|
| `GET`  | `/healthz` | Health check |
| `POST` | `/api/contact` | Validate + email the enquiry to `TO_EMAIL` |

Fields: `fullName`, `workEmail`, `company`, `serviceInterest`, `message` (+ hidden `website` honeypot).
Protections: honeypot field, in-memory per-IP rate limit (5 / 10 min), CORS locked to
`huemot.com` / `www.huemot.com` (+ localhost).

### Environment variables
See `.env.example`. Required for email to send: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`.
Optional: `TO_EMAIL` (default `info@huemot.com`), `FROM_EMAIL`, `PORT`.

---

## 3. Deployment

### Frontend → GitHub Pages
1. Push this repo to GitHub with `main` as the default branch.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Every push to `main` that touches `site/**` runs `.github/workflows/deploy-pages.yml`
   (build `site/` → deploy `site/dist` to Pages). The `site/public/CNAME` file pins `huemot.com`.

### Backend → Render
- **Option A (Blueprint):** in Render, *New → Blueprint*, point at this repo. `backend/render.yaml`
  provisions the `huemot-contact-api` web service (root dir `backend`, health check `/healthz`).
- **Option B (manual):** *New → Web Service* → root directory `backend`, build `npm ci`, start `node server.js`.
- Set the SMTP secrets in the Render dashboard (they are `sync: false` in the blueprint, never in git).
- Add a **custom domain** `api.huemot.com` in Render → it gives you a `CNAME` target.

---

## 4. DNS records to set at GoDaddy (huemot.com)

> Remove any parked/forwarding A or CNAME records GoDaddy added by default before adding these.

### Apex `huemot.com` → GitHub Pages (four A records)
| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `185.199.108.153` | 600 |
| A | @ | `185.199.109.153` | 600 |
| A | @ | `185.199.110.153` | 600 |
| A | @ | `185.199.111.153` | 600 |

Optional IPv6 (AAAA):
| Type | Name | Value |
|------|------|-------|
| AAAA | @ | `2606:50c0:8000::153` |
| AAAA | @ | `2606:50c0:8001::153` |
| AAAA | @ | `2606:50c0:8002::153` |
| AAAA | @ | `2606:50c0:8003::153` |

### `www.huemot.com` → GitHub Pages
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | `<your-github-username>.github.io` | 600 |

### `api.huemot.com` → Render
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | api | `<your-service>.onrender.com` (from Render's custom-domain screen) | 600 |

After DNS propagates: in GitHub **Settings → Pages**, confirm the custom domain `huemot.com`
and tick **Enforce HTTPS**. In Render, verify the `api.huemot.com` custom domain and its TLS cert.

---

## 5. Notes
- No secrets are committed. `.env` is git-ignored; SMTP creds live only in Render.
- `sitemap.xml` / `robots.txt` are hand-maintained static files in `site/public/` — update
  `sitemap.xml` if routes change.
- **Related Rivvra task (separate repo):** rivvra.com SPA returns HTTP 404 on unknown routes while
  rendering fine client-side. Add a Render rewrite `/*` → `/index.html` (action: Rewrite) so deep
  links like `/careers/huemot-technology` return 200 for indexing and link previews.

© 2026 Huemot Technology Pvt. Ltd.
