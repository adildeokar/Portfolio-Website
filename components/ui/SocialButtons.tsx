"use client";

import { Github, Linkedin, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const iconMap: Partial<Record<string, LucideIcon>> = {
  github: Github,
  linkedin: Linkedin,
};

interface SocialButtonsProps {
  className?: string;
  /** which socials to render, in order */
  only?: ("github" | "linkedin")[];
  size?: "sm" | "md";
  /** show the platform name next to the icon */
  withLabel?: boolean;
}

/**
 * Dedicated GitHub / LinkedIn icon buttons. Pulls hrefs from content/site.ts
 * so links stay in one place. Used in the Nav, Hero, and anywhere else needed.
 */
export function SocialButtons({
  className,
  only = ["github", "linkedin"],
  size = "md",
  withLabel = false,
}: SocialButtonsProps) {
  const items = only
    .map((key) => site.socials.find((s) => s.icon === key))
    .filter(Boolean) as typeof site.socials;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map((s) => {
        const Icon = iconMap[s.icon] ?? Github;
        const dims = size === "sm" ? "h-9 w-9" : "h-10 w-10";
        if (withLabel) {
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              aria-label={`${s.label} profile (opens in new tab)`}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Icon className="h-4 w-4" />
              {s.label}
            </a>
          );
        }
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            aria-label={`${s.label} profile (opens in new tab)`}
            className={cn(
              "group relative flex items-center justify-center rounded-full border border-border bg-surface/70 text-fg transition-colors hover:border-accent/50 hover:text-accent",
              dims
            )}
          >
            <Icon className={size === "sm" ? "h-[18px] w-[18px]" : "h-5 w-5"} />
          </a>
        );
      })}
    </div>
  );
}
