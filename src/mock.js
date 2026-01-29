// Mock data for Julia Baucher's portfolio

export const personalInfo = {
  name: "Julia Baucher",
  title: "Senior Product Manager Tech",
  tagline: "Transforming complex technical challenges into user-centric products that scale",
  email: "juliabaucher.work@gmail.com",
  phone: "+33 (0)6 62 72 83 22",
  linkedin: "linkedin.com/in/juliabaucher",
  github: "https://github.com/JuliaBaucher",
  portfolio: "https://juliabaucher.github.io",
  location: "France",
  bio: "Senior Product Leader with 15+ years of experience turning complex digital technologies into production-ready solutions that integrate seamlessly into real business and operational workflows.\n\nI lead products end to end, from identifying high-impact use cases and defining strategy to designing architectures and driving execution.\n\nWith a background in leading multiple pre-sales engagements and consulting missions, I build long-lasting relationships with C-level stakeholders and translate executive vision into on-the-ground execution.\n\nCertified in Agile and SAFe, I run training sessions for large technical and non-technical audiences and support teams in adopting scalable delivery practices.\n\nI constantly thrive on building products that scale, teams that align, and solutions that deliver measurable impact.\n\nMy work includes AI-powered assistants, MCP frameworks, ML forecasting models, web platforms, and BI solutions."
};

export const skills = {
  technical: [
    "Product Strategy & Roadmap",
    "Machine Learning & AI",
    "Python & SQL",
    "Agile & Scrum",
    "Data Analytics & BI",
    "API Development",
    "DevOps & CI/CD",
    "UX/UI Design"
  ],
  management: [
    "Cross-functional Leadership",
    "Stakeholder Management",
    "Team Building & Mentoring",
    "Strategic Planning",
    "Risk Assessment",
    "Budget Management",
    "Performance Optimization",
    "Client Relations"
  ],
  languages: [
    "French (Native)",
    "English (Fluent)",
    "Russian (Fluent)",
    "Spanish (Conversational)"
  ]
};

export const experience = [
  {
    id: 1,
    title: "Senior Product Manager III – ML & AI Solutions",
    company: "Amazon",
    location: "Luxembourg",
    period: "2023 - 2026",
    description: "Led product strategy and delivery of machine learning and generative AI solutions, driving scalable, production-ready AI products aligned with business and operational needs.",
    achievements: [
      "Defined ML product strategy and identified expansion opportunities to increase product reach and impact",
      "Led end-to-end development of an ML model forecasting employee absences, improving forecast accuracy by 400 bps",
      "Designed and delivered a GenAI chatbot on AWS Bedrock to interpret ML model outputs, including structured prompting (BPMN), input/output contracts, memory, autonomy levels, auditability, and sentiment analysis",
      "Prototyped multi-agent AI systems using Amazon Q and MCP to automate cross-platform workflows and reduce manual operational effort"
    ],
    technologies: ["ML/AI", "Generative AI", "AWS Bedrock", "Amazon Q", "MCP", "Python", "MLOps", "Agile"]
  },
  {
    id: 2,
    title: "Senior BI Product Manager Tech – Transportation Services",
    company: "Amazon",
    location: "Luxembourg",
    period: "2021 - 2023",
    description: "Led product vision and strategy for cloud-based logistics and transportation optimization platforms, driving data-driven decision-making through scalable web applications, analytics, and dashboards.",
    achievements: [
      "Defined product vision, strategy, risks, and KPIs for cloud-based logistics optimization platforms",
      "Led cross-functional, remote development of Labor Planning & Assignment web applications, data pipelines, and analytical dashboards",
      "Owned end-to-end product delivery including roadmap definition, user journeys, BRDs, technical and UX design, Agile delivery, testing, go-to-market, and KPI tracking",
      "Built and managed strategic partnerships, including investment strategy, stakeholder alignment, and executive reporting",
      "Hired and coached FTEs and interns, delivered SCRUM training ranked 4.8/5, and organized internal tech events"
    ],
    technologies: ["BI & Analytics", "Cloud Platforms", "Agile / SCRUM", "DevOps", "QuickSight", "Tableau"]
  },
  {
    id: 3,
    title: "Product Manager & Financial Solutions Consultant",
    company: "Amadeus",
    location: "France",
    period: "2013 - 2020",
    description: "Managed development of accounting and audit software for airlines, providing strategic consulting to optimize business processes.",
    achievements: [
      "Led the full product lifecycle of enterprise accounting and auditing software used by global airline clients",
      "Defined product strategy and aligned roadmap priorities with a consortium of enterprise customers",
      "Delivered on-site consulting engagements to optimize system usage, business processes, and user experience, while monitoring SLA KPIs for major airlines (Malaysia Airlines, Vistara, Icelandair, Luxair, Widerøe, South African Airways)",
      "Drove multiple pre-sales initiatives, including RFP/RFI responses, customer workshops, live demos, and value proposition development"
    ],
    technologies: ["Financial Software", "Business Process", "Consulting", "Strategy"]
  },
  {
    id: 4,
    title: "E-Commerce & Mobile Product Manager",
    company: "Amadeus",
    location: "France", 
    period: "2006 - 2013",
    description: "Drove development of web and mobile applications for major airlines, serving millions of monthly users globally.",
    achievements: [
      "Led the development of B2C airline web and mobile applications used by millions of monthly users",
      "Defined product vision, strategy, and value propositions for Travel Search Engine platforms",
      "Redesigned an online banking platform, translating strategic objectives into a feature-based product roadmap",
      "Built a UX portfolio for airline website personalization, supported by market research and business case analysis"
    ],
    technologies: ["Web Development", "Mobile Apps", "UX Design", "Payment Systems", "SEO"]
  }
];

