"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { asset } from "@/lib/utils";
import { ParticleNetwork } from "@/components/visual/ParticleNetwork";
import { GradientBlobs } from "@/components/ui/Backdrop";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { SocialButtons } from "@/components/ui/SocialButtons";
import { RoleRotator } from "./RoleRotator";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      {/* Backgrounds */}
      <ParticleNetwork className="absolute inset-0 -z-10 h-full w-full opacity-70" />
      <GradientBlobs className="-z-20 opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern bg-[size:48px_48px] opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container-edge">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-muted">
                Available for AI & software roles
              </span>
            </motion.div>

            <motion.h1
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
            >
              <span className="block text-fg">Adil</span>
              <span className="block text-gradient animate-gradient-pan">Deokar</span>
            </motion.h1>

            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 flex items-center gap-2 font-mono text-base text-muted sm:text-lg"
            >
              <Sparkles className="h-4 w-4 text-accent" aria-hidden />
              <RoleRotator roles={site.roles} />
            </motion.div>

            <motion.p
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-balance"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href="/projects"
                className="group items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg shadow-glow transition-shadow hover:shadow-glow-lg"
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
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-2 font-mono text-xs text-faint"
            >
              <MapPin className="h-3.5 w-3.5" />
              {site.location}
            </motion.div>
          </div>

          {/* Right: profile image (SQUARE placeholder, swap with hi-res square photo) */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto"
          >
            <div className="group relative aspect-square">
              {/* glow ring */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent-gradient opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50" />
              {/* frame */}
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface-2 shadow-card">
                {/* TODO: replace /public/images/profile.jpg with a high-res SQUARE photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(site.profileImage)}
                  alt={`Portrait of ${site.name}`}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
              </div>

              {/* floating tag chips */}
              {!reduce && (
                <>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-4 top-8 rounded-xl border border-border glass px-3 py-2 shadow-card"
                  >
                    <p className="font-mono text-[11px] text-accent">3x Hackathon Winner</p>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -right-3 bottom-10 rounded-xl border border-border glass px-3 py-2 shadow-card"
                  >
                    <p className="font-mono text-[11px] text-accent-2">Lead Dev @ DevKnight</p>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-border pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-accent animate-scroll-dot" />
        </span>
      </Link>
    </section>
  );
}
