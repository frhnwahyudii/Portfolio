import { HeroSection } from "@/components/sections/hero";
import { ProofBar } from "@/components/sections/proof-bar";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { CurrentlyLearningSection } from "@/components/sections/currently-learning";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProofBar />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CurrentlyLearningSection />
      <ContactSection />
    </>
  );
}