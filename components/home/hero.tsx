import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site";

/**
 * Hero section — first impression of the portfolio.
 * Left column: identity + headline + intro + CTAs.
 * Right column: a subtle terminal-style "architecture card" — a clean
 * decorative element that communicates technical depth without being flashy.
 */
export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left column ────────────────────────────────────── */}
          <div className="max-w-xl">
            {/* Role label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-xs font-medium text-accent tracking-wide">
                {siteConfig.role} · {siteConfig.subtitle}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              Designing and building
              <br />
              <span className="text-accent">real-world software</span>
              <br />
              systems.
            </h1>

            {/* Intro paragraph */}
            <p className="mb-8 text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m a full-stack developer focused on building real-world
              software systems. My work spans SaaS platforms, backend
              architectures, data pipelines and AI-driven tools — with an
              emphasis on clean design, maintainable code and solid engineering.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
              >
                View Projects
              </Link>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] px-6 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-[var(--surface-soft-hover)]"
              >
                GitHub →
              </a>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-lg px-4 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* ── Right column — architecture card ───────────────── */}
          <div className="flex justify-center lg:justify-end">
            <ArchitectureCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Decorative terminal-style card.
 * Shows a simplified architecture overview — communicates technical depth
 * through structure rather than imagery. Replace later with a real screenshot
 * or mockup when visual assets are ready.
 */
function ArchitectureCard() {
  const layers = [
    {
      label: "Frontend",
      items: ["Next.js", "TypeScript", "Tailwind CSS"],
      color: "bg-teal-400",
    },
    {
      label: "Backend",
      items: ["FastAPI", "Node.js", "REST · gRPC"],
      color: "bg-blue-400",
    },
    {
      label: "Data",
      items: ["PostgreSQL", "Pipelines", "NLP"],
      color: "bg-violet-400",
    },
    {
      label: "Infra",
      items: ["Docker", "Linux", "CI/CD"],
      color: "bg-amber-400",
    },
  ];

  return (
    <div className="w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] shadow-lg backdrop-blur-sm">
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
        <span className="ml-2 font-mono text-xs text-muted">
          architecture.overview
        </span>
      </div>

      {/* Stack layers */}
      <div className="space-y-3 p-5">
        {layers.map((layer) => (
          <div key={layer.label} className="flex items-start gap-3">
            <div className="mt-1 flex items-center gap-1.5 w-20 shrink-0">
              <span className={`h-1.5 w-1.5 rounded-full ${layer.color}`} />
              <span className="font-mono text-xs font-medium text-muted">
                {layer.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-[var(--border)] bg-[var(--surface-soft)] px-2 py-0.5 font-mono text-xs text-foreground/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer status */}
      <div className="border-t border-[var(--border)] px-5 py-3">
        <span className="flex items-center gap-2 font-mono text-xs text-muted">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          4 projects in production / active development
        </span>
      </div>
    </div>
  );
}
