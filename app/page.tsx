import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FAQAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import {
  contactInfo,
  homeFaqs,
  homeServiceCards,
  processSteps,
  reviewSummary,
  serviceAreas,
  trustBadges
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Roofing-First Protection for Pinckney Homeowners",
  description:
    "GAF Master Elite roofing, siding, tree removal, and remodeling help for Pinckney and surrounding communities."
};

export default function HomePage() {
  return (
    <>
      <section className="hero-surface overflow-hidden py-20 text-white lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <p className="eyebrow text-white/60">Roofing-first authority for Pinckney homes</p>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-5xl uppercase leading-[0.88] sm:text-6xl lg:text-7xl">
                Roofing-First Protection From a GAF Master Elite Team Serving Pinckney and Nearby Communities
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
                Jim&apos;s Roofing &amp; Construction helps local homeowners move forward with confidence through licensed,
                insured roofing, siding, tree removal, and select home-improvement work backed by more than 20 years of
                local experience.
              </p>
              <p className="max-w-2xl text-base leading-7 text-white/65">
                When the work matters, the first call should give you clarity. We inspect the situation, explain the
                right next step, and help you protect the home without the usual contractor guesswork.
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
          </div>

          <div className="space-y-5">
            <div className="surface-dark rounded-hero border border-white/10 p-6 shadow-strong sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-card border border-white/10 bg-white/5 p-5">
                  <p className="eyebrow text-white/45">Credential</p>
                  <p className="mt-3 font-display text-3xl uppercase leading-none text-white">GAF Master Elite</p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Roofing authority that helps this site feel more specific and more trustworthy than a generic
                    contractor page.
                  </p>
                </div>
                <div className="rounded-card border border-white/10 bg-white/5 p-5">
                  <p className="eyebrow text-white/45">Local proof</p>
                  <p className="mt-3 font-display text-3xl uppercase leading-none text-white">20+ Years</p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Serving Pinckney and nearby Michigan communities with work that needs to be done the right way.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-card border border-[color:rgba(234,195,54,0.25)] bg-[color:rgba(234,195,54,0.1)] p-5">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="eyebrow text-white/45">Review signal</p>
                    <p className="mt-2 font-display text-4xl uppercase leading-none text-white">
                      {reviewSummary.rating} / 5
                    </p>
                  </div>
                  <a className="text-sm font-semibold text-gold" href={contactInfo.reviewHref} rel="noreferrer" target="_blank">
                    Read reviews
                  </a>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  The linked review profile currently shows {reviewSummary.count}, giving the rebuild a strong trust
                  anchor without forcing visitors to guess at the company&apos;s reputation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            description="Homeowners want more than a promise. They want credentials, local accountability, and a contractor who can explain the job clearly before work begins."
            eyebrow="Trust badge strip"
            title="Proof That Should Matter Before You Hire Anyone"
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
            description="Roofing leads the story, but we also help with siding, tree removal, additions, remodeling, and crane-service needs when the project calls for one reliable local team."
            eyebrow="Primary services"
            title="Focused Services for the Parts of Your Property You Cannot Afford to Ignore"
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
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="surface-dark rounded-panel p-7 text-white shadow-strong">
            <p className="eyebrow text-white/45">Why choose us</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9]">
              Credentials Matter, but Homeowners Feel the Difference in How the Job Is Handled
            </h2>
            <p className="mt-5 text-base leading-7 text-white/75">
              We build trust by pairing recognized roofing credentials with practical homeowner care: honest
              inspections, straightforward communication, careful cleanup, and work designed for Michigan weather and
              real-life wear.
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
            description="You should know what happens next from the first conversation through the final walkthrough. We keep the process simple so you are not left guessing about timing, scope, or communication."
            eyebrow="Process"
            title="A Clear Process Keeps the Project Moving and Keeps You Informed"
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
              Trust should be visible before a homeowner ever leaves the site. This rebuild surfaces the strongest proof
              early and keeps the full review path one click away.
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
            description="Local coverage matters when you need someone who knows the area, can show up when needed, and is close enough to stand behind the work."
            eyebrow="Service area"
            title="Proudly Serving Pinckney and Nearby Communities"
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
              description="The goal is simple: remove enough uncertainty that reaching out feels easy."
              eyebrow="FAQ"
              title="Quick Answers Before You Call"
            />
            <FAQAccordion items={homeFaqs} />
          </div>
          <div className="surface-panel p-7">
            <p className="eyebrow">Need a clear next step?</p>
            <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92] text-navy">
              Start With a Free Estimate and a Straightforward Conversation
            </h3>
            <p className="mt-5 text-base leading-7 text-muted">
              If you need help with roofing, siding, tree removal, or a home-improvement project, reach out and get a
              clear next step from a trusted local team.
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
