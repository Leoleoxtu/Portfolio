import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  /** "featured" renders a larger card optimised for the homepage grid */
  variant?: "featured" | "compact";
  className?: string;
}

const statusLabel: Record<Project["status"], string> = {
  public: "Public",
  private: "Private",
  "in-development": "In Development",
};

const statusVariant: Record<
  Project["status"],
  "status-public" | "status-private" | "status-dev"
> = {
  public: "status-public",
  private: "status-private",
  "in-development": "status-dev",
};

const categoryLabel: Record<Project["category"], string> = {
  saas: "SaaS",
  data: "Data",
  security: "Security",
  ai: "AI",
  tool: "Tool",
};

export function ProjectCard({
  project,
  variant = "compact",
  className,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] shadow-sm backdrop-blur-sm transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      {/* ── Thumbnail slot ──────────────────────────────────────────────────
          Always rendered. When `project.thumbnail` is set, shows the image.
          Falls back to a branded placeholder. This slot is intentionally
          designed to be filled later — no refactor needed when assets arrive.
      ─────────────────────────────────────────────────────────────────────── */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50",
          isFeatured ? "h-48 sm:h-52" : "h-36"
        )}
      >
        {project.thumbnail ? (
          <Image
            src={`/images/projects/${project.thumbnail}`}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          /* Fallback placeholder — replace once visual assets are ready */
          <ThumbnailPlaceholder title={project.title} category={project.category} />
        )}

        {/* Category pill — overlaid on thumbnail */}
        <div className="absolute left-3 top-3">
          <Badge variant="muted">{categoryLabel[project.category]}</Badge>
        </div>
      </div>

      {/* ── Card body ─────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-5">
        {/* Header row */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3
            className={cn(
              "font-semibold leading-snug text-foreground",
              isFeatured ? "text-lg" : "text-base"
            )}
          >
            {project.title}
          </h3>
          <Badge variant={statusVariant[project.status]} className="shrink-0 mt-0.5">
            {statusLabel[project.status]}
          </Badge>
        </div>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {project.shortDescription}
        </p>

        {/* Stack */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--border)] bg-white/50 px-2 py-0.5 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex h-8 items-center justify-center rounded-lg bg-accent px-3 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            View Project →
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center justify-center rounded-lg border border-[var(--border)] bg-white/60 px-3 text-xs font-medium text-muted transition-colors hover:text-foreground hover:bg-white/90"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Thumbnail placeholder component
   Renders a clean branded fallback until actual screenshots are ready.
   Each category gets a subtle visual hint so the grid doesn't look uniform.
──────────────────────────────────────────────────────────────────────────── */
const categoryAccents: Record<Project["category"], string> = {
  saas: "from-teal-50/80 to-teal-100/40",
  data: "from-blue-50/80 to-blue-100/40",
  security: "from-violet-50/80 to-violet-100/40",
  ai: "from-amber-50/80 to-amber-100/40",
  tool: "from-slate-50/80 to-slate-100/40",
};

function ThumbnailPlaceholder({
  title,
  category,
}: {
  title: string;
  category: Project["category"];
}) {
  const initial = title.slice(0, 2).toUpperCase();

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-gradient-to-br",
        categoryAccents[category]
      )}
    >
      <div className="flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-3xl font-bold tracking-tight text-foreground">
          {initial}
        </span>
        <div className="h-px w-8 bg-foreground/30" />
        <span className="font-mono text-xs text-muted">{title}</span>
      </div>
    </div>
  );
}
