"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Terminal } from "lucide-react";
import { site } from "@/content/site";
import { ParticleNetwork } from "@/components/visual/ParticleNetwork";
import { DotGrid } from "@/components/visual/DotGrid";
import { AuroraBackground } from "@/components/visual/AuroraBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { SocialButtons } from "@/components/ui/SocialButtons";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { RoleRotator } from "./RoleRotator";

/** Each letter lifts, colours, and springs on hover for kinetic typography. */
function KineticWord({
  word,
  className,
  gradient = false,
}: {
  word: string;
  className?: string;
  gradient?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={className} aria-label={word}>
      {word.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          aria-hidden
          className={gradient ? "text-gradient animate-gradient-pan" : undefined}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: "0.4em", rotateX: -80 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: 0.15 + i * 0.045,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={
            reduce
              ? undefined
              : { y: -10, scale: 1.06, color: "hsl(var(--accent))" }
          }
          style={{ display: "inline-block", transformStyle: "preserve-3d" }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      {/* Layered backgrounds */}
      <AuroraBackground className="-z-30 opacity-90" />
      <DotGrid className="absolute inset-0 -z-20 h-full w-full opacity-60" />
      <ParticleNetwork className="absolute inset-0 -z-10 h-full w-full opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern bg-[size:52px_52px] opacity-[0.14] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      <div className="container-edge">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 backdrop-blur"
              data-cursor="hover"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-muted">
                Available for AI &amp; software roles
              </span>
            </motion.div>

            <h1 className="perspective font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              <KineticWord word="Adil" className="block text-fg" />
              <KineticWord word="Deokar" className="block" gradient />
            </h1>

            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 flex items-center gap-2 font-mono text-base text-muted sm:text-lg"
            >
              <span className="text-accent">&gt;</span>
              <RoleRotator roles={site.roles} />
            </motion.div>

            <motion.p
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-balance"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href="/projects"
                className="btn-aurora group items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-glow transition-shadow hover:shadow-glow-lg"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <ResumeButton variant="outline" />
              <SocialButtons size="md" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs text-faint"
            >
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                {site.location}
              </span>
              <span className="hidden items-center gap-2 sm:flex">
                <Terminal className="h-3.5 w-3.5" />
                press{" "}
                <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted">
                  ⌘K
                </kbd>{" "}
                to navigate
              </span>
            </motion.div>
          </div>

          {/* Right: interactive portrait */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:ml-auto"
          >
            <ProfilePortrait
              chips={[{ label: "3x Hackathon Winner", side: "left" }]}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        aria-label="Scroll to about section"
        data-cursor="hover"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">
          Scroll
        </span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-border pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-accent animate-scroll-dot" />
        </span>
      </Link>
    </section>
  );
}
