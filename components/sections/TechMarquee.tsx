"use client";

import { skillGroups } from "@/content/skills";
import { Marquee } from "@/components/ui/Marquee";

const rowA = skillGroups.flatMap((g) => g.skills).filter((_, i) => i % 2 === 0);
const rowB = skillGroups.flatMap((g) => g.skills).filter((_, i) => i % 2 === 1);

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg">
      <span className="h-1.5 w-1.5 rounded-full bg-accent-gradient" />
      {label}
    </span>
  );
}

/** Two counter-scrolling marquees of the tech stack - a lively divider. */
export function TechMarquee() {
  return (
    <section aria-label="Technology stack" className="relative py-10">
      <div className="flex flex-col gap-4">
        <Marquee
          items={rowA.map((s) => (
            <Chip key={s} label={s} />
          ))}
          speed={38}
        />
        <Marquee
          items={rowB.map((s) => (
            <Chip key={s} label={s} />
          ))}
          reverse
          speed={44}
        />
      </div>
    </section>
  );
}
