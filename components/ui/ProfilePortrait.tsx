"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { User } from "lucide-react";
import { site } from "@/content/site";
import { asset, cn } from "@/lib/utils";

/**
 * Interactive portrait: a spinning aurora ring, cursor-driven 3D tilt, a
 * scanning highlight, and floating credential chips. Keeps the existing
 * /public/images/profile.jpg as a placeholder; if that file is missing it
 * shows a branded monogram fallback so the layout never looks broken.
 *
 * To swap the photo: drop a square image at /public/images/profile.jpg
 * (or update `profileImage` in content/site.ts).
 */
export function ProfilePortrait({
  chips = [],
  className,
}: {
  chips?: { label: string; side: "left" | "right" }[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [errored, setErrored] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), {
    stiffness: 150,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }
  function reset() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <div className={cn("perspective relative mx-auto w-full max-w-sm", className)}>
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={reduce ? undefined : { rotateX: rx, rotateY: ry }}
        className="group relative aspect-square [transform-style:preserve-3d]"
      >
        {/* spinning aurora ring */}
        <div className="absolute -inset-3 -z-10 rounded-[2.2rem] opacity-70 blur-md">
          <div className="aurora-ring h-full w-full rounded-[2.2rem] animate-spin-slow" />
        </div>
        {/* soft glow */}
        <div className="absolute -inset-6 -z-20 rounded-[2.6rem] bg-accent-gradient opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-45" />

        {/* frame */}
        <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] border border-border bg-surface-2 shadow-card">
          {!errored ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(site.profileImage)}
              alt={`Portrait of ${site.name}`}
              onError={() => setErrored(true)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.18),transparent_60%)]">
              <div className="absolute inset-0 bg-dot-pattern bg-[size:16px_16px] opacity-30" />
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface/80 text-accent">
                <User className="h-7 w-7" />
              </span>
              <span className="relative z-10 font-display text-2xl font-bold text-accent-gradient">
                AD
              </span>
              <span className="relative z-10 font-mono text-[10px] uppercase tracking-widest text-faint">
                photo coming soon
              </span>
            </div>
          )}

          {/* scanning highlight */}
          {!reduce && (
            <motion.div
              aria-hidden
              initial={{ y: "-120%" }}
              animate={{ y: "120%" }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-x-0 h-1/3 bg-[linear-gradient(to_bottom,transparent,hsl(var(--accent)/0.18),transparent)]"
            />
          )}
          <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] ring-1 ring-inset ring-white/10" />
        </div>

        {/* floating credential chips */}
        {!reduce &&
          chips.map((chip, i) => {
            const pos =
              i === 2
                ? "bottom-4 left-1/2 -translate-x-1/2"
                : chip.side === "left"
                ? "-left-4 top-8"
                : "-right-3 bottom-14";
            return (
              <motion.div
                key={chip.label}
                animate={{ y: [0, i % 2 ? 8 : -8, 0] }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
                className={cn(
                  "absolute z-20 rounded-xl border border-border glass px-3 py-2 shadow-card",
                  pos
                )}
              >
                <p
                  className={cn(
                    "font-mono text-[11px]",
                    i % 2 ? "text-accent-2" : "text-accent"
                  )}
                >
                  {chip.label}
                </p>
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
}
