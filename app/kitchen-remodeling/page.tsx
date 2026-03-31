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
        description="A kitchen remodel should improve the way the home feels, functions, and supports daily life."
        eyebrow="Kitchen remodeling"
        primaryCta="Plan your kitchen remodel"
        primaryHref="/contact"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Build a Kitchen That Works Better Every Single Day"
      />

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            description="Sell the remodel in terms of outcomes, not generic contractor phrases."
            eyebrow="Kitchen outcomes"
            title="Turn the Kitchen Into a Better Daily Space"
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
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] text-navy">
              Start Your Remodel With a Clear Conversation About the Space and Your Goals
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              We will help you turn ideas into a realistic next step.
            </p>
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
