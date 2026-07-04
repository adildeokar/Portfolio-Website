"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** spotlight radius in px */
  radius?: number;
}

/**
 * A card that renders a soft cursor-following aurora "spotlight" plus a
 * gradient border glow that tracks the pointer. Pure CSS-var updates via a
 * pointer handler (no React re-renders) so it stays cheap even in grids.
 */
export function SpotlightCard({
  children,
  className,
  radius = 380,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    el.style.setProperty("--spot", "1");
  }

  function onLeave() {
    ref.current?.style.setProperty("--spot", "0");
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={
        {
          "--mx": "50%",
          "--my": "50%",
          "--spot": "0",
          "--r": `${radius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "group/spot relative overflow-hidden rounded-2xl border border-border bg-surface/70 backdrop-blur-sm transition-colors duration-300",
        className
      )}
    >
      {/* border glow (gradient-border via mask compositing) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[var(--spot)] transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(var(--r) circle at var(--mx) var(--my), hsl(var(--accent) / 0.6), transparent 60%)",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
        }}
      />
      {/* interior spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[var(--spot)] transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(calc(var(--r) * 0.9) circle at var(--mx) var(--my), hsl(var(--accent) / 0.10), transparent 55%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
