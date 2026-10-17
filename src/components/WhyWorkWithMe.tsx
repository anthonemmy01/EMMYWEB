import React from 'react';
import { WORKFLOW_STEPS, WHY_WORK_WITH_ME } from '../data/portfolioData';
import { Check, X, ArrowRight, ShieldCheck, Video, Clock, Sparkles } from 'lucide-react';

interface WhyWorkWithMeProps {
  onStartProject: () => void;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ onStartProject }) => {
  return (
    <section id="why-me" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3">
            The Studio Difference
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-950 mb-5 text-balance">
            A Collaborative, Low-Stress Process Focused on Real Outcomes
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            I believe website design shouldn't be an agonizing, months-long ordeal filled with confusing jargon. We follow a clear, predictable four-step roadmap to get you from concept to live launch without the headache.
          </p>
        </div>

        {/* 4-Step Collaborative Workflow */}
        <div className="mb-20">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-8 pb-3 border-b border-neutral-200">
            Our 4-Step Website Sprint Roadmap
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#FAF9F5] border border-neutral-200/90 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-neutral-900 block mb-4">
                    {item.step}
                  </span>
                  <h4 className="text-lg font-bold font-display text-neutral-950 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Matrix: Generic DIY / Budget Agency vs Partnering With Eniola */}
        <div className="rounded-2xl border border-neutral-200 bg-[#FAF9F5]/70 p-6 sm:p-10 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Clear Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-950 mt-1">
              Why Founders Choose Eniola Over Generic Alternatives
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 text-xs uppercase tracking-wider font-semibold text-neutral-500">
                  <th className="py-4 pr-6 font-semibold">Criteria</th>
                  <th className="py-4 px-6 font-semibold text-neutral-400">Typical Agency / DIY Builder</th>
                  <th className="py-4 pl-6 font-semibold text-neutral-950 bg-neutral-100/70 rounded-t-lg">Working with Eniola Sarah</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/80 text-xs sm:text-sm">
                <tr>
                  <td className="py-4 pr-6 font-medium text-neutral-900">Design Originality</td>
                  <td className="py-4 px-6 text-neutral-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Recycled templates &amp; generic copy paste</span>
                  </td>
                  <td className="py-4 pl-6 font-medium text-neutral-950 bg-neutral-100/70">
                    <div className="flex items-center gap-2 text-neutral-950">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>100% bespoke layout tailored to your brand</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 pr-6 font-medium text-neutral-900">Custom Code &amp; Extensibility</td>
                  <td className="py-4 px-6 text-neutral-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Stock drag-and-drop only, no custom code</span>
                  </td>
                  <td className="py-4 pl-6 font-medium text-neutral-950 bg-neutral-100/70">
                    <div className="flex items-center gap-2 text-neutral-950">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Bespoke CSS styling &amp; Velo JS logic</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 pr-6 font-medium text-neutral-900">Project Delivery Speed</td>
                  <td className="py-4 px-6 text-neutral-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>2–6 months of agency bureaucratic delay</span>
                  </td>
                  <td className="py-4 pl-6 font-medium text-neutral-950 bg-neutral-100/70">
                    <div className="flex items-center gap-2 text-neutral-950">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Disciplined 2–3 week launch sprint</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 pr-6 font-medium text-neutral-900">Client Independence &amp; Handover</td>
                  <td className="py-4 px-6 text-neutral-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Brittle lock-in requiring monthly retainers</span>
                  </td>
                  <td className="py-4 pl-6 font-medium text-neutral-950 bg-neutral-100/70 rounded-b-lg">
                    <div className="flex items-center gap-2 text-neutral-950">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Full Loom video training for complete autonomy</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-neutral-900 text-white">
          <div>
            <h4 className="text-xl font-bold font-display text-white">
              Ready to elevate your business with a website you are proud of?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">
              Let's discuss your project goals, scope, and timeline on a quick 15-minute intro chat.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartProject}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-100 transition-colors whitespace-nowrap shadow-sm shrink-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
