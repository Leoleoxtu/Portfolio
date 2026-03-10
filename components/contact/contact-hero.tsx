import { Container } from "@/components/layout/container";
import { profile } from "@/data/profile";

export function ContactHero() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h1 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s start a conversation.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Open to collaborations, freelance work, software engineering roles
            and technical discussions. If you&apos;re building something
            serious and need a developer who cares about structure, product
            quality and delivery, feel free to reach out.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
            >
              Email me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] px-6 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-[var(--surface-soft-hover)]"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
