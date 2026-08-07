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
    <section id="faqs" aria-label="Frequently asked questions" className="py-24">
      <div className="mx-auto max-w-[75rem] px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border border-t border-border">
          {FAQS.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="flex-1 text-xl font-semibold text-foreground">
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
                  <p className="pb-5 pl-11 text-base leading-relaxed text-muted-foreground">
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
