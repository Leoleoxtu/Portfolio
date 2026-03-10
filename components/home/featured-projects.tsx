import Link from "next/link";
import { Project } from "@/types/project";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";

interface FeaturedProjectsProps {
  projects: Project[];
}

/**
 * Featured Projects section.
 * Renders a grid of featured projects pulled from the centralised data store.
 * Uses the ProjectCard component with the "featured" variant for larger cards.
 */
export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-accent">
              Projects
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Selected work
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
              A range of SaaS platforms, data tools, security utilities and AI
              experiments — each built end-to-end.
            </p>
          </div>

          <Link
            href="/projects"
            className="mt-4 shrink-0 self-start font-mono text-sm font-medium text-accent transition-colors hover:text-accent/80 sm:mt-0 sm:self-auto"
          >
            See all projects →
          </Link>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </div>
      </Container>
    </section>
  );
}
