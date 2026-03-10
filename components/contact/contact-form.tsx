"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { profile } from "@/data/profile";

type SubmitState = "idle" | "redirecting";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("redirecting");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      [
        name ? `Name: ${name}` : "",
        email ? `Email: ${email}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitState("idle");
  }

  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
              Message
            </p>
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              Send a simple message.
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted sm:text-base">
              This form is frontend-only for now. It opens your email client with
              the message prefilled, and the structure is ready to be connected later
              to an API or email service.
            </p>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-5">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                Direct contact
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-foreground">Contact form</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Share a bit of context and I&apos;ll have everything needed to reply.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent/50"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent/50"
                    placeholder="Tell me about the role, project or context."
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-muted">
                    Submitting opens your default email client with the message ready to send.
                  </p>
                  <Button
                    type="submit"
                    size="md"
                    className="min-w-40"
                    disabled={submitState === "redirecting"}
                  >
                    <Send className="h-4 w-4" />
                    {submitState === "redirecting" ? "Opening..." : "Send message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
