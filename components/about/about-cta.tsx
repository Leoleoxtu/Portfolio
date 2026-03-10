import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site";

export function AboutCta() {
  return (
    <section className="border-t border-[var(--border)] py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-8 py-12 text-center shadow-sm backdrop-blur-sm sm:px-12">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            Let&apos;s talk
          </p>
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Open to new opportunities.
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            I&apos;m looking for software engineering roles, freelance projects
            or technical collaborations. If you&apos;re working on something
            interesting, I&apos;d be happy to hear about it.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
            >
              Get in touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border)] bg-white/70 px-6 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-white/90"
            >
              View projects
            </Link>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              GitHub →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
