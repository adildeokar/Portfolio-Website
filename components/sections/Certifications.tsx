"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Trophy, Star, ChevronDown, BadgeCheck } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { awards, featuredCerts, certGroups } from "@/content/certifications";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const issuerStyles: Record<string, string> = {
  IBM: "text-[#3b82f6] ring-[#3b82f6]/30 bg-[#3b82f6]/10",
  AWS: "text-[#f59e0b] ring-[#f59e0b]/30 bg-[#f59e0b]/10",
  "Google Cloud": "text-[#22c55e] ring-[#22c55e]/30 bg-[#22c55e]/10",
  Other: "text-accent ring-accent/30 bg-accent/10",
};

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader
        kicker="Proof of work"
        title={
          <>
            Awards &{" "}
            <span className="text-accent-gradient">certifications</span>
          </>
        }
        description="3 hackathon wins, 20 certifications across IBM, AWS & Google Cloud — grouped so you can scan, not scroll."
      />

      {/* Awards */}
      <RevealGroup className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((award) => (
          <RevealItem key={award.title}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-2 p-5 transition-colors hover:border-accent/40">
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <Trophy className="mb-3 h-6 w-6 text-accent" />
              <h3 className="font-display text-sm font-semibold leading-snug">
                {award.title}
              </h3>
              {award.org && (
                <p className="mt-1 font-mono text-[11px] text-muted">{award.org}</p>
              )}
              {award.year && (
                <span className="absolute right-4 top-4 font-mono text-[10px] text-faint">
                  {award.year}
                </span>
              )}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Featured certs */}
      <Reveal className="mb-12">
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-bg-soft p-5">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint">
            <Star className="h-4 w-4 text-accent" /> Headline
          </span>
          {featuredCerts.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-sm font-medium text-fg"
            >
              <BadgeCheck className="h-4 w-4 text-accent" />
              {cert}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Full library accordions */}
      <RevealGroup className="grid gap-4 md:grid-cols-2">
        {certGroups.map((group) => (
          <RevealItem key={group.issuer}>
            <CertAccordion group={group} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

function CertAccordion({
  group,
}: {
  group: (typeof certGroups)[number];
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="card-base overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        data-cursor="hover"
        className="flex w-full items-center justify-between gap-3 p-5 text-left transition-colors hover:bg-surface-2/50"
      >
        <span className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl font-mono text-xs font-bold ring-1",
              issuerStyles[group.issuer]
            )}
          >
            {group.issuer === "Google Cloud"
              ? "GCP"
              : group.issuer === "Other"
              ? "EDU"
              : group.issuer}
          </span>
          <span>
            <span className="block font-display font-semibold">{group.issuer}</span>
            <span className="font-mono text-[11px] text-faint">
              {group.count} {group.count === 1 ? "certification" : "certifications"}
            </span>
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-muted transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 border-t border-border p-5">
              {group.certs.map((cert, i) => (
                <motion.li
                  key={cert}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.035 }}
                  className="flex gap-2.5 text-sm text-muted"
                >
                  <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent/70" />
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
