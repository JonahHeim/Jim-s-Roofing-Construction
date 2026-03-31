"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="surface-card overflow-hidden" key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span className="text-lg font-semibold text-foreground">{item.question}</span>
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-xl text-navy transition-transform duration-[var(--duration-base)] ease-premium ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-[var(--duration-base)] ease-premium ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-base leading-7 text-muted md:px-6">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
