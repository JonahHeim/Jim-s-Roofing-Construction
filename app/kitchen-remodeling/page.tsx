import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceHero } from "@/components/service-hero";
import { contactInfo } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kitchen Remodeling",
  description: "Kitchen remodeling planning and consultation from Jim's Roofing & Construction.",
  path: "/kitchen-remodeling"
});

export default function KitchenRemodelingPage() {
  return (
    <>
      <ServiceHero
        bullets={["Layout improvement", "Better daily function", "Value-focused upgrades"]}
        description="Kitchen updates that improve function, storage, and daily use."
        eyebrow="Kitchen remodeling"
        primaryCta="Plan your kitchen remodel"
        primaryHref="/contact"
        proofDescription="Use a finished kitchen photo with counters, cabinets, and lighting all visible. The image should feel bright, clean, and clearly lived-in rather than staged like a stock showroom."
        proofEyebrow="Hero work-proof image"
        proofTitle="Finished kitchen remodel"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Kitchen Remodeling That Works Better Every Day"
        variant="stacked"
      />

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            description="The improvements homeowners usually want most."
            eyebrow="Kitchen outcomes"
            title="Kitchen Goals"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {["Better workflow", "Smarter storage", "A more finished, inviting space"].map((item) => (
              <div className="surface-card p-6" key={item}>
                <p className="text-xl font-semibold leading-8 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-background-soft">
        <Container>
          <div className="surface-panel p-7">
            <p className="eyebrow">Kitchen CTA</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] text-navy">Plan Your Kitchen Remodel</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">We will help you define the next step.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Plan your kitchen remodel</ButtonLink>
              <ButtonLink href={contactInfo.phoneHref} variant="ghost">
                Call {contactInfo.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
