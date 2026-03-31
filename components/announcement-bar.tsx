import { contactInfo, trustBadges } from "@/lib/site-data";
import { Container } from "./container";

export function AnnouncementBar() {
  return (
    <div className="border-b border-white/10 bg-navy text-white/80">
      <Container className="flex flex-col gap-3 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {trustBadges.map((badge) => (
            <span
              className="rounded-pill border border-white/15 bg-white/5 px-3 py-1 tracking-[0.08em] text-white/75"
              key={badge}
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-white">
          <span className="text-white/65">Serving Pinckney and surrounding communities</span>
          <a className="font-semibold text-gold" href={contactInfo.phoneHref}>
            {contactInfo.phoneDisplay}
          </a>
        </div>
      </Container>
    </div>
  );
}
