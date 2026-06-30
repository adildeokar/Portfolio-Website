"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Project, ProjectCategory } from "@/content/types";
import { projects, projectCategories } from "@/content/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

type Filter = ProjectCategory | "All";

export function ProjectsExplorer() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const filters: Filter[] = ["All", ...projectCategories];

  return (
    <>
      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = filter === f;
          const count =
            f === "All"
              ? projects.length
              : projects.filter((p) => p.categories.includes(f)).length;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              data-cursor="hover"
              className={cn(
                "relative rounded-full border px-4 py-2 text-sm transition-colors",
                active
                  ? "border-accent/50 text-fg"
                  : "border-border text-muted hover:border-accent/30 hover:text-fg"
              )}
            >
              {active && (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 380, damping: 30 }
                  }
                />
              )}
              {f}
              <span className="ml-1.5 font-mono text-[10px] text-faint">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} onOpen={setSelected} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
