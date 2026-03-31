import { ButtonLink } from "./button-link";
import { Container } from "./container";
import { ProofImagePlaceholder } from "./proof-image-placeholder";
import { Reveal } from "./reveal";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  variant?: "split" | "editorial" | "stacked";
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  proofEyebrow: string;
  proofTitle: string;
  proofDescription: string;
};

export function ServiceHero({
  eyebrow,
  title,
  description,
  bullets,
  variant = "split",
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  proofEyebrow,
  proofTitle,
  proofDescription
}: ServiceHeroProps) {
  const ctas = (
    <div className="flex flex-wrap gap-3">
      <ButtonLink href={primaryHref}>{primaryCta}</ButtonLink>
      {secondaryCta && secondaryHref ? (
        <ButtonLink href={secondaryHref} variant="secondary">
          {secondaryCta}
        </ButtonLink>
      ) : null}
    </div>
  );

  const bulletPills = (
    <div className="flex flex-wrap gap-2">
      {bullets.map((bullet) => (
        <span
          className="rounded-pill border border-white/12 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80"
          key={bullet}
        >
          {bullet}
        </span>
      ))}
    </div>
  );

  const bulletList = (
    <div className="grid gap-3 sm:grid-cols-2">
      {bullets.map((bullet) => (
        <div className="rounded-card border border-white/10 bg-white/10 px-4 py-4" key={bullet}>
          <span className="block text-sm font-semibold text-white/86">{bullet}</span>
        </div>
      ))}
    </div>
  );

  const proof = (
    <ProofImagePlaceholder
      className={variant === "editorial" ? "min-h-[25rem]" : "min-h-[23rem]"}
      description={proofDescription}
      eyebrow={proofEyebrow}
      tags={variant === "split" ? bullets : []}
      theme={variant === "stacked" ? "light" : "dark"}
      title={proofTitle}
    />
  );

  if (variant === "editorial") {
    return (
      <section className="hero-surface py-20 text-white lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
          <Reveal className="lg:pr-3" delay={120}>
            {proof}
          </Reveal>

          <Reveal className="space-y-7 lg:pl-4" delay={20}>
            <p className="eyebrow text-white/60">{eyebrow}</p>
            <div className="space-y-5">
              <h1 className="max-w-3xl font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-[4.25rem]">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/78 sm:text-lg">{description}</p>
            </div>
            {bulletList}
            {ctas}
          </Reveal>
        </Container>
      </section>
    );
  }

  if (variant === "stacked") {
    return (
      <section className="hero-surface py-20 text-white lg:py-24">
        <Container className="space-y-8">
          <Reveal className="max-w-4xl space-y-7" delay={20}>
            <p className="eyebrow text-white/60">{eyebrow}</p>
            <h1 className="font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="max-w-3xl text-base leading-7 text-white/78 sm:text-lg">{description}</p>
            {ctas}
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.14fr_0.86fr] lg:items-stretch">
            <Reveal delay={120}>{proof}</Reveal>
            <Reveal className="surface-dark rounded-panel p-6 shadow-strong" delay={180}>
              <p className="eyebrow text-white/45">What this service covers</p>
              <div className="mt-5 grid gap-4">
                {bullets.map((bullet) => (
                  <div className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0" key={bullet}>
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                    <span className="text-base leading-7 text-white/82">{bullet}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="hero-surface py-20 text-white lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal className="space-y-7" delay={20}>
          <p className="eyebrow text-white/60">{eyebrow}</p>
          <h1 className="font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/78 sm:text-lg">{description}</p>
          {ctas}
          {bulletPills}
        </Reveal>

        <Reveal className="space-y-4" delay={120}>
          {proof}
        </Reveal>
      </Container>
    </section>
  );
}
