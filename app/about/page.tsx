import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { DeveloperProfile } from "@/components/about/developer-profile";
import { DevelopmentApproach } from "@/components/about/development-approach";
import { TechnicalDomains } from "@/components/about/technical-domains";
import { ProjectsPhilosophy } from "@/components/about/projects-philosophy";
import { AboutCta } from "@/components/about/about-cta";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `${siteConfig.name} — ${siteConfig.description}`,
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <DeveloperProfile />
      <DevelopmentApproach />
      <TechnicalDomains />
      <ProjectsPhilosophy />
      <AboutCta />
    </div>
  );
}
