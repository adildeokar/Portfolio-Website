"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  external?: boolean;
  ariaLabel?: string;
  /** strength of the magnetic pull in px */
  strength?: number;
}

/**
 * A button/link with a subtle "magnetic" pull toward the cursor.
 * Falls back to a static element under prefers-reduced-motion.
 */
export function MagneticButton({
  children,
  className,
  href,
  onClick,
  download,
  external,
  ariaLabel,
  strength = 14,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set((relX / rect.width) * strength * 2);
    y.set((relY / rect.height) * strength * 2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const sharedProps = {
    ref,
    className: cn("relative inline-flex select-none", className),
    style: { x: sx, y: sy },
    onMouseMove: handleMove,
    onMouseLeave: reset,
    "data-cursor": "hover",
  } as const;

  if (href) {
    return (
      <motion.a
        {...sharedProps}
        href={href}
        aria-label={ariaLabel}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...sharedProps} onClick={onClick} aria-label={ariaLabel} type="button">
      {children}
    </motion.button>
  );
}
