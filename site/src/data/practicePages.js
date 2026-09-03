// Practice detail pages — /salesforce and /ai-automation.
//
// Sourcing rule, same as industryPages.js: no new claims. Every headline figure
// here already appeared on the page it replaces (75+ consultants, 5 MVPs, 100%
// certified, 350% YoY on Salesforce; the four implementation highlights and the
// AssureIQ metrics on AI). The clouds, verticals and lifecycle steps are the
// existing lists.
//
// What IS new is methodology: how an engagement actually runs, what each phase
// produces, and the questions buyers ask. That is craft description, not a
// claim about work delivered, so it needs no client sign-off.

export const practicePages = {
  salesforce: {
    slug: 'salesforce',
    eyebrow: 'Salesforce Practice',
    title: 'A Salesforce Practice, Not a Staffing Desk.',
    lead:
      'Seventy-five certified consultants and five Salesforce MVPs who join an org that already has history — legacy objects, unmanaged packages, a data model that drifted three admins ago — and leave it maintainable.',
    img: '/images/site/whiteboard',
    alt: 'Consultants working through a plan at a whiteboard',
    stats: [
      { value: 75, suffix: '+', label: 'Certified Consultants', tone: 'teal' },
      { value: 5, suffix: '', label: 'Salesforce MVPs', tone: 'blue' },
      { value: 100, suffix: '%', label: 'Certified Team', tone: 'purple' },
      { value: 350, suffix: '%', label: 'YoY Growth', tone: 'pink' },
    ],
    challenges: [
      'An org nobody fully understands any more — undocumented automation firing in an order no one can predict.',
      'Reports that disagree with each other because the same idea is modelled three different ways.',
      'Every release is a manual click-path through production, so nobody wants to release.',
      'Licences bought for a rollout that never finished.',
    ],
    approach: [
      'An org assessment first: metadata inventory, automation map, technical-debt register — before a line is written.',
      'One data model agreed with the people who live in the reports, not just the admins.',
      'Flow over legacy Workflow and Process Builder, with the retirement path written down.',
      'Source-tracked deployments and a release train, so shipping stops being an event.',
    ],
    phases: [
      { n: 1, t: 'Org assessment', d: 'Metadata inventory, automation map, permission audit, debt register. You get the findings whether or not you continue with us.' },
      { n: 2, t: 'Data model & design', d: 'Objects, relationships and the reporting layer agreed up front, because this is the decision that is expensive to reverse later.' },
      { n: 3, t: 'Build in sprints', d: 'Two-week increments in a scratch org or sandbox, demoed every sprint, with declarative-first bias and Apex where it earns its place.' },
      { n: 4, t: 'Release engineering', d: 'Source control, CI validation and a repeatable deploy — so a release is a pipeline run, not an evening.' },
      { n: 5, t: 'Hypercare & handover', d: 'Two sprints of embedded support, runbooks, and admin enablement so your team is not dependent on ours.' },
    ],
    clouds: [
      { t: 'Sales Cloud', d: 'Pipeline, forecasting, territory and quota design that survives a reorg.' },
      { t: 'Service Cloud', d: 'Case routing, entitlements, knowledge and CSAT instrumentation.' },
      { t: 'Experience Cloud', d: 'Partner and customer portals with sharing models that hold up under audit.' },
      { t: 'Marketing Cloud', d: 'Journeys, consent capture and the deliverability plumbing behind them.' },
      { t: 'Commerce Cloud', d: 'Catalogue, checkout and order orchestration into your fulfilment stack.' },
      { t: 'CPQ', d: 'Product rules, price waterfalls and quote documents that legal will sign.' },
      { t: 'MuleSoft', d: 'API-led integration to core banking, ERP and the systems that never had an API.' },
      { t: 'Tableau', d: 'Reporting that answers the question the exec actually asked.' },
    ],
    verticals: ['Financial Services', 'Healthcare', 'Telecom', 'Retail & E-commerce', 'Manufacturing', 'Professional Services'],
    faq: [
      { q: 'Do you work in our existing org or start clean?', a: 'Your org, in almost every case. A greenfield build is easy to demo and rarely what a business with history needs. The assessment in phase one tells us what has to be retired before anything new lands.' },
      { q: 'Declarative or code?', a: 'Declarative until it stops being the simpler option. Flow handles most of what Apex used to; we write Apex when governor limits, bulk behaviour or testability demand it, and we say which it was in the pull request.' },
      { q: 'Who owns the work?', a: 'You do — code, configuration, documentation and the repository, from the first commit. IP assignment is in the MSA, not a later negotiation.' },
      { q: 'What happens when the engagement ends?', a: 'Two sprints of hypercare, written runbooks, and enablement sessions for your admins. The measure of a good handover is that you stop needing us.' },
    ],
    caseStudy: 'lendbridge',
  },

  'ai-automation': {
    slug: 'ai-automation',
    eyebrow: 'Gen AI & Automation',
    title: 'AI That Survives Its Second Month in Production.',
    lead:
      'Most AI work fails after the demo, not during it. We build the unglamorous half — evaluation, monitoring, fallbacks and the human review path — so the thing still works when the data shifts.',
    img: '/images/home/circuit',
    alt: 'Close-up of a circuit board',
    stats: [
      { value: 50, suffix: '%', label: 'Faster Processing', tone: 'teal' },
      { value: 99.2, suffix: '%', label: 'Extraction Accuracy', tone: 'blue' },
      { value: 2.4, prefix: '$', suffix: 'M', label: 'Cost Saved', tone: 'purple' },
      { value: 15, suffix: 'K+', label: 'Documents / Month', tone: 'pink' },
    ],
    challenges: [
      'A pilot that impressed everyone and never reached production.',
      'No way to tell whether the model got better or worse after the last change.',
      'Accuracy quoted on a curated sample that nothing in production resembles.',
      'No answer for what happens when the model is wrong — because it will be.',
    ],
    approach: [
      'An evaluation set before a model: real inputs, labelled, held back, and version-controlled.',
      'The smallest thing that clears the bar — rules or classical ML before an LLM, if that is what the data wants.',
      'A human-in-the-loop path for low-confidence cases, designed as part of the workflow rather than bolted on.',
      'Monitoring on drift, latency and cost per call, so degradation surfaces before a user reports it.',
    ],
    phases: [
      { n: 1, t: 'Requirement analysis', d: 'What decision does this change, and what is the cost of being wrong? If neither has an answer, we say so before you spend.' },
      { n: 2, t: 'Data collection & preprocessing', d: 'Sourcing, labelling and a held-back evaluation set. Usually the longest phase, and the one that decides the outcome.' },
      { n: 3, t: 'Model development & training', d: 'Baseline first, then earn every increase in complexity against the evaluation set.' },
      { n: 4, t: 'Integration & deployment', d: 'Behind an API, in your workflow, with confidence thresholds and the review queue wired in.' },
      { n: 5, t: 'Optimization & support', d: 'Drift and cost monitoring, scheduled re-evaluation, and a retraining trigger that is a rule rather than a hunch.' },
    ],
    capabilities: [
      { t: 'Document intelligence', d: 'Computer-vision OCR and NLP extraction over the messy document sets a business actually receives.' },
      { t: 'Gen-AI applications', d: 'Retrieval-grounded assistants with citations, guardrails and an evaluation harness.' },
      { t: 'Predictive models', d: 'Forecasting, scoring and anomaly detection wired into an operational decision.' },
      { t: 'Fraud & risk detection', d: 'Signals, thresholds and the review workflow around the model.' },
      { t: 'Process automation', d: 'RPA and orchestration where the interface is the only integration available.' },
      { t: 'ML platform', d: 'Pipelines, feature stores, experiment tracking and the deployment path.' },
    ],
    highlights: [
      { t: 'AI chatbot', sector: 'Law firm', d: '30% call reduction · $8K monthly saving' },
      { t: 'Leads enrichment', sector: 'Real estate', d: '40% data-quality improvement' },
      { t: 'Inventory management', sector: 'Auto parts', d: 'Warehouse optimisation and better forecasting' },
      { t: 'Document processing', sector: 'Insurance', d: '50% faster claims processing' },
    ],
    faq: [
      { q: 'Do we need our own data?', a: 'For anything predictive, yes — and enough of it, labelled. For retrieval-grounded assistants your documents are usually sufficient. Phase one is where we tell you honestly which of those you are in.' },
      { q: 'Which models do you use?', a: 'Whichever clears the evaluation bar at acceptable cost and latency. That is often a hosted frontier model, sometimes an open-weight model you run yourself when data residency requires it, and sometimes no model at all.' },
      { q: 'How do you handle data residency?', a: 'It is a design input, not an afterthought. Where data cannot leave a jurisdiction or a VPC, that constrains the model choice, and we scope against it from day one.' },
      { q: 'What if accuracy is not good enough?', a: 'Then we say so and stop. An honest "the data will not support this" in week three is worth more than a system nobody trusts in month six.' },
    ],
    caseStudy: 'assureiq',
  },
};
