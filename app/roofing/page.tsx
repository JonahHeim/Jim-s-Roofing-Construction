import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FAQAccordion } from "@/components/faq-accordion";
import { ProofImagePlaceholder } from "@/components/proof-image-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { ServiceHero } from "@/components/service-hero";
import { contactInfo, roofingFaqs } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Roofing",
  description:
    "Roof replacement, repair, storm-damage response, and inspections from Jim's Roofing & Construction.",
  path: "/roofing"
});

export default function RoofingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: roofingFaqs.map((item) => ({
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
        bullets={["Roof replacement", "Roof repair", "Storm-damage response", "Roof inspections"]}
        description="Roof repair, replacement, inspections, and storm-damage help from a trusted local team."
        eyebrow="Roofing"
        primaryCta="Book a roofing estimate"
        primaryHref="/contact"
        proofDescription="Use a real roof replacement or repair photo with the full front elevation visible. Best choice: a clean daylight shot that shows shingles, roofline detail, and obvious finished quality."
        proofEyebrow="Hero work-proof image"
        proofTitle="Completed roof replacement"
        secondaryCta={`Call ${contactInfo.phoneDisplay}`}
        secondaryHref={contactInfo.phoneHref}
        title="Roofing You Can Count On"
      />

      <section className="section-space">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              description="Common reasons homeowners call us."
              eyebrow="Roofing problems"
              title="When to Call"
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
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] text-navy">Roofing Services</h2>
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
        <Container className="space-y-10">
          <SectionHeading
            description="Roofing is the clearest place to prove the work with real project photos."
            eyebrow="Work-proof gallery"
            title="High-Impact Roofing Photo Slots"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <ProofImagePlaceholder
              className="min-h-[22rem]"
              description="Best fit: a finished replacement shot from the driveway or street, with the roofline, house shape, and material upgrade all visible in one frame."
              eyebrow="Roofing proof slot"
              tags={["After photo", "Front elevation", "Finished shingles"]}
              title="Completed roof replacement"
            />
            <ProofImagePlaceholder
              className="min-h-[22rem]"
              description="Best fit: a storm-damage or repair image that shows the problem clearly, then the corrected result. Real condition photos build trust fast here."
              eyebrow="Roofing proof slot"
              tags={["Storm damage", "Repair in progress", "Before / after"]}
              title="Storm repair proof"
              theme="dark"
            />
          </div>
        </Container>
      </section>

      <section className="section-space">
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
            <SectionHeading eyebrow="Roofing FAQ" title="Roofing Questions" />
            <FAQAccordion items={roofingFaqs} />
          </div>
          <div className="surface-panel p-7">
            <p className="eyebrow">Roofing CTA</p>
            <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92] text-navy">Get a Roofing Estimate</h3>
            <p className="mt-5 text-base leading-7 text-muted">
              Start with a quick call or estimate request.
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
