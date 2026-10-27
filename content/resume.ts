/**
 * Every fact on the site lives here, taken from Resumes/Adil_Deokar_Resume_OCT.pdf.
 * Update this file when the résumé changes; the sections read from it.
 */

export type Focus = "ai" | "web" | "edge" | "data";

export const focusLabels: Record<Focus, string> = {
  ai: "AI & agents",
  web: "Full-stack & cloud",
  edge: "Edge & hardware",
  data: "ML & optimisation",
};

export const person = {
  name: "Adil Deokar",
  line: "Software and AI engineer building agents, edge AI and cloud systems.",
  now: "Now: Software Development Intern, AI & Automation, Whirlpool Corporation",
  place: "Pune, India",
  study: "B.Tech, MIT ADT University, 2027",
  email: "deokaradil@gmail.com",
  phone: "+91 70286 90073",
  phoneHref: "tel:+917028690073",
  linkedin: "https://www.linkedin.com/in/adil-deokar-62b561283/",
  github: "https://github.com/adildeokar",
  resume: "/resume/Adil_Deokar_Resume.pdf",
  portrait: "/images/profile.jpg",
};

export interface Project {
  slug: string;
  name: string;
  what: string;
  proof: string;
  focus: Focus[];
  image: { src: string; w: number; h: number; alt: string; caption: string };
  points: string[];
  repo?: string;
}

export const projects: Project[] = [
  {
    slug: "krew",
    name: "Krew",
    what: "A multi-agent AI organisation",
    proof: "National hackathon winner, 700+ teams",
    focus: ["ai"],
    image: {
      src: "/images/world/krew-rowers.jpg",
      w: 1280,
      h: 526,
      alt: "Thirty-five rowers pulling one long racing boat in time on a brown river",
      caption: "A racing crew on the Mekong: many hands, one stroke.",
    },
    points: [
      "Architected a manager-led multi-agent system in which specialised AI agents collaborate, critique and hand off tasks, producing higher-quality output than single-agent baselines.",
      "Enforced structured collaboration through defined agent roles, goals and backstories, with end-to-end tracing and guardrails that reduce hallucinations and keep workflows reliable.",
      "Delivered a production-ready orchestration layer with parallel and sequential pipelines, tool integrations and observability for repeatable, end-to-end runs.",
    ],
    repo: "https://github.com/adildeokar/KREW-Autonomous-AI-Agent-Organisation",
  },
  {
    slug: "clause-ai",
    name: "Clause AI",
    what: "A legal multi-agent system",
    proof: "Contract risk, bias and ambiguity",
    focus: ["ai"],
    image: {
      src: "/images/world/clause-papyrus.jpg",
      w: 1280,
      h: 1792,
      alt: "An ancient Egyptian marriage contract written in dark ink on papyrus",
      caption: "A contract on papyrus, around 380 BC. The clauses have always been the hard part.",
    },
    points: [
      "Built an AI-driven contract analysis platform on a multi-agent architecture that detects risk, bias and ambiguity and surfaces actionable insight for data-backed negotiation.",
      "Designed a contextual intelligence layer that adapts drafting and review to each company’s voice and risk profile, keeping legal output consistent at scale.",
      "Implemented simulation and benchmarking modules that stress-test clauses against industry patterns, strengthening contract resilience and decision quality.",
    ],
    repo: "https://github.com/adildeokar/Clause.ai",
  },
  {
    slug: "rake-optima",
    name: "Rake Optima",
    what: "Freight rake planning, Smart India Hackathon 2025",
    proof: "90–95% wagon use, ~30% lower logistics cost",
    focus: ["data", "web"],
    image: {
      src: "/images/world/rake-wagons.jpg",
      w: 1280,
      h: 591,
      alt: "A long rake of blue Indian Railways covered freight wagons on a track under overhead wires",
      caption: "An Indian Railways BCNHL rake: the wagons the planner fills.",
    },
    points: [
      "Engineered a cloud-native optimisation engine combining demand forecasting, material-to-rake matching and multi-objective optimisation to produce end-to-end rake plans in minutes, with disruption-aware re-optimisation.",
      "Reached 90–95% wagon utilisation and about 30% lower logistics cost by joining route planning, loading sequence and dispatch scheduling into one real-time decision-support workflow.",
    ],
  },
  {
    slug: "crowd-flow",
    name: "Crowd Flow",
    what: "Edge AI crowd analytics on NVIDIA Jetson Orin",
    proof: "Real-time, on-device, multi-camera",
    focus: ["edge", "ai"],
    image: {
      src: "/images/world/crowd-jetson.jpg",
      w: 1280,
      h: 853,
      alt: "An NVIDIA Jetson Orin NX module seated on a green carrier board",
      caption: "A Jetson Orin module, the class of board the system runs on.",
    },
    points: [
      "Built an edge AI system on NVIDIA Jetson Orin for real-time crowd counting, flow analytics and congestion alerts across multi-camera streams, tuned for low-latency inference on the device.",
      "Delivered privacy-preserving, scalable deployments with density heatmaps, occupancy thresholds and operational dashboards that guide staffing, routing and safety response in high-traffic zones.",
    ],
  },
  {
    slug: "fedmed",
    name: "FedMed",
    what: "Federated learning for healthcare time series",
    proof: "Centralised, distributed and federated training",
    focus: ["data", "web", "ai"],
    image: {
      src: "/images/world/fedmed-ecg.jpg",
      w: 1280,
      h: 393,
      alt: "An electrocardiogram trace of a healthy heart on pink grid paper",
      caption: "An ECG: the kind of time series FedMed trains on without moving it.",
    },
    points: [
      "Built an end-to-end distributed ML platform for centralised, distributed and federated training on healthcare time-series data, with a Python backend and a React frontend.",
      "Developed real-time WebSocket monitoring of training progress, model metrics, client status and system topology across nodes in interactive dashboards.",
      "Implemented evaluation analytics (confusion matrices, throughput and latency trends, model comparison) for faster experiments and data-driven model selection.",
    ],
    repo: "https://github.com/adildeokar/FedMed-Federated-Learning-for-Healthcare-Time-Series-Data",
  },
  {
    slug: "anti-proxy",
    name: "Anti-Proxy",
    what: "Biometric attendance on a Raspberry Pi",
    proof: "Smart India Hackathon 2024 winner",
    focus: ["edge"],
    image: {
      src: "/images/world/attendance-pi.jpg",
      w: 1280,
      h: 858,
      alt: "The top of a green Raspberry Pi B+ circuit board with its ports and chips",
      caption: "A Raspberry Pi B+, the commodity board the system is built for.",
    },
    points: [
      "Built an open-source Raspberry Pi attendance system with R307 fingerprint verification that ends proxy attendance and produces auditable, CSV- and Excel-ready records.",
      "Designed faculty-controlled sessions with authenticated start and stop and PIN-secured closing, for reliable, tamper-resistant classes.",
      "Standardised UART-based Python integration on Adafruit libraries so it runs the same on commodity hardware and can be forked for campus-wide use.",
    ],
    repo: "https://github.com/adildeokar/Anti-Proxy-Attendance-System",
  },
];

