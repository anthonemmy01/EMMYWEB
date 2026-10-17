import React from 'react';
import { Target, Compass, Award, Lightbulb, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onStartProject: () => void;
}

export const About: React.FC<AboutProps> = ({ onStartProject }) => {
  return (
    <section id="about" className="py-24 bg-[#FAF9F5] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-200">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
              Meet Your Website Partner
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-950">
              Crafting Digital Spaces That Convert &amp; Inspire
            </h2>
          </div>
          <div className="text-sm text-neutral-600 max-w-md">
            <span>Specialized Wix &amp; Squarespace Developer</span>
            <span aria-hidden="true" className="mx-2 text-neutral-400">·</span>
            <span>6+ Years of Commercial Experience</span>
            <span aria-hidden="true" className="mx-2 text-neutral-400">·</span>
            <span>85+ Projects</span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed text-base sm:text-lg font-normal">
            <p className="text-xl sm:text-2xl font-medium text-neutral-950 font-display leading-snug">
              “Your website is often the first conversation a client has with your brand. It should look exceptional, build instant trust, and make doing business with you feel effortless.”
            </p>

            <p>
              Hi, I’m <strong className="font-semibold text-neutral-900">Eniola Sarah</strong>. I partner with founders, business owners, consultants, coaches, and boutique brands to create strategic, custom websites on <strong className="font-semibold text-neutral-900">Wix Studio</strong> and <strong className="font-semibold text-neutral-900">Squarespace</strong>.
            </p>

            <p>
              Too many business owners get trapped in one of two extremes: either settling for an uninspired, generic DIY template that doesn’t reflect their caliber, or spending tens of thousands on a brittle WordPress setup that breaks every time a plugin updates.
            </p>

            <p>
              My mission is to deliver the sweet spot: <span className="font-semibold text-neutral-950">agency-caliber bespoke design with complete operational autonomy</span>. Every website I build combines high-end editorial aesthetics with conversion-engineered page architecture, tailored custom CSS or Velo code, and comprehensive video handover training.
            </p>

            {/* Principles Bento Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-8 border-t border-neutral-200">
              <div className="p-4 bg-white rounded-xl border border-neutral-200/90 shadow-sm">
                <Target className="w-5 h-5 text-neutral-900 mb-2.5" />
                <h4 className="text-sm font-bold font-display text-neutral-900 mb-1">Conversion First</h4>
                <p className="text-xs text-neutral-600 leading-normal">
                  Strategic layout flow designed to turn browsers into booked consultations and buyers.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-neutral-200/90 shadow-sm">
                <Compass className="w-5 h-5 text-neutral-900 mb-2.5" />
                <h4 className="text-sm font-bold font-display text-neutral-900 mb-1">Bespoke Identity</h4>
                <p className="text-xs text-neutral-600 leading-normal">
                  Zero template clones. Custom typography and color harmony tailored to your positioning.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-neutral-200/90 shadow-sm">
                <HeartHandshake className="w-5 h-5 text-neutral-900 mb-2.5" />
                <h4 className="text-sm font-bold font-display text-neutral-900 mb-1">True Autonomy</h4>
                <p className="text-xs text-neutral-600 leading-normal">
                  Recorded Loom video tutorials empowering you to edit content effortlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Card & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-7 shadow-sm">
              <h3 className="text-lg font-bold font-display text-neutral-950 mb-5 pb-4 border-b border-neutral-100">
                Credentials &amp; Platform Standing
              </h3>

              <div className="space-y-4 text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-950">Official Wix Studio Partner</span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Vetted expert in proportional scaling, custom breakpoints &amp; Velo JavaScript databases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-950">Squarespace Circle Member</span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Specialist in Fluid Engine, custom CSS architecture &amp; Acuity Scheduling integrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-950">6+ Years Web Design Experience</span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Background in user experience (UX), visual branding, and conversion rate optimization (CRO).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-950">Global Remote Availability</span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Serving clients seamlessly across the UK, Europe, United States, Canada, and Australia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={onStartProject}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 transition-colors text-center"
                >
                  Work Directly With Eniola
                </button>
              </div>
            </div>

            {/* Quick Quote Pullout */}
            <div className="p-6 rounded-2xl bg-neutral-100/70 border border-neutral-200/60">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                Client Testimonial Highlight
              </p>
              <p className="text-sm italic text-neutral-800 leading-relaxed mb-3">
                “Eniola made our web design process so straightforward. She didn’t just make our site look stunning — she thought through every step of how our clients interact with us.”
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <span className="font-semibold text-neutral-900">Dr. Marcus Chen</span>
                <span aria-hidden="true">·</span>
                <span>Executive Coach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
