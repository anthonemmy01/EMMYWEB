import React, { useState } from 'react';
import { Calculator, ArrowDown, Check, Clock, Sparkles } from 'lucide-react';

interface EstimatorData {
  platform: string;
  projectType: string;
  addons: string[];
  estimatedMin: number;
  estimatedMax: number;
  timelineWeeks: string;
}

interface ProjectEstimatorProps {
  onApplyScopeToContact: (scopeData: {
    platform: string;
    projectType: string;
    addons: string[];
    estimatedRange: string;
    timeline: string;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyScopeToContact }) => {
  const [platform, setPlatform] = useState<'wix' | 'squarespace' | 'undecided'>('squarespace');
  const [projectType, setProjectType] = useState<'standard' | 'growth' | 'ecommerce' | 'redesign'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo']);

  // Base pricing matrix
  const baseConfig: Record<string, { min: number; max: number; timeline: string; name: string }> = {
    standard: {
      name: 'Essential Launch Site (1–5 Pages)',
      min: 1800,
      max: 2400,
      timeline: '2 Weeks'
    },
    growth: {
      name: 'Growth & Authority Site (6–10 Pages)',
      min: 2600,
      max: 3400,
      timeline: '2–3 Weeks'
    },
    ecommerce: {
      name: 'Full E-Commerce or Booking System',
      min: 3200,
      max: 4400,
      timeline: '3–4 Weeks'
    },
    redesign: {
      name: 'Strategic Website Redesign & Refresh',
      min: 2200,
      max: 2900,
      timeline: '2 Weeks'
    }
  };

  const addonOptions = [
    { id: 'seo', label: 'Advanced SEO & Google Indexing', cost: 350 },
    { id: 'custom-code', label: 'Bespoke Custom CSS / Velo Logic', cost: 450 },
    { id: 'acuity', label: 'Acuity / Wix Booking Setup & Automations', cost: 400 },
    { id: 'copy', label: 'Copywriting Structure & Content Polish', cost: 500 }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentBase = baseConfig[projectType];
  const addonsCost = selectedAddons.reduce((sum, id) => {
    const found = addonOptions.find((a) => a.id === id);
    return sum + (found ? found.cost : 0);
  }, 0);

  const totalMin = currentBase.min + addonsCost;
  const totalMax = currentBase.max + addonsCost;

  const platformLabel =
    platform === 'wix'
      ? 'Wix Studio'
      : platform === 'squarespace'
      ? 'Squarespace'
      : 'Help Me Choose (Wix or Squarespace)';

  const handleApply = () => {
    const activeAddonLabels = addonOptions
      .filter((a) => selectedAddons.includes(a.id))
      .map((a) => a.label);

    onApplyScopeToContact({
      platform: platformLabel,
      projectType: currentBase.name,
      addons: activeAddonLabels,
      estimatedRange: `$${totalMin.toLocaleString()} – $${totalMax.toLocaleString()}`,
      timeline: currentBase.timeline
    });
  };

  return (
    <section className="py-20 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-3">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Interactive Project Scope Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-white mb-4 text-balance">
            Estimate Your Website Investment &amp; Sprint Timeline
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            Transparent, fixed-fee sprint pricing. Select your preferred platform and project scope below to see an instant estimate of investment and turnaround time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Scope Selection Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Platform Selection */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-3">
                1. Select Platform
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPlatform('squarespace')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    platform === 'squarespace'
                      ? 'border-white bg-neutral-800 text-white shadow-sm'
                      : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <p className="text-sm font-bold text-white mb-0.5">Squarespace</p>
                  <p className="text-xs text-neutral-400">Fluid Engine &amp; custom CSS</p>
                </button>

                <button
                  type="button"
                  onClick={() => setPlatform('wix')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    platform === 'wix'
                      ? 'border-white bg-neutral-800 text-white shadow-sm'
                      : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <p className="text-sm font-bold text-white mb-0.5">Wix Studio</p>
                  <p className="text-xs text-neutral-400">Proportional fluid scaling</p>
                </button>

                <button
                  type="button"
                  onClick={() => setPlatform('undecided')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    platform === 'undecided'
                      ? 'border-white bg-neutral-800 text-white shadow-sm'
                      : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <p className="text-sm font-bold text-white mb-0.5">Help Me Choose</p>
                  <p className="text-xs text-neutral-400">Decide on discovery call</p>
                </button>
              </div>
            </div>

            {/* Step 2: Project Scope */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-3">
                2. Project Type &amp; Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(baseConfig).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setProjectType(key as any)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      projectType === key
                        ? 'border-white bg-neutral-800 text-white shadow-sm'
                        : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <p className="text-sm font-bold text-white mb-1">{item.name}</p>
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <Clock className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{item.timeline} sprint</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-On Capabilities */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-3">
                3. Optional Add-On Integrations
              </label>
              <div className="space-y-2.5">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                        isChecked
                          ? 'border-neutral-600 bg-neutral-800/80 text-white'
                          : 'border-neutral-800/90 bg-neutral-950/40 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-white border-white text-neutral-950'
                              : 'border-neutral-600 bg-neutral-900'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-neutral-200">
                          {addon.label}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-400">
                        +${addon.cost}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Breakdown Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-700 bg-neutral-950 p-7 sm:p-8 sticky top-28 shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                Estimated Sprint Investment
              </span>
              <div className="text-3xl sm:text-4xl font-bold font-display text-white tabular-nums tracking-tight mt-1 mb-2">
                ${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}
              </div>
              <p className="text-xs text-neutral-400 mb-6">
                All-inclusive fixed price. No hidden surprise fees.
              </p>

              <div className="space-y-3 pb-6 border-b border-neutral-800 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Platform:</span>
                  <span className="font-semibold text-white">{platformLabel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Estimated Timeline:</span>
                  <span className="font-semibold text-emerald-400">{currentBase.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Handover:</span>
                  <span className="font-semibold text-white">Full Loom Video Training</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Payment Terms:</span>
                  <span className="font-semibold text-white">50% Kickoff / 50% Launch</span>
                </div>
              </div>

              <div className="py-5 space-y-2 text-xs text-neutral-400">
                <p className="font-semibold text-neutral-300">Every project sprint includes:</p>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Custom responsive design for desktop &amp; mobile</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Full domain, SSL &amp; Google Search Console launch setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>30 days post-launch technical support</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApply}
                className="w-full mt-2 py-3 px-4 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Apply This Scope to Inquiry Form</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
