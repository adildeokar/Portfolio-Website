/**
 * Shared TypeScript types for all portfolio content.
 * Every data file under /content imports from here so the shape of the data
 * is enforced and editing content stays safe & predictable.
 */

export interface SocialLink {
  label: string;
  href: string;
  /** lucide-react icon name resolved in the component layer */
  icon: "github" | "linkedin" | "mail" | "phone" | "globe";
}

export interface SiteConfig {
  name: string;
  shortName: string;
  roles: string[];
  tagline: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  /** path (under /public) to the downloadable resume PDF */
  resumePath: string;
  /** square profile image under /public */
  profileImage: string;
  socials: SocialLink[];
}

export interface SkillGroup {
  category: string;
  /** mono key shown as a label, e.g. "ai_ml" */
  key: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  /** short value-prop summary */
  summary: string;
  bullets: string[];
  /** short tech/keyword tags */
  tags: string[];
}

export type ProjectCategory =
  | "AI Agents"
  | "Edge AI"
  | "Full-Stack"
  | "Hackathon"
  | "Data & ML";

export interface ProjectLink {
  label: string;
  href: string;
  type: "github" | "demo" | "pdf" | "external";
}

export interface Project {
  slug: string;
  title: string;
  /** one-line description for cards */
  blurb: string;
  /** detailed bullet breakdown */
  bullets: string[];
  tech: string[];
  categories: ProjectCategory[];
  /** highlight badge text, e.g. "National Hackathon Winner" */
  highlight?: string;
  /** key metric callout, e.g. "90–95% wagon utilization" */
  metric?: string;
  timeframe?: string;
  /** image paths under /public/images/projects/<slug>/ — used with placeholder fallback */
  images: { src: string; alt: string }[];
  links: ProjectLink[];
  featured?: boolean;
}

export interface Award {
  title: string;
  org?: string;
  year?: string;
}

export interface CertGroup {
  issuer: "IBM" | "AWS" | "Google Cloud" | "Other";
  count: number;
  certs: string[];
}

export interface EducationItem {
  institution: string;
  qualification: string;
  period: string;
  highlights: string[];
}

export interface Interest {
  name: string;
  /** lucide-react icon name */
  icon: string;
  blurb: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}
