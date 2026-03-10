import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ProjectHeader } from "@/components/projects/project-header";
import { ProjectSection } from "@/components/projects/project-section";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const s = project.sections ?? {};

  return (
    <div className="pb-20">
      <Container>
        {/* ── Header ──────────────────────────────────────────────── */}
        <ProjectHeader project={project} />

        {/* ── Overview ────────────────────────────────────────────── */}
        {s.overview && s.overview.length > 0 && (
          <ProjectSection label="Overview" title="About this project">
            <div className="space-y-4">
              {s.overview.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          </ProjectSection>
        )}

        {/* ── Problem ─────────────────────────────────────────────── */}
        {s.problem && (
          <ProjectSection label="Problem" title="What this project solves">
            <p className="text-base leading-relaxed text-muted">{s.problem}</p>
          </ProjectSection>
        )}

        {/* ── Solution ────────────────────────────────────────────── */}
        {s.solution && (
          <ProjectSection label="Solution" title="How it works">
            <p className="text-base leading-relaxed text-muted">{s.solution}</p>
          </ProjectSection>
        )}

        {/* ── Architecture ────────────────────────────────────────── */}
        {s.architecture && s.architecture.length > 0 && (
          <ProjectSection label="Architecture" title="System design">
            <ul className="space-y-3">
              {s.architecture.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-muted">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </ProjectSection>
        )}

        {/* ── Stack ───────────────────────────────────────────────── */}
        {project.stack.length > 0 && (
          <ProjectSection label="Stack" title="Technologies used">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 font-mono text-sm font-medium text-foreground/80 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ProjectSection>
        )}

        {/* ── Challenges ──────────────────────────────────────────── */}
        {s.challenges && s.challenges.length > 0 && (
          <ProjectSection label="Challenges" title="Technical challenges">
            <ul className="space-y-4">
              {s.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-accent/20 bg-accent/10 font-mono text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </ProjectSection>
        )}

        {/* ── Role ────────────────────────────────────────────────── */}
        {s.role && s.role.length > 0 && (
          <ProjectSection label="Role" title="My contribution">
            <ul className="space-y-3">
              {s.role.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </ProjectSection>
        )}

        {/* ── Links ───────────────────────────────────────────────── */}
        <div className="border-t border-[var(--border)] pt-10">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            Links
          </p>
          <div className="flex flex-wrap gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-white/90"
              >
                View on GitHub →
              </a>
            ) : (
              <span className="inline-flex h-10 items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 font-mono text-xs text-muted">
                Source code private
              </span>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-lg bg-accent px-4 text-sm font-medium text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
