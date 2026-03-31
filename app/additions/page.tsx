import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceHero } from "@/components/service-hero";
import { contactInfo } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Additions",
  description: "Home additions and broader improvement planning from Jim's Roofing & Construction.",
  path: "/additions"
});

export default function AdditionsPage() {
  return (
    <>
      <ServiceHero
        bullets={["Space planning", "Functional improvements", "Clear consultation path"]}
        description="Add space, improve flow, and plan the right next step for your home."
        eyebrow="Additions"
        primaryCta="Start your additions conversation"
        primaryHref="/contact"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Add Space That Fits the Way You Live"
      />

      <section className="section-space">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            description="Projects that make the home work better."
            eyebrow="Project fit"
            title="What We Help With"
          />
          <div className="grid gap-4">
            {[
              "Home additions",
              "Layout-driven improvements",
              "Projects planned around daily use and long-term value"
            ].map((item) => (
              <div className="surface-card p-6" key={item}>
                <p className="text-lg font-semibold leading-8 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-background-soft">
        <Container>
          <div className="surface-dark rounded-panel p-7 text-white">
            <p className="eyebrow text-white/45">Additions CTA</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92]">Talk Through Your Project</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              We will help you decide on the right next step.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Start your additions conversation</ButtonLink>
              <ButtonLink href={contactInfo.phoneHref} variant="secondary">
                Call {contactInfo.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