export const projects = [
  {
    id: 1,
    title: "ML model for employee absence forecasting",
    category: "Machine Learning",
    description: "Developed and deployed machine learning models for workforce optimization, achieving 12% reduction in labor costs across multiple Amazon facilities.",
    image: "/portfolio/ML workforce.png",
    technologies: ["Python", "ML/AI", "AWS", "Data Analytics"],
    metrics: "12% cost reduction, 50+ facilities",
    status: "Production"
  },
  {
    id: 2,
    title: "AI Assistant for ML Forecast Explainability",
    category: "Generative AI",
    description: "Shipped an AWS Bedrock–powered AI assistant that explains ML forecast results to business users and reduced investigation effort from days to minutes.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["AWS Bedrock", "Serverless", "NLP", "Data Integration"],
    metrics: "Days to minutes insight reduction, expert dependency eliminated",
    status: "Production"
  },
  {
    id: 3,
    title: "MCP multi-agent automation framework",
    category: "Generative AI",
    description: "Prototyped an Amazon Q-powered multi-agent framework that orchestrates enterprise workflows—including data analytics, task management, and communication—via a single natural-language command.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    technologies: ["Amazon Q", "Multi-Agent Systems", "Workflow Automation", "NLP"],
    metrics: "Single command workflow orchestration, cross-platform integration",
    status: "Prototype"
  },
  {
    id: 4,
    title: "Airline Web Platforms",
    category: "Web Development",
    description: "Led the product development of airline web and mobile applications serving millions of monthly users. Delivered an innovative instant search feature for promoting travel offers, adopted by the majority of European airlines.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    technologies: ["Web Apps", "Mobile", "UX Design", "Payment Systems"],
    metrics: "Millions of monthly users, 15+ airlines",
    status: "Production"
  },
  {
    id: 5,
    title: "Revenue Accounting & Auditing Platform",
    category: "Consulting",
    description: "Managed development of comprehensive accounting and audit software for airline industry, providing strategic consulting and optimization services.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    technologies: ["Enterprise Software", "Financial Systems", "Consulting"],
    metrics: "20+ airline clients globally",
    status: "Production"
  },
  {
    id: 6,
    title: "Workforce Management Dashboard",
    category: "Data Analytics",
    description: "Built comprehensive dashboards and analytics tools for workforce management, enabling data-driven decision making across logistics operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Tableau", "Quicksight", "Python", "SQL"],
    metrics: "Real-time analytics, 100+ KPIs",
    status: "Production"
  },
  {
    id: 7,
    title: "SARG Workforce Task Allocation Platform",
    category: "Web Development",
    description: "Led the European adaptation and deployment of a web application that automates task and role assignment for warehouse associates based on schedules, staffing needs, and training certifications, improving efficiency and safety at scale.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    technologies: ["Web Apps", "UX Design", "GDPR Compliance", "Agile / Scrum", "Distributed Team"],
    metrics: "Operations Optimization",
    status: "Production"
  },
  {
    id: 8,
    title: "Strategic Partnership Framework",
    category: "Consulting",
    description: "Led a strategic partnership to define investment decisions for operational projects, supported by a strong governance model for project intake, product rollout, and change management, driven by continuous feedback from operations stakeholders.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    technologies: ["Investment Strategy", "Stakeholder Alignment", "Governance", "Change Management", "Agile Delivery"],
    metrics: "Product Strategy & Governance",
    status: "Production"
  }
];

export const awards = [
  {
    year: "2017",
    title: "1st Prize - Startup Weekend",
    organization: "CCI & Google Monaco",
    description: "54 hours to transform an idea into a business"
  },
  {
    year: "2008", 
    title: "Excellence Award in Engineering Calculations",
    organization: "Emerald Publishing, UK",
    description: "Recognition for outstanding research contributions"
  },
  {
    year: "2002",
    title: "International PhD Scholarship Award",
    organization: "Egide, France",
    description: "Awarded a competitive international scholarship to support doctoral studies"
  }
];

