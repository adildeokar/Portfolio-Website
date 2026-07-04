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
import { SpotlightCard } from "@/components/ui/SpotlightCard";
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
        description="A full-stack of AI, systems, and product skills, grouped by where they live in the build."
      />

      <RevealGroup className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = groupIcon[group.key] ?? Code2;
          return (
            <RevealItem key={group.key}>
              <SpotlightCard className="group h-full p-6 hover:border-accent/40">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform duration-300 group-hover/spot:scale-110 group-hover/spot:rotate-6">
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
                      whileHover={reduce ? undefined : { y: -3, scale: 1.05 }}
                      className="pill cursor-default hover:border-accent/60 hover:bg-accent/10 hover:text-fg"
                      data-cursor="hover"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
