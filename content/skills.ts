import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    category: "AI / ML",
    key: "ai_ml",
    skills: [
      "Agentic AI Development",
      "Generative AI",
      "LLM & Prompt Engineering",
      "MLOps",
      "Deep Learning",
      "Edge Computing & Optimization",
    ],
  },
  {
    category: "Languages",
    key: "languages",
    skills: ["Python", "C++", "Java", "C#", "JavaScript"],
  },
  {
    category: "Cloud & DevOps",
    key: "cloud_devops",
    skills: [
      "AWS",
      "Azure (App Service, Static Web Apps, Postgres)",
      "CI/CD — GitHub Actions",
      "Docker",
      "Post-Production Deployment",
    ],
  },
  {
    category: "Frontend & Design",
    key: "frontend_design",
    skills: [
      "React / Next.js",
      "Three.js",
      "UI/UX",
      "Framer",
      "Adobe Apps",
      "WordPress",
    ],
  },
];
