// Shared site configuration — single source of truth for nav, offices, contact.

export const CAREERS_URL = 'https://www.rivvra.com/careers/huemot-technology';

// Backend API base (Render). Frontend contact form posts here.
export const API_BASE = 'https://api.huemot.com';

// Where "Book a Discovery Call" CTAs point.
//
// Set PUBLIC_HUEMOT_CALENDAR_URL and they open the real scheduling page in a
// new tab; leave it unset and they fall back to the Contact form, which is the
// behaviour today. So this is inert until the URL exists — no half-configured
// state that advertises slots nobody can book.
//
// For GitHub Pages the variable must reach the build: add it under
// Settings -> Secrets and variables -> Actions -> Variables, and it is already
// wired into the env: block of .github/workflows/deploy-pages.yml.
//
// Only call-booking CTAs use this. "Request profiles" and "Request the evidence
// pack" deliberately stay on /contact — they need a written brief, not a slot.
const CALENDAR_URL = import.meta.env.PUBLIC_HUEMOT_CALENDAR_URL || '';
export const BOOKING_URL = CALENDAR_URL || '/contact';
export const BOOKING_EXTERNAL = Boolean(CALENDAR_URL);

// Primary header nav.
//
// `mega` is optional: an item carrying it grows a dropdown panel in the header
// (see components/SiteMegaNav.astro). The value names the panel; items without
// it render exactly as before, so the nav list stays the single source of truth
// and nothing about the mega-nav is hard-coded into the header markup.
//
// Careers is deliberately NOT in this list — the header renders it as a
// separate external link beside the Contact button. It is still carried in
// footerLinks below.
export const nav = [
  { label: 'Services', href: '/services', mega: 'services' },
  { label: 'Industries', href: '/industries', mega: 'industries' },
  { label: 'Hire Developers', href: '/hire-developers' },
  { label: 'How We Engage', href: '/engage' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
];

// Footer carries everything in the header plus the routes held out of it.
//
// Listed explicitly rather than spread from `nav`. The header nav is now
// ordered for the redesign (and drops Our Process and Careers), but the footer
// is a sitemap — reshuffling it on every page as a side effect of a nav tweak
// is not wanted, so its order is pinned here and stays independent.
// /insights is deliberately absent — withheld under the reduced launch scope.
export const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Hire Developers', href: '/hire-developers' },
  { label: 'Our Process', href: '/process' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: CAREERS_URL, external: true },
  { label: 'Salesforce', href: '/salesforce' },
  { label: 'AI & Automation', href: '/ai-automation' },
  { label: 'How We Engage', href: '/engage' },
  { label: 'Trust & Security', href: '/trust' },
  { label: 'Contact', href: '/contact' },
];

export const contact = {
  email: 'info@huemot.com',
  careersEmail: 'careers@huemot.com',
  phone: '+91 755 313 8975',
};

export const offices = [
  {
    country: 'India (HQ)',
    flag: '🇮🇳',
    city: 'Bhopal, MP',
    address: 'G-02, Anmol Towers, Mandakini, Kolar Road, Bhopal 462042',
    phone: '+91 755 313 8975',
  },
  {
    country: 'USA',
    flag: '🇺🇸',
    city: 'Dover, DE',
    address: '8 The Green, Ste R, Dover, DE 19901',
    phone: '+1 618 389 5331',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    city: 'Vancouver, BC',
    address: '600-1285 West Broadway, Vancouver, BC V6H 3X8',
    phone: '+1 618 389 5331',
  },
];

export const credentials = [
  'ISO 27001:2013',
  'ISO 9001:2015',
  'Salesforce Certified Partner',
  'AWS',
  'Microsoft',
  'Google Cloud',
  'Odoo',
  'SAP',
];

// Per-page SEO (from copy doc). description kept concise for search snippets.
export const seo = {
  home: {
    title: 'Huemot Technology | AI-Led Software Development & Digital Transformation',
    description:
      'Enterprise solutions, staff augmentation, and end-to-end product engineering — delivered by 500+ engineers across 50+ technology stacks. 150+ clients, 90% retention.',
  },
  about: {
    title: 'About Huemot | 500+ Engineers, 150+ Clients, 3 Global Offices',
    description:
      'Global IT consulting and software development company headquartered in Bhopal, India, with offices in the USA and Canada. AI-led digital transformation across 50+ stacks.',
  },
  services: {
    title: 'IT Services | Product Engineering, Staff Augmentation, Managed Services | Huemot',
    description:
      'Four ways to engage, ten engineering practices, and 50+ technologies. Team augmentation, product engineering, digital transformation, and managed services.',
  },
  salesforce: {
    title: 'Certified Salesforce Partner India | 75+ Consultants, 5 MVPs | Huemot',
    description:
      'A certified Salesforce partner practice built around customer success. 75+ certified consultants, 5 Salesforce MVPs, 100% certified team, 350% YoY growth.',
  },
  ai: {
    title: 'AI, ML & Automation Center of Excellence | Huemot',
    description:
      'Gen-AI, machine learning, and automation from requirement analysis to optimization and support. Proven AI implementations across insurance, legal, real estate, and retail.',
  },
  engage: {
    title: 'Engagement Models & ODC | From Conversation to Code in 2 Weeks | Huemot',
    description:
      'Flexible commercial models and a fast, low-risk onboarding path. Dedicated pods, managed projects, and staff augmentation with a branded offshore development center.',
  },
  cases: {
    title: 'Case Studies | Measurable Impact Across Fintech, SaaS, Healthtech | Huemot',
    description:
      'Real outcomes from ShipFlow, LendBridge, AssureIQ, and MediLoop — logistics, lending CRM, AI claims automation, and unified patient engagement.',
  },
  contact: {
    title: 'Contact Huemot | Book a Discovery Call',
    description:
      'Book a 30-minute discovery call. We map your goals to a pod and a plan — and have a team building within two weeks. Offices in India, USA, and Canada.',
  },
};
