"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  className?: string;
  reverse?: boolean;
  /** seconds for one full loop */
  speed?: number;
  pauseOnHover?: boolean;
}

/**
 * Infinite horizontal marquee. Content is duplicated once and translated by
 * -50% so the loop is seamless. Pauses under prefers-reduced-motion (handled
 * globally by the CSS media query zeroing animation duration).
 */
export function Marquee({
  items,
  className,
  reverse = false,
  speed = 32,
  pauseOnHover = true,
}: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("group relative overflow-hidden mask-fade-x", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-4",
          reverse ? "animate-marquee-rev" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
