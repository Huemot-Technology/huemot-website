// Additive content for the v2 pages. Merge alongside site.js — nothing here overrides it.
//
// LAUNCH SCOPE. 'reduced' ships eleven screens with no unverifiable claims:
// the awards strip and the Insights route are withheld. Flip to 'full' only when
// real awards and real posts exist.
export const LAUNCH_SCOPE = 'reduced';
export const FULL = LAUNCH_SCOPE !== 'reduced';

export const industries = [
  { name: 'Fintech & Financial Services', description: 'Lending CRM, KYC automation, payments and compliance-grade data pipelines for regulated lenders.', stats: [{ value: '5M+', label: 'Borrowers' }, { value: '100%', label: 'Compliance' }] },
  { name: 'Healthtech', description: 'HIPAA-compliant patient engagement, HL7 FHIR integrations, telemedicine and clinical workflow tooling.', stats: [{ value: '60+', label: 'Providers' }, { value: '70%', label: 'Adoption' }] },
  { name: 'Retail & E-commerce', description: 'Storefronts, logistics platforms and order orchestration built to survive peak-season traffic.', stats: [{ value: '25M+', label: 'Shipments' }, { value: '99.99%', label: 'Uptime' }] },
  { name: 'Insurance', description: 'Claims automation with computer-vision OCR, NLP extraction and ML fraud detection.', stats: [{ value: '15K+', label: 'Claims/mo' }, { value: '99.2%', label: 'Accuracy' }] },
  { name: 'SaaS & Productivity', description: 'Multi-tenant platforms, billing, analytics and the unglamorous plumbing that keeps ARR compounding.', stats: [{ value: '100+', label: 'Apps Shipped' }] },
  { name: 'Supply Chain & Manufacturing', description: 'Traceability, IoT telemetry and planning systems across plants and distribution networks.', stats: [{ value: '18+', label: 'Verticals' }] },
];

export const comparison = {
  columns: ['In-house hiring', 'A Huemot pod', 'Freelance marketplace'],
  rows: [
    { label: 'Time to first commit', values: ['Months — sourcing, notice periods, ramp-up', '14 days, contract to sprint zero', '2–3 weeks, highly variable'] },
    { label: 'Who owns the outcome', values: ['Your engineering manager', 'A named account owner, under SLA', 'Nobody'] },
    { label: 'Scaling down', values: ['Redundancy process and cost', 'Two weeks notice, no penalty', 'End of contract'] },
    { label: 'Breadth of skills', values: ['What you hired for', '50+ stacks from one pool', 'One person, one skill'] },
    { label: 'Security posture', values: ['Your own', 'ISO 27001:2013 · ISO 9001:2015 · NDAs and MSAs', 'Platform terms only'] },
    { label: 'Continuity', values: ['Attrition risk on you', 'Bench cover inside the pod', 'Restart from zero'] },
  ],
};

export const process = [
  { when: 'Day 0–2', title: 'Discovery & scoping', description: 'A 30-minute call, then a working session. We map goals, constraints, the systems already in play, and the shape of the pod that fits.' },
  { when: 'Day 3–5', title: 'Team match & SOW', description: 'Named engineers, not CVs. You meet the people who will do the work; commercials, SLAs and IP terms are agreed in writing.' },
  { when: 'Day 6–10', title: 'Onboarding & access', description: 'Security review, environment access, repo and tooling setup. Your account owner runs the checklist so your team does not have to.' },
  { when: 'Day 14', title: 'Sprint zero', description: 'Backlog groomed, architecture agreed, CI green. First commits land and the weekly delivery rhythm starts.' },
  { when: 'Ongoing', title: 'Delivery rhythm', description: 'Two-week sprints, demo every sprint, one dashboard for velocity, defects and SLA compliance. Monthly business review with your account owner.' },
  { when: 'As needed', title: 'Scale up or down', description: 'Add capacity from the same pre-vetted pool in two weeks, or hand back seats with two weeks notice. No renegotiation, no penalty.' },
];

export const roles = [
  { group: 'Engineering', items: [
    { role: 'Senior React Engineer', meta: '6+ yrs · Next.js, TypeScript' },
    { role: 'Node / Platform Engineer', meta: '5+ yrs · microservices, Kubernetes' },
    { role: 'Java Backend Engineer', meta: '7+ yrs · Spring Boot, event-driven' },
    { role: '.NET Engineer', meta: '5+ yrs · .NET Core, Azure' },
    { role: 'Mobile Engineer', meta: 'React Native, Flutter, native iOS/Android' },
  ] },
  { group: 'AI, Data & Cloud', items: [
    { role: 'ML / Gen-AI Engineer', meta: 'LLM pipelines, RAG, evaluation harnesses' },
    { role: 'Data Engineer', meta: 'Airflow, dbt, warehouse modelling' },
    { role: 'DevOps / SRE', meta: 'Terraform, GitLab CI, 24x7 on-call' },
    { role: 'Cloud Architect', meta: 'AWS, Azure, GCP landing zones' },
  ] },
  { group: 'Product & Quality', items: [
    { role: 'Product Manager', meta: 'Discovery, roadmap, stakeholder wrangling' },
    { role: 'Product Designer', meta: 'UX research, design systems, prototyping' },
    { role: 'QA Automation Engineer', meta: 'Selenium, Playwright, performance testing' },
    { role: 'Salesforce Consultant', meta: 'Certified · 75 consultants, 5 MVPs in practice' },
  ] },
];

