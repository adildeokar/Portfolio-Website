import type { SiteConfig } from "./types";

/**
 * Core personal info + social links.
 * Update phone/email/links here and they propagate everywhere.
 */
export const site: SiteConfig = {
  name: "Adil Deokar",
  shortName: "Adil",
  roles: ["AI Developer", "Software Developer", "AI Product Manager"],
  tagline:
    "Builder at heart, systems nerd by habit — I ship AI that actually works in production.",
  location: "Pune, India",
  email: "deokaradil@gmail.com",
  phone: "+91 7028690073",
  website: "adildeokar.com",
  // TODO: the real resume PDF lives here — drop an updated file at the same path to swap it.
  resumePath: "/resume/Adil_Deokar_Resume.pdf",
  // Square image. Replace /public/images/profile.jpg with a higher-res square photo.
  profileImage: "/images/profile.jpg",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/adildeokar",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://in.linkedin.com/in/adil-deokar-62b561283",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:deokaradil@gmail.com",
      icon: "mail",
    },
    {
      label: "Phone",
      href: "tel:+917028690073",
      icon: "phone",
    },
  ],
};

export const bio = `Builder at heart, systems nerd by habit. A 3x Hackathon Winner building AI that actually ships — Lead Developer at DevKnight, and the mind behind Krew, a Multi-Agent AI Organization that won a national hackathon out of 700+ teams. I maintain open-source, production-ready ML utilities on GitHub with clean, well-documented code. Comfortable across Java, Python, C++, and C#, with end-to-end builds on AWS and Azure, an IBM AI Product Manager foundation, and a bias for measurable impact. Community-driven engineering isn't a buzzword here — it's the job.`;

export const bioLong = `I live where clean code meets clever optimization. As tech lead at Hayy Media I designed and launched HayyAI as a live AI SaaS — owning architecture, model integration, and delivery end-to-end so teams could go from idea to insight in minutes, not weeks. Shipping features behind CI/CD, observability, and user-first UX taught me ruthless prioritization and production discipline. On the side, I'm building Ginx Clothing into a streetwear movement across India.`;
