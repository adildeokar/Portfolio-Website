"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/** Cycles through the role titles with a smooth swap. */
export function RoleRotator({ roles }: { roles: string[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [roles.length, reduce]);

  if (reduce) {
    return <span className="text-fg">{roles.join(" · ")}</span>;
  }

  return (
    <span className="relative inline-flex h-7 items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-nowrap font-semibold text-fg"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
