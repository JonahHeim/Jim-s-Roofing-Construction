import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "bg-gold text-navy shadow-soft hover:-translate-y-0.5 hover:shadow-medium",
  secondary:
    "border border-white/20 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/15",
  ghost:
    "border border-line-strong bg-surface text-navy hover:-translate-y-0.5 hover:border-gold"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const classes = `inline-flex items-center justify-center rounded-pill px-5 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-[var(--duration-fast)] ease-premium ${styles[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        className={classes}
        href={href}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
