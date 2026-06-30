/** Navigation links. In-page anchors use `#`, routes use `/`. */
export interface NavLink {
  label: string;
  href: string;
  /** true for same-page section anchors (home only) */
  section?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about", section: true },
  { label: "Skills", href: "#skills", section: true },
  { label: "Experience", href: "#experience", section: true },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "#certifications", section: true },
  { label: "Beyond Code", href: "/about" },
];
