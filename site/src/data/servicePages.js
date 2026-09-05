// Service sub-pages — /services/<slug>.
//
// These exist because six items in the Services mega-nav had nowhere of their
// own to go: three pointed at anchors on a card, and three (Cloud & DevOps,
// QA & Automation, Cybersecurity) all landed on the SAME generic #practices
// anchor, so clicking three different things put you in one place.
//
// Sourcing rule, unchanged from industryPages.js and practicePages.js: no new
// claims about work delivered. The capability bullets are the practice lists
// already published on /services; the stacks are the published technology
// lists; the offering descriptions are the ones already on the site. What is
// newly written is methodology — how the work runs and what each phase leaves
// behind — which is craft description rather than a client claim.
//
// `stats` are reused site-wide figures only (50+ stacks, 500+ engineers,
// 24x7 support, 14-day sprint zero). Nothing here introduces a number the site
// was not already publishing.

const SPRINT_ZERO = { value: 14, suffix: '', label: 'Days to Sprint Zero', tone: 'teal' };

export const servicePages = [
  {
    slug: 'product-engineering',
    group: 'Build',
    eyebrow: 'Product Engineering',
    title: 'Full-Cycle Product Engineering.',
    lead: 'End-to-end product development from ideation to launch, run by Agile Pods that ship robust, scalable, intuitive products — and stay to maintain them.',
    img: '/images/home/code-screen',
    alt: 'Code on a laptop screen',
    stats: [SPRINT_ZERO, { value: 100, suffix: '+', label: 'Apps Published', tone: 'blue' }, { value: 50, suffix: '+', label: 'Technology Stacks', tone: 'purple' }],
    challenges: [
      'A prototype that proved the idea and cannot carry the roadmap.',
      'Velocity falling every quarter while the team grows.',
      'Nobody can say what shipping actually costs, because nothing is measured.',
      'The people who built it have left, and the knowledge left with them.',
    ],
    approach: [
      'Architecture decided against the roadmap you actually have, not a generic one.',
      'A walking skeleton in sprint zero: CI green, one path working end to end.',
      'Tests and observability written with the feature, not scheduled for later.',
      'Decisions recorded, so the next engineer inherits reasoning rather than archaeology.',
    ],
    phases: [
      { n: 1, t: 'Discovery & scoping', d: 'Goals, constraints, and the systems already in play. Output is a shape and a plan, not a document nobody reads.' },
      { n: 2, t: 'Architecture & sprint zero', d: 'Repo, pipeline, environments and one thin slice running end to end by Day 14.' },
      { n: 3, t: 'Build in two-week sprints', d: 'Demoed every sprint. Velocity, defects and SLA compliance on one dashboard you can open yourself.' },
      { n: 4, t: 'Harden & launch', d: 'Load, security and failure testing against your real peak, not a synthetic one.' },
      { n: 5, t: 'Run or hand over', d: 'We keep it running, or we document and train your team until you do not need us.' },
    ],
    capabilities: [
      { t: 'Web & mobility', d: 'Native and cross-platform apps, enterprise web and CMS, mobile-first UX.' },
      { t: 'UI/UX design', d: 'UX research, UI and brand design, and the design system that keeps it consistent.' },
      { t: 'Platform & APIs', d: 'The service layer, contracts and integration surface the product is built on.' },
      { t: 'E-commerce', d: 'Storefronts, checkout and order orchestration into your fulfilment stack.' },
      { t: 'Enterprise apps', d: 'SAP, Oracle, Salesforce, Mendix, Odoo and Microsoft, integrated rather than islanded.' },
      { t: 'Modernisation', d: 'Strangler-fig migration off a monolith, phased so nothing stops shipping.' },
    ],
    stack: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', '.NET Core', 'PostgreSQL', 'Kubernetes'],
    faq: [
      { q: 'Can you take over a codebase somebody else wrote?', a: 'Usually yes, and it is most of what we do. The first two weeks are an assessment — dependencies, test coverage, deployment path, the parts nobody wants to touch. You get that assessment whether or not you continue with us.' },
      { q: 'Who owns the code?', a: 'You do, from the first commit. IP assignment sits in the MSA rather than a later negotiation, and the repository is yours throughout.' },
      { q: 'What if we want to bring it in-house later?', a: 'Then we document and train toward that. Hand back seats on two weeks notice, with no penalty — a partner you cannot leave is not a partner.' },
    ],
    caseStudy: 'shipflow',
  },
  {
    slug: 'cloud-devops',
    group: 'Build',
    eyebrow: 'Cloud & DevOps',
    title: 'Deployments That Stop Being an Event.',
    lead: 'DevOps-as-a-Service, cloud migration and the pipeline work that turns a release from an evening of held breath into a routine that runs itself.',
    img: '/images/site/server-racks',
    alt: 'Server racks in a data centre',
    stats: [SPRINT_ZERO, { value: 24, suffix: 'x7', label: 'Managed Support', tone: 'blue' }, { value: 50, suffix: '+', label: 'Technology Stacks', tone: 'purple' }],
    challenges: [
      'Releases happen at night because that is when it is safe to break things.',
      'Environments that differ in ways nobody has written down.',
      'Cloud spend rising faster than usage, and no one owns the number.',
      'Alerts that fire constantly, so nobody reads them.',
    ],
    approach: [
      'Infrastructure as code, so an environment is reproducible rather than remembered.',
      'A pipeline that gates on tests and deploys on green — the same path every time.',
      'Observability tied to what users experience, not to what is easy to graph.',
      'Cost visibility per service, so spend is a decision instead of a surprise.',
    ],
    phases: [
      { n: 1, t: 'Assessment', d: 'Current pipeline, environments, IaC coverage and the manual steps between commit and production.' },
      { n: 2, t: 'Pipeline & environments', d: 'Reproducible environments and a deploy path that runs the same way from a laptop or from CI.' },
      { n: 3, t: 'Migration or modernisation', d: 'Phased, with a rollback at every step. Nothing that requires a weekend and a prayer.' },
      { n: 4, t: 'Observability & alerting', d: 'Signals tied to user impact, and alerts pruned until the ones remaining are worth waking someone.' },
      { n: 5, t: 'Run or hand over', d: '24x7 managed operation under SLA, or documentation and enablement so your team runs it.' },
    ],
    capabilities: [
      { t: 'DevOps-as-a-Service', d: 'Pipelines, release engineering and the practice around them.' },
      { t: 'Cloud migration', d: 'AWS, Azure and GCP, phased so delivery never stops.' },
      { t: 'Containers & orchestration', d: 'Docker and Kubernetes, sized to what you actually run.' },
      { t: 'Infrastructure as code', d: 'Terraform and Ansible, so environments are versioned like everything else.' },
      { t: 'Observability', d: 'Metrics, logs and traces that answer questions rather than fill dashboards.' },
      { t: 'Cost engineering', d: 'Attribution per service, and the changes that actually move the bill.' },
    ],
    stack: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI'],
    faq: [
      { q: 'Do we have to move cloud provider?', a: 'No. Most of the value is in the pipeline and the environments, and that work is provider-agnostic. If a move is genuinely warranted we will say so and show the numbers.' },
      { q: 'Can you work inside our VPC and our tooling?', a: 'Yes — and where data residency requires it, that is a design input from day one rather than something discovered late.' },
      { q: 'What does 24x7 actually mean?', a: 'A named account owner accountable under the SLA, with response targets written into the SOW rather than implied.' },
    ],
    caseStudy: 'shipflow',
  },
  {
    slug: 'digital-transformation',
    group: 'Run',
    eyebrow: 'Digital Transformation',
    title: 'Transformation, Minus the Theatre.',
    lead: 'Consulting, optimisation and automation powered by AI and Gen-AI — aimed at the two or three processes where the money actually is, not at a five-year programme.',
    img: '/images/site/whiteboard',
    alt: 'Planning session at a whiteboard',
    stats: [SPRINT_ZERO, { value: 18, suffix: '+', label: 'Industry Verticals', tone: 'blue' }, { value: 500, suffix: '+', label: 'Projects Delivered', tone: 'purple' }],
    challenges: [
      'A transformation programme measured in slides rather than shipped change.',
      'Processes automated at the edges while the expensive middle stays manual.',
      'Data in six systems that disagree, so nobody trusts the reporting.',
      'Change that the people doing the work were never consulted about.',
    ],
    approach: [
      'Start where the cost is: the two or three processes carrying the volume.',
      'Instrument before automating, so the improvement is measurable rather than asserted.',
      'Automate the middle, not just the intake form.',
      'Design with the people who do the work, because adoption is the actual risk.',
    ],
    phases: [
      { n: 1, t: 'Process mapping', d: 'Where the time and cost actually sit, measured rather than assumed.' },
      { n: 2, t: 'Opportunity sizing', d: 'What each change is worth and what it costs to make. Some will not be worth doing; we say which.' },
      { n: 3, t: 'Pilot on one process', d: 'One end-to-end process, in production, with a before-and-after you can audit.' },
      { n: 4, t: 'Scale what worked', d: 'Roll the pattern outward only where the pilot earned it.' },
      { n: 5, t: 'Operate & measure', d: 'Ongoing measurement, because a process that is not watched drifts back.' },
    ],
    capabilities: [
      { t: 'Process automation', d: 'RPA and orchestration where the interface is the only integration available.' },
      { t: 'Gen-AI in the workflow', d: 'Retrieval-grounded assistants placed at the step that is actually slow.' },
      { t: 'Data consolidation', d: 'One version of the number, and the pipelines that keep it true.' },
      { t: 'Legacy modernisation', d: 'Phased migration that lets the business keep running throughout.' },
      { t: 'Analytics & reporting', d: 'Reporting that answers the question the executive actually asked.' },
      { t: 'Change enablement', d: 'Training and documentation, because adoption decides the return.' },
    ],
    stack: ['Python', 'Power Platform', 'UiPath', 'Kafka', 'Snowflake', 'Tableau', 'Azure', 'LLMs'],
    faq: [
      { q: 'Where should we start?', a: 'With whichever process carries the most volume and the most manual handling. We will map it and size it before recommending anything — and if automation is not worth it there, we will tell you that.' },
      { q: 'How long before we see something?', a: 'One process in production, with measured before-and-after. Sprint zero is Day 14; the pilot follows the same two-week rhythm as everything else we run.' },
      { q: 'What if our data is not good enough?', a: 'That is a common and honest finding. Fixing the data is often the transformation, and we would rather say so early than build on top of it.' },
    ],
    caseStudy: 'assureiq',
  },
  {
    slug: 'managed-services',
    group: 'Run',
    eyebrow: 'Managed Services',
    title: 'Business-as-Usual, Run Properly.',
    lead: 'SLA-driven IMS with 24x7 support, governance and deep technology expertise — the unglamorous operation that keeps the thing you already built working.',
    img: '/images/site/ops-screens',
    alt: 'Operations monitoring screens',
    stats: [{ value: 24, suffix: 'x7', label: 'Support Coverage', tone: 'teal' }, { value: 90, suffix: '%', label: 'Client Retention', tone: 'blue' }, { value: 500, suffix: '+', label: 'Engineers', tone: 'purple' }],
    challenges: [
      'Your best engineers spend their week on tickets instead of the roadmap.',
      'Incidents get fixed and the cause never does, so they come back.',
      'No runbook, so every incident depends on whoever happens to be awake.',
      'An SLA that exists in a contract and nowhere in the operation.',
    ],
    approach: [
      'Take the run work off your product team so the roadmap gets its people back.',
      'Every incident produces a root cause and a change, not just a restart.',
      'Runbooks written as we learn the system, so response stops being heroic.',
      'The SLA is reported on monthly, with the misses shown rather than smoothed.',
    ],
    phases: [
      { n: 1, t: 'Discovery & access', d: 'Systems, dependencies, access and escalation paths. Security review happens inside the fourteen days.' },
      { n: 2, t: 'Runbook & baseline', d: 'How each system fails and what to do about it, written down before we own it.' },
      { n: 3, t: 'Transition', d: 'Shadow, then reverse-shadow, then take the pager. No cliff-edge handover.' },
      { n: 4, t: 'Steady state', d: '24x7 cover under SLA, with a monthly business review that shows compliance and misses.' },
      { n: 5, t: 'Continuous reduction', d: 'The measure of success is fewer tickets next quarter, not more capacity to absorb them.' },
    ],
    capabilities: [
      { t: 'Application support', d: 'L1 to L3 across the stack, under a written SLA.' },
      { t: 'Infrastructure management', d: 'Enterprise system management and the monitoring around it.' },
      { t: 'Incident & problem management', d: 'Response, root cause, and the change that stops the repeat.' },
      { t: 'Service integration', d: 'Coordinating the vendors who each own a piece of the picture.' },
      { t: 'Patch & release management', d: 'Scheduled, tested, reversible.' },
      { t: 'Governance & reporting', d: 'One dashboard, and a monthly review with your account owner.' },
    ],
    stack: ['ServiceNow', 'Datadog', 'Grafana', 'PagerDuty', 'Ansible', 'AWS', 'Azure', 'Kubernetes'],
    faq: [
      { q: 'Can you support software you did not build?', a: 'Yes — that is the normal case. Transition is shadow, reverse-shadow, then handover, so we do not take the pager on something we have only read about.' },
      { q: 'What happens when you miss an SLA?', a: 'It appears in the monthly review with the cause and the corrective action. Service credits, where they apply, are written into the SOW.' },
      { q: 'Does this lock us in?', a: 'No. Runbooks and documentation are yours throughout, and the notice period is two weeks either way with no penalty.' },
    ],
    caseStudy: null,
  },
  {
    slug: 'qa-automation',
    group: 'Run',
    eyebrow: 'QA & Automation',
    title: 'Testing That Earns Its Runtime.',
    lead: 'Functional and non-functional testing, automation frameworks and specialised testing — built so the suite is trusted enough that a red build actually stops a release.',
    img: '/images/site/test-bench',
    alt: 'Engineer working at a test bench',
    stats: [SPRINT_ZERO, { value: 50, suffix: '+', label: 'Technology Stacks', tone: 'blue' }, { value: 500, suffix: '+', label: 'Projects Delivered', tone: 'purple' }],
    challenges: [
      'A suite so flaky that a red build gets re-run instead of read.',
      'Coverage numbers that are high and prove nothing.',
      'Testing that begins after development and therefore compresses to nothing.',
      'Performance discovered in production, on the busiest day.',
    ],
    approach: [
      'Fix flakiness before adding tests — an untrusted suite is worse than none.',
      'Test at the cheapest level that can catch the fault, not everything through the UI.',
      'Automation written alongside features, inside the same sprint.',
      'Load tested against your real peak, from the profile your traffic actually has.',
    ],
    phases: [
      { n: 1, t: 'Test assessment', d: 'What exists, what it covers, and which tests are lying to you.' },
      { n: 2, t: 'Strategy & pyramid', d: 'What belongs in unit, integration and end-to-end — and what should not be automated at all.' },
      { n: 3, t: 'Framework & CI', d: 'A suite that runs on every commit and is fast enough that people wait for it.' },
      { n: 4, t: 'Non-functional', d: 'Load, stress, security and accessibility against real thresholds.' },
      { n: 5, t: 'Embed & enable', d: 'The team writes their own tests by the end; we would rather leave a habit than a dependency.' },
    ],
    capabilities: [
      { t: 'Functional testing', d: 'Manual and automated, across web, mobile and API.' },
      { t: 'Test automation', d: 'Frameworks that survive a UI change and run in CI.' },
      { t: 'Performance & load', d: 'Modelled on your real peak rather than a round number.' },
      { t: 'Specialised testing', d: 'Accessibility, localisation, compatibility and data migration.' },
      { t: 'Middleware & API testing', d: 'Contract testing where the integration surface is the risk.' },
      { t: 'Robotic test automation', d: 'For the enterprise packages that never offered an API.' },
    ],
    stack: ['Playwright', 'Selenium', 'Cypress', 'JUnit', 'pytest', 'k6', 'JMeter', 'Appium'],
    faq: [
      { q: 'Our suite is flaky. Where do you start?', a: 'With the flakiness, before anything is added. A suite people do not trust is worse than no suite, because it teaches the team to ignore red.' },
      { q: 'Do you replace our QA team?', a: 'No — the usual outcome is that your team writes and owns the tests by the end. We would rather leave a practice behind than a dependency.' },
      { q: 'Is 100% coverage the goal?', a: 'No. Coverage is a weak proxy. The goal is that a red build reliably means something is broken, and a green one reliably means it is not.' },
    ],
    caseStudy: null,
  },
  {
    slug: 'cybersecurity',
    group: 'Run',
    eyebrow: 'Cybersecurity',
    title: 'Security Review You Can Pass.',
    lead: 'Security operations, incident response, vulnerability management and threat intelligence — from a firm that is ISO 27001:2013 certified and used to being on the other side of enterprise security review.',
    img: '/images/site/security-ops',
    alt: 'Security operations monitoring',
    stats: [{ value: 24, suffix: 'x7', label: 'Security Operations', tone: 'teal' }, { value: 2, suffix: '', label: 'ISO Certifications', tone: 'blue' }, { value: 500, suffix: '+', label: 'Engineers', tone: 'purple' }],
    challenges: [
      'A pen-test report from last year with most findings still open.',
      'Vulnerability scanning that produces a list nobody triages.',
      'No incident plan, so the first real incident is also the rehearsal.',
      'Security review blocking a deal, with no one internally who owns the answers.',
    ],
    approach: [
      'Triage by exploitability and blast radius, not by the scanner’s severity column.',
      'Fix the class of fault, not the instance — the same bug is usually in four places.',
      'An incident plan that has been rehearsed, because an untested plan is a document.',
      'Evidence assembled the way an assessor asks for it, so review stops being a fire drill.',
    ],
    phases: [
      { n: 1, t: 'Posture assessment', d: 'Assets, exposure, access and what an attacker would reach first.' },
      { n: 2, t: 'Remediation plan', d: 'Ranked by exploitability and impact, with an owner and a date against each.' },
      { n: 3, t: 'Harden & instrument', d: 'Controls in place, and detection wired so you would actually know.' },
      { n: 4, t: 'Rehearse response', d: 'A tabletop and a real drill. The plan is not real until it has been run.' },
      { n: 5, t: 'Operate', d: '24x7 security operations, vulnerability management and threat intelligence under SLA.' },
    ],
    capabilities: [
      { t: 'Security operations', d: 'Monitoring, triage and 24x7 cover.' },
      { t: 'Incident response', d: 'A rehearsed plan, and the people to run it.' },
      { t: 'Vulnerability management', d: 'Triage, remediation and verification — not just a scan report.' },
      { t: 'Threat intelligence', d: 'Signals relevant to your sector rather than a generic feed.' },
      { t: 'Secure SDLC', d: 'Review, dependency scanning and secrets management inside the pipeline.' },
      { t: 'Compliance support', d: 'Evidence and answers for enterprise security review and audit.' },
    ],
    stack: ['SIEM', 'Snyk', 'OWASP ZAP', 'Burp Suite', 'HashiCorp Vault', 'AWS Security Hub', 'Falco'],
    faq: [
      { q: 'Are you certified?', a: 'Huemot holds ISO 27001:2013 and ISO 9001:2015. Ask us for the certificates and scope statements on the call — your security team will want both, and they should.' },
      { q: 'Can you help us answer a client security questionnaire?', a: 'Yes, and it is a common request. We have been on the receiving end of enough enterprise reviews to know what the evidence needs to look like.' },
      { q: 'Do you do penetration testing?', a: 'We do assessment, remediation and verification. Where an independent third-party pen test is the right answer — and for certification it often is — we will say so rather than mark our own homework.' },
    ],
    caseStudy: null,
  },
];

export const serviceBySlug = Object.fromEntries(servicePages.map((s) => [s.slug, s]));
