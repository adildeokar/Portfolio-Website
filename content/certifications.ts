import type { Award, CertGroup } from "./types";

/** Top-tier awards & professional titles (badge/trophy styled). */
export const awards: Award[] = [
  { title: "Smart India Hackathon (SIH 2024)", org: "Winner", year: "2024" },
  { title: "IEEE INNOVATEX 2026", org: "Winner", year: "2026" },
  { title: "Innovation 2k25", org: "Winner · College of Engineering Phaltan", year: "2025" },
  { title: "We Pitch", org: "2nd Runner-Up · MIT ADTU Pune" },
];

/** Highlighted "headline" professional certifications. */
export const featuredCerts: string[] = [
  "IBM Certified: AI Product Manager",
  "Google Cloud: Generative AI Leader",
  "AWS Certified Data Engineer (Exam Prep DEA-C01)",
];

/** Full certification library grouped by issuer. */
export const certGroups: CertGroup[] = [
  {
    issuer: "IBM",
    count: 10,
    certs: [
      "Product Management: Foundations & Stakeholder Collaboration",
      "Product Management: Initial Product Strategy & Plan",
      "Product Management: An Introduction",
      "Product Management: Building AI-Powered Products",
      "Supercharge Your PM Career with Gen AI",
      "Generative AI: Foundation Models & Platforms",
      "Generative AI: Introduction & Applications",
      "Generative AI: Prompt Engineering Basics",
      "Introduction to Artificial Intelligence",
      "Python for Data Science, AI & Development",
    ],
  },
  {
    issuer: "AWS",
    count: 5,
    certs: [
      "Application Integration & Networking",
      "Data Analytics",
      "Databases",
      "Security, Governance & Compliance",
      "Storage",
    ],
  },
  {
    issuer: "Google Cloud",
    count: 4,
    certs: [
      "Gen AI: Unlock Foundational Concepts",
      "Gen AI: Navigate the Landscape",
      "Gen AI: Beyond the Chatbot",
      "Gen AI Apps: Transform Your Work",
    ],
  },
  {
    issuer: "Other",
    count: 1,
    certs: ["University of Pennsylvania: Computational Thinking for Problem Solving"],
  },
];
