"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import {
  Command,
  Search,
  ArrowRight,
  Home,
  FolderGit2,
  User,
  Award,
  Briefcase,
  Sparkles,
  Download,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  CornerDownLeft,
} from "lucide-react";
import { site } from "@/content/site";
import { asset, cn } from "@/lib/utils";

interface Cmd {
  id: string;
  label: string;
  hint?: string;
  group: "Navigate" | "Actions" | "Connect";
  icon: React.ComponentType<{ className?: string }>;
  run: () => void;
  keywords?: string;
}

/**
 * A ⌘K / Ctrl+K command palette for lightning navigation - a rare, delightful
 * touch for a portfolio. Fully keyboard driven (arrows + enter), searchable,
 * and routes section anchors correctly from any page.
 */
export function CommandPalette() {
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      if (href.startsWith("#")) {
        if (pathname !== "/") {
          router.push(`/${href}`);
        } else {
          document
            .querySelector(href)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        router.push(href);
      }
    },
    [pathname, router]
  );

  const commands: Cmd[] = useMemo(() => {
    const isDark = resolvedTheme === "dark";
    return [
      { id: "home", label: "Home", group: "Navigate", icon: Home, run: () => go("/") },
      { id: "about", label: "About", group: "Navigate", icon: User, run: () => go("#about") },
      { id: "skills", label: "Skills", group: "Navigate", icon: Sparkles, run: () => go("#skills") },
      { id: "exp", label: "Experience", group: "Navigate", icon: Briefcase, run: () => go("#experience") },
      { id: "projects", label: "Projects", group: "Navigate", icon: FolderGit2, run: () => go("/projects") },
      { id: "certs", label: "Certifications", group: "Navigate", icon: Award, run: () => go("#certifications") },
      { id: "beyond", label: "Beyond Code", group: "Navigate", icon: User, run: () => go("/about") },
      {
        id: "resume",
        label: "Download résumé",
        hint: ".pdf",
        group: "Actions",
        icon: Download,
        keywords: "cv download",
        run: () => {
          setOpen(false);
          const a = document.createElement("a");
          a.href = asset(site.resumePath);
          a.download = "Adil_Deokar_Resume.pdf";
          a.click();
        },
      },
      {
        id: "theme",
        label: `Switch to ${isDark ? "light" : "dark"} mode`,
        group: "Actions",
        icon: isDark ? Sun : Moon,
        keywords: "theme dark light toggle",
        run: () => {
          setTheme(isDark ? "light" : "dark");
          setOpen(false);
        },
      },
      {
        id: "email",
        label: "Email Adil",
        hint: site.email,
        group: "Connect",
        icon: Mail,
        run: () => {
          window.location.href = `mailto:${site.email}`;
          setOpen(false);
        },
      },
      {
        id: "github",
        label: "GitHub",
        group: "Connect",
        icon: Github,
        run: () => {
          window.open("https://github.com/adildeokar", "_blank");
          setOpen(false);
        },
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        group: "Connect",
        icon: Linkedin,
        run: () => {
          window.open(
            "https://in.linkedin.com/in/adil-deokar-62b561283",
            "_blank"
          );
          setOpen(false);
        },
      },
    ];
  }, [go, resolvedTheme, setTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.label} ${c.hint ?? ""} ${c.keywords ?? ""} ${c.group}`
        .toLowerCase()
        .includes(q)
    );
  }, [query, commands]);

  const groups = useMemo(() => {
    const order: Cmd["group"][] = ["Navigate", "Actions", "Connect"];
    return order
      .map((g) => ({ group: g, items: filtered.filter((c) => c.group === g) }))
      .filter((g) => g.items.length > 0);
  }, [filtered]);

  // global open shortcut
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 40);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  function onListKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    }
  }

  let flatIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[130] flex items-start justify-center p-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <div
            className="fixed inset-0 bg-bg/70 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onKeyDown={onListKey}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface/95 shadow-glow-lg backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-4 w-4 text-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search or jump to…"
                className="w-full bg-transparent py-4 text-sm text-fg outline-none placeholder:text-faint"
              />
              <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-faint sm:inline">
                esc
              </kbd>
            </div>

            <div className="max-h-[52vh] overflow-y-auto p-2">
              {groups.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-faint">
                  No matches for &ldquo;{query}&rdquo;
                </p>
              )}
              {groups.map((g) => (
                <div key={g.group} className="mb-1">
                  <p className="px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-faint">
                    {g.group}
                  </p>
                  {g.items.map((c) => {
                    flatIndex += 1;
                    const idx = flatIndex;
                    const isActive = idx === active;
                    const Icon = c.icon;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onMouseEnter={() => setActive(idx)}
                        onClick={c.run}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                          isActive
                            ? "bg-accent/12 text-fg"
                            : "text-muted hover:bg-surface-2"
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-7 w-7 items-center justify-center rounded-lg border border-border transition-colors",
                            isActive
                              ? "border-accent/40 bg-accent/15 text-accent"
                              : "bg-surface-2 text-muted"
                          )}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="flex-1">{c.label}</span>
                        {c.hint && (
                          <span className="font-mono text-[11px] text-faint">
                            {c.hint}
                          </span>
                        )}
                        {isActive && (
                          <ArrowRight className="h-3.5 w-3.5 text-accent" />
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-2.5 font-mono text-[10px] text-faint">
              <span className="flex items-center gap-1.5">
                <Command className="h-3 w-3" /> command palette
              </span>
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <CornerDownLeft className="h-3 w-3" /> select
                </span>
                <span>↑↓ navigate</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Small pill button that opens the palette; sits in the navbar. */
export function CommandPaletteTrigger({ className }: { className?: string }) {
  const [mac, setMac] = useState(true);
  useEffect(() => {
    setMac(/Mac|iPod|iPhone|iPad/.test(navigator.platform));
  }, []);
  function open() {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true })
    );
  }
  return (
    <button
      type="button"
      onClick={open}
      data-cursor="hover"
      aria-label="Open command palette"
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-2 text-xs text-muted transition-colors hover:border-accent/50 hover:text-fg",
        className
      )}
    >
      <Search className="h-3.5 w-3.5" />
      <span className="hidden lg:inline">Quick nav</span>
      <kbd className="hidden items-center gap-0.5 rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-faint group-hover:border-accent/40 lg:inline-flex">
        {mac ? "⌘" : "Ctrl"} K
      </kbd>
    </button>
  );
}
