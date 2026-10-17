import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  return (
    <section id="home" className="pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Split-screen 2-column hero container with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed editorial kicker with subtle typographic separators */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-neutral-600 mb-5">
              <span>Wix Studio Certified</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span>Squarespace Circle Specialist</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span>Custom CSS &amp; Velo</span>
            </div>

            {/* Exact required headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 font-display leading-[1.08] mb-6 text-balance">
              I Design Websites That Make Your Business Stand Out.
            </h1>

            {/* Exact required supporting text */}
            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl mb-8">
              I help businesses and entrepreneurs build beautiful, strategic, and user-friendly websites with Wix and Squarespace, creating a strong online presence that reflects their brand and connects with their audience.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 active:scale-[0.99] transition-all whitespace-nowrap shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:text-neutral-950 transition-colors whitespace-nowrap"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </button>
            </div>

            {/* Value Guarantees - Clean unboxed text list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-neutral-200 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-800 shrink-0" />
                <span>100% Bespoke Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-800 shrink-0" />
                <span>2–3 Weeks Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-800 shrink-0" />
                <span>Full Loom Video Training</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Container (Hero Portrait & Framed Editorial Card) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Outer structural frame */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200/90 bg-white p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-neutral-100 relative">
                  <img
                    src="https://res.cloudinary.com/ht01xtep/image/upload/v1792248285/Birthday_Portrait___JHAYJHAYLIZED____jhay__jhay_birthday_birthdayshoot_photoshoot_birthdaycake_happybirthday_birthdaygirl_photography_photooftheday_lagosphotographer_abuleegba_abuleegbamua_abule.jpg"
                    alt="Eniola Sarah, Wix and Squarespace Designer & Developer"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/src/assets/images/eniola_designer_portrait_1792247075076.jpg";
                    }}
                  />
                  {/* Subtle contrast gradient at base for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Editorial caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold tracking-wider uppercase text-white/80 mb-0.5">
                      Bespoke Web Designer &amp; Developer
                    </p>
                    <p className="text-base font-bold font-display">
                      Eniola Sarah
                    </p>
                    <div className="flex items-center gap-2 text-xs text-white/90 mt-1">
                      <span>London &amp; Global Remote</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-300 font-medium">Booking Q2/Q3 2026</span>
                    </div>
                  </div>
                </div>

                {/* Sub-card feature strip */}
                <div className="mt-2.5 px-3 py-2.5 bg-neutral-50 rounded-lg flex items-center justify-between text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-neutral-900" />
                    <span className="font-medium">Specialized in Wix Studio &amp; Squarespace</span>
                  </div>
                  <span className="font-semibold text-neutral-900">Top Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI strip in a full-width row below the hero split */}
        <div className="mt-16 pt-8 border-t border-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-r border-neutral-200/70 pr-4 last:border-r-0">
              <p className="text-3xl sm:text-4xl font-bold text-neutral-950 font-display tabular-nums tracking-tight">
                85+
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-neutral-600">
                Websites Designed &amp; Launched
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">Across 12+ industries</p>
            </div>

            <div className="border-r border-neutral-200/70 pr-4 last:border-r-0">
              <p className="text-3xl sm:text-4xl font-bold text-neutral-950 font-display tabular-nums tracking-tight">
                99.4%
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-neutral-600">
                5-Star Client Satisfaction
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">Verified testimonials &amp; referrals</p>
            </div>

            <div className="border-r border-neutral-200/70 pr-4 last:border-r-0">
              <p className="text-3xl sm:text-4xl font-bold text-neutral-950 font-display tabular-nums tracking-tight">
                2–3 Wks
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-neutral-600">
                Average Project Sprint
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">From kickoff call to live launch</p>
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-bold text-neutral-950 font-display tracking-tight">
                100%
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-neutral-600">
                Client Ownership &amp; Autonomy
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">No recurring agency lock-in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
