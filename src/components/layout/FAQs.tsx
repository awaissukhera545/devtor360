"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "What digital marketing services does Devtor360 offer?",
    answer:
      "Devtor360 offers a full suite of digital marketing services including SEO, PPC advertising, social media management, content marketing, email campaigns, and website design & development.",
  },
  {
    question:
      "How long does it take to see results from a digital marketing campaign?",
    answer:
      "Timelines vary by service and goals, but most clients start seeing measurable traction within the first few weeks, with compounding results over the following months.",
  },
  {
    question: "Does Devtor360 offer customized marketing plans for small businesses?",
    answer:
      "Yes — every engagement starts with a discovery call so we can tailor a plan and budget that fits your business size and goals.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" aria-label="Frequently asked questions" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <h2 className="text-center text-[1.75rem] font-bold leading-tight text-foreground sm:text-[2rem] lg:text-4xl lg:leading-10">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-8 max-w-3xl divide-y divide-border border-t border-border sm:mt-10 lg:mt-12">
          {FAQS.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-3 py-4 text-left sm:gap-4 sm:py-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="flex-1 text-base font-semibold text-foreground sm:text-lg lg:text-xl">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pl-10 text-sm leading-relaxed text-muted-foreground sm:pl-11 sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
