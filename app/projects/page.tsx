import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { getAllProjects } from "@/lib/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Technical projects by ${siteConfig.name} — SaaS platforms, data systems, developer tools and AI experiments.`,
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Page header */}
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            Projects
          </p>
          <h1 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl">
            Selected work
          </h1>
          <p className="text-base leading-relaxed text-muted">
            A set of independent projects built end-to-end — SaaS platforms,
            data systems, developer tools and AI experiments. Each project
            explores a different domain but follows the same principle: build
            something real, from architecture to deployment.
          </p>
        </div>

        {/* Stats row */}
        <div className="mb-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Total projects", value: String(allProjects.length) },
            {
              label: "In production",
              value: String(
                allProjects.filter((p) => p.status === "production").length
              ),
            },
            {
              label: "Open source",
              value: String(
                allProjects.filter((p) => p.github).length
              ),
            },
            {
              label: "Domains",
              value: String(
                new Set(allProjects.map((p) => p.category)).size
              ),
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-4"
            >
              <p className="mb-0.5 font-mono text-2xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant="featured"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
