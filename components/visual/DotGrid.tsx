"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive dot grid. A field of dots gently pushes away from the cursor and
 * brightens with an aurora tint near the pointer, giving the background a
 * tactile, reactive feel. Pure canvas so it exports statically and stays fast.
 * Static (single frame) under prefers-reduced-motion.
 */
export function DotGrid({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    const gap = 34;
    const mouse = { x: -9999, y: -9999 };

    interface Dot {
      x: number;
      y: number;
      ox: number;
      oy: number;
    }
    let dots: Dot[] = [];

    function readVar(name: string, fallback: string) {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
      return v || fallback;
    }
    let accent = readVar("--accent", "14 100% 64%");
    let accent2 = readVar("--accent-2", "330 96% 66%");
    let base = readVar("--faint", "275 9% 54%");

    function build() {
      const parent = canvas!.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let y = gap; y < height; y += gap) {
        for (let x = gap; x < width; x += gap) {
          dots.push({ x, y, ox: x, oy: y });
        }
      }
      accent = readVar("--accent", accent);
      accent2 = readVar("--accent-2", accent2);
      base = readVar("--faint", base);
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const R = 130;
      for (const d of dots) {
        const dx = mouse.x - d.ox;
        const dy = mouse.y - d.oy;
        const dist = Math.hypot(dx, dy);
        let tx = d.ox;
        let ty = d.oy;
        let glow = 0;
        if (dist < R) {
          const force = (1 - dist / R) ** 2;
          glow = force;
          // push away from cursor
          tx = d.ox - (dx / (dist || 1)) * force * 16;
          ty = d.oy - (dy / (dist || 1)) * force * 16;
        }
        // ease toward target
        d.x += (tx - d.x) * 0.15;
        d.y += (ty - d.y) * 0.15;

        const r = 1 + glow * 2.2;
        if (glow > 0.02) {
          const mix = glow;
          const color = mix > 0.5 ? accent : accent2;
          ctx!.fillStyle = `hsl(${color} / ${0.25 + glow * 0.75})`;
        } else {
          ctx!.fillStyle = `hsl(${base} / 0.22)`;
        }
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx!.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    build();
    window.addEventListener("resize", build);

    if (reduce) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseleave", onLeave);
      draw();
    }

    const observer = new MutationObserver(() => {
      accent = readVar("--accent", accent);
      accent2 = readVar("--accent-2", accent2);
      base = readVar("--faint", base);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
