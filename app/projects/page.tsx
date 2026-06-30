import type { Metadata } from "next";
import { GradientBlobs } from "@/components/ui/Backdrop";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Adil Deokar: multi-agent AI systems, edge AI on Jetson Orin, optimization engines, and full-stack ML platforms.",
};

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden pt-32">
      <GradientBlobs className="-z-10 opacity-50" />
      <div className="container-edge pb-24">
        <Reveal className="mb-12 max-w-2xl">
          <span className="kicker flex items-center gap-2">
            <span className="inline-block h-px w-6 bg-accent/60" />
            {projects.length} builds
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
            Things I&apos;ve <span className="text-accent-gradient">built</span>
          </h1>
          <p className="mt-4 text-lg text-muted">
            From national-hackathon-winning agent organizations to privacy-first
            edge AI. Filter by category, then dive into any project for the full
            breakdown.
          </p>
        </Reveal>

        <ProjectsExplorer />
      </div>
    </div>
  );
}
