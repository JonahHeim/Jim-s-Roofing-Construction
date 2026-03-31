"use client";

import { useEffect, useState } from "react";
import { contactInfo } from "@/lib/site-data";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 360);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-50 flex gap-3 rounded-panel border border-white/10 bg-[color:rgba(0,0,51,0.95)] p-3 shadow-strong backdrop-blur transition-all duration-[var(--duration-base)] ease-premium md:hidden ${
        visible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-6 scale-[0.98] opacity-0"
      }`}
    >
      <a
        className="button-link flex-1 rounded-pill border border-white/15 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition-transform duration-[var(--duration-fast)] ease-premium active:scale-[0.99]"
        href={contactInfo.phoneHref}
      >
        Call now
      </a>
      <a
        className="button-link flex-1 rounded-pill bg-gold px-4 py-3 text-center text-sm font-semibold text-navy transition-transform duration-[var(--duration-fast)] ease-premium active:scale-[0.99]"
        href="/contact"
      >
        Free estimate
      </a>
    </div>
  );
}
