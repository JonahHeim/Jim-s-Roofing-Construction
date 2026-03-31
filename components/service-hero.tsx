import { ButtonLink } from "./button-link";
import { Container } from "./container";
import { ProofImagePlaceholder } from "./proof-image-placeholder";
import { Reveal } from "./reveal";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
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
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  proofEyebrow,
  proofTitle,
  proofDescription
}: ServiceHeroProps) {
  return (
    <section className="hero-surface py-20 text-white lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal className="space-y-7" delay={20}>
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
        </Reveal>

        <Reveal className="space-y-4" delay={120}>
          <ProofImagePlaceholder
            className="min-h-[23rem]"
            description={proofDescription}
            eyebrow={proofEyebrow}
            tags={bullets}
            theme="dark"
            title={proofTitle}
          />
        </Reveal>
      </Container>
    </section>
  );
}
