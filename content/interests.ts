import type { Interest, Stat } from "./types";

/** Personal interests for the /about page (icon names map to lucide-react). */
export const interests: Interest[] = [
  {
    name: "Basketball",
    icon: "dribbble",
    blurb: "National-level player (Maharashtra) · 3× Best Player · multi-sport captain.",
  },
  {
    name: "Chess",
    icon: "crown",
    blurb: "Strategy and calculation — the same muscles I use for system design.",
  },
  {
    name: "Event Management",
    icon: "calendar-check",
    blurb: "Management Lead at Ideate; organizing chaos into shipped experiences.",
  },
  {
    name: "Offroading Trails",
    icon: "mountain",
    blurb: "Weekend escapes where the road ends and the fun begins.",
  },
  {
    name: "Mountain Biking",
    icon: "bike",
    blurb: "Trails, climbs, and a healthy respect for momentum.",
  },
  {
    name: "Rifle Shooting",
    icon: "target",
    blurb: "State-level shooter (Pune) — precision under pressure.",
  },
];

/** Personal / sporting achievements (human counterpoint to the tech wins). */
export const personalAchievements: string[] = [
  "National Level Basketball — Maharashtra",
  "State Rifle Shooter — Pune",
  "3× Best Basketball Player Award",
  "School Team Captain — Basketball, Badminton, Volleyball & Cricket",
  "House Captain — Bishop's School",
];

/** Animated quick-stats strip on the home page. */
export const stats: Stat[] = [
  { value: 3, suffix: "x", label: "Hackathon Winner" },
  { value: 10, suffix: "+", label: "IBM Certifications" },
  { value: 5, suffix: "+", label: "AWS Certifications" },
  { value: 700, suffix: "+", label: "Teams Beaten @ Krew" },
];
