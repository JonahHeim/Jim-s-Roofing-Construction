import type { Metadata } from "next";
import { Container } from "@/components/container";
import { EstimateForm } from "@/components/estimate-form";
import { SectionHeading } from "@/components/section-heading";
import { contactInfo, serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Jim's Roofing & Construction for roofing, siding, tree removal, and remodeling help."
};

export default function ContactPage() {
  return (
    <>
      <section className="section-space bg-background-soft">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-7">
            <SectionHeading
              description="The fastest way to move forward is a straightforward conversation about the property, the issue, and the kind of help you need."
              eyebrow="Contact hero"
              title="Talk to Jim's Roofing & Construction Today"
            />
            <div className="surface-dark rounded-panel p-7 text-white">
              <p className="eyebrow text-white/45">Office details</p>
              <div className="mt-5 space-y-3 text-base leading-7 text-white/80">
                <p>{contactInfo.addressLine1}</p>
                <p>{contactInfo.addressLine2}</p>
                <p>
                  <a className="font-semibold text-gold" href={contactInfo.phoneHref}>
                    {contactInfo.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a className="font-semibold text-gold" href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a className="rounded-pill border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold" href={contactInfo.mapsHref}>
                  Get directions
                </a>
                <a className="rounded-pill border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold" href={contactInfo.reviewHref}>
                  Read reviews
                </a>
              </div>
            </div>
          </div>

          <EstimateForm context="Free estimate request" />
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="surface-panel overflow-hidden p-2">
            <iframe
              className="min-h-[420px] w-full rounded-card border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=550%20Rush%20Lake%20Rd,%20Pinckney,%20MI%2048169&output=embed"
              title="Jim's Roofing & Construction map"
            />
          </div>
          <div className="space-y-6">
            <SectionHeading
              description="A visible office location and clear credentials make the company feel real and accountable."
              eyebrow="Map and trust"
              title="A Local Business With a Physical Presence and a Clear Service Area"
            />
            <div className="grid gap-4">
              {["GAF Master Elite credential", "Licensed and insured", "Insurance work welcome"].map((item) => (
                <div className="surface-card p-5" key={item}>
                  <p className="text-lg font-semibold text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="surface-card p-6">
              <p className="eyebrow">Service area</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span className="rounded-pill border border-line bg-white px-4 py-2 text-sm font-medium text-navy" key={area}>
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
