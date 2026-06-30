"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";
import { asset, cn } from "@/lib/utils";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  /** aspect ratio utility class, e.g. "aspect-video" */
  aspect?: string;
  priority?: boolean;
}

/**
 * Renders an image, but falls back to a styled "coming soon" placeholder if the
 * file is missing, so layouts always look complete before real screenshots
 * are dropped in. Uses a plain <img> (works with static export + unoptimized).
 */
export function SmartImage({
  src,
  alt,
  className,
  aspect = "aspect-video",
  priority = false,
}: SmartImageProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border bg-surface-2",
        aspect,
        className
      )}
    >
      {!errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(src)}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setErrored(true)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <Placeholder label={alt} />
      )}
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.12),transparent_60%)]">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:22px_22px] opacity-[0.35]" />
      <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80">
          <ImageOff className="h-4 w-4 text-faint" aria-hidden />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
          image coming soon
        </span>
        <span className="line-clamp-1 text-xs text-muted/70">{label}</span>
      </div>
    </div>
  );
}
