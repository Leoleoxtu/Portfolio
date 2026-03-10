import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site";

/**
 * Final CTA section.
 * Closes the homepage with a clear, low-pressure invitation.
 * Three paths: see all projects, GitHub, or get in touch.
 */
export function FinalCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-8 py-12 text-center shadow-sm backdrop-blur-sm sm:px-12">
          {/* Label */}
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            What&apos;s next
          </p>

          {/* Heading */}
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Interested in working together?
          </h2>

          {/* Body */}
          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            I&apos;m open to software engineering roles, freelance projects and
            technical collaborations. Have a look at my work, explore the code,
            or reach out directly.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
            >
              See all projects
            </Link>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border)] bg-white/70 px-6 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-white/90"
            >
              GitHub
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
