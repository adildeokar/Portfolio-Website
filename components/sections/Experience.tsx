"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { experience } from "@/content/experience";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });

  return (
    <Section id="experience">
      <SectionHeader
        kicker="Journey"
        title={
          <>
            Where I&apos;ve{" "}
            <span className="text-accent-gradient">shipped</span>
          </>
        }
        description="Four internships across AI, full-stack, and product — reverse-chronological."
      />

      <div ref={ref} className="relative pl-2">
        {/* track */}
        <div className="absolute left-[14px] top-2 h-full w-px bg-border sm:left-[18px]" />
        {/* animated progress line */}
        <motion.div
          style={{ scaleY: reduce ? 1 : scrollYProgress }}
          className="absolute left-[14px] top-2 h-full w-px origin-top bg-accent-gradient sm:left-[18px]"
        />

        <div className="space-y-8">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${i}`} delay={i * 0.05}>
              <div className="relative pl-12 sm:pl-16">
                {/* node */}
                <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-surface text-accent shadow-glow sm:h-9 sm:w-9">
                  <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>

                <details className="group card-base overflow-hidden p-5 transition-colors open:border-accent/40 hover:border-accent/30 sm:p-6">
                  <summary className="flex cursor-pointer list-none flex-col gap-1 [&::-webkit-details-marker]:hidden">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold sm:text-xl">
                        {item.role}
                      </h3>
                      <span className="font-mono text-xs text-faint">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-accent">
                      {item.company}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.summary}</p>
                    <span className="mt-2 font-mono text-[11px] text-faint group-open:hidden">
                      ▸ tap to expand
                    </span>
                  </summary>

                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    <ul className="space-y-2">
                      {item.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex gap-2.5 text-sm text-muted"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((t) => (
                        <span key={t} className="pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
