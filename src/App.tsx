/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlatformSpecialties } from './components/PlatformSpecialties';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Testimonials } from './components/Testimonials';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [inquiryScope, setInquiryScope] = useState<{
    platform: string;
    projectType: string;
    addons: string[];
    estimatedRange: string;
    timeline: string;
  } | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleStartProject = () => {
    scrollToSection('contact');
  };

  const handleExploreWork = () => {
    scrollToSection('portfolio');
  };

  const handleSelectService = (serviceName: string) => {
    setInquiryScope({
      platform: 'Wix or Squarespace',
      projectType: serviceName,
      addons: [],
      estimatedRange: 'Bespoke Quote',
      timeline: '2–3 Weeks'
    });
    scrollToSection('contact');
  };

  const handleSelectPlatform = (platform: 'wix' | 'squarespace') => {
    setInquiryScope({
      platform: platform === 'wix' ? 'Wix Studio' : 'Squarespace',
      projectType: 'Custom Platform Build',
      addons: [],
      estimatedRange: '$2,000 – $3,500',
      timeline: '2–3 Weeks'
    });
    scrollToSection('contact');
  };

  const handleInquireSimilar = (projectTitle: string, platform: string) => {
    setInquiryScope({
      platform: platform,
      projectType: `Similar to ${projectTitle}`,
      addons: ['Custom CSS / Velo Logic'],
      estimatedRange: '$2,500 – $4,000',
      timeline: '2–3 Weeks'
    });
    scrollToSection('contact');
  };

  const handleApplyScopeFromEstimator = (scopeData: {
    platform: string;
    projectType: string;
    addons: string[];
    estimatedRange: string;
    timeline: string;
  }) => {
    setInquiryScope(scopeData);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-neutral-900 selection:bg-neutral-950 selection:text-white">
      {/* Sticky Clean Header adhering to Top Bar Contract */}
      <Navbar onOpenProjectModal={handleStartProject} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartProject={handleStartProject}
          onExploreWork={handleExploreWork}
        />

        {/* Platform Specialties: Deep Dive into Wix Studio & Squarespace */}
        <PlatformSpecialties
          onSelectPlatform={handleSelectPlatform}
        />

        {/* About Eniola Sarah */}
        <About
          onStartProject={handleStartProject}
        />

        {/* Services & Capabilities Bento */}
        <Services
          onSelectService={handleSelectService}
        />

        {/* Selected Work Portfolio with Lightbox Modal */}
        <Portfolio
          onInquireSimilar={handleInquireSimilar}
        />

        {/* Why Work With Me & 4-Step Sprint Roadmap */}
        <WhyWorkWithMe
          onStartProject={handleStartProject}
        />

        {/* Real Attributable Client Testimonials */}
        <Testimonials />

        {/* Interactive Scope & Investment Estimator */}
        <ProjectEstimator
          onApplyScopeToContact={handleApplyScopeFromEstimator}
        />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Conversion-Focused Contact / Project Brief Form */}
        <Contact initialScope={inquiryScope} />
      </main>

      {/* Mirrored Clean Footer */}
      <Footer />
    </div>
  );
}
