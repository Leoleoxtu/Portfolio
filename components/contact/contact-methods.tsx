import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { profile } from "@/data/profile";

interface ContactMethod {
  id: string;
  title: string;
  description: string;
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
}

const contactMethods: ContactMethod[] = [
  {
    id: "email",
    title: "Email",
    description: "Send me a message directly for roles, freelance work or collaboration.",
    href: `mailto:${profile.email}`,
    label: profile.email,
    icon: Mail,
  },
  {
    id: "github",
    title: "GitHub",
    description: "Explore my open-source projects, technical experiments and repositories.",
    href: profile.github,
    label: "View GitHub profile",
    icon: Github,
    external: true,
  },
  ...(profile.linkedin
    ? [
        {
          id: "linkedin",
          title: "LinkedIn",
          description: "Connect professionally and get a quick overview of my background.",
          href: profile.linkedin,
          label: "Open LinkedIn profile",
          icon: Linkedin,
          external: true,
        },
      ]
    : []),
];

export function ContactMethods() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            Contact methods
          </p>
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Reach me through the channel that fits best.
          </h2>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            For the fastest response, email is the best option. GitHub and LinkedIn
            are here if you want to explore my work or connect professionally first.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <Card key={method.id} className="h-full">
                <CardHeader className="pb-3">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {method.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    {method.label}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
