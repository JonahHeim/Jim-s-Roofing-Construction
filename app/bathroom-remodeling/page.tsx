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
        description="A bathroom remodel should improve comfort, function, and the way the home feels day after day."
        eyebrow="Bathroom remodeling"
        primaryCta="Start your bathroom remodel"
        primaryHref="/contact"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Upgrade the Bathroom Into a Space That Feels Better to Use"
      />

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            description="Make the remodel feel practical, not indulgent."
            eyebrow="Bathroom outcomes"
            title="A Better Bathroom Should Improve the Home Every Day"
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
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] text-navy">
              Talk Through the Project and Get a Clearer Path Forward
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              We will help you start with the right conversation, not pressure.
            </p>
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
