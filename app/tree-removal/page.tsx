import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ProofImagePlaceholder } from "@/components/proof-image-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { ServiceHero } from "@/components/service-hero";
import { contactInfo } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tree Removal",
  description: "Safety-first tree removal support from Jim's Roofing & Construction.",
  path: "/tree-removal"
});

export default function TreeRemovalPage() {
  return (
    <>
      <ServiceHero
        bullets={["Safety-focused approach", "Property-protection mindset", "Licensed and insured service"]}
        description="Safe tree removal for hazardous or storm-damaged trees near your home."
        eyebrow="Tree removal"
        primaryCta="Talk to us about tree removal"
        primaryHref="/contact"
        proofDescription="Use a dramatic but clear job photo: tree overhang, tight access near a house, or a finished removal with the property protected. The house should stay visible in frame."
        proofEyebrow="Hero work-proof image"
        proofTitle="Hazard tree removal"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Safe Tree Removal for High-Risk Situations"
      />

      <section className="section-space">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            description="A few things homeowners want to know before they call."
            eyebrow="Safety proof"
            title="Why Homeowners Trust Us"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {["Licensed and insured", "Safety-first planning", "Property-conscious execution"].map((item) => (
              <div className="surface-card p-6" key={item}>
                <p className="text-lg font-semibold leading-8 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-background-soft">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="surface-panel p-7">
            <p className="eyebrow">Tree removal scope</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] text-navy">Common Tree Removal Jobs</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-muted">
              {["Hazard trees", "Storm-damaged trees", "Difficult removals near structures"].map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <ProofImagePlaceholder
              className="min-h-[19rem]"
              description="Use a photo that shows the tree hazard in relation to the house, roofline, or driveway. This works best when the risk is obvious in one frame."
              eyebrow="Secondary proof slot"
              tags={["Risk near home", "Equipment in frame", "Protected property"]}
              title="Tree risk before removal"
              theme="dark"
            />
            <div className="surface-dark rounded-panel p-7 text-white">
              <p className="eyebrow text-white/45">Tree removal CTA</p>
              <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92]">Talk to Us Before It Gets Worse</h3>
              <p className="mt-5 text-base leading-7 text-white/75">
                If a tree is threatening the property, call now.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Talk to us about tree removal</ButtonLink>
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
