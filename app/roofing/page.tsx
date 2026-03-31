import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FAQAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceHero } from "@/components/service-hero";
import { contactInfo, roofingFaqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Roofing",
  description:
    "Roof replacement, repair, storm-damage response, and inspections from Jim's Roofing & Construction."
};

export default function RoofingPage() {
  return (
    <>
      <ServiceHero
        bullets={["Roof replacement", "Roof repair", "Storm-damage response", "Roof inspections"]}
        description="When the roof is the problem, you need a contractor who can inspect it honestly, explain the right fix, and complete the work with care."
        eyebrow="Roofing"
        primaryCta="Book a roofing estimate"
        primaryHref="/contact"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Roofing Backed by GAF Master Elite Credentials and Local Accountability"
      />

      <section className="section-space">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              description="This page meets the visitor at the moment of concern, whether that concern is a leak, visible damage, storm impact, or a roof that simply looks like it has reached the end of its life."
              eyebrow="Roofing problems"
              title="Leaks, Storm Damage, and Aging Shingles Do Not Fix Themselves"
            />
            <div className="grid gap-4">
              {[
                "Leaks and water intrusion",
                "Storm and wind damage",
                "Aging shingles and visible wear",
                "Insurance-related roofing questions"
              ].map((item) => (
                <div className="surface-card p-5" key={item}>
                  <p className="text-lg font-semibold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-panel p-7">
            <p className="eyebrow">Roofing services</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] text-navy">
              Specific Roofing Help, Not Vague Contractor Language
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-muted">
              {[
                "Full roof replacement",
                "Targeted roof repairs",
                "Post-storm inspections",
                "Guidance for insurance-related situations"
              ].map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-space bg-background-soft">
        <Container className="grid gap-5 lg:grid-cols-4">
          {[
            "GAF Master Elite status",
            "Licensed and insured",
            "20+ years serving the area",
            "Review-backed local confidence"
          ].map((item, index) => (
            <div className={`${index === 1 ? "surface-dark text-white" : "surface-card"} p-6`} key={item}>
              <p className={`eyebrow ${index === 1 ? "text-white/45" : ""}`}>Roofing trust</p>
              <p className={`mt-4 text-xl font-semibold leading-8 ${index === 1 ? "text-white" : "text-foreground"}`}>
                {item}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading eyebrow="Roofing FAQ" title="Answers That Help a Homeowner Move Forward With Less Hesitation" />
            <FAQAccordion items={roofingFaqs} />
          </div>
          <div className="surface-panel p-7">
            <p className="eyebrow">Roofing CTA</p>
            <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92] text-navy">
              Get the Roof Looked at Before the Problem Grows
            </h3>
            <p className="mt-5 text-base leading-7 text-muted">
              Start with an estimate, an inspection, or a quick call about what you are seeing. We will help you
              understand the right next step.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Book a roofing estimate</ButtonLink>
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
