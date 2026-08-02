"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who is this platform for?",
    answer:
      "Individuals looking for mentorship or career growth, executives and managers seeking leadership training, teams that want to work better together, and organizations that need to hire top talent.",
  },
  {
    question: "How does mentor matching work?",
    answer:
      "You share your goals and background, and our system matches you with mentors whose experience and expertise align with what you're looking to grow.",
  },
  {
    question: "Can my company use multiple solutions at once?",
    answer:
      "Yes. Most organizations combine executive training, team building, and recruitment support under a single plan tailored to their needs.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, you can create a free account to explore the platform before committing to a paid plan. No credit card required to get started.",
  },
  {
    question: "How quickly can we fill open roles?",
    answer:
      "Most partners see qualified candidates within the first two weeks, with average placements completed in under a month depending on role complexity.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-purple-600">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={faq.question} className="px-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-slate-600">
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