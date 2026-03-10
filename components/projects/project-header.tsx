import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { ProjectLinks } from "@/components/projects/project-links";
import {
  activityStatusLabel,
  activityStatusVariant,
  repositoryVisibilityLabel,
  repositoryVisibilityVariant,
} from "@/lib/project-badges";

interface ProjectHeaderProps {
  project: Project;
}

const categoryAccents: Record<Project["category"], string> = {
  saas: "#14b8a6",
  data: "#3b82f6",
  security: "#8b5cf6",
  ai: "#f59e0b",
  tool: "#64748b",
};

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="pb-10 pt-8 sm:pt-12">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 font-mono text-xs text-muted">
        <Link href="/projects" className="transition-colors hover:text-accent">
          Projects
        </Link>
        <span>/</span>
        <span className="text-foreground">{project.title}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — meta */}
        <div className="flex flex-col">
          {/* Badges row */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant={repositoryVisibilityVariant[project.repositoryVisibility]}>
              {repositoryVisibilityLabel[project.repositoryVisibility]}
            </Badge>
            <Badge variant={activityStatusVariant[project.activityStatus]}>
              {activityStatusLabel[project.activityStatus]}
            </Badge>
            <Badge variant="muted">{project.category.toUpperCase()}</Badge>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          {/* Short description */}
          <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg">
            {project.shortDescription}
          </p>

          {/* Stack */}
          <div className="mb-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[var(--border)] bg-[var(--surface-soft)] px-2.5 py-1 font-mono text-xs font-medium text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <ProjectLinks project={project} />
        </div>

        {/* Right — thumbnail / visual */}
        <div className="relative">
          <ProjectHeaderVisual project={project} />
        </div>
      </div>
    </div>
  );
}

function ProjectHeaderVisual({ project }: { project: Project }) {
  const color = categoryAccents[project.category];

  return (
    <div
      className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, ${color} 14%, var(--surface-soft)), color-mix(in srgb, ${color} 6%, var(--background)))`,
      }}
    >
      {project.thumbnail ? (
        <Image
          src={`/images/projects/${project.thumbnail}`}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ) : (
        <div className="flex flex-col items-center gap-3 opacity-30">
          <span
            className="font-mono text-6xl font-bold tracking-tight"
            style={{ color }}
          >
            {project.title.slice(0, 2).toUpperCase()}
          </span>
          <div className="h-px w-10 bg-foreground/30" />
          <span className="font-mono text-sm text-muted">{project.title}</span>
        </div>
      )}
    </div>
  );
}
