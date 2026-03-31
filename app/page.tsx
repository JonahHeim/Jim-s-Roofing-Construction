import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FAQAccordion } from "@/components/faq-accordion";
import { ProofImagePlaceholder } from "@/components/proof-image-placeholder";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";
import {
  companyName,
  contactInfo,
  homeFaqs,
  homeServiceCards,
  processSteps,
  reviewSummary,
  serviceAreas,
  trustBadges
} from "@/lib/site-data";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Roofing-First Protection for Pinckney Homeowners",
    description:
      "GAF Master Elite roofing, siding, tree removal, and remodeling help for Pinckney and surrounding communities.",
    path: "/"
  })
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
        type="application/ld+json"
      />
      <section className="hero-surface overflow-hidden py-20 text-white lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal className="space-y-8" delay={20}>
            <p className="eyebrow text-white/60">GAF Master Elite roofing in Pinckney</p>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-5xl uppercase leading-[0.88] sm:text-6xl lg:text-7xl">
                Trusted Roofing for Pinckney Homes
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
                Jim&apos;s Roofing &amp; Construction provides roofing, siding, tree removal, and remodeling help backed by
                GAF Master Elite credentials, 20+ years of local experience, and straightforward service.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact">Request a free estimate</ButtonLink>
              <ButtonLink href={contactInfo.phoneHref} variant="secondary">
                Call {contactInfo.phoneDisplay}
              </ButtonLink>
            </div>

            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  className="rounded-pill border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/82"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="space-y-5" delay={120}>
            <ProofImagePlaceholder
              className="min-h-[28rem]"
              description="Use a real finished roofing photo with the full house in frame. Best choice: a strong front-angle daylight shot that shows clean lines, fresh materials, and obvious curb-appeal impact."
              eyebrow="Hero work-proof image"
              tags={["Finished roof", "House in frame", "Daylight shot"]}
              theme="dark"
              title="Featured roof project"
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-card border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="eyebrow text-white/45">Credential</p>
                <p className="mt-3 font-display text-3xl uppercase leading-none text-white">GAF Master Elite</p>
              </div>
              <div className="rounded-card border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="eyebrow text-white/45">Local proof</p>
                <p className="mt-3 font-display text-3xl uppercase leading-none text-white">20+ Years</p>
              </div>
              <div className="rounded-card border border-[color:rgba(234,195,54,0.25)] bg-[color:rgba(234,195,54,0.14)] p-5 backdrop-blur">
                <p className="eyebrow text-white/45">Reviews</p>
                <p className="mt-3 font-display text-3xl uppercase leading-none text-white">{reviewSummary.rating} / 5</p>
                <p className="mt-2 text-sm text-white/70">{reviewSummary.count}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            description="The basics matter: real credentials, local experience, and clear communication."
            eyebrow="Trust badge strip"
            title="Why Homeowners Call Us"
          />
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { label: "Credential", value: "GAF Master Elite" },
              { label: "Longevity", value: "20+ years local" },
              { label: "Coverage", value: "Licensed & insured" },
              { label: "Confidence", value: "Insurance work welcome" }
            ].map((item) => (
              <div className="surface-card p-5" key={item.label}>
                <p className="eyebrow">{item.label}</p>
                <p className="mt-3 font-display text-3xl uppercase leading-none text-navy">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-background-soft">
        <Container className="space-y-10">
          <SectionHeading
            description="Roofing comes first, with additional services when the project needs them."
            eyebrow="Primary services"
            title="Services"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {homeServiceCards.map((card, index) => (
              <a
                className={`surface-card group flex min-h-72 flex-col justify-between p-6 transition-all duration-[var(--duration-fast)] ease-premium hover:-translate-y-1 hover:shadow-medium ${
                  index === 0 ? "lg:min-h-80 lg:col-span-2" : ""
                }`}
                href={card.href}
                key={card.href}
              >
                <div className="space-y-4">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3 className="font-display text-4xl uppercase leading-none text-navy">{card.title}</h3>
                  <p className="max-w-xl text-base leading-7 text-muted">{card.description}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  Explore this service
                  <span className="transition-transform duration-[var(--duration-fast)] ease-premium group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            description="Real job photos should do more of the selling than generic backgrounds."
            eyebrow="Work proof"
            title="Best Places for Real Project Images"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <ProofImagePlaceholder
              description="Use a completed front-elevation shot that makes the roof replacement obvious from the street."
              eyebrow="Homepage proof slot"
              tags={["After photo", "Curb appeal", "Full roofline"]}
              title="Roof replacement after"
            />
            <ProofImagePlaceholder
              description="Use an in-progress or after photo that shows storm response work on a real home."
              eyebrow="Homepage proof slot"
              tags={["Storm repair", "Real home", "Visible damage solved"]}
              title="Storm damage repair"
            />
            <ProofImagePlaceholder
              description="Use a siding or exterior refresh photo that adds variety while still showing finished workmanship."
              eyebrow="Homepage proof slot"
              tags={["Siding upgrade", "Exterior detail", "Before / after"]}
              title="Exterior upgrade"
            />
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="surface-dark rounded-panel p-7 text-white shadow-strong">
            <p className="eyebrow text-white/45">Why choose us</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9]">Work With a Local Team You Can Trust</h2>
            <p className="mt-5 text-base leading-7 text-white/75">
              We combine roofing credentials with honest inspections, clear communication, and careful work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Roofing authority backed by GAF Master Elite credentials",
              "Local team with a reputation to protect",
              "Help for insurance-related situations",
              "One dependable company for multiple exterior needs"
            ].map((item) => (
              <div className="surface-card p-6" key={item}>
                <span className="block h-1.5 w-16 rounded-full bg-gold" />
                <p className="mt-5 text-lg font-semibold leading-8 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-[color:rgba(221,230,244,0.35)]">
        <Container className="space-y-10">
          <SectionHeading
            description="You should know what happens next before the work starts."
            eyebrow="Process"
            title="Our Process"
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div className="surface-panel p-6" key={step.step}>
                <p className="font-display text-5xl uppercase leading-none text-gold">{step.step}</p>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="surface-panel p-7">
            <p className="eyebrow">Review summary</p>
            <p className="mt-4 font-display text-6xl uppercase leading-none text-navy">
              {reviewSummary.rating}
            </p>
            <p className="mt-2 text-base font-semibold text-foreground">{reviewSummary.count}</p>
            <p className="mt-4 text-base leading-7 text-muted">
              Check the latest reviews before you call.
            </p>
            <ButtonLink className="mt-6" href={contactInfo.reviewHref} variant="ghost">
              Read our reviews
            </ButtonLink>
          </div>
          <div className="grid gap-4">
            {reviewSummary.highlights.map((item) => (
              <div className="surface-card p-6" key={item}>
                <p className="text-base leading-7 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-background-soft">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            description="Serving Pinckney and nearby communities."
            eyebrow="Service area"
            title="Where We Work"
          />
          <div className="surface-panel p-6">
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span className="rounded-pill border border-line bg-white px-4 py-2 text-sm font-medium text-navy" key={area}>
                  {area}
                </span>
              ))}
            </div>
            <ButtonLink className="mt-6" href="/service-area" variant="ghost">
              View service areas
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              description="A few quick answers before you call."
              eyebrow="FAQ"
              title="Common Questions"
            />
            <FAQAccordion items={homeFaqs} />
          </div>
          <div className="surface-panel p-7">
            <p className="eyebrow">Need a clear next step?</p>
            <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92] text-navy">
              Start With a Free Estimate
            </h3>
            <p className="mt-5 text-base leading-7 text-muted">
              Tell us about the project and we will help you take the next step.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Request your free estimate</ButtonLink>
              <ButtonLink href={contactInfo.phoneHref} variant="ghost">
                Prefer to call?
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
