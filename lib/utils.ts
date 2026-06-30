import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (conditional + de-duped). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a public asset path with the configured basePath so assets resolve
 * correctly on GitHub Pages project URLs as well as on Vercel/root domains.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) path = `/${path}`;
  return `${base}${path}`;
}
