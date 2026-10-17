import React, { useEffect, useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, CheckCircle2, TrendingUp, ArrowUpRight, Monitor, Tablet, Smartphone } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireSimilar: (projectTitle: string, platform: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireSimilar
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 my-8 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-[#FAF9F5] shrink-0">
          <div className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-neutral-900">{project.platform}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-200/60 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Title & Headline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-950 mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {project.headline}
            </p>
          </div>

          {/* Interactive Mockup Display Frame with Device Switcher */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span className="font-medium">Responsive Viewport Simulation</span>
              <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-md">
                <button
                  type="button"
                  onClick={() => setDeviceView('desktop')}
                  className={`p-1.5 rounded flex items-center gap-1 text-[11px] font-medium transition-colors ${
                    deviceView === 'desktop' ? 'bg-white text-neutral-950 shadow-xs' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceView('tablet')}
                  className={`p-1.5 rounded flex items-center gap-1 text-[11px] font-medium transition-colors ${
                    deviceView === 'tablet' ? 'bg-white text-neutral-950 shadow-xs' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                  title="Tablet View"
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tablet</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceView('mobile')}
                  className={`p-1.5 rounded flex items-center gap-1 text-[11px] font-medium transition-colors ${
                    deviceView === 'mobile' ? 'bg-white text-neutral-950 shadow-xs' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-neutral-100 p-3 sm:p-4 flex items-center justify-center transition-all">
              <div
                className={`transition-all duration-300 overflow-hidden rounded-lg shadow-md border border-neutral-200 bg-white ${
                  deviceView === 'desktop'
                    ? 'w-full aspect-[16/10]'
                    : deviceView === 'tablet'
                    ? 'w-[75%] aspect-[4/3]'
                    : 'w-[45%] max-w-[280px] aspect-[9/16]'
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} live interface preview`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Quantified Business Results Strip */}
          <div className="bg-neutral-950 text-white p-5 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Verified Client Outcomes</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="border-t sm:border-t-0 sm:border-l border-neutral-800 pt-3 sm:pt-0 sm:pl-4 first:border-0 first:pl-0">
                  <p className="text-2xl font-bold font-display text-white tabular-nums">
                    {metric.value}
                  </p>
                  <p className="text-xs text-neutral-300 mt-0.5">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200/80">
              <h4 className="text-sm font-bold font-display text-neutral-950 mb-2">
                The Client Challenge
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200/80">
              <h4 className="text-sm font-bold font-display text-neutral-950 mb-2">
                The Strategic Solution
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              Project Deliverables &amp; Technical Execution
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Attributable Client Quote */}
          {project.clientQuote && (
            <div className="p-5 rounded-xl border border-neutral-200 bg-[#FAF9F5]">
              <p className="text-sm italic text-neutral-800 leading-relaxed mb-3">
                “{project.clientQuote.text}”
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
                <span className="font-semibold text-neutral-950">{project.clientQuote.author}</span>
                <span aria-hidden="true">·</span>
                <span>{project.clientQuote.role}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-neutral-50 border-t border-neutral-200 shrink-0">
          <div className="text-xs text-neutral-500 text-center sm:text-left">
            <span>Platform: <strong>{project.platform}</strong></span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Turnaround: 2–3 weeks</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onInquireSimilar(project.title, project.platform);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <span>Build Something Similar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
