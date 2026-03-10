import Image from "next/image";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ScreenshotGalleryProps {
  project: Pick<Project, "thumbnail" | "title" | "category">;
  className?: string;
}

/**
 * Screenshot / visual slot for project pages.
 * Renders the project thumbnail when available, or a clean placeholder.
 * Ready to receive real visual assets without any component changes.
 */
export function ScreenshotGallery({ project, className }: ScreenshotGalleryProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] shadow-sm",
        className
      )}
      style={{ aspectRatio: "16/9" }}
    >
      {project.thumbnail ? (
        <Image
          src={`/images/projects/${project.thumbnail}`}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 70vw"
          priority
        />
      ) : (
        <GalleryPlaceholder title={project.title} category={project.category} />
      )}
    </div>
  );
}

const categoryAccents: Record<Project["category"], string> = {
  saas: "#14b8a6",
  data: "#3b82f6",
  security: "#8b5cf6",
  ai: "#f59e0b",
  tool: "#64748b",
};

function GalleryPlaceholder({
  title,
  category,
}: Pick<Project, "title" | "category">) {
  const color = categoryAccents[category];

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-3"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, ${color} 12%, var(--surface-soft)), color-mix(in srgb, ${color} 5%, var(--background)))`,
      }}
    >
      <span
        className="font-mono text-5xl font-bold tracking-tight opacity-20"
        style={{ color }}
      >
        {title.slice(0, 2).toUpperCase()}
      </span>
      <p className="font-mono text-xs text-muted opacity-60">
        Visual coming soon
      </p>
    </div>
  );
}