export interface Role {
  company: string;
  title: string;
  dates: string;
  focus: Focus[];
  points: string[];
}

export const roles: Role[] = [
  {
    company: "Whirlpool Corporation",
    title: "Software Development Intern, AI & Automation",
    dates: "Aug 2026–Present",
    focus: ["ai", "web"],
    points: [
      "Designing AI-driven solutions that automate internal engineering workflows.",
      "Building features for a cross-platform iOS and Android app with the core team, in an agile workflow.",
      "Turning the manual test suite into an automated end-to-end regression framework, cutting release cycle time.",
    ],
  },
  {
    company: "Monkstack Solutions",
    title: "Software Development and AI Intern",
    dates: "Feb–Jul 2026",
    focus: ["web"],
    points: [
      "Shipped production Next.js and React full-stack apps and an interactive Three.js 3D app for a client.",
      "Integrated an Azure PostgreSQL backend, designing the schemas and APIs behind client-facing features.",
      "Owned deployments on Azure App Service and Static Web Apps, with Docker and GitHub Actions CI/CD.",
    ],
  },
  {
    company: "DKC DevKnight Technologies",
    title: "Founder and Lead Developer",
    dates: "Oct 2025–Feb 2026",
    focus: ["ai"],
    points: [
      "Architected scalable AI systems and automation frameworks, taking broadly defined problems to shipped products.",
      "Led development of AI agents and backend infrastructure, tuning for fast, reliable code.",
    ],
  },
  {
    company: "Hayy Media",
    title: "Lead, Tech and AI",
    dates: "Oct 2024–Oct 2025",
    focus: ["ai", "web"],
    points: [
      "Led the build and launch of HayyAI, a live AI SaaS product, owning architecture, model integration and production rollout.",
      "Built CI/CD pipelines with logging, metrics and error monitoring, enabling weekly releases without regressions.",
      "Designed workflows that take non-technical teams from idea to AI-generated output in minutes; coordinated delivery across content, design and ops.",
    ],
  },
  {
    company: "SoftTech Engineers",
    title: "SDE Intern",
    dates: "Jun–Aug 2024",
    focus: ["web"],
    points: [
      "Shipped enhancements to live, customer-facing software, including new file export.",
      "Built a secure, password-protected PDF viewer that cut manual document handling for client users.",
    ],
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "C++", "Python", "C#", "JavaScript", "SQL"] },
  {
    group: "AI and ML",
    items: [
      "Multi-agent systems",
      "Generative AI",
      "LLMs and prompt engineering",
      "Federated learning",
      "Deep learning",
      "MLOps",
      "Edge AI",
    ],
  },
  {
    group: "Cloud and DevOps",
    items: [
      "AWS",
      "Azure App Service, Static Web Apps, PostgreSQL",
      "Docker",
      "GitHub Actions CI/CD",
      "Monitoring",
    ],
  },
  {
    group: "Web and design",
    items: ["React", "Next.js", "Three.js", "REST APIs", "WebSockets", "UI/UX", "Framer", "Adobe Suite", "WordPress"],
  },
  {
    group: "Foundations",
    items: [
      "Data structures",
      "Algorithms",
      "OOP and OOD",
      "Operating systems",
      "DBMS",
      "Complexity analysis",
    ],
  },
];

