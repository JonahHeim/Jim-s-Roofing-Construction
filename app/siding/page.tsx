import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ProofImagePlaceholder } from "@/components/proof-image-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { ServiceHero } from "@/components/service-hero";
import { contactInfo } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Siding",
  description: "Siding consultation and installation support from Jim's Roofing & Construction.",
  path: "/siding"
});

export default function SidingPage() {
  return (
    <>
      <ServiceHero
        bullets={["Improved curb appeal", "Better weather protection", "Potential energy-efficiency gains"]}
        description="New siding that improves appearance, protection, and efficiency."
        eyebrow="Siding"
        primaryCta="Schedule a siding consultation"
        primaryHref="/contact"
        proofDescription="Use a wide exterior before-and-after or finished siding shot. Show color, trim lines, and enough of the house to make the upgrade obvious at a glance."
        proofEyebrow="Hero work-proof image"
        proofTitle="Finished siding upgrade"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Siding That Looks Better and Protects Better"
      />

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            description="Siding should improve both looks and performance."
            eyebrow="Benefits"
            title="Why Replace Siding"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Freshen the look of the home",
              "Strengthen exterior protection",
              "Support efficiency and comfort"
            ].map((item) => (
              <div className="surface-card p-6" key={item}>
                <p className="text-xl font-semibold leading-8 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-background-soft">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="surface-panel p-7">
            <p className="eyebrow">Scope</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] text-navy">What We Help With</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-muted">
              {["Siding replacement", "Material guidance", "Project walkthrough and estimate", "Clear expectations on next steps"].map(
                (item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="space-y-4">
            <ProofImagePlaceholder
              className="min-h-[19rem]"
              description="This is a strong spot for a before-and-after exterior angle showing new siding, trim, and a cleaner finished look."
              eyebrow="Secondary proof slot"
              tags={["Before / after", "Trim detail", "Street view"]}
              title="Siding transformation"
            />
            <div className="surface-dark rounded-panel p-7 text-white">
              <p className="eyebrow text-white/45">Siding CTA</p>
              <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92]">Schedule a Siding Consultation</h3>
              <p className="mt-5 text-base leading-7 text-white/75">
                Tell us what you want to update and we will talk through the next step.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Schedule a siding consultation</ButtonLink>
                <ButtonLink href={contactInfo.phoneHref} variant="secondary">
                  Call {contactInfo.phoneDisplay}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
