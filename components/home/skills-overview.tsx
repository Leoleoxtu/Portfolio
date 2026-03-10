import { Container } from "@/components/layout/container";

const domains = [
  {
    id: "saas",
    title: "SaaS Product Development",
    description:
      "Design and development of complete software platforms, from backend architecture to user interfaces. End-to-end product thinking with an emphasis on maintainability.",
    icon: "⬡",
    examples: ["Multi-tenant architecture", "Auth & billing flows", "Practitioner tooling"],
  },
  {
    id: "backend",
    title: "Backend Architecture",
    description:
      "Designing reliable APIs, services and system architectures. Clear data models, clean service boundaries and pragmatic solutions to complex problems.",
    icon: "⬡",
    examples: ["REST & gRPC APIs", "Database design", "Service patterns"],
  },
  {
    id: "infra",
    title: "Infrastructure & Deployment",
    description:
      "Experience working with containers, servers and production environments. Building systems that hold up outside of localhost.",
    icon: "⬡",
    examples: ["Docker & containers", "Linux environments", "CI/CD pipelines"],
  },
  {
    id: "ai",
    title: "AI & Data Systems",
    description:
      "Building data pipelines and experimenting with machine learning and AI systems. Interest in multi-agent architectures and LLM-driven tooling.",
    icon: "⬡",
    examples: ["NLP & sentiment analysis", "Data pipelines", "Multi-agent systems"],
  },
  {
    id: "security",
    title: "Security & Developer Tools",
    description:
      "Creating tools aimed at improving development workflows and software security. Practical utilities that help developers build with more confidence.",
    icon: "⬡",
    examples: ["Port monitoring", "Exposure detection", "Developer workflows"],
  },
];

/**
 * Skills / Domains section.
 * Structured as work domains rather than a tech checklist — shows a profile,
 * not a list of keywords.
 */
export function SkillsOverview() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)]/30 py-16 sm:py-20">
      <Container>
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            Expertise
          </p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Work domains
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
            The areas I operate in — not a checklist of frameworks, but the
            broader problems I work on.
          </p>
        </div>

        {/* Domain cards — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <DomainCard key={domain.id} domain={domain} />
          ))}
        </div>
      </Container>
    </section>
  );
}

interface DomainCardProps {
  domain: (typeof domains)[number];
}

function DomainCard({ domain }: DomainCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-sm backdrop-blur-sm">
      {/* Title */}
      <h3 className="mb-3 text-sm font-semibold text-foreground">
        {domain.title}
      </h3>

      {/* Description */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
        {domain.description}
      </p>

      {/* Example tags */}
      <div className="flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-4">
        {domain.examples.map((ex) => (
          <span
            key={ex}
            className="rounded-md border border-[var(--border)] bg-[var(--surface-soft)] px-2 py-0.5 font-mono text-xs text-muted"
          >
            {ex}
          </span>
        ))}
      </div>
    </div>
  );
}
