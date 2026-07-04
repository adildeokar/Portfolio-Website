"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { bio } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

const terminalLines = [
  { p: "adil@portfolio", c: "whoami", out: "builder · systems nerd · shipper" },
  { p: "adil@portfolio", c: "cat focus.txt", out: "agentic AI · production ML · clean systems" },
  { p: "adil@portfolio", c: "git log --oneline", out: "3x hackathon wins · HayyAI live SaaS · Krew" },
  { p: "adil@portfolio", c: "status", out: "● open to AI & software roles" },
];

/** A faux terminal that "types" out a few status lines when scrolled into view. */
function StatusTerminal() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [visible, setVisible] = useState(reduce ? terminalLines.length : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    setVisible(0);
    const id = setInterval(() => {
      setVisible((v) => {
        if (v >= terminalLines.length) {
          clearInterval(id);
          return v;
        }
        return v + 1;
      });
    }, 700);
    return () => clearInterval(id);
  }, [inView, reduce]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-card backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-accent/80" />
        <span className="h-3 w-3 rounded-full bg-accent-2/80" />
        <span className="h-3 w-3 rounded-full bg-accent-3/80" />
        <span className="ml-2 font-mono text-[11px] text-faint">
          ~/adil-deokar — zsh
        </span>
      </div>
      <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
        {terminalLines.slice(0, visible).map((line, i) => (
          <motion.div
            key={line.c}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>
              <span className="text-accent">{line.p}</span>
              <span className="text-faint"> $ </span>
              <span className="text-fg">{line.c}</span>
            </p>
            <p className="text-muted">{line.out}</p>
          </motion.div>
        ))}
        {visible < terminalLines.length && !reduce && (
          <span className="inline-block h-4 w-2 animate-pulse bg-accent align-middle" />
        )}
      </div>
    </div>
  );
}

export function About() {
  const reduce = useReducedMotion();
  const words = bio.split(" ");

  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
        <div>
          <Reveal>
            <span className="kicker flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-gradient-to-r from-accent to-accent-2" />
              About
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              I build AI that{" "}
              <span className="text-accent-gradient">actually ships.</span>
            </h2>
          </Reveal>

          {/* Word-by-word reveal */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduce ? 0 : 0.012 } },
            }}
            className="mt-6 text-lg leading-relaxed text-muted"
          >
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={{
                  hidden: { opacity: 0.12 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="inline"
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.p>
        </div>

        <Reveal direction="left">
          <StatusTerminal />
        </Reveal>
      </div>
    </Section>
  );
}