export const radar = [
  { name: 'AI & ML', items: [{ name: 'LLMs & RAG', level: 'Deep' }, { name: 'PyTorch', level: 'Core' }, { name: 'TensorFlow', level: 'Core' }, { name: 'Computer Vision', level: 'Deep' }, { name: 'Keras', level: 'Core' }, { name: 'OpenCV', level: 'Core' }, { name: 'Agentic workflows', level: 'Emerging' }] },
  { name: 'Frontend', items: [{ name: 'React.js', level: 'Deep' }, { name: 'Next.js', level: 'Deep' }, { name: 'TypeScript', level: 'Deep' }, { name: 'Angular', level: 'Core' }, { name: 'Vue.js', level: 'Core' }, { name: 'HTML5', level: 'Core' }] },
  { name: 'Backend', items: [{ name: 'Node.js', level: 'Deep' }, { name: 'Spring Boot', level: 'Deep' }, { name: '.NET Core', level: 'Core' }, { name: 'Python', level: 'Deep' }, { name: 'Go', level: 'Core' }, { name: 'Ruby on Rails', level: 'Core' }] },
  { name: 'Cloud & Infra', items: [{ name: 'AWS', level: 'Deep' }, { name: 'Azure', level: 'Deep' }, { name: 'GCP', level: 'Core' }, { name: 'Kubernetes', level: 'Deep' }, { name: 'Docker', level: 'Core' }, { name: 'Terraform', level: 'Core' }] },
  { name: 'Data', items: [{ name: 'PostgreSQL', level: 'Deep' }, { name: 'MongoDB', level: 'Core' }, { name: 'Redis', level: 'Core' }, { name: 'Oracle', level: 'Core' }, { name: 'SQL Server', level: 'Core' }] },
  { name: 'Enterprise', items: [{ name: 'Salesforce', level: 'Deep' }, { name: 'SAP', level: 'Core' }, { name: 'Odoo', level: 'Core' }, { name: 'Microsoft D365', level: 'Core' }, { name: 'MuleSoft', level: 'Core' }] },
];

export const clients = ['ShipFlow', 'LendBridge', 'AssureIQ', 'MediLoop', 'PayNova', 'CareGrid', 'BillStack', 'FactoryAI', 'CheckoutX', 'VitaTrack', 'LeadOrbit', 'StockSync'];

// SAMPLE — replace before publishing.
export const awards = [
  { title: 'Top 100 Staff Augmentation Firms', source: 'The Manifest', year: 2026 },
  { title: 'Top Software Developers, India', source: 'Clutch', year: 2026 },
  { title: 'Top AI Development Companies', source: 'DesignRush', year: 2026 },
  { title: 'Great Place to Work Certified', source: 'GPTW', year: 2025 },
];

// SAMPLE — no posts exist yet.
export const insights = [
  { kind: 'Playbook', title: 'What a two-week pod onboarding actually looks like', excerpt: 'The fourteen days between a signed SOW and your first merged PR — who does what, and where it usually goes wrong.', date: 'Jul 2026', readTime: '7 min read' },
  { kind: 'Article', title: 'Outcome-based contracts are replacing time and materials', excerpt: 'Enterprise buyers are done paying for hours. What changes when you price the result instead.', date: 'Jun 2026', readTime: '5 min read' },
  { kind: 'Guide', title: 'A security checklist for your first offshore engagement', excerpt: 'ISO certifications, NDAs, access control and the questions procurement should be asking on the first call.', date: 'Jun 2026', readTime: '9 min read' },
  { kind: 'Case Note', title: 'Migrating a logistics monolith without a freeze window', excerpt: 'How the ShipFlow pod moved 25M monthly shipments onto Kubernetes in phases, with no downtime.', date: 'May 2026', readTime: '6 min read' },
  { kind: 'Article', title: 'Gen-AI in delivery: where it actually saves time', excerpt: 'Honest numbers on code assistance, test generation and requirement analysis across our last twelve engagements.', date: 'May 2026', readTime: '8 min read' },
  { kind: 'Playbook', title: 'How to brief an offshore pod so it ships in week one', excerpt: 'The four artefacts that separate a fast start from a month of discovery.', date: 'Apr 2026', readTime: '4 min read' },
];
