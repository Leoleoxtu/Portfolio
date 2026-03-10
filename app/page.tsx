import { FeaturedProjects } from "@/components/home/featured-projects";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { SkillsOverview } from "@/components/home/skills-overview";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      <Hero />
      <Intro />
      <FeaturedProjects projects={featuredProjects} />
      <SkillsOverview />
      <FinalCta />
    </div>
  );
}
