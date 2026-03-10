import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
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
        <div className="flex flex-col gap-3 py-3 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:py-0">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={32}
              height={32}
              className="h-8 w-8 rounded-md object-contain"
              priority
            />
            <span className="hidden sm:inline text-foreground/70">/</span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap sm:justify-end">
            {/* Nav */}
            <nav className="flex flex-wrap items-center gap-1">
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
                className="rounded-md px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-[var(--surface)] hover:text-foreground"
              >
                GitHub
              </a>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
