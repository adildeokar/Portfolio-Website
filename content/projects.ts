import type { Project, ProjectCategory } from "./types";

/**
 * ── HOW TO ADD A PROJECT ──────────────────────────────────────────────
 * 1. Copy any object below and add it to this array.
 * 2. Give it a unique `slug`.
 * 3. Drop images into  /public/images/projects/<slug>/  and reference them
 *    in `images` (a styled placeholder shows automatically until they exist).
 * That's it. The Projects page, filters, and detail view update themselves.
 * ──────────────────────────────────────────────────────────────────────
 */

export const projects: Project[] = [
  {
    slug: "krew",
    title: "Krew: Multi-Agent AI Organization",
    blurb:
      "A manager-led team of specialized AI agents that collaborate, critique, and hand off tasks.",
    highlight: "National Hackathon Winner · 700+ teams",
    bullets: [
      "Built Krew, a manager-led team of specialized AI agents that collaborate, critique, and hand off tasks to deliver higher-quality outputs than single-agent systems.",
      "Engineered enforced collaboration with defined roles, goals, and backstories, plus tracing and guardrails to reduce hallucinations and keep workflows reliable.",
      "Delivered a production-ready orchestration layer with parallel/sequential pipelines, tool integrations, and observability for repeatable, end-to-end execution.",
    ],
    tech: ["Python", "Multi-Agent Orchestration", "LLMs", "Guardrails", "Tracing"],
    categories: ["AI Agents", "Hackathon"],
    timeframe: "2025",
    images: [
      { src: "/images/projects/krew/cover.png", alt: "Krew multi-agent orchestration dashboard" },
      { src: "/images/projects/krew/screenshot-1.png", alt: "Krew agent collaboration graph" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/adildeokar", type: "github" }],
    featured: true,
  },
  {
    slug: "clause-ai",
    title: "Clause AI: Legal Multi-Agentic System",
    blurb:
      "AI-driven contract analysis that detects risk, bias, and ambiguity to support fair negotiations.",
    bullets: [
      "Built an AI-driven contract analysis platform that detects risk, bias, and ambiguity, surfacing actionable insights to support fair, data-backed negotiations.",
      "Designed a contextual intelligence layer that adapts drafting and reviews to a company's voice and risk profile, ensuring consistent, on-brand legal outputs at scale.",
      "Implemented simulation and benchmarking to stress-test clauses against industry patterns, improving contract resilience and decision quality.",
    ],
    tech: ["Python", "Agentic AI", "RAG", "NLP", "Benchmarking"],
    categories: ["AI Agents"],
    timeframe: "2025",
    images: [
      { src: "/images/projects/clause-ai/cover.png", alt: "Clause AI contract risk dashboard" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/adildeokar", type: "github" }],
    featured: true,
  },
  {
    slug: "rake-optima",
    title: "SIH 2025: Rake Optima",
    blurb:
      "Cloud-native rake-planning optimization engine with disruption-aware re-optimization.",
    metric: "90–95% wagon utilization · ~30% logistics cost reduction",
    bullets: [
      "Built a cloud-native optimization engine using demand forecasting, material-to-rake matching, and multi-objective optimization to generate end-to-end rake plans in minutes with disruption-aware re-optimization.",
      "Achieved 90–95% wagon utilization with ~30% logistics cost reduction by unifying route planning, loading sequencing, and dispatch scheduling into a real-time decision support workflow.",
    ],
    tech: ["Python", "Optimization", "Forecasting", "Cloud-Native", "OR-Tools"],
    categories: ["Data & ML", "Hackathon"],
    timeframe: "2025",
    images: [
      { src: "/images/projects/rake-optima/cover.png", alt: "Rake Optima planning dashboard" },
    ],
    links: [
      { label: "Presentation (PDF)", href: "/projects/Rake-Optima-Presentation-SIH-2025.pdf", type: "pdf" },
      { label: "GitHub", href: "https://github.com/adildeokar", type: "github" },
    ],
    featured: true,
  },
  {
    slug: "ai-crowd-flow",
    title: "AI Crowd Flow Analytical System (Jetson Orin)",
    blurb:
      "Edge AI for real-time crowd counting, flow analytics, and congestion alerts across camera streams.",
    bullets: [
      "Built an edge AI system on NVIDIA Jetson Orin for real-time crowd counting, flow analytics, and congestion alerts across multi-camera streams with low-latency, on-device inference.",
      "Delivered privacy-preserving, scalable deployments with density heatmaps, occupancy thresholds, and operational dashboards to optimize staffing, routing, and safety in high-traffic zones.",
    ],
    tech: ["Jetson Orin", "Computer Vision", "Edge AI", "CUDA", "Real-Time"],
    categories: ["Edge AI"],
    timeframe: "2024",
    images: [
      { src: "/images/projects/ai-crowd-flow/cover.png", alt: "Crowd density heatmap dashboard" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/adildeokar", type: "github" }],
    featured: true,
  },
  {
    slug: "image-upscaling-ncnn",
    title: "Image Upscaling NCNN (Jetson Orin)",
    blurb:
      "Vulkan-accelerated super-resolution at the edge with INT8/FP16 optimized pipelines.",
    bullets: [
      "Deployed NCNN-based super-resolution models on Jetson Orin for real-time image upscaling using Vulkan-accelerated inference, achieving low-latency enhancement at the edge.",
      "Optimized pipelines with INT8/FP16 paths and tiling/batch strategies to preserve detail while reducing memory bandwidth, enabling smooth upscaling for camera streams and offline batches.",
    ],
    tech: ["NCNN", "Vulkan", "Jetson Orin", "Super-Resolution", "INT8/FP16"],
    categories: ["Edge AI"],
    timeframe: "2024",
    images: [
      { src: "/images/projects/image-upscaling-ncnn/cover.png", alt: "Image upscaling before/after" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/adildeokar", type: "github" }],
  },
  {
    slug: "fedmed",
    title: "FedMed: Federated Learning for Healthcare Time Series",
    blurb:
      "Distributed ML platform with centralized, distributed, and federated training workflows.",
    bullets: [
      "Built an end-to-end distributed machine learning platform with centralized, distributed, and federated training workflows in Python and React.",
      "Developed real-time WebSocket monitoring to visualize training progress, model metrics, client status, and system topology through interactive dashboards.",
      "Implemented evaluation analytics (confusion matrix, throughput/latency trends, and model comparison views) to support faster experimentation.",
    ],
    tech: ["Python", "React", "Federated Learning", "WebSockets", "Time Series"],
    categories: ["Data & ML", "Full-Stack"],
    timeframe: "2024",
    images: [
      { src: "/images/projects/fedmed/cover.png", alt: "FedMed federated training dashboard" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/adildeokar", type: "github" }],
  },
  {
    slug: "anti-proxy-attendance",
    title: "Anti-Proxy Attendance System",
    blurb:
      "Open-source Raspberry Pi biometric attendance with R307 fingerprint verification.",
    highlight: "SIH 2024 Winner",
    bullets: [
      "Built an open-source, Raspberry Pi–based biometric attendance system with R307 fingerprint verification to eliminate proxy attendance and ensure auditable, CSV/Excel-ready records.",
      "Designed faculty-controlled sessions with authenticated start/stop flows and PIN-secured closure, optimizing classroom operations for reliability and speed.",
      "Standardized UART-based Python integration using Adafruit libraries for reproducibility on commodity hardware, enabling easy forks and campus-scale deployments.",
    ],
    tech: ["Raspberry Pi", "Python", "Biometrics", "UART", "Adafruit"],
    categories: ["Hackathon", "Full-Stack"],
    timeframe: "2024",
    images: [
      { src: "/images/projects/anti-proxy-attendance/cover.png", alt: "Biometric attendance hardware" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/adildeokar", type: "github" }],
  },
  {
    slug: "ride-sharing-intelligence",
    title: "Ride-Sharing Intelligence System",
    blurb:
      "Real-time ride-sharing analytics dashboard with live geo-mapped trips and surge zones.",
    bullets: [
      "Built a real-time ride-sharing analytics dashboard with Streamlit, MongoDB, and Plotly to monitor rides, drivers, revenue, surge zones, and live geo-mapped trips.",
      "Implemented simulation, demand–supply insights, and driver performance views with one-click database seeding for instant, demo-ready exploration.",
    ],
    tech: ["Streamlit", "MongoDB", "Plotly", "Analytics", "Geo-Mapping"],
    categories: ["Data & ML", "Full-Stack"],
    timeframe: "2024",
    images: [
      { src: "/images/projects/ride-sharing-intelligence/cover.png", alt: "Ride-sharing analytics dashboard" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/adildeokar", type: "github" }],
  },
];

export const projectCategories: ProjectCategory[] = [
  "AI Agents",
  "Edge AI",
  "Data & ML",
  "Full-Stack",
  "Hackathon",
];

export const featuredProjects = projects.filter((p) => p.featured);
