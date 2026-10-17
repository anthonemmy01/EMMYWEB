import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, TrendingUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF9F5] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3">
            Client Success &amp; Social Proof
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-950 mb-5 text-balance">
            Real Stories, Measurable Business Growth
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            I measure the success of every website by how effectively it moves the needle for my clients: more qualified bookings, higher sales, and immediate brand credibility.
          </p>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between hover:border-neutral-300 transition-colors"
            >
              <div>
                {/* Top Highlight & Platform */}
                <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-neutral-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.highlight}</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-medium">
                    <span>{t.platform}</span>
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal mb-6">
                  “{t.quote}”
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-display font-bold text-xs shrink-0">
                    {t.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-neutral-950">
                      {t.name}
                    </h4>
                    <p className="text-xs text-neutral-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[11px] text-neutral-400 block uppercase font-medium">Outcome</span>
                  <span className="text-xs font-semibold text-neutral-700">{t.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