export const education = [
  {
    degree: "PhD in Numerical Mechanics",
    institution: "École des Mines de Paris",
    location: "France",
    year: "2006"
  },
  {
    degree: "Engineering Degree in Computer Science", 
    institution: "Moscow State Technical University",
    location: "Russia",
    year: "2002"
  }
];


export const projectDetails = {
  "1": {
    title: "ML Model for Employee Absence Forecasting",
    subtitle: "Feature Project — Workforce Planning & Cost Optimization",
    sections: [
      {
        heading: "Problem",
        content: [
          "Employee absenteeism directly impacts delivery promises and cost per package. When absenteeism is underestimated, teams are understaffed and unable to process all parcels on time; when overestimated, unnecessary labor costs are incurred. Historically, absenteeism forecasts relied on a simple rolling average of the previous two weeks, which failed to account for seasonality, holidays, weekends, and workforce heterogeneity—leading to systematic inaccuracies."
        ]
      },
      {
        heading: "Context",
        content: [
          "The model was developed for Amazon fulfillment centers, where workforce planning decisions must be made several weeks in advance and at fine operational granularity. Absenteeism forecasting is a critical input to staffing tools used by operations and planning teams, and errors have immediate financial and customer impact."
        ]
      },
      {
        heading: "Your Role",
        content: [
          "I acted as Product Lead for the ML initiative, working closely with data scientists, engineers, and business stakeholders:"
        ],
        list: [
          "Defined the business problem, success metrics, and expected ROI",
          "Aligned all stakeholders on a shared, precise definition of \"absence\"",
          "Translated operational constraints into ML requirements (horizon, granularity, frequency)",
          "Oversaw model comparison against the existing baseline",
          "Led integration of predictions into the workforce management system"
        ]
      },
      {
        heading: "Decisions & Trade-offs",
        content: [],
        list: [
          "Business alignment first: Prioritized a shared operational definition of absence before modeling to avoid downstream misinterpretation",
          "Forecast horizon vs. accuracy: Selected a three-week prediction horizon to align with workforce planning cycles, accepting higher uncertainty than short-term forecasts",
          "Granularity vs. complexity: Chose fine-grained predictions (site, shift, employee type) despite increased model and data complexity",
          "Human override: Kept manual editability of predictions to preserve operational trust and flexibility",
          "Maintainability: Planned for retraining cadence and feature evolution from the start to ensure long-term viability"
        ]
      },
      {
        heading: "Architecture (AI-focused)",
        content: [
          "The solution follows a standard production ML pipeline integrated into operational systems:"
        ],
        list: [
          "Data sources: HR attendance scans, workforce schedules, historical absenteeism, calendar data (holidays, events)",
          "Feature engineering: Day-of-week effects, seasonality, holidays, Amazon-specific events, employee type",
          "Prediction setup: Weekly predictions with a three-week horizon, segmented by site, shift, and employee category",
          "Evaluation metrics: WAPE and MAE to balance interpretability and business relevance",
          "Deployment: Predictions automatically pre-fill absenteeism rates in the workforce management tool",
          "Operations: Model retraining and feature updates planned on a defined cadence"
        ]
      },
      {
        heading: "Outcomes / Metrics",
        content: [],
        list: [
          "Achieved an average forecasting error of ~3% across fulfillment centers, significantly outperforming the previous baseline",
          "Reduced time spent manually preparing workforce plans",
          "Improved staffing accuracy, leading to better delivery performance",
          "Lowered costs associated with overstaffing and last-minute adjustments",
          "Contributed to an estimated ~10% improvement potential, representing several million euros in savings"
        ]
      },
      {
        heading: "What I'd Improve",
        content: [],
        list: [
          "Introduce probabilistic forecasts to better represent uncertainty",
          "Add confidence intervals directly into the planning UI",
          "Incorporate external signals (e.g. weather, transport disruptions)",
          "Enhance automated monitoring for drift and performance degradation",
          "Extend explainability features for non-technical users"
        ]
      }
    ]
  },
  "2": {
    title: "AskMeAI Operations Support Chatbot",
    subtitle: "Feature Project — AI Assistant for ML Forecast Explainability",
    sections: [
      {
        heading: "Problem",
        content: [
          "Operational and planning teams relied on the same ML forecasts but required very different explanations depending on their role. Accessing the right interpretation was slow, fragmented across dashboards and documentation, and heavily dependent on a small number of experts—creating bottlenecks, delays, and inconsistent decision-making."
        ]
      },
      {
        heading: "Context",
        content: [
          "AskMe was developed in a high-pressure operational environment where forecasting accuracy directly impacts capacity planning, staffing, and business performance. Multiple personas (operations managers, planning analysts, program managers) needed fast, reliable, and role-appropriate explanations of ML forecasts, all grounded in the same trusted data sources and governance rules."
        ]
      },
      {
        heading: "Your Role",
        content: [
          "I acted as Product Lead and AI Product Owner, owning the solution end to end:"
        ],
        list: [
          "Identified the core operational pain points and validated use cases with stakeholders",
          "Defined functional and non-functional requirements, including security, governance, and explainability",
          "Designed the user experience and role-based behavior of the chatbot",
          "Partnered with engineering and data teams to deliver a production-ready, serverless AI solution",
          "Oversaw rollout, feedback loops, and continuous improvement"
        ]
      },
      {
        heading: "Decisions & Trade-offs",
        content: [],
        list: [
          "Explanation over prediction: Focused on interpreting existing ML outputs rather than building new models, maximizing adoption and trust",
          "Role-based responses: Accepted higher prompt and logic complexity to ensure each persona received actionable, relevant answers",
          "Controlled autonomy: Designed the chatbot as semi-autonomous, with explicit escalation paths to human experts to manage risk",
          "Limited memory: Chose short-lived session memory to reduce compliance and governance risks",
          "Strict scope control: Restricted problem categories and enforced refusals when data or confidence was insufficient"
        ]
      },
      {
        heading: "Architecture (AI-focused)",
        content: [
          "AskMe is a serverless, role-aware AI assistant integrated with internal forecasting knowledge:"
        ],
        list: [
          "Authentication & identity: User email and role determine prompt configuration and response depth",
          "Prompt structure: System instructions, business context (problem categories, rules, sources), and user query",
          "RAG pipeline: Dynamic retrieval of relevant internal documentation to ground responses and prevent hallucinations",
          "Application logic: Classifies question type, routes queries, and structures outputs consistently",
          "Auditability: Logs requests, detected categories, and sources used for traceability and improvement",
          "Feedback loop: Users validate responses or escalate, feeding continuous model and knowledge refinement"
        ]
      },
      {
        heading: "Outcomes / Metrics",
        content: [],
        list: [
          "Reduced time to access reliable explanations from days to minutes",
          "Significantly decreased reliance on expert teams for repetitive investigations",
          "Improved consistency and confidence in forecast-driven decisions across teams",
          "Demonstrated how AI copilots can augment decision-makers directly within operational workflows"
        ]
      },
      {
        heading: "What I'd Improve",
        content: [],
        list: [
          "Introduce lightweight confidence scoring to make uncertainty more explicit",
          "Expand multilingual support for broader international teams",
          "Add proactive insights (e.g., anomaly detection alerts) rather than purely reactive Q&A",
          "Integrate deeper workflow actions (ticket creation, reporting) while preserving governance controls"
        ]
      }
    ]
  },
  "3": {
    title: "MCP Multi-Agent Automation Framework",
    subtitle: "Feature Project — AI Orchestration for Cross-Tool Operational Workflows",
    sections: [
      {
        heading: "Problem",
        content: [
          "Operational teams spent a significant amount of time switching between tools, manually copying information, and translating unstructured inputs—emails, ad-hoc requests, and analyses—into concrete actions such as tickets, reports, or follow-ups. Existing AI assistants could provide answers, but remained largely disconnected from real systems, limiting their usefulness in production workflows."
        ]
      },
      {
        heading: "Context",
        content: [
          "The framework was designed for internal Amazon teams (product managers, operations, and engineering) working in fast-paced, tool-heavy environments. The challenge was not to replace existing systems, but to connect them intelligently through an AI layer that is explainable, controlled, and action-oriented, while preserving existing workflows and governance."
        ]
      },
      {
        heading: "Your Role",
        content: [
          "I acted as Product Designer and Technical Architect, owning the concept from problem framing to prototype evaluation:"
        ],
        list: [
          "Identified high-friction operational workflows and validated automation opportunities",
          "Defined product principles: explicit contracts, separation of reasoning and execution, and controlled autonomy",
          "Designed the multi-agent architecture and interaction model",
          "Built and tested the prototype in a real execution environment",
          "Defined success metrics and collected structured user feedback"
        ]
      },
      {
        heading: "Decisions & Trade-offs",
        content: [],
        list: [
          "Orchestration over replacement: Chose to augment existing tools rather than rebuild workflows",
          "Multi-agent design: Accepted higher architectural complexity to achieve modularity and extensibility",
          "CLI-first interface: Prioritized power users and precision over mass adoption in early stages",
          "Explicit contracts: Enforced strict input/output schemas to improve reliability and auditability",
          "Controlled autonomy: Limited agent permissions to reduce operational and security risks"
        ]
      },
      {
        heading: "Architecture (AI-focused)",
        content: [
          "The prototype is built on a Model Context Protocol (MCP) architecture, running in a Linux environment (WSL2) with Amazon Q CLI as the entry point:"
        ],
        list: [
          "Natural language interface: Users issue commands via Amazon Q CLI",
          "Reasoning layer: The AI interprets intent and plans actions without directly executing them",
          "Execution layer: Independent MCP agents expose real systems:",
          "  • Outlook agent for email analysis and triage",
          "  • Jira / Asana (Rovo) agents for ticket creation and tracking",
          "  • Data agent using DuckDB and MotherDuck for analytics",
          "Agent communication: Standardized MCP contracts ensure clean separation between reasoning and execution",
          "Feedback collection: Dedicated agents capture user validation and perceived value after workflow execution"
        ]
      },
      {
        heading: "Outcomes / Metrics",
        content: [],
        list: [
          "Significant reduction in time spent on repetitive, cross-tool operational tasks",
          "High end-to-end workflow success rate without human intervention",
          "Improved continuity between analysis, decision, and execution",
          "Positive qualitative feedback confirming the value of AI-driven orchestration embedded in existing tools"
        ]
      },
      {
        heading: "What I'd Improve",
        content: [],
        list: [
          "Add a lightweight UI layer for less technical users while keeping CLI power features",
          "Introduce richer monitoring and observability for agent behavior and failures",
          "Expand agent library to cover additional enterprise systems",
          "Implement policy-based permissions to dynamically adjust agent autonomy by context"
        ]
      }
    ]
  },
  "4": {
    title: "Airline Web Platforms (Instant Search)",
    subtitle: "Feature Project — High-Performance Travel Search & Conversion Engine",
    sections: [
      {
        heading: "Problem",
        content: [
          "Airlines and online travel agencies needed a way to display a large number of travel offers instantly while maintaining price reliability and a smooth booking experience. Traditional real-time search was too slow and costly at scale, while slow or unreliable pricing led to poor conversion rates and increased customer service calls."
        ]
      },
      {
        heading: "Context",
        content: [
          "The project was delivered at Amadeus, serving airline and OTA customers with millions of monthly users. The Instant Search engine powers promotional offers, long-range calendars, and email alerts, and sits at the top of the booking funnel—where performance, reliability, and UX directly affect traffic, conversion, and operational cost."
        ]
      },
      {
        heading: "Your Role",
        content: [
          "I acted as Product Manager for the Airline Web Platform, owning the product from discovery to production:"
        ],
        list: [
          "Analyzed client usage data (traffic, conversion) and benchmarked against similar airlines",
          "Led customer discovery sessions to identify priority use cases and business objectives",
          "Facilitated workshops to define user journeys, inputs/outputs, and feature interactions",
          "Defined business and technical KPIs and formalized requirements (SOR)",
          "Owned roadmap, backlog prioritization, functional testing, and release management",
          "Coordinated delivery across engineering, customers, and internal stakeholders"
        ]
      },
      {
        heading: "Decisions & Trade-offs",
        content: [],
        list: [
          "Pre-computation vs. real-time accuracy: Chose a pre-computed offers model to guarantee instant response times, accepting limited price availability risk",
          "Speed over completeness: Prioritized fast inspiration and browsing over exhaustive real-time availability",
          "Reliability threshold: Set an explicit target (≥80% price consistency) to balance performance and trust",
          "Agile delivery: Accepted iterative improvements post-launch to meet aggressive timelines",
          "Scalability first: Designed for mass traffic rather than airline-specific customization"
        ]
      },
      {
        heading: "Architecture (Platform / Data-focused)",
        content: [
          "The solution is built on a massive computation platform (MCP) optimized for scale and speed:"
        ],
        list: [
          "Daily pre-computation: Hundreds of travel offers calculated and stored per route and date",
          "Instant retrieval: Search results returned in ~1 second regardless of traffic peaks",
          "Data flow: Structured inputs and outputs defined for each step of the user journey",
          "Integration: Tight coupling between search and booking systems to maintain price coherence",
          "Monitoring: Continuous tracking of performance, availability, and price consistency"
        ]
      },
      {
        heading: "Outcomes / Metrics",
        content: [],
        list: [
          "Achieved instant search response times (~1 second)",
          "Reached ≥80% price consistency between search and booking",
          "Increased airline website traffic by ~10%",
          "Improved booking conversion by ~5%",
          "Reduced customer service calls related to pricing and availability",
          "Widely adopted by airlines for promotional offers, long-range calendars, and email alerts"
        ]
      },
      {
        heading: "What I'd Improve",
        content: [],
        list: [
          "Introduce hybrid models combining pre-computation with selective real-time checks",
          "Add predictive pricing confidence indicators for users",
          "Improve personalization based on user behavior and context",
          "Enhance analytics on search abandonment and inspiration flows",
          "Extend support for dynamic offers and ancillary products"
        ]
      }
    ]
  },
  "6": {
    title: "Workforce Management Dashboard",
    subtitle: "Feature Project — Real-Time Productivity Analytics & Labor Optimization",
    sections: [
      {
        heading: "Problem",
        content: [
          "Sort Centers had low confidence in unloading rates and benchmarking metrics because key indicators were manually coded and weakly linked to real operational events. This resulted in inaccurate productivity measurements, delayed reactions on the floor, and suboptimal labor allocation decisions."
        ]
      },
      {
        heading: "Context",
        content: [
          "The project was delivered in a high-throughput Amazon Sort Center environment, where productivity (TPH – Throughput Per Hour) and labor efficiency directly impact operational cost and execution quality. Existing workforce management metrics were disconnected from real scan and event data, limiting their reliability and real-time usefulness for operations managers."
        ]
      },
      {
        heading: "Your Role",
        content: [
          "I acted as Product Owner for Workforce Analytics, responsible for:"
        ],
        list: [
          "Identifying gaps between workforce metrics and operational reality",
          "Defining requirements for real-time, event-driven productivity tracking",
          "Driving the solution selection through a structured trade-off analysis",
          "Aligning operations, engineering, and analytics teams",
          "Ensuring fast delivery with minimal operational disruption"
        ]
      },
      {
        heading: "Decisions & Trade-offs",
        content: [],
        list: [
          "Event-driven metrics over manual coding: Chose scan-based measurement to significantly improve accuracy",
          "Internal platform over custom build: Selected Spektr to minimize development time and operational risk",
          "Speed to value vs. perfect flexibility: Accepted some dashboarding and dataset-join limitations to enable rapid rollout",
          "Scalability first: Prioritized a solution proven at large data volumes and streaming scale",
          "Operational visibility: Focused on real-time visual feedback rather than offline reporting"
        ]
      },
      {
        heading: "Architecture (Data / Analytics-focused)",
        content: [
          "The solution is built around real-time event data and scalable analytics infrastructure:"
        ],
        list: [
          "Data sources: Scanner events, site cameras, workforce systems",
          "Event processing: Conversion of scan events into direct task signals",
          "Analytics platform: Spektr (internal Amazon analytics solution)",
          "  • Streaming and batch ETL support",
          "  • Calcite SQL (Redshift-like) for querying",
          "  • Centralized data lake (300+ PB)",
          "Visualization: Real-time dashboards displayed on large screens for operations managers",
          "Access & security: LDAP with federated access",
          "Monitoring: Built-in monitoring and alerting with Sev2 SLA support"
        ]
      },
      {
        heading: "Outcomes / Metrics",
        content: [],
        list: [
          "3× more accurate productivity rates compared to manual benchmarks",
          "Enabled conversion of indirect to direct roles through scan-driven task measurement",
          "6% labor automation based on EUSC labor hours",
          "Delivered €6.54 entitlement through improved labor allocation",
          "Real-time TPH visibility allowed operations managers to proactively intervene when flow slowed or stacked",
          "Increased trust in workforce metrics and faster on-floor decision-making"
        ]
      },
      {
        heading: "What I'd Improve",
        content: [],
        list: [
          "Introduce advanced joins and transformations directly in the dashboard layer",
          "Remove row limits on virtual datasets",
          "Add predictive alerts for anticipated slowdowns",
          "Extend dashboards with role-specific views for different operational personas"
        ]
      }
    ]
  },
  "7": {
    title: "SARG (Smart Assignment of Roles & Jobs)",
    subtitle: "Feature Project — Workforce Task Assignment & Safety Optimization",
    sections: [
      {
        heading: "Problem",
        content: [
          "Manual task assignment in Amazon fulfillment centers was time-consuming, error-prone, and insufficiently aligned with employee schedules, certifications, and operational constraints. This led to lost productivity, inconsistent execution on the floor, and higher safety incident rates."
        ]
      },
      {
        heading: "Context",
        content: [
          "SARG is a web application originally developed in North America to automate task assignment for associates. My mission was to adapt and deploy SARG for Europe, connecting the right data sources and ensuring compliance with European labor laws, safety standards, and GDPR. The solution also integrates with FastStart, which displays assigned roles on screens when associates scan their badges."
        ]
      },
      {
        heading: "Your Role",
        content: [
          "I acted as Product Lead for the EU rollout, owning discovery, delivery, and long-term vision:"
        ],
        list: [
          "Conducted gap analysis between the NA product and EU operational, legal, and regulatory requirements",
          "Identified and validated EU-specific data sources",
          "Led stakeholder workshops to review gaps, define alternatives, and prioritize features",
          "Delivered the product roadmap, including short-term MVP and long-term optimization vision",
          "Authored BRDs with user stories, user journeys, and acceptance criteria",
          "Coordinated EU and NA engineering teams on architecture and delivery",
          "Led user research sessions on-site and iterated on UX based on feedback",
          "Defined the Scrum framework and launched Agile delivery",
          "Secured GDPR approval for employee data usage"
        ]
      },
      {
        heading: "Decisions & Trade-offs",
        content: [],
        list: [
          "Phased automation: Accepted partial manual inputs (Excel uploads) in the MVP to accelerate EU launch",
          "Adaptation over rewrite: Reused the NA product foundation while extending it for EU constraints",
          "Heuristic first: Chose a simple heuristic algorithm initially to maximize reliability and explainability",
          "UX validation early: Invested in rapid prototyping and on-site testing to reduce adoption risk",
          "Compliance-first: Prioritized GDPR and labor law alignment over feature richness"
        ]
      },
      {
        heading: "Architecture (Product / Data-focused)",
        content: [
          "The solution is a web-based workforce assignment platform integrated into operational systems:"
        ],
        list: [
          "Inputs: Employee schedules, required staffing per task, training certifications",
          "Assignment logic: Heuristic algorithm assigning tasks based on availability and qualifications",
          "Integration: Connected to FastStart for real-time role display at badge scan",
          "Data handling: EU-compliant processing of personal data with explicit authorization",
          "Delivery model:",
          "  • 2024: MVP with partial manual inputs",
          "  • 2025: End-to-end automation framework",
          "  • 2026: Advanced optimization model incorporating additional criteria (e.g. employee preferences)"
        ]
      },
      {
        heading: "Outcomes / Metrics",
        content: [],
        list: [
          "Achieved ~4.8 minutes saved per associate per shift",
          "Contributed to ~10% efficiency increase across sites",
          "Reduced safety incidents by 5% to 17%, depending on the fulfillment center",
          "Delivered an estimated $4.1M total benefit ($1.8M from SARG, $2.3M from FastStart)",
          "Successfully launched and scaled SARG across European sites"
        ]
      },
      {
        heading: "What I'd Improve",
        content: [],
        list: [
          "Introduce advanced optimization and constraint-based models",
          "Incorporate employee preferences to improve satisfaction and retention",
          "Add predictive staffing adjustments based on forecasted workload",
          "Enhance explainability of assignment decisions for managers and associates",
          "Expand real-time monitoring and analytics on assignment quality"
        ]
      }
    ]
  },
  "8": {
    title: "ACES & APP Tech Partnership Framework",
    subtitle: "Feature Project — Technology Investment Strategy, Governance & Product Delivery at Scale",
    sections: [
      {
        heading: "Problem",
        content: [
          "Technology investments supporting operations were fragmented across multiple teams, leading to overlapping initiatives, unclear ownership, inconsistent prioritization, and limited visibility into value delivered. Without a structured partnership and governance model, scaling tech solutions while controlling cost, compliance, and adoption was increasingly challenging."
        ]
      },
      {
        heading: "Context",
        content: [
          "This initiative operated in a large, multi-team operational environment, where dozens of technology requests competed for limited resources. Multiple projects targeted similar operational KPIs (labor rates, throughput, scanning performance, quality metrics), often with partial overlap and duplicated efforts. A unified framework was needed to align business priorities, technology investments, and delivery execution across teams."
        ]
      },
      {
        heading: "Your Role",
        content: [
          "I acted as Product and Program Lead, defining and driving the partnership model end to end:"
        ],
        list: [
          "Designed the joint investment and prioritization framework",
          "Structured intake processes (OP1 / OP2) for business and technical requests",
          "Led requirement collection, benefit modeling, and effort estimation",
          "Facilitated alignment workshops with business, tech teams, and leadership",
          "Defined governance, communication cadence, and escalation paths",
          "Ensured change management, rollout, and adoption were embedded from day one"
        ]
      },
      {
        heading: "Decisions & Trade-offs",
        content: [],
        list: [
          "Centralized prioritization vs. local autonomy: Chose centralized decision-making to reduce duplication and optimize cost",
          "Reuse over rebuild: Actively identified overlaps to leverage existing platforms and partner teams",
          "Speed vs. rigor: Balanced fast intake cycles with structured benefit and effort validation",
          "Governance without bureaucracy: Designed lightweight but enforceable processes",
          "Operational safety first: Embedded compliance, data quality, and legal constraints (e.g. regional regulations)"
        ]
      },
      {
        heading: "Architecture (Product & Governance-focused)",
        content: [
          "Rather than a single system, the solution is a product governance and delivery architecture:"
        ],
        list: [
          "Intake framework: OP1 / OP2 processes with standardized business and technical questionnaires",
          "Prioritization model: Benefit-driven evaluation (financial impact, operational value, strategic alignment)",
          "Delivery tracking: Shared roadmaps, Asana boards, MBRs, and status reporting",
          "Cross-team collaboration: Defined ownership across multiple tech platforms and partner teams",
          "Change management: Central change calendar, pilot sites, feedback loops, and adoption tracking",
          "Financial visibility: Integration into a centralized financial dashboard measuring forecasted vs. actual benefits"
        ]
      },
      {
        heading: "Outcomes / Metrics",
        content: [],
        list: [
          "Clear prioritization of above-the-line vs. below-the-line initiatives",
          "Reduced duplication across tech investments addressing similar operational KPIs",
          "Improved transparency for leadership on roadmap, risks, and delivered value",
          "Faster alignment between business needs and technical execution",
          "Stronger adoption through structured rollout, training, and compliance tracking",
          "Established a repeatable model used across multiple planning cycles"
        ]
      },
      {
        heading: "What I'd Improve",
        content: [],
        list: [
          "Introduce predictive portfolio modeling to simulate trade-offs earlier",
          "Automate intake and prioritization scoring",
          "Expand self-service dashboards for stakeholders",
          "Add AI-assisted clustering of similar requests",
          "Strengthen feedback loops between delivered value and future prioritization"
        ]
      }
    ]
  },
  "5": {
    title: "Revenue Accounting & Auditing Platform",
    subtitle: "Feature Project — Airline Financial Operations, Automation & Revenue Protection",
    sections: [
      {
        heading: "Problem",
        content: [
          "Airlines face persistent challenges in revenue accounting: delayed and inaccurate revenue recognition, heavy manual workloads, revenue leakage, and limited real-time visibility. Legacy systems are often fragmented, poorly integrated, and expensive to evolve, slowing down financial reporting and decision-making while increasing operational risk and cost."
        ]
      },
      {
        heading: "Context",
        content: [
          "This project was delivered within Amadeus, serving global airlines operating in highly regulated, transaction-heavy environments. Revenue accounting sits at the intersection of sales, operations, finance, and interline partnerships, with direct impact on cash flow, profitability, audit compliance, and CFO-level decision-making. Airlines were moving to fully electronic ticketing and complex commercial models, but their accounting systems had not evolved at the same pace."
        ]
      },
      {
        heading: "Your Role",
        content: [
          "I acted as Product Manager and Domain Lead for Revenue Accounting & Auditing, owning both product strategy and customer alignment:"
        ],
        list: [
          "Built deep domain expertise in airline revenue accounting by working directly with end users and finance teams",
          "Led product discovery through on-site observations, shadowing users in their daily accounting and auditing tasks",
          "Defined product vision, roadmap, and value propositions aligned with airline CFO priorities",
          "Drove pre-sales, business case development, and ROI modeling",
          "Served as primary point of contact for key airline customers on complex revenue accounting initiatives"
        ]
      },
      {
        heading: "Decisions & Trade-offs",
        content: [],
        list: [
          "Automation over customization: Prioritized scalable automation and workflows instead of airline-specific custom code",
          "Real-time processing: Invested in real-time revenue recognition despite higher technical complexity to unlock decision-making value",
          "Value at minimal cost: Delivered customer requirements through configuration and workarounds whenever possible, avoiding unnecessary development",
          "User efficiency first: Focused on intuitive GUIs and workflow-driven controls to reduce human effort",
          "Integration mindset: Ensured tight integration with passenger service systems rather than standalone accounting silos"
        ]
      },
      {
        heading: "Architecture (Enterprise / Data-focused)",
        content: [
          "The platform is a fully automated, real-time, SaaS revenue accounting system integrated with airline core systems:"
        ],
        list: [
          "Sales & usage acquisition: Real-time ingestion of ticket, EMD, and coupon usage data",
          "Automated validation & reconciliation: Continuous checks against IATA/ARC reports and departure control systems",
          "Auditing engines: Fare, tax, fee, and commission auditing using pricing and fare rule engines",
          "Interline processing: Automated billing, auditing, proration, and settlement compliant with IATA SIS standards",
          "Accounting & posting: Configurable journal entries with full audit trails from coupon to ledger",
          "Reporting & analytics: Real-time dashboards and operational monitoring",
          "Security & compliance: Role-based access, PCI-DSS compliance, secure identification, full traceability",
          "Data retention: Four years read/write, extended archival in read-only mode to meet legal requirements"
        ]
      },
      {
        heading: "Outcomes / Metrics",
        content: [],
        list: [
          "Significant reduction in manual workload across revenue accounting and auditing teams",
          "Improved revenue accuracy and reduced leakage through automated auditing and reconciliation",
          "Faster financial close and real-time visibility into passenger revenue",
          "Enabled airlines to reallocate resources from manual controls to higher-value analysis",
          "Delivered measurable customer savings through optimized configuration and workaround strategies (e.g. ~€1.5M saved for a major airline by avoiding unnecessary developments)"
        ]
      },
      {
        heading: "What I'd Improve",
        content: [],
        list: [
          "Introduce predictive analytics to anticipate revenue risks before they materialize",
          "Expand self-service analytics for finance and commercial teams",
          "Enhance cross-airline benchmarking using anonymized data",
          "Add AI-assisted anomaly detection to complement deterministic auditing rules",
          "Further simplify configuration of complex business rules for non-technical users"
        ]
      }
    ]
  }
};
