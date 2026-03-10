import { Container } from "@/components/layout/container";
import { profile } from "@/data/profile";

export function TechnicalDomains() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)]/30 py-16 sm:py-20">
      <Container>
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            Domains
          </p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Technical areas I work in.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Not a checklist of technologies — but the broader problem spaces I
            operate in.
          </p>
        </div>

        {/* Domain cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profile.domains.map((domain) => (
            <DomainCard key={domain.id} domain={domain} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type Domain = (typeof profile.domains)[number];

function DomainCard({ domain }: { domain: Domain }) {
  return (
    <div className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-sm backdrop-blur-sm">
      <h3 className="mb-3 text-sm font-semibold text-foreground">
        {domain.title}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
        {domain.description}
      </p>
      <div className="flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-4">
        {domain.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-[var(--border)] bg-white/40 px-2 py-0.5 font-mono text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
