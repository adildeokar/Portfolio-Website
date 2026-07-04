"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A bespoke two-part cursor: a crisp aurora dot that tracks 1:1 and a springy
 * ring that lags behind, grows over interactive elements, and squishes on
 * click. Only renders on fine-pointer (mouse) devices and respects
 * reduced-motion. Hides the native cursor via a root class when active.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);
  const [hidden, setHidden] = useState(true);

  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const sRingX = useSpring(ringX, { stiffness: 320, damping: 28, mass: 0.5 });
  const sRingY = useSpring(ringY, { stiffness: 320, damping: 28, mass: 0.5 });
  const moved = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    function onMove(e: MouseEvent) {
      if (!moved.current) {
        moved.current = true;
        setHidden(false);
      }
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      const el = e.target as HTMLElement;
      const interactive = el.closest(
        'a, button, [data-cursor="hover"], input, textarea, summary, [role="button"]'
      );
      setHovering(Boolean(interactive));
    }
    function onDown() {
      setDown(true);
    }
    function onUp() {
      setDown(false);
    }
    function onLeaveWindow() {
      setHidden(true);
    }
    function onEnterWindow() {
      setHidden(false);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
    };
  }, [dotX, dotY, ringX, ringY]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      style={{ opacity: hidden ? 0 : 1 }}
      className="transition-opacity duration-200"
    >
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[140] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: down ? 0.6 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[140] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          x: sRingX,
          y: sRingY,
          borderColor: "hsl(var(--accent) / 0.6)",
          mixBlendMode: "difference",
        }}
        animate={{
          width: hovering ? 52 : 30,
          height: hovering ? 52 : 30,
          opacity: hovering ? 1 : 0.55,
          scale: down ? 0.82 : 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
    </div>
  );
}
