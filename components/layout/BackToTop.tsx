"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Floating "scroll to top" orb that fades in past the first viewport. The ring
 * around it fills to reflect overall scroll progress.
 */
export function BackToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setProgress(v);
      setShow(v > 0.15);
    });
  }, [scrollYProgress]);

  const deg = Math.round(progress * 360);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll back to top"
          data-cursor="hover"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 z-[80] flex h-12 w-12 items-center justify-center rounded-full"
        >
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(hsl(var(--accent)) ${deg}deg, hsl(var(--border)) ${deg}deg)`,
            }}
          />
          <span className="absolute inset-[3px] flex items-center justify-center rounded-full bg-surface text-fg shadow-card backdrop-blur">
            <ArrowUp className="h-4 w-4" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
