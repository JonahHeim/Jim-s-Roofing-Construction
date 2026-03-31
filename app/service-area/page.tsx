import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FAQAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceHero } from "@/components/service-hero";
import { contactInfo, serviceAreaFaqs, serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Service Area",
  description: "See if Jim's Roofing & Construction serves your part of the Pinckney area."
};

export default function ServiceAreaPage() {
  return (
    <>
      <ServiceHero
        bullets={serviceAreas.slice(0, 4)}
        description="We proudly serve homeowners in Pinckney and surrounding communities with roofing, exterior work, and select home-improvement services."
        eyebrow="Service area"
        primaryCta="See if we serve your area"
        primaryHref="/contact"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Local Service for Pinckney and Nearby Michigan Communities"
      />

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            description="Group towns and counties clearly so the visitor can answer the service-area question in seconds."
            eyebrow="Coverage list"
            title="Local Coverage Should Feel Concrete, Not Implied"
          />
          <div className="surface-panel p-6">
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span className="rounded-pill border border-line bg-white px-4 py-2 text-sm font-medium text-navy" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-background-soft">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading eyebrow="Service area FAQ" title="A Few Quick Answers Help Nearby Visitors Know Whether It Makes Sense to Call" />
            <FAQAccordion items={serviceAreaFaqs} />
          </div>
          <div className="surface-dark rounded-panel p-7 text-white">
            <p className="eyebrow text-white/45">Service area CTA</p>
            <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92]">
              If Your Home Is In or Near Our Service Area, Let Us Talk Through the Project
            </h3>
            <p className="mt-5 text-base leading-7 text-white/75">
              A quick call or estimate request can confirm fit and get you moving in the right direction.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Request a free estimate</ButtonLink>
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
