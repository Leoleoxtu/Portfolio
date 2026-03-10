import { Container } from "@/components/layout/container";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";

export function AboutHero() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          {/* Label */}
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            About
          </p>

          {/* Name + title */}
          <h1 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {profile.name}
          </h1>
          <p className="mb-6 font-mono text-sm font-medium text-muted">
            {profile.title} · {profile.subtitle}
          </p>

          {/* Tagline */}
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
            {profile.tagline}
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--border)] bg-white/70 px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-white/90"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--border)] bg-white/70 px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-white/90"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--border)] bg-white/70 px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-white/90"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
