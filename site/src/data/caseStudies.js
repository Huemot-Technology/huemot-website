// Published case studies. Extracted from case-studies.astro so the industry
// pages can surface the matching study without duplicating its numbers.
// `id` doubles as the anchor on /case-studies.
export const studies = [
  {
    id: 'shipflow', sector: 'Logistics', img: '/images/home/logistics', alt: 'Warehouse shelves with parcels',
    title: 'Logistics Platform Re-Architecture', client: 'ShipFlow — E-Commerce Logistics SaaS',
    challenge: 'Scale a legacy monolith to microservices handling 25M+ monthly shipments with a 99.9% uptime SLA.',
    solution: 'Deployed a 25-member agile pod for phased migration on Kubernetes, real-time courier allocation, and ML-powered rate selection.',
    metrics: [
      { value: 45, suffix: '%', label: 'Faster Load', tone: 'teal' },
      { value: 3.2, suffix: 'x', label: 'Throughput', tone: 'blue' },
      { value: 3.4, prefix: '$', suffix: 'M', label: 'Cost Saved', tone: 'purple' },
      { value: 99.99, suffix: '%', label: 'Uptime', tone: 'pink' },
    ],
  },
  {
    id: 'lendbridge', sector: 'Fintech', img: '/images/home/fintech', alt: 'Financial market charts on screens',
    title: 'Lending CRM Modernization', client: 'LendBridge — Digital Lending Platform',
    challenge: 'Unify lending CRM across partners, enable cross-sell, and ensure RBI compliance across 5M+ borrower accounts.',
    solution: 'Salesforce Financial Services Cloud with Lightning, MuleSoft integration, and Einstein Analytics for next-best-action.',
    metrics: [
      { value: 35, suffix: '%', label: 'Cross-sell', tone: 'teal' },
      { value: 60, suffix: '%', label: 'Faster KYC', tone: 'blue' },
      { value: 5, suffix: 'M+', label: 'Borrowers', tone: 'purple' },
      { value: 100, suffix: '%', label: 'Compliance', tone: 'pink' },
    ],
  },
  {
    id: 'assureiq', sector: 'Insurtech', img: '/images/site/claims-review', alt: 'Reviewing documents and analytics',
    title: 'AI-Powered Claims Automation', client: 'AssureIQ — Insurtech Platform',
    challenge: 'Manual claims averaged 12 days each with 15% error rates across 50,000+ monthly submissions.',
    solution: 'End-to-end AI pipeline with computer-vision OCR, NLP entity extraction, and ML fraud detection exposed via REST APIs.',
    metrics: [
      { value: 50, suffix: '%', label: 'Faster', tone: 'teal' },
      { value: 99.2, suffix: '%', label: 'Accuracy', tone: 'blue' },
      { value: 2.4, prefix: '$', suffix: 'M', label: 'Savings', tone: 'purple' },
      { value: 15, suffix: 'K+', label: 'Auto/Month', tone: 'pink' },
    ],
  },
  {
    id: 'mediloop', sector: 'Healthtech', img: '/images/home/healthcare', alt: 'Clinician using a tablet',
    title: 'Unified Patient Engagement App', client: 'MediLoop — Digital Health Platform',
    challenge: 'A multi-provider network needed unified patient engagement across scheduling, telemedicine, and care coordination.',
    solution: 'HIPAA-compliant React Native app with video consultation, a custom portal, and AWS microservices on HL7 FHIR.',
    metrics: [
      { value: 70, suffix: '%', label: 'Adoption', tone: 'teal' },
      { value: 40, suffix: '%', label: 'Fewer No-Shows', tone: 'blue' },
      { value: 4.8, suffix: '/5', label: 'Rating', tone: 'purple' },
      { value: 60, suffix: '+', label: 'Providers', tone: 'pink' },
    ],
  },
];

export const caseStudyById = Object.fromEntries(studies.map((s) => [s.id, s]));
export { studies as caseStudies };
