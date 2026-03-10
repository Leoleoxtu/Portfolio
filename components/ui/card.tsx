import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] shadow-sm backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardProps) {
  return (
    <div className={cn("px-6 pt-6 pb-4", className)}>{children}</div>
  );
}

export function CardContent({ children, className }: CardProps) {
  return (
    <div className={cn("px-6 pb-6", className)}>{children}</div>
  );
}
