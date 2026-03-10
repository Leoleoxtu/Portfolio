"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { profile } from "@/data/profile";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const company = String(formData.get("company") ?? "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          company,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitState("error");
        setFeedback(result.error || "Unable to send the message right now.");
        return;
      }

      form.reset();
      setSubmitState("success");
      setFeedback("Message sent successfully. I’ll get back to you soon.");
    } catch {
      setSubmitState("error");
      setFeedback("A network error occurred. Please try again.");
    }
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
              Messages are sent directly from the site to my inbox. The form stays
              simple on the surface, with a server-side structure that is easy to
              maintain and extend later if needed.
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
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

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
                  <p
                    className="text-xs leading-relaxed text-muted"
                    aria-live="polite"
                  >
                    {feedback ||
                      "Messages are sent directly from the site and delivered to my inbox."}
                  </p>
                  <Button
                    type="submit"
                    size="md"
                    className="min-w-40"
                    disabled={submitState === "submitting"}
                  >
                    <Send className="h-4 w-4" />
                    {submitState === "submitting" ? "Sending..." : "Send message"}
                  </Button>
                </div>

                {submitState === "success" && (
                  <p className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-300">
                    {feedback}
                  </p>
                )}

                {submitState === "error" && (
                  <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-300">
                    {feedback}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
