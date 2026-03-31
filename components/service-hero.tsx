import { ButtonLink } from "./button-link";
import { Container } from "./container";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
};

export function ServiceHero({
  eyebrow,
  title,
  description,
  bullets,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref
}: ServiceHeroProps) {
  return (
    <section className="hero-surface py-20 text-white lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-7">
          <p className="eyebrow text-white/60">{eyebrow}</p>
          <h1 className="font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/78 sm:text-lg">{description}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={primaryHref}>{primaryCta}</ButtonLink>
            {secondaryCta && secondaryHref ? (
              <ButtonLink href={secondaryHref} variant="secondary">
                {secondaryCta}
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <div className="surface-dark rounded-hero border border-white/10 p-6 shadow-strong">
          <p className="eyebrow text-white/55">What this page covers</p>
          <ul className="mt-4 space-y-4">
            {bullets.map((bullet) => (
              <li className="flex gap-3" key={bullet}>
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold" />
                <span className="text-base leading-7 text-white/80">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
