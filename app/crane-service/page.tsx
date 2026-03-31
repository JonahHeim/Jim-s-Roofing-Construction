import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceHero } from "@/components/service-hero";
import { contactInfo } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Crane Service",
  description: "Crane-service inquiries for projects that require lifting support and coordination.",
  path: "/crane-service"
});

export default function CraneServicePage() {
  return (
    <>
      <ServiceHero
        bullets={["Niche project support", "Clear job-fit conversation", "Direct local contact"]}
        description="For projects that need crane support, start with a clear conversation about the job, the site, and what needs to happen next."
        eyebrow="Crane service"
        primaryCta="Ask about crane service"
        primaryHref="/contact"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Get Crane Support for Projects That Need the Right Equipment and Coordination"
      />

      <section className="section-space">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            description="Help visitors quickly decide whether their project belongs here."
            eyebrow="Use cases"
            title="Some Jobs Need More Than a Standard Crew and a Basic Setup"
          />
          <div className="grid gap-4">
            {[
              "Projects that require lifting support",
              "Jobs where access or placement matters",
              "Situations that need a more specialized setup"
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
            <p className="eyebrow text-white/45">Crane CTA</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92]">Tell Us About the Project and We Will Help You Determine the Right Next Step</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Ask about crane service</ButtonLink>
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
