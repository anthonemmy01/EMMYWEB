import React from 'react';
import { SERVICES, Service } from '../data/portfolioData';
import { ArrowUpRight, Check, Clock, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3">
            Services &amp; Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-950 mb-5 text-balance">
            Tailored Web Solutions Built for Growth &amp; Simplicity
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Whether you need a brand-new website crafted from scratch, a strategic redesign to boost conversions, or custom integrations for e-commerce and bookings — here is how we can collaborate.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {SERVICES.map((service, index) => {
            // First two services get larger bento cards (col-span-6), next three get col-span-4
            const isMarquee = index < 2;
            const colSpan = isMarquee ? 'lg:col-span-6' : 'lg:col-span-4';

            return (
              <div
                key={service.id}
                className={`${colSpan} rounded-2xl border border-neutral-200 bg-[#FAF9F5]/70 p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all group`}
              >
                <div>
                  {/* Top Bar: Editorial Number & Platform */}
                  <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-neutral-200/80">
                    <span className="text-sm font-mono font-bold text-neutral-400 group-hover:text-neutral-950 transition-colors">
                      {service.number}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{service.timeline}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-neutral-700 font-semibold">{service.platform}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-950 mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features Deliverable List */}
                  <div className="space-y-2.5 mb-8">
                    <p className="text-xs font-semibold text-neutral-900 tracking-wider uppercase mb-1">
                      What's Included:
                    </p>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="max-w-[240px]">
                    <span className="text-[11px] uppercase font-semibold text-neutral-400 block">Ideal For</span>
                    <span className="text-xs text-neutral-700 line-clamp-2">{service.idealFor}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-950 hover:text-white hover:border-neutral-950 active:scale-[0.98] transition-all whitespace-nowrap shadow-sm shrink-0"
                  >
                    <span>Inquire About This</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Callout Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-neutral-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              Not sure which service or platform fits your goals?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
              We can jump on a free 15-minute discovery call to review your current site, clarify requirements, and choose the most effective approach for your timeline.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('General Inquiry / Platform Advice')}
            className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-100 transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Book Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};
