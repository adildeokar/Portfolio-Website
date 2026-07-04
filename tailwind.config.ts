import type { Config } from "tailwindcss";

/**
 * Design-token driven Tailwind theme ("Obsidian Ember / Aurora").
 * Colors are wired to CSS variables (defined in app/globals.css) so light and
 * dark mode are *distinct, intentional palettes*, not a simple invert.
 *
 * To re-skin the whole site, edit the HSL variables in globals.css.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        "bg-soft": "hsl(var(--bg-soft) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-2": "hsl(var(--surface-2) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        fg: "hsl(var(--fg) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        faint: "hsl(var(--faint) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-2": "hsl(var(--accent-2) / <alpha-value>)",
        "accent-3": "hsl(var(--accent-3) / <alpha-value>)",
        "accent-fg": "hsl(var(--accent-fg) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 40px -10px hsl(var(--accent) / 0.5)",
        "glow-lg": "0 0 80px -18px hsl(var(--accent) / 0.6)",
        "glow-2": "0 0 60px -14px hsl(var(--accent-2) / 0.5)",
        card: "0 1px 0 0 hsl(var(--border) / 0.6), 0 18px 40px -24px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.5) 1px, transparent 1px)",
        "dot-pattern":
          "radial-gradient(hsl(var(--border) / 0.9) 1px, transparent 1px)",
        "accent-gradient":
          "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-2)), hsl(var(--accent-3)))",
        "aurora-mesh":
          "radial-gradient(40% 40% at 20% 20%, hsl(var(--accent) / 0.35), transparent 70%), radial-gradient(40% 40% at 80% 30%, hsl(var(--accent-2) / 0.32), transparent 70%), radial-gradient(45% 45% at 50% 85%, hsl(var(--accent-3) / 0.30), transparent 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "blob-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-30px, 25px) scale(0.95)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "scroll-dot": {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "40%": { opacity: "1" },
          "80%, 100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "70%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "aurora-shift": {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(4%, -4%, 0) rotate(8deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        "blob-drift": "blob-drift 18s ease-in-out infinite",
        "scroll-dot": "scroll-dot 1.6s ease-in-out infinite",
        "gradient-pan": "gradient-pan 6s ease infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        marquee: "marquee 32s linear infinite",
        "marquee-rev": "marquee-rev 32s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
        "aurora-shift": "aurora-shift 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
