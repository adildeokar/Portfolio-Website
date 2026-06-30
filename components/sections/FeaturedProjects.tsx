"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/types";
import { featuredProjects } from "@/content/projects";
import { Section, SectionHeader } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";

export function FeaturedProjects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeader
          kicker="Selected work"
          title={
            <>
              Featured{" "}
              <span className="text-accent-gradient">projects</span>
            </>
          }
          description="A few builds I'm proud of — from national-hackathon-winning agent systems to edge AI."
          className="mb-0"
        />
        <Link
          href="/projects"
          data-cursor="hover"
          className="group mb-2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
        >
          See all projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <RevealGroup className="grid gap-6 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <RevealItem key={project.slug}>
            <ProjectCard project={project} onOpen={setSelected} />
          </RevealItem>
        ))}
      </RevealGroup>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
