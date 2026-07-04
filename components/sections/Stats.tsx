"use client";

import { Trophy, BadgeCheck, Cloud, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { stats } from "@/content/interests";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const icons: LucideIcon[] = [Trophy, BadgeCheck, Cloud, Users];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-bg-soft py-14">
      {/* aurora hairline sweep */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-2/60 to-transparent" />

      <div className="container-edge">
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = icons[i] ?? Trophy;
            return (
              <RevealItem
                key={s.label}
                className="group relative flex flex-col items-center gap-2 bg-bg-soft px-4 py-8 text-center transition-colors hover:bg-surface"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-4xl font-semibold sm:text-5xl">
                  <span className="text-accent-gradient">
                    <AnimatedCounter
                      value={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                    />
                  </span>
                </span>
                <span className="max-w-[16ch] font-mono text-xs uppercase tracking-wider text-muted">
                  {s.label}
                </span>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
