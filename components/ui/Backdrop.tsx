import { cn } from "@/lib/utils";

/** Animated gradient blobs for soft depth behind sections. CSS-only, performant. */
export function GradientBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob-drift" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent-2/20 blur-3xl animate-blob-drift [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-blob-drift [animation-delay:-12s]" />
    </div>
  );
}

/** Faint dotted/grid pattern background with a radial fade. */
export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]",
        className
      )}
    />
  );
}