export interface WinRow {
  title: string;
  body: string;
  result: string;
}

export const wins: { group: string; rows: WinRow[] }[] = [
  {
    group: "Hackathons",
    rows: [
      { title: "IEEE INNOVATEX 2026", body: "IEEE", result: "Winner" },
      { title: "Innovation2k25", body: "College of Engineering, Phaltan", result: "Winner" },
      { title: "Smart India Hackathon 2024", body: "National, for Anti-Proxy", result: "Winner" },
      { title: "We Pitch", body: "MIT ADT University, Pune", result: "2nd runner-up" },
    ],
  },
  {
    group: "Credentials",
    rows: [
      { title: "AI Product Manager", body: "IBM", result: "Certified" },
      { title: "Generative AI Leader", body: "Google Cloud", result: "Certified" },
      { title: "Data Engineer, Associate (DEA-C01)", body: "AWS", result: "Preparing" },
      { title: "20 course certificates", body: "AWS, IBM, Google Cloud, Penn", result: "Completed" },
    ],
  },
  {
    group: "Education",
    rows: [
      { title: "B.Tech, expected 2027", body: "MIT ADT University, Pune", result: "CGPA 8.75 / 10" },
      { title: "Higher secondary, 2023", body: "Rajiv Gandhi Jr College", result: "71.33%, SAT 94th pct" },
      { title: "School, 2021", body: "Bishop’s School, Pune", result: "92%, SAT 1350" },
    ],
  },
  {
    group: "On campus",
    rows: [
      { title: "Ideate", body: "MIT ADT University", result: "Management lead" },
      { title: "TEDx MITADT", body: "MIT ADT University", result: "Organising team" },
      { title: "CodeChef chapter", body: "MIT ADT University", result: "Tech team" },
    ],
  },
];

export const courses: { issuer: string; items: string[] }[] = [
  {
    issuer: "AWS",
    items: [
      "Application Integration and Networking",
      "Data Analytics",
      "Databases",
      "Security, Governance and Compliance",
      "Storage",
    ],
  },
  {
    issuer: "IBM",
    items: [
      "Product Management: Foundations and Stakeholder Collaboration",
      "Initial Product Strategy and Plan",
      "Product Management: An Introduction",
      "Building AI-Powered Products",
      "Supercharge Your PM Career with Gen AI", // taste-skill-ignore: official course title
      "Generative AI: Foundation Models and Platforms",
      "Generative AI: Introduction and Applications",
      "Generative AI: Prompt Engineering Basics",
      "Introduction to Artificial Intelligence",
      "Python for Data Science, AI and Development",
    ],
  },
  {
    issuer: "Google Cloud",
    items: [
      "Gen AI: Unlock Foundational Concepts", // taste-skill-ignore: official course title
      "Gen AI: Navigate the Landscape",
      "Gen AI: Beyond the Chatbot",
      "Gen AI Apps: Transform Your Work",
    ],
  },
  { issuer: "University of Pennsylvania", items: ["Computational Thinking for Problem Solving"] },
];

export interface Pursuit {
  name: string;
  level: string;
  line: string;
  image: { src: string; w: number; h: number; alt: string };
}

export const pursuits: Pursuit[] = [
  {
    name: "Basketball",
    level: "National level, Maharashtra",
    line: "Three times my school’s best player, and captain of four school teams: basketball, badminton, volleyball and cricket.",
    image: {
      src: "/images/world/basketball-court.jpg",
      w: 1280,
      h: 960,
      alt: "A red outdoor basketball court seen from above, among trees on a college campus",
    },
  },
  {
    name: "Rifle shooting",
    level: "State level, Pune",
    line: "Precision on a held breath. I bring the same patience to a model that has to be right on the device.",
    image: {
      src: "/images/world/rifle-target.jpg",
      w: 960,
      h: 951,
      alt: "A paper target with a tight group of ten rifle shots near its centre",
    },
  },
  {
    name: "Trails",
    level: "Offroading and mountain biking",
    line: "My weekends go to the Sahyadri trails around Pune, where the road gives out and the climb begins.",
    image: {
      src: "/images/world/trails-sinhagad.jpg",
      w: 1920,
      h: 1081,
      alt: "Green Sahyadri hills and a valley seen from Sinhagad fort under a cloudy sky",
    },
  },
  {
    name: "Chess",
    level: "District level",
    line: "Calculation, then commitment. It is also why I like running events: plan the whole board first.",
    image: {
      src: "/images/world/chess.jpg",
      w: 1280,
      h: 840,
      alt: "A wooden Staunton chess set laid out on its board at the opening position",
    },
  },
];
