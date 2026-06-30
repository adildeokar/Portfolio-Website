"use client";

import { GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { education } from "@/content/education";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Education() {
  return (
    <Section id="education">
      <SectionHeader
        kicker="Foundations"
        title={
          <>
            Education &{" "}
            <span className="text-accent-gradient">leadership</span>
          </>
        }
      />

      <RevealGroup className="grid gap-5 md:grid-cols-3">
        {education.map((item) => (
          <RevealItem key={item.institution}>
            <div className="card-base group flex h-full flex-col p-6 transition-colors hover:border-accent/40">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-semibold leading-snug">
                {item.institution}
              </h3>
              <p className="mt-1 text-sm text-accent">{item.qualification}</p>
              <p className="font-mono text-[11px] text-faint">{item.period}</p>

              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
