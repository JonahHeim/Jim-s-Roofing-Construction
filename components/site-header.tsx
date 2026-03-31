import Link from "next/link";
import { companyName, contactInfo, primaryNav } from "@/lib/site-data";
import { ButtonLink } from "./button-link";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[color:rgba(248,246,241,0.88)] backdrop-blur">
      <Container className="flex items-center justify-between gap-6 py-4">
        <div className="min-w-0">
          <Link className="block text-navy" href="/">
            <span className="block font-display text-3xl uppercase leading-none tracking-[0.02em] sm:text-4xl">
              Jim&apos;s Roofing
            </span>
            <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-slate">
              &amp; Construction
            </span>
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {primaryNav.map((item) => (
            <Link
              className="text-sm font-medium text-foreground transition-colors duration-[var(--duration-fast)] hover:text-navy"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a className="text-sm font-semibold text-navy" href={contactInfo.phoneHref}>
            {contactInfo.phoneDisplay}
          </a>
          <ButtonLink href="/contact">Request a free estimate</ButtonLink>
        </div>

        <ButtonLink className="md:hidden" href="/contact">
          Estimate
        </ButtonLink>
      </Container>
    </header>
  );
}
