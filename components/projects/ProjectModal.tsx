"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink, FileText, Award } from "lucide-react";
import type { Project, ProjectLink } from "@/content/types";
import { SmartImage } from "@/components/ui/ImagePlaceholder";
import { asset } from "@/lib/utils";

const linkIcon = {
  github: Github,
  demo: ExternalLink,
  pdf: FileText,
  external: ExternalLink,
} as const;

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <div
            className="fixed inset-0 bg-bg/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 my-4 w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface shadow-glow-lg"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/80 text-fg backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
            >
              <X className="h-4 w-4" />
            </button>

            {/* gallery */}
            <div className="grid gap-2 p-2 sm:grid-cols-2">
              {project.images.map((img) => (
                <SmartImage
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  aspect="aspect-[16/10]"
                />
              ))}
            </div>

            <div className="p-6 sm:p-8">
              {project.highlight && (
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                  <Award className="h-3 w-3" />
                  {project.highlight}
                </span>
              )}

              <div className="flex flex-wrap items-center gap-2">
                {project.timeframe && (
                  <span className="font-mono text-xs text-faint">
                    {project.timeframe}
                  </span>
                )}
                {project.categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                {project.title}
              </h2>

              {project.metric && (
                <p className="mt-2 font-mono text-sm text-accent-2">
                  ◆ {project.metric}
                </p>
              )}

              <ul className="mt-5 space-y-3">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-faint">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.links.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <LinkButton key={link.label} link={link} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LinkButton({ link }: { link: ProjectLink }) {
  const Icon = linkIcon[link.type];
  const isInternal = link.href.startsWith("/");
  return (
    <a
      href={isInternal ? asset(link.href) : link.href}
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noopener noreferrer"}
      download={link.type === "pdf"}
      data-cursor="hover"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
    >
      <Icon className="h-4 w-4" />
      {link.label}
    </a>
  );
}
