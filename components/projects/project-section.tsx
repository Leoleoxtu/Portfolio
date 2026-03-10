import { cn } from "@/lib/utils";

/**
 * Reusable section wrapper for project detail pages.
 * Provides consistent spacing, a top label, a heading and a content slot.
 */
interface ProjectSectionProps {
  label?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  border?: boolean;
}

export function ProjectSection({
  label,
  title,
  children,
  className,
  border = true,
}: ProjectSectionProps) {
  return (
    <section
      className={cn(
        "py-12",
        border && "border-t border-[var(--border)]",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
        {/* Left — label + title */}
        <div className="lg:col-span-4">
          {label && (
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-accent">
              {label}
            </p>
          )}
          <h2 className="text-xl font-bold leading-snug text-foreground sm:text-2xl">
            {title}
          </h2>
        </div>

        {/* Right — content */}
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}
