import type { Metadata } from "next";
import { ContactCta } from "@/components/contact/contact-cta";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactMethods } from "@/components/contact/contact-methods";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} for collaborations, freelance work or software engineering opportunities.`,
};

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactCta />
    </div>
  );
}
