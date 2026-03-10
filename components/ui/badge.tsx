import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "muted" | "status-public" | "status-private" | "status-dev";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-white/60 text-foreground border border-[var(--border)]",
  accent:
    "bg-accent/10 text-accent border border-accent/20",
  muted:
    "bg-[var(--surface)] text-muted border border-[var(--border)]",
  "status-public":
    "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
  "status-private":
    "bg-slate-100 text-slate-500 border border-slate-200/60",
  "status-dev":
    "bg-amber-50 text-amber-700 border border-amber-200/60",
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
