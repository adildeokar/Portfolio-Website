"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { navLinks } from "@/content/nav";
import { ResumeButton } from "../ui/ResumeButton";
import { Reveal } from "../ui/Reveal";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  globe: ArrowUpRight,
} as const;

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-border bg-bg-soft"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container-edge py-20">
        <Reveal className="flex flex-col items-start gap-6">
          <span className="kicker">Let&apos;s build something</span>
          <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl text-balance">
            Have a problem worth solving?{" "}
            <span className="text-accent-gradient">Let&apos;s talk.</span>
          </h2>
          <p className="max-w-xl text-muted">
            Open to AI engineering, full-stack, and product roles, plus
            interesting collaborations. The fastest way to reach me is email.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              data-cursor="hover"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg shadow-glow transition-shadow hover:shadow-glow-lg"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
            <ResumeButton />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-display font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient font-mono text-xs text-accent-fg">
                AD
              </span>
              Adil Deokar
            </div>
            <p className="text-sm text-muted">{site.tagline}</p>
            <p className="font-mono text-xs text-faint">{site.location}</p>
          </div>

          <nav className="space-y-3" aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-widest text-faint">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.section ? `/${l.href}` : l.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-faint">
              Connect
            </p>
            <ul className="space-y-2">
              {site.socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.icon === "github" || s.icon === "linkedin" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                    >
                      <Icon className="h-4 w-4" />
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-faint">
              Direct
            </p>
            <a
              href={`mailto:${site.email}`}
              className="block text-sm text-muted transition-colors hover:text-accent"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="block text-sm text-muted transition-colors hover:text-accent"
            >
              {site.phone}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-faint sm:flex-row">
          <p>
            © {new Date().getFullYear()} Adil Deokar. Built with Next.js, Tailwind
            & Framer Motion.
          </p>
          <p className="font-mono">{site.website}</p>
        </div>
      </div>
    </footer>
  );
}
