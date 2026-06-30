"use client";

import { Download } from "lucide-react";
import { site } from "@/content/site";
import { asset, cn } from "@/lib/utils";
import { MagneticButton } from "./MagneticButton";

interface ResumeButtonProps {
  className?: string;
  variant?: "solid" | "outline";
  compact?: boolean;
}

/**
 * Distinct, always-recognizable resume download.
 * Renders a true file download (<a download>) and lives in Nav, Hero & Footer.
 */
export function ResumeButton({
  className,
  variant = "outline",
  compact = false,
}: ResumeButtonProps) {
  return (
    <MagneticButton
      href={asset(site.resumePath)}
      download
      ariaLabel="Download Adil Deokar's resume (PDF)"
      className={cn(
        "group items-center gap-2 rounded-full font-medium transition-colors",
        compact ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-sm",
        variant === "solid"
          ? "bg-accent text-accent-fg shadow-glow hover:shadow-glow-lg"
          : "border border-accent/50 bg-accent/5 text-fg hover:border-accent hover:bg-accent/10",
        className
      )}
    >
      <Download
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
        aria-hidden
      />
      <span>{compact ? "Resume" : "Download Resume"}</span>
      {variant === "outline" && (
        <span className="ml-0.5 hidden font-mono text-[10px] text-faint sm:inline">
          .pdf
        </span>
      )}
    </MagneticButton>
  );
}
