import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Certifications />
      <Education />
    </>
  );
}
