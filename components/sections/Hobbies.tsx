"use client";

import {
  Dribbble,
  Crown,
  CalendarCheck,
  Mountain,
  Bike,
  Target,
  type LucideIcon,
  Medal,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { interests, personalAchievements } from "@/content/interests";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const icons: Record<string, LucideIcon> = {
  dribbble: Dribbble,
  crown: Crown,
  "calendar-check": CalendarCheck,
  mountain: Mountain,
  bike: Bike,
  target: Target,
};

export function Hobbies() {
  const reduce = useReducedMotion();

  return (
    <div className="space-y-20">
      {/* Interests — horizontal scroll-snap row */}
      <div>
        <Reveal className="mb-8">
          <span className="kicker flex items-center gap-2">
            <span className="inline-block h-px w-6 bg-accent/60" />
            Off the clock
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Things that keep me{" "}
            <span className="text-accent-gradient">sharp</span>
          </h2>
        </Reveal>

        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {interests.map((interest, i) => {
            const Icon = icons[interest.icon] ?? Target;
            return (
              <motion.div
                key={interest.name}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={reduce ? undefined : { y: -6 }}
                className="group relative min-w-[78%] snap-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 p-6 sm:min-w-0"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-semibold">{interest.name}</h3>
                <p className="mt-2 text-sm text-muted">{interest.blurb}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Personal achievements */}
      <div>
        <Reveal className="mb-8">
          <span className="kicker flex items-center gap-2">
            <span className="inline-block h-px w-6 bg-accent/60" />
            On the field
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A few <span className="text-accent-gradient">human</span> wins
          </h2>
        </Reveal>

        <RevealGroup className="grid gap-3 sm:grid-cols-2">
          {personalAchievements.map((a) => (
            <RevealItem key={a}>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface/60 p-4 transition-colors hover:border-accent/40">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Medal className="h-4 w-4" />
                </span>
                <span className="text-sm text-fg">{a}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
