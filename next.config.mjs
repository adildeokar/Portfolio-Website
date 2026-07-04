/**
 * Next.js config, configured for fully static export so the site can be
 * hosted for free on GitHub Pages (or any static host) with zero backend.
 *
 * Custom domain (adildeokar.com): leave NEXT_PUBLIC_BASE_PATH empty (default).
 * Project page only (username.github.io/repo-name): set
 * NEXT_PUBLIC_BASE_PATH="/repo-name" before building.
 */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath || undefined,
  images: {
    // Static export can't use the Next.js image optimization server.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
