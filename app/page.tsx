import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Record } from "@/components/Record";
import { Wins } from "@/components/Wins";
import { Life } from "@/components/Life";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Motion } from "@/components/Motion";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Work />
        <Record />
        <Wins />
        <Life />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
