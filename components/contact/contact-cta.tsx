import Link from "next/link";
import { Container } from "@/components/layout/container";
import { profile } from "@/data/profile";

export function ContactCta() {
  return (
    <section className="border-t border-[var(--border)] py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-8 py-12 text-center shadow-sm backdrop-blur-sm sm:px-12">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            Next step
          </p>
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Want more context before reaching out?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            You can review selected projects, browse public code or contact me
            directly by email.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
            >
              View Projects
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] px-6 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-[var(--surface-soft-hover)]"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
