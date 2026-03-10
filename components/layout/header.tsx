import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            <span className="text-accent font-semibold">LS</span>
            <span className="hidden sm:inline text-foreground/70">/</span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-[var(--surface)] hover:text-foreground"
              >
                {label}
              </Link>
            ))}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-md px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-[var(--surface)] hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
