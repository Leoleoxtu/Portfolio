import Link from "next/link";
import { Container } from "@/components/layout/container";
import { profile } from "@/data/profile";

export function ProjectsPhilosophy() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left label */}
          <div className="lg:col-span-4">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-accent">
              Projects
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Why I build what I build.
            </h2>
            <div className="mt-6">
              <Link
                href="/projects"
                className="inline-flex items-center font-mono text-sm font-medium text-accent transition-colors hover:text-accent/70"
              >
                See all projects →
              </Link>
            </div>
          </div>

          {/* Right — philosophy paragraphs */}
          <div className="space-y-5 lg:col-span-8">
            {profile.philosophy.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            {/* Project types visual hint */}
            <div className="grid grid-cols-2 gap-3 border-t border-[var(--border)] pt-6 sm:grid-cols-4">
              {[
                { label: "SaaS Platforms", count: "1" },
                { label: "Data Systems", count: "1" },
                { label: "Dev Tools", count: "1" },
                { label: "AI / Research", count: "1" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-4 text-center"
                >
                  <p className="mb-0.5 font-mono text-xl font-bold text-accent">
                    {item.count}
                  </p>
                  <p className="font-mono text-xs text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
