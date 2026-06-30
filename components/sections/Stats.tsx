"use client";

import { stats } from "@/content/interests";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="relative border-y border-border bg-bg-soft py-14">
      <div className="container-edge">
        <RevealGroup className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <RevealItem
              key={s.label}
              className="group flex flex-col items-center text-center"
            >
              <span className="font-display text-4xl font-semibold text-fg sm:text-5xl">
                <span className="text-accent-gradient">
                  <AnimatedCounter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </span>
              </span>
              <span className="mt-2 max-w-[14ch] font-mono text-xs uppercase tracking-wider text-muted sm:text-sm">
                {s.label}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
