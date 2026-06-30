"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight interactive "AI agent network" canvas.
 * Nodes drift, link to nearby nodes, and gently react to the cursor — evoking
 * agents collaborating. Pure canvas (no Three.js) so it stays fast and exports
 * statically. Disabled for prefers-reduced-motion (static fallback shown).
 */
export function ParticleNetwork({ className }: { className?: string }) {
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

    const mouse = { x: -9999, y: -9999 };

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }
    let nodes: Node[] = [];

    function accent() {
      // read the live --accent token so it matches the active theme
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      return v || "256 95% 70%";
    }
    let accentHsl = accent();

    function resize() {
      const parent = canvas!.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.floor((width * height) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
      }));
      accentHsl = accent();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const linkDist = 130;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // gentle cursor attraction
        const dxm = mouse.x - n.x;
        const dym = mouse.y - n.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 160) {
          n.x += (dxm / dm) * 0.25;
          n.y += (dym / dm) * 0.25;
        }

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = `hsl(${accentHsl} / 0.9)`;
        ctx!.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const opacity = (1 - dist / linkDist) * 0.5;
            ctx!.strokeStyle = `hsl(${accentHsl} / ${opacity})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(n.x, n.y);
            ctx!.lineTo(m.x, m.y);
            ctx!.stroke();
          }
        }
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

    resize();
    window.addEventListener("resize", resize);

    if (reduce) {
      // single static frame
      draw();
      cancelAnimationFrame(raf);
    } else {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseleave", onLeave);
      draw();
    }

    // re-read accent on theme change
    const observer = new MutationObserver(() => {
      accentHsl = accent();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
    />
  );
}
