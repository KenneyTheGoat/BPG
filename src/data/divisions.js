import { Activity, Bot, Building2, Code2, Network } from 'lucide-react';

export const divisions = [
  {
    slug: 'technologies',
    name: 'BPG Software',
    href: '/technologies',
    icon: Code2,
    imagePosition: '0% center',
    tagline: 'Engineering dependable software systems for ambitious organizations.',
    description:
      'Custom software development, APIs, systems integration, automation, and resilient digital platforms.',
    services: [
      'Custom web, mobile, and enterprise application development',
      'API design, integration, and modernization',
      'Workflow automation and operational systems',
      'Cloud-ready architecture and scalable platform engineering',
      'Dashboards, internal tools, and data-driven business applications',
    ],
    useCases: [
      {
        problem: 'A growing business relies on disconnected spreadsheets and manual approvals.',
        solution: 'BPG Software builds a secure workflow platform with role-based approvals and integrated reporting.',
        outcome: 'Teams reduce admin time, improve visibility, and make decisions from a single source of truth.',
      },
      {
        problem: 'Legacy systems cannot communicate with newer digital products.',
        solution: 'We design API layers and integration services that connect core systems without disrupting operations.',
        outcome: 'The organization gains faster product delivery and a more maintainable technology foundation.',
      },
    ],
    capabilities: [
      'React, Node.js, APIs, cloud services, databases, and automation tooling',
      'Agile delivery, technical discovery, architecture planning, and iterative releases',
      'Support for finance, healthcare, operations, logistics, and corporate platforms',
    ],
    emailSubject: 'BPG Software Inquiry',
  },
  {
    slug: 'ai',
    name: 'BPG AI',
    href: '/ai',
    icon: Bot,
    imagePosition: '25% center',
    tagline: 'Building intelligent agents and automation systems that extend human capability.',
    description:
      'Custom AI agents, intelligent automation, machine learning solutions, and decision-support systems.',
    services: [
      'Custom AI agents for internal workflows and customer support',
      'Document intelligence, summarization, and knowledge search',
      'Predictive analytics and machine learning prototypes',
      'AI workflow automation for repetitive operational tasks',
      'Responsible AI implementation planning and governance support',
    ],
    useCases: [
      {
        problem: 'Support teams spend hours searching policies, tickets, and historical cases.',
        solution: 'BPG AI deploys an internal knowledge agent connected to approved business sources.',
        outcome: 'Staff resolve queries faster while maintaining consistent, auditable responses.',
      },
      {
        problem: 'Managers lack early warning signals for demand, risk, or operational bottlenecks.',
        solution: 'We build predictive models and dashboards that highlight trends before they become expensive.',
        outcome: 'Leadership acts earlier with clearer insight and fewer manual reporting cycles.',
      },
    ],
    capabilities: [
      'AI agents, retrieval-augmented generation, workflow orchestration, and analytics pipelines',
      'Prototype-to-production delivery with evaluation, monitoring, and human review loops',
      'Use cases across operations, healthcare, consulting, customer service, and internal productivity',
    ],
    emailSubject: 'BPG AI Inquiry',
  },
  {
    slug: 'healthtech',
    name: 'BPG HealthTech',
    href: '/healthtech',
    icon: Activity,
    imagePosition: '50% center',
    tagline: 'Connecting healthcare systems so clinical teams can work with better information.',
    description:
      'Healthcare systems integration, hospital software, interoperability, and HL7/FHIR-enabled workflows.',
    services: [
      'Healthcare systems integration and interoperability planning',
      'HL7, FHIR, and clinical data exchange workflows',
      'Hospital software modules and operational dashboards',
      'Patient administration, scheduling, and referral workflow support',
      'Digital health architecture for hospitals, clinics, and health networks',
    ],
    useCases: [
      {
        problem: 'Clinical teams manually reconcile patient information across several hospital systems.',
        solution: 'BPG HealthTech integrates systems using interoperability standards and shared operational views.',
        outcome: 'Care teams reduce duplication, improve data availability, and support safer patient journeys.',
      },
      {
        problem: 'Hospital leadership cannot see operational pressure points in real time.',
        solution: 'We create dashboards that unify admissions, bed capacity, referrals, and service performance.',
        outcome: 'Decision-makers respond faster to capacity issues and improve operational planning.',
      },
    ],
    capabilities: [
      'HL7, FHIR, APIs, clinical workflows, data mapping, and integration architecture',
      'Discovery with clinical, technical, and operational stakeholders',
      'Support for hospitals, clinics, laboratories, insurers, and public health programs',
    ],
    emailSubject: 'BPG HealthTech Inquiry',
  },
  {
    slug: 'consulting',
    name: 'BPG Consulting',
    href: '/consulting',
    icon: Network,
    imagePosition: '75% center',
    tagline: 'Helping organizations modernize operations, technology, and digital strategy.',
    description:
      'Digital transformation, IT consulting and auditing, operating model design, and business optimization.',
    services: [
      'Digital transformation strategy and roadmap development',
      'IT audits, systems reviews, and process assessments',
      'Business process optimization and operating model design',
      'Technology procurement, vendor evaluation, and implementation support',
      'Executive dashboards and performance measurement frameworks',
    ],
    useCases: [
      {
        problem: 'An organization is investing in technology but lacks a clear implementation roadmap.',
        solution: 'BPG Consulting assesses current systems, prioritizes initiatives, and defines a phased delivery plan.',
        outcome: 'Leadership gets a practical transformation path with clearer costs, risks, and milestones.',
      },
      {
        problem: 'Manual processes create delays, duplicated work, and inconsistent customer experiences.',
        solution: 'We map workflows, identify bottlenecks, and recommend automation and governance improvements.',
        outcome: 'Teams operate with stronger accountability and measurable efficiency gains.',
      },
    ],
    capabilities: [
      'Discovery workshops, audits, process mapping, digital maturity assessments, and roadmap planning',
      'Balanced focus on people, processes, systems, data, and governance',
      'Support for SMEs, enterprise teams, healthcare organizations, and property operations',
    ],
    emailSubject: 'BPG Consulting Inquiry',
  },
  {
    slug: 'property',
    name: 'BPG Property',
    href: '/property',
    icon: Building2,
    imagePosition: '100% center',
    tagline: 'Advancing property investment through smart infrastructure and connected environments.',
    description:
      'Property investment, smart infrastructure, real estate innovation, and technology-enabled environments.',
    services: [
      'Property investment analysis and technology-enabled portfolio planning',
      'Smart building concepts and infrastructure modernization',
      'PropTech systems for operations, tenants, and asset visibility',
      'Real estate data dashboards and performance tracking',
      'Smart city and connected infrastructure advisory',
    ],
    useCases: [
      {
        problem: 'Property managers lack reliable data on occupancy, maintenance, and asset performance.',
        solution: 'BPG Property introduces digital dashboards and connected workflows for property operations.',
        outcome: 'Owners and managers gain clearer portfolio visibility and faster operational response.',
      },
      {
        problem: 'A development project needs to differentiate through technology and long-term efficiency.',
        solution: 'We advise on smart infrastructure, tenant experience tools, and scalable digital services.',
        outcome: 'The asset becomes more operationally intelligent and better positioned for future growth.',
      },
    ],
    capabilities: [
      'Smart infrastructure planning, PropTech workflows, data dashboards, and asset performance tracking',
      'Property strategy informed by technology, operations, and investment priorities',
      'Support for residential, commercial, mixed-use, and smart precinct initiatives',
    ],
    emailSubject: 'BPG Property Inquiry',
  },
];

export const getDivisionBySlug = (slug) => divisions.find((division) => division.slug === slug);
