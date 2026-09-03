// Per-industry detail pages (/industries/<slug>).
//
// Sourcing rule: nothing here is a new claim. Names, one-liners and the headline
// stats come from `industries` in content.js; challenges, solutions and metrics
// are the same ones already published on /case-studies; capabilities and stacks
// are drawn from the practices and technology lists on /services. Where an
// industry has no published case study (SaaS, Supply Chain), `caseStudy` is null
// and the page simply omits that block rather than inventing one.
//
// `name` must match the entry in content.js `industries` exactly — industries.astro
// joins the two on it, and the build fails loudly if a name stops matching.

export const industryPages = [
  {
    slug: 'fintech',
    name: 'Fintech & Financial Services',
    eyebrow: 'Fintech & Banking',
    title: 'Payments and Lending, Built for Scrutiny.',
    lead: 'Lending CRM, KYC automation, payments and compliance-grade data pipelines for regulated lenders — shipped by pods that have already been through an audit.',
    img: '/images/home/fintech',
    alt: 'Financial market charts on a trading screen',
    challenges: [
      'Partner data scattered across systems, so cross-sell never gets off the ground.',
      'KYC and onboarding measured in days rather than minutes.',
      'Regulatory reporting assembled by hand every cycle.',
    ],
    approach: [
      'Salesforce Financial Services Cloud with Lightning, so advisors work one record.',
      'MuleSoft integration across partner systems and core banking.',
      'Einstein Analytics for next-best-action, and audit-ready pipelines underneath.',
    ],
    capabilities: ['Lending CRM', 'KYC & onboarding automation', 'Payments integration', 'Compliance reporting', 'Core banking integration', 'Fraud & risk scoring'],
    stack: ['Salesforce', 'MuleSoft', 'Java', 'Spring Boot', 'PostgreSQL', 'AWS', 'Kafka'],
    caseStudy: 'lendbridge',
  },
  {
    slug: 'healthcare',
    name: 'Healthtech',
    eyebrow: 'Healthcare',
    title: 'HIPAA-Ready Platforms, Clinicians Actually Use.',
    lead: 'HIPAA-compliant patient engagement, HL7 FHIR integrations, telemedicine and clinical workflow tooling — built around how care teams already work.',
    img: '/images/home/healthcare',
    alt: 'Clinician reviewing patient records on a tablet',
    challenges: [
      'Scheduling, telemedicine and care coordination living in separate tools.',
      'Provider networks that cannot share a patient record safely.',
      'Adoption that stalls because the workflow fights the clinician.',
    ],
    approach: [
      'One HIPAA-compliant app spanning scheduling, video consults and follow-up.',
      'HL7 FHIR integration so records move between providers without rekeying.',
      'AWS microservices behind it, and a custom portal for the care team.',
    ],
    capabilities: ['Patient engagement apps', 'Telemedicine', 'HL7 FHIR integration', 'Care coordination', 'Clinical workflow tooling', 'HIPAA compliance'],
    stack: ['React Native', 'Node.js', 'AWS', 'HL7 FHIR', 'PostgreSQL', 'Twilio'],
    caseStudy: 'mediloop',
  },
  {
    slug: 'retail',
    name: 'Retail & E-commerce',
    eyebrow: 'Retail & E-Commerce',
    title: 'Storefronts and Logistics That Survive Peak.',
    lead: 'Storefronts, order orchestration and logistics platforms built to hold up on the busiest day of the year, not the average one.',
    img: '/images/home/retail',
    alt: 'Contactless payment at a retail checkout',
    challenges: [
      'A monolith that cannot absorb peak-season traffic.',
      'Order, inventory and courier data that disagree with each other.',
      'Personalisation that never makes it past a roadmap slide.',
    ],
    approach: [
      'Phased migration to microservices on Kubernetes, with no missed peak.',
      'Real-time courier allocation and ML-powered rate selection.',
      'OMS and storefront on one order model, so the numbers agree.',
    ],
    capabilities: ['Storefront engineering', 'Order management (OMS)', 'Personalisation', 'Last-mile & courier allocation', 'Peak-season readiness', 'Marketplace integration'],
    stack: ['React.js', 'Next.js', 'Node.js', 'Kubernetes', 'Redis', 'Magento', 'Shopify'],
    caseStudy: 'shipflow',
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    eyebrow: 'Insurtech',
    title: 'Claims Automation That Holds Up Under Volume.',
    lead: 'Claims automation with computer-vision OCR, NLP extraction and ML fraud detection — the unglamorous pipeline that turns a 12-day process into hours.',
    img: '/images/site/claims-review',
    alt: 'Reviewing claim documents and analytics',
    challenges: [
      'Manual claims averaging twelve days each.',
      'Error rates that make every downstream number suspect.',
      'Fraud review that cannot keep pace with submission volume.',
    ],
    approach: [
      'Computer-vision OCR to read the document set as submitted.',
      'NLP entity extraction so adjusters start from structured data.',
      'ML fraud detection exposed over REST, wired into the existing workflow.',
    ],
    capabilities: ['Claims automation', 'Document OCR', 'NLP extraction', 'ML fraud detection', 'Adjuster tooling', 'Policy administration integration'],
    stack: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'PostgreSQL', 'AWS'],
    caseStudy: 'assureiq',
  },
  {
    slug: 'saas',
    name: 'SaaS & Productivity',
    eyebrow: 'SaaS & Platforms',
    title: 'Multi-Tenant, Multi-Region, Always On.',
    lead: 'Multi-tenant platforms, billing, analytics and the unglamorous plumbing that keeps ARR compounding — the work that rarely makes a launch post.',
    img: '/images/home/saas',
    alt: 'Global network lit up over the earth at night',
    challenges: [
      'Tenant isolation bolted on after the first enterprise deal.',
      'Billing and entitlements drifting apart from the product.',
      'A platform that cannot follow customers into a new region.',
    ],
    approach: [
      'Tenancy, entitlements and billing modelled once, properly.',
      'Multi-region deployment with the observability to run it.',
      'Product analytics wired in so the roadmap answers to usage.',
    ],
    capabilities: ['Multi-tenant architecture', 'Billing & entitlements', 'Product analytics', 'Multi-region deployment', 'Platform observability', 'API & integration layer'],
    stack: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Kubernetes', 'Terraform', 'GCP'],
    caseStudy: null,
  },
  {
    slug: 'logistics',
    name: 'Supply Chain & Manufacturing',
    eyebrow: 'Logistics & Supply Chain',
    title: 'Traceability From Plant to Last Mile.',
    lead: 'Traceability, IoT telemetry and planning systems across plants and distribution networks — built for the sites that cannot stop while you deploy.',
    img: '/images/home/logistics',
    alt: 'Warehouse shelves stacked with parcels',
    challenges: [
      'Plant and distribution data that never reconciles.',
      'Planning done in spreadsheets three days behind reality.',
      'Telemetry collected but never turned into a decision.',
    ],
    approach: [
      'Traceability across plants and distribution networks on one model.',
      'IoT telemetry pipelines that feed planning rather than a dashboard.',
      'Rollouts staged so a line never waits on a deployment.',
    ],
    capabilities: ['Traceability', 'IoT telemetry', 'Planning systems', 'WMS integration', 'Fleet & distribution', 'Plant floor integration'],
    stack: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'Azure'],
    caseStudy: null,
  },
];

export const bySlug = Object.fromEntries(industryPages.map((i) => [i.slug, i]));
export const byName = Object.fromEntries(industryPages.map((i) => [i.name, i]));
