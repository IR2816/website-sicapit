"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { faqs } from "@/lib/data/faq";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-12 bg-surface p-6 md:p-8 rounded-3xl border border-line">
      {faqs.map((faq, index) => (
        <ScrollReveal key={index}>
          <div className={`border-b border-line last:border-b-0 ${index === 0 ? 'mt-0' : 'mt-2'}`}>
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full py-6 flex items-center justify-between text-left group"
            >
              <h3 className={`font-heading text-lg font-bold pr-6 transition-colors duration-300 ${openIndex === index ? 'text-brand' : 'text-foreground dark:text-slate-200 group-hover:text-brand/80'}`}>
                {faq.question}
              </h3>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-brand bg-brand text-white rotate-180' 
                    : 'border-line text-muted-foreground dark:text-slate-400 group-hover:border-brand/40 group-hover:text-brand'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={openIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'
              }`}
            >
              <p className="text-muted-foreground leading-relaxed pr-10 text-sm md:text-base border-l-2 border-brand/30 pl-4 py-1">
                {faq.answer}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}


