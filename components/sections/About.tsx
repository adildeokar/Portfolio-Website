"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { bio } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const reduce = useReducedMotion();
  const words = bio.split(" ");

  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
        <Reveal>
          <span className="kicker flex items-center gap-2">
            <span className="inline-block h-px w-6 bg-accent/60" />
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
          className="text-lg leading-relaxed text-muted sm:text-xl"
        >
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              variants={{
                hidden: { opacity: 0.15 },
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
    </Section>
  );
}
