import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FAQAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceHero } from "@/components/service-hero";
import { contactInfo, serviceAreaFaqs, serviceAreas } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Service Area",
  description: "See if Jim's Roofing & Construction serves your part of the Pinckney area.",
  path: "/service-area"
});

export default function ServiceAreaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceAreaFaqs.map((item) => ({
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
      <ServiceHero
        bullets={serviceAreas.slice(0, 4)}
        description="Serving Pinckney and nearby communities with roofing and related services."
        eyebrow="Service area"
        primaryCta="See if we serve your area"
        primaryHref="/contact"
        proofDescription="Use a branded truck, jobsite, or completed exterior photo that ties the company to local neighborhoods. This image should make the service area feel real and nearby."
        proofEyebrow="Hero work-proof image"
        proofTitle="Local project in service area"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Serving Pinckney and Nearby Communities"
      />

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            description="Check our core coverage areas below."
            eyebrow="Coverage list"
            title="Coverage Areas"
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
            <SectionHeading eyebrow="Service area FAQ" title="Service Area Questions" />
            <FAQAccordion items={serviceAreaFaqs} />
          </div>
          <div className="surface-dark rounded-panel p-7 text-white">
            <p className="eyebrow text-white/45">Service area CTA</p>
            <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92]">Not Sure If We Cover Your Area?</h3>
            <p className="mt-5 text-base leading-7 text-white/75">
              Call or send an estimate request and we will confirm it quickly.
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
