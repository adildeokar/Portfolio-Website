"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Slim aurora gradient bar pinned to the very top that fills as the page is
 * scrolled. Springy so it feels alive.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[120] h-[3px] origin-left bg-[linear-gradient(90deg,hsl(var(--accent)),hsl(var(--accent-2)),hsl(var(--accent-3)))] shadow-[0_0_12px_hsl(var(--accent)/0.7)]"
    />
  );
}
