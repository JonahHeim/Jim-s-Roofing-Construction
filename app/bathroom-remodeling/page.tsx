import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceHero } from "@/components/service-hero";
import { contactInfo } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Bathroom Remodeling",
  description: "Bathroom remodeling planning and consultation from Jim's Roofing & Construction.",
  path: "/bathroom-remodeling"
});

export default function BathroomRemodelingPage() {
  return (
    <>
      <ServiceHero
        bullets={["Comfort and usability", "Updated finishes", "Value-conscious improvements"]}
        description="Bathroom updates that improve comfort, function, and finish."
        eyebrow="Bathroom remodeling"
        primaryCta="Start your bathroom remodel"
        primaryHref="/contact"
        proofDescription="Use a finished bathroom image with tile, vanity, and fixtures visible in one frame. Best choice: a clean angle that makes the upgrade feel tangible right away."
        proofEyebrow="Hero work-proof image"
        proofTitle="Finished bathroom remodel"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Bathroom Remodeling That Feels Better to Use"
      />

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            description="The upgrades homeowners usually care about most."
            eyebrow="Bathroom outcomes"
            title="Bathroom Goals"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {["Better layout", "Improved comfort", "Cleaner, more current feel"].map((item) => (
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
            <p className="eyebrow">Bathroom CTA</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] text-navy">Plan Your Bathroom Remodel</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">We will help you choose the right next step.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Start your bathroom remodel</ButtonLink>
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
