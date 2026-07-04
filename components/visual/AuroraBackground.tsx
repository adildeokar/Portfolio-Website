"use client";

import { cn } from "@/lib/utils";

/**
 * Layered, slowly-drifting aurora blobs (coral / fuchsia / violet) rendered as
 * blurred gradient shapes. CSS-only and cheap. Sits behind hero / page content.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute -left-[10%] top-[-15%] h-[55vh] w-[55vh] rounded-full bg-accent/30 blur-[90px] animate-aurora-shift" />
      <div className="absolute right-[-8%] top-[10%] h-[50vh] w-[50vh] rounded-full bg-accent-2/25 blur-[100px] animate-aurora-shift [animation-delay:-5s]" />
      <div className="absolute bottom-[-20%] left-[30%] h-[60vh] w-[60vh] rounded-full bg-accent-3/25 blur-[110px] animate-aurora-shift [animation-delay:-10s]" />
      {/* faint top vignette so text stays legible */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent,hsl(var(--bg)/0.55))]" />
    </div>
  );
}
