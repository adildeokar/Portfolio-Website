"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/nav";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { ResumeButton } from "../ui/ResumeButton";
import { SocialButtons } from "../ui/SocialButtons";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduce = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active section highlight (home only)
  useEffect(() => {
    if (!isHome) return;
    const ids = navLinks.filter((l) => l.section).map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  // resolve a section link to the right href depending on current page
  function resolveHref(href: string, section?: boolean) {
    if (section && !isHome) return `/${href}`;
    return href;
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <nav className="container-edge">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-3 py-2 transition-all duration-300",
            scrolled
              ? "glass border-border shadow-card"
              : "border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            data-cursor="hover"
            className="group flex items-center gap-2 pl-2 font-display text-sm font-semibold tracking-tight"
            aria-label="Adil Deokar home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient font-mono text-xs text-accent-fg shadow-glow">
              AD
            </span>
            <span className="hidden sm:inline">Adil Deokar</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                (link.section && isHome && active === link.href) ||
                (!link.section && pathname === link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={resolveHref(link.href, link.section)}
                    data-cursor="hover"
                    className={cn(
                      "relative rounded-full px-3.5 py-1.5 text-sm transition-colors",
                      isActive
                        ? "text-fg"
                        : "text-muted hover:text-fg"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-accent/10 ring-1 ring-accent/30"
                        transition={
                          reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }
                        }
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <SocialButtons size="sm" className="hidden md:flex" />
            <ThemeToggle />
            <div className="hidden sm:block">
              <ResumeButton compact />
            </div>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/70 text-fg lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="container-edge mt-2 lg:hidden"
          >
            <div className="glass flex flex-col gap-1 rounded-2xl border border-border p-3 shadow-card">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(link.href, link.section)}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm text-muted transition-colors hover:bg-accent/10 hover:text-fg"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 px-1 pb-1 sm:hidden">
                <ResumeButton className="w-full justify-center" />
              </div>
              <div className="flex items-center gap-2 px-3 pt-3 md:hidden">
                <SocialButtons withLabel className="w-full [&>a]:flex-1 [&>a]:justify-center" />
              </div>
              <p className="px-4 pt-3 font-mono text-[11px] text-faint">
                {site.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
