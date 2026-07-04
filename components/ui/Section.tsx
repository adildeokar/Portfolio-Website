import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { ScrambleText } from "./ScrambleText";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/** Consistent vertical rhythm + scroll-margin for anchor navigation. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}
    >
      <div className="container-edge">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="kicker flex items-center gap-2">
        <span className="inline-block h-px w-6 bg-gradient-to-r from-accent to-accent-2" />
        <ScrambleText text={kicker} />
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base text-muted sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
