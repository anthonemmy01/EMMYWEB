import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            Answers to Common Inquiries
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Everything you need to know about working together, choosing between Wix Studio and Squarespace, and how we launch your website.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between text-left gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
                >
                  <span className="text-base sm:text-lg font-bold font-display text-neutral-950 group-hover:text-neutral-700 transition-colors">
                    {faq.question}
                  </span>
                  <span className="p-1 text-neutral-500 group-hover:text-neutral-900 transition-colors shrink-0 mt-0.5">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pr-8 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 p-6 rounded-xl bg-[#FAF9F5] border border-neutral-200 text-center">
          <p className="text-sm font-semibold text-neutral-900 mb-1">
            Have a question that isn't answered here?
          </p>
          <p className="text-xs text-neutral-600 mb-3">
            Send me an email directly or drop a note through the contact form below.
          </p>
          <a
            href="mailto:eniola@sarahdesigns.com"
            className="text-xs font-bold text-neutral-950 underline hover:text-neutral-700 transition-colors"
          >
            eniola@sarahdesigns.com
          </a>
        </div>
      </div>
    </section>
  );
};
