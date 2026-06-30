"use client";

import { ArrowUpRight, Award } from "lucide-react";
import type { Project } from "@/content/types";
import { TiltCard } from "@/components/ui/TiltCard";
import { SmartImage } from "@/components/ui/ImagePlaceholder";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <TiltCard className="group h-full" max={6}>
      <button
        type="button"
        onClick={() => onOpen(project)}
        data-cursor="hover"
        aria-label={`Open details for ${project.title}`}
        className="card-base flex h-full w-full flex-col overflow-hidden text-left transition-colors hover:border-accent/40"
      >
        <div className="relative">
          <SmartImage
            src={project.images[0]?.src ?? ""}
            alt={project.images[0]?.alt ?? project.title}
            aspect="aspect-[16/10]"
            className="rounded-none border-0"
          />
          {project.highlight && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur">
              <Award className="h-3 w-3" />
              {project.highlight}
            </span>
          )}
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg/80 text-fg opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {project.categories.map((c) => (
              <span
                key={c}
                className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent"
              >
                {c}
              </span>
            ))}
          </div>
          <h3 className="font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm text-muted">{project.blurb}</p>

          {project.metric && (
            <p className="mt-3 font-mono text-xs text-accent-2">
              ◆ {project.metric}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="pill !py-0.5 !text-[10px]">
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="pill !py-0.5 !text-[10px]">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </button>
    </TiltCard>
  );
}
