import { Container } from "@/components/layout/container";

/**
 * Intro / Positioning section.
 * Short, focused — gives context about Léo's profile and the domains
 * he works in. Not a biography, just enough to anchor the visitor.
 */
export function Intro() {
  const domains = [
    "Full-Stack Development",
    "Backend Architecture",
    "Data Systems",
    "SaaS Products",
    "AI & Experimentation",
  ];

  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)]/40 py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left — section label + heading */}
          <div className="lg:col-span-5">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
              About
            </p>
            <h2 className="text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              Building at the intersection
              <br />
              of engineering and product.
            </h2>
          </div>

          {/* Right — content */}
          <div className="lg:col-span-7">
            <p className="mb-6 text-base leading-relaxed text-muted">
              I&apos;m a full-stack developer focused on building real-world
              software systems. My work revolves around SaaS platforms, backend
              architectures, data pipelines and AI-driven tools. I enjoy
              designing clean architectures, building maintainable systems and
              turning complex ideas into working products.
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted">
              Most of my projects start from a practical problem and evolve into
              complete software systems — combining backend logic, data
              processing and user interfaces. I care about building things that
              are both technically solid and useful in real-world contexts.
            </p>

            {/* Domain tags */}
            <div className="flex flex-wrap gap-2">
              {domains.map((domain) => (
                <span
                  key={domain}
                  className="rounded-full border border-[var(--border)] bg-white/60 px-3 py-1 font-mono text-xs font-medium text-foreground/70"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
