import Link from "next/link";
import { companyName, contactInfo, footerLinks, primaryNav } from "@/lib/site-data";
import { Container } from "./container";

export function SiteFooter() {
  const nav = [...primaryNav, ...footerLinks];

  return (
    <footer className="border-t border-white/10 bg-navy py-14 text-white">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="eyebrow text-white/55">Weatherproof authority</p>
          <h2 className="font-display text-4xl uppercase leading-none">
            {companyName}
          </h2>
          <p className="max-w-md text-sm leading-7 text-white/70">
            Roofing-first protection for homeowners in Pinckney and nearby communities, backed by local accountability,
            recognized credentials, and a clear next step.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Explore</h3>
          <ul className="grid gap-3 text-sm text-white/80 sm:grid-cols-2 lg:grid-cols-1">
            {nav.map((item) => {
              const external = item.href.startsWith("http");
              return (
                <li key={item.href}>
                  {external ? (
                    <a href={item.href} rel="noreferrer" target="_blank">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Contact</h3>
          <div className="space-y-3 text-sm leading-7 text-white/80">
            <p>{contactInfo.addressLine1}</p>
            <p>{contactInfo.addressLine2}</p>
            <p>
              <a href={contactInfo.phoneHref}>{contactInfo.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
