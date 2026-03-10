import { Container } from "@/components/layout/container";
import { profile } from "@/data/profile";

export function DeveloperProfile() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)]/40 py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left label */}
          <div className="lg:col-span-4">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-accent">
              Profile
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Who I am as a developer.
            </h2>
          </div>

          {/* Right — bio paragraphs */}
          <div className="space-y-5 lg:col-span-8">
            {profile.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}

            {/* Open to roles */}
            <div className="border-t border-[var(--border)] pt-6">
              <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-muted">
                Open to
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.openTo.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
