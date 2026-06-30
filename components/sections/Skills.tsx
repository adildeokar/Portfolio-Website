"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Cloud,
  Palette,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { skillGroups } from "@/content/skills";
import { TiltCard } from "@/components/ui/TiltCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const groupIcon: Record<string, typeof Code2> = {
  ai_ml: BrainCircuit,
  languages: Code2,
  cloud_devops: Cloud,
  frontend_design: Palette,
};

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <Section id="skills">
      <SectionHeader
        kicker="Toolkit"
        title={
          <>
            Skills &{" "}
            <span className="text-accent-gradient">capabilities</span>
          </>
        }
        description="A full-stack of AI, systems, and product skills — grouped by where they live in the build."
      />

      <RevealGroup className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = groupIcon[group.key] ?? Code2;
          return (
            <RevealItem key={group.key}>
              <TiltCard className="group h-full" max={5}>
                <div className="card-base h-full overflow-hidden p-6 transition-colors hover:border-accent/40">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {group.category}
                      </h3>
                      <p className="font-mono text-[11px] text-faint">
                        {group.key}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.35 }}
                        className="pill hover:border-accent/50 hover:text-fg"
                        data-cursor="hover"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
