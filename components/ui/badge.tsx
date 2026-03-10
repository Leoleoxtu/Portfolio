import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "accent"
  | "muted"
  | "status-public"
  | "status-private"
  | "status-dev"
  | "status-production"
  | "status-paused";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-[var(--surface-soft)] text-foreground border border-[var(--border)]",
  accent:
    "bg-accent/10 text-accent border border-accent/20",
  muted:
    "bg-[var(--surface)] text-muted border border-[var(--border)]",
  "status-public":
    "border border-[var(--status-public-border)] bg-[var(--status-public-bg)] text-[var(--status-public-fg)]",
  "status-private":
    "border border-[var(--status-private-border)] bg-[var(--status-private-bg)] text-[var(--status-private-fg)]",
  "status-dev":
    "border border-[var(--status-dev-border)] bg-[var(--status-dev-bg)] text-[var(--status-dev-fg)]",
  "status-production":
    "border border-[var(--status-production-border)] bg-[var(--status-production-bg)] text-[var(--status-production-fg)]",
  "status-paused":
    "border border-[var(--status-paused-border)] bg-[var(--status-paused-bg)] text-[var(--status-paused-fg)]",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-xs font-medium tracking-wide",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
