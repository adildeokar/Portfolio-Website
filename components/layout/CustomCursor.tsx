"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor-following accent dot + ring that grows over interactive elements
 * (anything with [data-cursor="hover"], links, or buttons).
 * Only renders on fine-pointer (mouse) devices and respects reduced-motion.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const sRingX = useSpring(ringX, { stiffness: 350, damping: 30, mass: 0.4 });
  const sRingY = useSpring(ringY, { stiffness: 350, damping: 30, mass: 0.4 });
  const moved = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    function onMove(e: MouseEvent) {
      moved.current = true;
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      const el = e.target as HTMLElement;
      const interactive = el.closest(
        'a, button, [data-cursor="hover"], input, textarea'
      );
      setHovering(Boolean(interactive));
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [dotX, dotY, ringX, ringY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60"
        style={{ x: sRingX, y: sRingY }}
        animate={{
          width: hovering ? 48 : 28,
          height: hovering ? 48 : 28,
          opacity: hovering ? 1 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
}
