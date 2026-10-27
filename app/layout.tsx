import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.adildeokar.com";
const description =
  "Adil Deokar is a software and AI engineer in Pune building multi-agent, edge AI and cloud systems. Smart India Hackathon 2024 winner; now at Whirlpool Corporation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Adil Deokar, software and AI engineer",
  description,
  keywords: [
    "Adil Deokar",
    "software engineer",
    "AI engineer",
    "multi-agent systems",
    "edge AI",
    "Next.js",
    "Pune",
  ],
  authors: [{ name: "Adil Deokar", url: siteUrl }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Adil Deokar",
    title: "Adil Deokar, software and AI engineer",
    description,
    images: [{ url: "/images/profile.jpg", width: 400, height: 400, alt: "Adil Deokar" }],
  },
  twitter: {
    card: "summary",
    title: "Adil Deokar, software and AI engineer",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f9fa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
