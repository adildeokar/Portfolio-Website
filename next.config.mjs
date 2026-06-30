/**
 * Next.js config, configured for fully static export so the site can be
 * hosted for free on Vercel OR GitHub Pages with zero backend.
 *
 * GitHub Pages note:
 *   When deploying to a PROJECT page (username.github.io/repo-name), set the
 *   environment variable NEXT_PUBLIC_BASE_PATH="/repo-name" before building.
 *   On Vercel (or a custom domain / user-page) leave it empty.
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
