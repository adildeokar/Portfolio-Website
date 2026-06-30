import type { ExperienceItem } from "./types";

/** Reverse-chronological internships / roles. */
export const experience: ExperienceItem[] = [
  {
    role: "Software Development & AI Intern",
    company: "Monkstack Solutions LLP",
    period: "Feb 2026 - Jun 2026",
    summary:
      "Full-stack product delivery with a Three.js experience and end-to-end Azure deployment.",
    bullets: [
      "Built full-stack Next.js/React applications and a Three.js app for an onboarded client.",
      "Integrated an Azure Postgres backend with the application layer.",
      "Orchestrated full deployments on Azure App Service and Static Web Apps with CI/CD via GitHub Actions and Docker.",
    ],
    tags: ["Next.js", "Three.js", "Azure", "Docker", "CI/CD"],
  },
  {
    role: "Software Developer",
    company: "DKC DevKnight Technologies Pvt Ltd",
    period: "Oct 2025 - Feb 2026",
    summary:
      "Architected scalable AI systems and intelligent automation frameworks.",
    bullets: [
      "Architected scalable AI systems and intelligent automation frameworks, ensuring seamless design-to-tech integration.",
      "Led development of AI agents, backend infrastructure, and performance optimization.",
      "Turned complex logic into fast, reliable, and elegant code.",
    ],
    tags: ["AI Agents", "Backend", "Automation", "Performance"],
  },
  {
    role: "Lead Tech & AI",
    company: "Hayy Media Pvt Ltd",
    period: "Oct 2024 - Oct 2025",
    summary:
      "Owned HayyAI end-to-end as a live SaaS product, from architecture to production rollout.",
    bullets: [
      "Led end-to-end development and launch of HayyAI as a live SaaS product, owning architecture, model integration, and production rollout.",
      "Built CI/CD pipelines with logging, metrics, and error monitoring enabling weekly releases without regressions.",
      "Designed user-first UX flows so non-technical teams could go from idea to AI-powered output in minutes.",
      "Coordinated cross-functional delivery across content, design, and ops.",
    ],
    tags: ["SaaS", "Architecture", "MLOps", "Observability", "UX"],
  },
  {
    role: "SDE Intern",
    company: "SoftTech Engineers Ltd.",
    period: "Jun 2024 - Aug 2024",
    summary:
      "Enhanced live software products with high-value, time-saving features.",
    bullets: [
      "Enhanced live, active software products with new functionality.",
      "Added file export features to existing workflows.",
      "Built a password-protected PDF viewer that opened protected files directly in-app, saving client time.",
    ],
    tags: ["C#", "Feature Dev", "PDF", "Enterprise"],
  },
];
