import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/60 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs text-muted">
            © {year} {siteConfig.name}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              Email
            </a>
            <Link
              href="/contact"
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
