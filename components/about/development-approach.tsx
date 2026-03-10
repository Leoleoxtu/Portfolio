import { Container } from "@/components/layout/container";
import { profile } from "@/data/profile";

export function DevelopmentApproach() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            Approach
          </p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            How I think about building software.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            A few principles I keep in mind when designing and building systems.
          </p>
        </div>

        {/* Approach cards — 2-col grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {profile.approach.map((item, i) => (
            <ApproachCard key={i} index={i + 1} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ApproachCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-sm backdrop-blur-sm">
      {/* Number */}
      <div className="shrink-0">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/20 bg-accent/8 font-mono text-xs font-semibold text-accent">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
