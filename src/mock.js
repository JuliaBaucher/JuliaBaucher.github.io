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
  bio: "Senior Product Leader with 15+ years of experience turning complex digital technologies into production-ready solutions that integrate seamlessly into real business and operational workflows.\n\nI lead products end to end, from identifying high-impact use cases and defining strategy to designing architectures and driving execution.\n\nMy work includes AI-powered assistants, MCP frameworks, ML forecasting models, web platforms, and BI solutions.\n\nWith a background in leading multiple pre-sales engagements and consulting missions, I build long-lasting relationships with C-level stakeholders and translate executive vision into on-the-ground execution.\n\nCertified in Agile and SAFe, I run training sessions for large technical and non-technical audiences and support teams in adopting scalable delivery practices.\n\nI constantly thrive on building products that scale, teams that align, and solutions that deliver measurable impact."
};

export const skills = {
  technical: [
    // Group 1: AI & ML (top priority - current focus)
    ["GenAI", "LLMs", "RAG", "MCP", "MLOps"],
    // Group 2: Data & BI (proven expertise)
    ["BI", "ETL", "SQL", "QuickSight", "Tableau"],
    // Group 3: Cloud & Platform (infrastructure)
    ["AWS", "GCP", "Azure", "GitHub"],
    // Group 4: APIs & DevOps
    ["APIs", "FastAPI", "CI/CD", "DevOps"],
    // Group 5: Product & Compliance
    ["UX", "Agile", "SAFe"],
    // Group 6: Security & Compliance (enterprise readiness)
    ["PCI DSS", "GDPR"]
  ],
  management: [
    "Analytical & systems thinking",
    "Problem solving & decision-making",
    "Stakeholder alignment",
    "Clear and concise communication",
    "Empathy & customer focus",
    "Continuous learning & adaptability"
  ],
  languages: [
    "French (Fluent)",
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
    title: "ML Model for Employee Absence Forecasting",
    category: "Machine Learning",
    description: "Led end-to-end development of a machine learning model that forecasts employee absences, improving forecast accuracy by 400 basis points. The model enables better capacity planning, staffing decisions, and operational efficiency in high-throughput environments.",
    image: "/ML workforce.png",
    technologies: ["Python", "ML/AI", "MLOps", "Data Science"],
    metrics: "400 bps accuracy improvement",
    status: "Production"
  },
  {
    id: 2,
    title: "AI Assistant for ML Forecast Explainability",
    category: "Generative AI",
    description: "AskMe is a GenAI-powered chatbot built on AWS Bedrock that interprets ML forecast outputs for operational and planning teams. It provides role-based, explainable answers grounded in trusted data sources, reducing reliance on expert teams and accelerating decision-making from days to minutes.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["AWS Bedrock", "GenAI", "RAG", "Serverless"],
    metrics: "Days to minutes decision-making, reduced expert dependency",
    status: "Production"
  },
  {
    id: 3,
    title: "MCP Multi-Agent Automation Framework",
    category: "Generative AI",
    description: "Prototyped a multi-agent AI system using Amazon Q and MCP, accessible via a command-line interface. The framework enables AI agents to coordinate actions across multiple systems, reducing manual tasks and improving efficiency in repetitive operational workflows.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    technologies: ["Amazon Q", "MCP", "Multi-Agent Systems", "Workflow Automation"],
    metrics: "Cross-platform workflow automation, reduced manual effort",
    status: "Prototype"
  },
  {
    id: 4,
    title: "Airline Web Platform (Instant Search)",
    category: "Web Development",
    description: "Led the design and delivery of an Instant Search web platform for airlines, enabling the display of hundreds of travel offers for promotional campaigns, long-term calendars, and email alerts. The platform improves user experience, early-funnel conversion, and operational efficiency.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    technologies: ["Web Apps", "Mobile", "UX Design", "Payment Systems"],
    metrics: "Millions of monthly users, 15+ airlines",
    status: "Production"
  },
  {
    id: 5,
    title: "Revenue Accounting & Auditing Platform",
    category: "Consulting",
    description: "Managed product strategy, consulting, and pre-sales for enterprise revenue accounting and auditing software for global airline clients, aiming to optimize revenue recognition, reduce manual effort, improve financial accuracy, and strengthen reporting and audit readiness.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    technologies: ["Enterprise Software", "Financial Systems", "Consulting"],
    metrics: "20+ airline clients globally",
    status: "Production"
  },
  {
    id: 6,
    title: "Workforce Management Dashboard",
    category: "Data Analytics",
    description: "Delivered a real-time workforce management dashboard that replaced manual productivity metrics with event-driven, scan-based measurements, enabling more accurate performance tracking, faster operational decisions, and improved labor allocation for on-the-ground operations teams.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Tableau", "Quicksight", "Python", "SQL"],
    metrics: "Real-time analytics, 100+ KPIs",
    status: "Production"
  },
  {
    id: 7,
    title: "SARG Workforce Task Allocation Platform",
    category: "Web Development",
    description: "Led the European adaptation and deployment of a web application that automates task and role assignment for warehouse associates based on schedules, staffing needs, and training certifications, improving operational performance, safety, and compliance across sites.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    technologies: ["Web Apps", "UX Design", "GDPR Compliance", "Agile / Scrum", "Distributed Team"],
    metrics: "Operations Optimization",
    status: "Production"
  },
  {
    id: 8,
    title: "Strategic Partnership Framework",
    category: "Consulting",
    description: "Led a strategic partnership between operational projects, support teams, and technology partners. Established governance structures, investment strategies, and continuous feedback mechanisms to align stakeholders, optimize resource allocation, and ensure successful project delivery.",
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
        heading: "My Role",
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
    title: "AI Assistant for ML Forecast Explainability",
    subtitle: "Feature Project — AskMe Operations Support Chatbot",
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
        heading: "My Role",
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
          "S3-based knowledge storage: Chosen S3 storage over a database to keep the knowledge base simple, low-cost, versioned, and auditable for document-centric content, accepting limited query flexibility and higher retrieval latency compared to database-backed solutions",
          "Simple semantic search: Chosen a brute force semantic similarity scoring with top-K selection for rapid delivery and a strong relevance baseline, accepting scalability limits and lower precision compared to hybrid, filtered, or reranked retrieval approaches",
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
          "Knowledge storage: Forecasting documentation and operational references stored in an S3-based knowledge base, enabling low-cost, versioned, and auditable content management",
          "RAG pipeline: Brute-force semantic retrieval using precomputed embeddings to dynamically select the most relevant content and ground responses, reducing hallucinations",
          "Search strategy: Cosine similarity scoring with top-K selection to balance relevance, simplicity, and performance for a controlled knowledge corpus",
          "Application logic: Classifies question type, routes queries, and structures outputs consistently",
          "Auditability: Logs requests, detected categories, and knowledge sources used for traceability and continuous improvement",
          "Feedback loop: Users validate responses or escalate to experts, enabling iterative refinement of prompts, content, and retrieval logic"
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
    subtitle: "Feature Project — AI Orchestration for Cross-Platform Operational Workflows",
    sections: [
      {
        heading: "Problem",
        content: [
          "Operational teams faced significant manual effort coordinating tasks across multiple platforms and systems. Workflows required context switching, manual data transfer, and repetitive decision-making, leading to inefficiencies, errors, and delayed execution."
        ]
      },
      {
        heading: "Context",
        content: [
          "The project was developed to explore how multi-agent AI systems could orchestrate complex workflows spanning multiple tools and platforms. The goal was to reduce operational overhead while maintaining control, auditability, and reliability in production environments."
        ]
      },
      {
        heading: "My Role",
        content: [
          "I acted as Product Lead for the MCP framework prototype:"
        ],
        list: [
          "Identified high-impact use cases for multi-agent automation",
          "Defined the architecture and interaction patterns between agents",
          "Designed the coordination logic and handoff protocols",
          "Partnered with engineering teams to implement the MCP-based solution",
          "Evaluated performance and identified opportunities for production deployment"
        ]
      },
      {
        heading: "Decisions & Trade-offs",
        content: [],
        list: [
          "CLI-first orchestration vs web UI: Chose Amazon Q CLI as the primary interface to maximize speed for power users and enable scriptable workflows, accepting a steeper learning curve and less accessibility for non-technical users",
          "MCP agents per system vs monolithic connector: Exposed each business system as an independent MCP server (Outlook, MotherDuck, Asana) to keep integrations modular, replaceable, and failure-isolated, accepting additional orchestration logic and per-connector configuration compared to a single monolithic connector",
          "Amazon Q integration: Leveraged existing AI infrastructure to accelerate development",
          "Controlled autonomy: Designed agents with explicit boundaries and human-in-the-loop checkpoints"
        ]
      },
      {
        heading: "Architecture (AI-focused)",
        content: [
          "The MCP framework enables multiple AI agents to coordinate across platforms:"
        ],
        list: [
          "Agent orchestration: Central coordinator manages task distribution and agent communication",
          "MCP protocol: Standardized context sharing and handoff between agents",
          "Amazon Q integration: Leverages Amazon Q for natural language understanding and task execution",
          "Platform connectors: Agents interface with multiple systems (databases, APIs, internal tools)",
          "Audit trail: All agent actions and decisions are logged for traceability",
          "Human oversight: Critical decisions escalate to human operators"
        ]
      },
      {
        heading: "Outcomes / Metrics",
        content: [],
        list: [
          "Successfully demonstrated cross-platform workflow automation",
          "Reduced manual operational effort in pilot use cases",
          "Validated MCP as a viable protocol for multi-agent coordination",
          "Identified production deployment opportunities and requirements"
        ]
      },
      {
        heading: "What I'd Improve",
        content: [],
        list: [
          "Expand agent capabilities to cover more workflow types",
          "Implement more sophisticated error handling and recovery",
          "Add predictive task routing based on historical patterns",
          "Develop better visualization of agent coordination and decision-making",
          "Strengthen security and access control for cross-platform operations"
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
        heading: "My Role",
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
        heading: "My Role",
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
    subtitle: "Feature Project — EU Workforce Task Allocation & Compliance Platform",
    sections: [
      {
        heading: "Problem",
        content: [
          "Warehouse operations faced inefficient manual task assignment processes that didn't account for associate skills, certifications, or optimal workload distribution. This led to safety incidents, productivity losses, and compliance risks, particularly when scaling across European sites with strict GDPR requirements."
        ]
      },
      {
        heading: "Context",
        content: [
          "The project involved adapting a workforce task allocation platform for European deployment across multiple warehouse sites. The solution needed to handle complex scheduling, training certifications, GDPR compliance, and local labor regulations while maintaining high performance and reliability."
        ]
      },
      {
        heading: "My Role",
        content: [
          "I acted as Product Owner for the European rollout:"
        ],
        list: [
          "Led the European adaptation and deployment strategy",
          "Ensured GDPR compliance and data privacy requirements",
          "Defined requirements for training certification integration",
          "Aligned operations, engineering, and compliance teams across multiple countries",
          "Managed stakeholder expectations and change management",
          "Tracked rollout metrics and business impact"
        ]
      },
      {
        heading: "Decisions & Trade-offs",
        content: [],
        list: [
          "EU regionalization over global product: Chose a separate EU deployment to meet GDPR and worker-council constraints, accepting additional operational overhead compared to a single global stack",
          "EU UI with US backend & storage: Kept the backend and database on the US side to avoid duplicating and synchronizing a full database in the EU, reducing cost and operational complexity",
          "GDPR compliance first: Prioritized data privacy and regulatory compliance from day one",
          "Distributed team coordination: Managed remote teams across multiple European sites",
          "Certification integration: Invested in training system integration to ensure safety and compliance",
          "Phased rollout: Deployed incrementally to validate performance and gather feedback",
          "Local customization: Balanced standardization with country-specific labor requirements"
        ]
      },
      {
        heading: "Architecture (Platform-focused)",
        content: [
          "The solution is a comprehensive workforce allocation platform with EU-specific adaptations:"
        ],
        list: [
          "Web frontend (EU): Provides a dedicated European UI with region-specific shift configuration, templates, and access control while reusing shared platform components",
          "API layer: Exposes domain-specific APIs for configuration, planning, roster generation, and publishing via API Gateway to separate concerns and scale independently",
          "Data ingestion pipelines: Ingests employee schedules, availability, and certification data from EU systems, with controlled manual uploads during early rollout phases",
          "Storage layer: Stores large shift plans and generated rosters in S3, while using DynamoDB for configuration data and frequently updated planning data",
          "Workflow orchestration: Coordinates roster generation and publishing through event-driven Lambda workflows to ensure reliability and traceability",
          "Downstream integration: Publishes generated rosters automatically to FastStart via S3, enabling a controlled transition from legacy upload tools",
          "Security and access control: Enforces role-based authorization aligned with EU privacy and data-access requirements"
        ]
      },
      {
        heading: "Outcomes / Metrics",
        content: [],
        list: [
          "4.8 minutes saved per associate per day",
          "Incident reduction of 5-17% across sites",
          "$4.1 million in total benefits delivered",
          "Improved efficiency and safety at scale",
          "Successful GDPR compliance across all European sites",
          "High user adoption and satisfaction"
        ]
      },
      {
        heading: "What I'd Improve",
        content: [],
        list: [
          "Add predictive task assignment based on historical performance",
          "Enhance mobile experience for on-the-floor task management",
          "Integrate real-time workload balancing across sites",
          "Develop more sophisticated skills gap analysis",
          "Expand automation to include break scheduling and rotation"
        ]
      }
    ]
  },
  "8": {
    title: "ACES & APP Tech Partnership Framework",
    subtitle: "Feature Project — Strategic Partnership Governance & Investment Strategy",
    sections: [
      {
        heading: "Problem",
        content: [
          "Operational projects lacked clear governance structures and alignment mechanisms with technology partners and support teams. This resulted in misaligned priorities, inefficient resource allocation, unclear accountability, and delayed project delivery."
        ]
      },
      {
        heading: "Context",
        content: [
          "The project involved establishing a strategic partnership framework to coordinate multiple operational projects, support teams, and technology partners. The solution needed to balance competing priorities, manage investments, and ensure continuous alignment across diverse stakeholders."
        ]
      },
      {
        heading: "My Role",
        content: [
          "I acted as Product Manager for Partnership Governance:"
        ],
        list: [
          "Led strategic partnership framework design and implementation",
          "Defined governance structures and decision-making processes",
          "Developed investment strategy and resource allocation frameworks",
          "Facilitated stakeholder alignment and executive reporting",
          "Established continuous feedback loops and improvement mechanisms",
          "Oversaw change management and cross-functional adoption",
          "Proactively identified and mitigated strategic partnership risks"
        ]
      },
      {
        heading: "Decisions & Trade-offs",
        content: [],
        list: [
          "Stakeholder alignment: Prioritized project roadmaps by leveraging data-driven insights and objective arguments",
          "Governance over autonomy: Established clear structures while preserving team flexibility",
          "Investment transparency: Prioritized clear investment tracking and ROI visibility",
          "Continuous feedback: Built feedback mechanisms to adapt quickly to changing needs",
          "Executive visibility: Balanced detailed reporting with executive-level summaries"
        ]
      },
      {
        heading: "Architecture (Governance-focused)",
        content: [
          "The solution is a comprehensive governance and partnership management framework:"
        ],
        list: [
          "Governance structures: Clear decision-making processes and accountability frameworks",
          "Investment strategy: Data-driven resource allocation and ROI tracking",
          "Stakeholder alignment: Regular alignment sessions and feedback mechanisms",
          "Executive reporting: Structured reporting with clear metrics and outcomes",
          "Change management: Systematic approach to adoption and implementation",
          "Risk management: Proactive identification and mitigation of partnership risks",
          "Continuous improvement: Feedback loops and iterative framework enhancement"
        ]
      },
      {
        heading: "Outcomes / Metrics",
        content: [],
        list: [
          "Investment decisions arbitrated and roadmaps defined and validated by all stakeholders",
          "Programs coordinated across operational, support, and technology teams",
          "Products delivered and successfully implemented in production",
          "Improved delivery speed through clearer governance and ownership",
          "Stronger relationships with technology partners",
          "Higher executive confidence in project outcomes"
        ]
      },
      {
        heading: "What I'd Improve",
        content: [],
        list: [
          "Automate more of the governance reporting and tracking",
          "Develop predictive analytics for investment ROI",
          "Enhance cross-project dependency management",
          "Expand partnership framework to additional teams"
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
        heading: "My Role",
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
