import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onInquireSimilar: (projectTitle: string, platform: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onInquireSimilar }) => {
  const [filter, setFilter] = useState<'All' | 'Wix' | 'Squarespace' | 'E-Commerce' | 'Redesign'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-[#FAF9F5] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
              Selected Work &amp; Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-950">
              Websites That Elevate Brands &amp; Drive Results
            </h2>
            <p className="mt-3 text-base text-neutral-600 font-normal leading-relaxed">
              Explore recent client transformations built on Wix Studio and Squarespace. Every project is crafted from a blank canvas with custom responsive design and conversion focus.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-neutral-200 rounded-lg shrink-0">
            {(['All', 'Wix', 'Squarespace', 'E-Commerce', 'Redesign'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  filter === cat
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                }`}
              >
                {cat === 'All' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento & Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            // First item gets marquee prominence if in All view
            const isMarquee = filter === 'All' && index === 0;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer rounded-2xl border border-neutral-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between ${
                  isMarquee ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                {/* Image Container with measured aspect ratio */}
                <div className={`relative overflow-hidden bg-neutral-100 ${isMarquee ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 text-xs font-semibold text-white bg-neutral-950/90 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Primary result badge */}
                  <div className="absolute bottom-3 left-3 bg-neutral-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    <span>{project.metrics[0].value} {project.metrics[0].label}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed metadata line with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-2.5">
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-neutral-900 font-semibold">{project.platform}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-neutral-950 group-hover:text-neutral-800 transition-colors mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  {/* Bottom Row */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <div className="text-neutral-500 truncate max-w-[200px]">
                      {project.tags.slice(0, 2).join(' · ')}
                    </div>
                    <span className="font-semibold text-neutral-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Read breakdown</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquireSimilar={onInquireSimilar}
        />
      </div>
    </section>
  );
};
