"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01<>-_/\\[]{}*#%&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** ms per reveal step */
  speed?: number;
  /** re-run the scramble whenever the pointer enters */
  scrambleOnHover?: boolean;
  as?: "span" | "h1" | "h2" | "p";
}

/**
 * "Decrypting" text effect. Characters flicker through random glyphs before
 * settling into place, once when scrolled into view (and optionally on hover).
 * Renders final text immediately for reduced-motion users.
 */
export function ScrambleText({
  text,
  className,
  speed = 28,
  scrambleOnHover = false,
  as = "span",
}: ScrambleTextProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(reduce ? text : "");
  const frame = useRef(0);
  const raf = useRef<number>(0);

  function run() {
    if (reduce) {
      setDisplay(text);
      return;
    }
    cancelAnimationFrame(raf.current);
    let progress = 0;
    frame.current = 0;
    const total = text.length;
    const tick = () => {
      frame.current += 1;
      if (frame.current % Math.max(1, Math.round(speed / 16)) === 0) {
        progress += 1;
      }
      const out = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (i < progress) return text[i];
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setDisplay(out);
      if (progress <= total) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    raf.current = requestAnimationFrame(tick);
  }

  useEffect(() => {
    if (inView) run();
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, text]);

  const Tag = as as "span";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={cn("inline-block whitespace-pre-wrap", className)}
      onMouseEnter={scrambleOnHover ? run : undefined}
      aria-label={text}
    >
      <span aria-hidden>{display || (reduce ? text : "")}</span>
    </Tag>
  );
}
