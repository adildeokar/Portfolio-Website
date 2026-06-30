import type { Metadata } from "next";
import { asset } from "@/lib/utils";
import { site, bio, bioLong } from "@/content/site";
import { GradientBlobs } from "@/components/ui/Backdrop";
import { Reveal } from "@/components/ui/Reveal";
import { Hobbies } from "@/components/sections/Hobbies";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { SocialButtons } from "@/components/ui/SocialButtons";

export const metadata: Metadata = {
  title: "Beyond Code",
  description:
    "The person behind the projects: Adil Deokar's story, interests, and the sports and hobbies that keep him sharp.",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden pt-32">
      <GradientBlobs className="-z-10 opacity-50" />

      <div className="container-edge pb-24">
        {/* Intro */}
        <div className="mb-20 grid gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-center">
          <Reveal>
            <span className="kicker flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-accent/60" />
              Beyond code
            </span>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
              The person behind the{" "}
              <span className="text-accent-gradient">projects</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{bio}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{bioLong}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ResumeButton variant="solid" />
              <SocialButtons size="md" />
            </div>
          </Reveal>

          <Reveal direction="left" className="mx-auto w-full max-w-xs lg:max-w-sm">
            <div className="group relative aspect-square">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent-gradient opacity-25 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface-2 shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(site.profileImage)}
                  alt={`Portrait of ${site.name}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Hobbies />
      </div>
    </div>
  );
}
