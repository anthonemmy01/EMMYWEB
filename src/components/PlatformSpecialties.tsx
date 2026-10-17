import React, { useState } from 'react';
import { Check, ArrowRight, Code2, Sparkles, Smartphone, ShieldCheck, Zap, Database } from 'lucide-react';

interface PlatformSpecialtiesProps {
  onSelectPlatform: (platform: 'wix' | 'squarespace') => void;
}

export const PlatformSpecialties: React.FC<PlatformSpecialtiesProps> = ({ onSelectPlatform }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'wix' | 'squarespace'>('both');

  return (
    <section className="py-20 bg-neutral-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-3">
            Two Industry-Leading Platforms · Bespoke Execution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-white mb-5 text-balance">
            Why Wix &amp; Squarespace Are the Smartest Choice for Your Business
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            Forget fragile WordPress plugins and overly complex Webflow setups that require an expensive retainer for every small copy update. I build custom, agency-grade websites on modern visual platforms that give you total ownership.
          </p>
        </div>

        {/* Segmented Filter Control */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-800 rounded-lg max-w-sm mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('both')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'both' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Capabilities
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('wix')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'wix' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Wix Studio
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('squarespace')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'squarespace' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Squarespace 7.1
          </button>
        </div>

        {/* 2-Column Deep-Dive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Wix Studio */}
          {(activeTab === 'both' || activeTab === 'wix') && (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6 pb-5 border-b border-neutral-800">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Proportional Scaling &amp; Dynamic Logic
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white mt-1">
                      Wix Studio &amp; Velo Development
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 bg-neutral-800 text-neutral-300 rounded border border-neutral-700">
                    Certified Partner
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  Wix Studio is the pinnacle of modern visual web development. It allows for pixel-level breakpoint control, fluid responsive typography, and enterprise-grade dynamic CMS collections backed by custom Velo JavaScript code.
                </p>

                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Fluid Breakpoints &amp; CSS Grid</p>
                      <p className="text-xs text-neutral-400">Pixel-perfect scaling across mobile, tablet, laptop, and ultrawide screens.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Dynamic CMS Collections</p>
                      <p className="text-xs text-neutral-400">Structured datasets for team directories, portfolio archives, and client portals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Velo JavaScript Custom Logic</p>
                      <p className="text-xs text-neutral-400">Custom calculations, dynamic filtering, API webhooks, and bespoke interactions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Scroll Triggers &amp; Micro-Animations</p>
                      <p className="text-xs text-neutral-400">Award-winning interaction feel without bogging down page load speed.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Best for</p>
                  <p className="text-xs font-semibold text-neutral-200">Tech Startups, VC Firms, Creative Studios</p>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectPlatform('wix')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
                >
                  <span>Build with Wix</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Card 2: Squarespace 7.1 */}
          {(activeTab === 'both' || activeTab === 'squarespace') && (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6 pb-5 border-b border-neutral-800">
                  <div>
                    <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                      Editorial Elegance &amp; Intuitive Management
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white mt-1">
                      Squarespace &amp; Fluid Engine
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 bg-neutral-800 text-neutral-300 rounded border border-neutral-700">
                    Circle Specialist
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  Squarespace is celebrated worldwide for its editorial typography, clean visual aesthetics, and effortless backend interface. I inject bespoke custom CSS so your site looks completely custom while remaining 100% manageable by you.
                </p>

                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Fluid Engine Grid Architecture</p>
                      <p className="text-xs text-neutral-400">Independent mobile and desktop drag-and-drop alignment with zero clunkiness.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Bespoke Custom CSS Styling</p>
                      <p className="text-xs text-neutral-400">Custom fonts, tailored hover reveals, split cards, and polished header states.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Acuity Scheduling &amp; E-Commerce</p>
                      <p className="text-xs text-neutral-400">Native calendar appointment booking, digital downloads, and subscriptions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Zero Maintenance Stress</p>
                      <p className="text-xs text-neutral-400">No security vulnerability panics, automated backups, and 99.9% uptime reliability.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Best for</p>
                  <p className="text-xs font-semibold text-neutral-200">Coaches, Consultants, Spas, DTC Brands</p>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectPlatform('squarespace')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
                >
                  <span>Build with Squarespace</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
