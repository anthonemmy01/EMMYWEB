import React from 'react';
import { ArrowUp, Instagram, Linkedin, Dribbble, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-100">
          <div>
            <span className="text-2xl font-bold tracking-tight text-neutral-950 font-display">
              Eniola Sarah
            </span>
            <p className="text-xs text-neutral-500 mt-1 max-w-sm">
              Certified Wix Studio &amp; Squarespace Website Designer &amp; Developer crafting bespoke, high-converting digital spaces.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-neutral-600">
            <a href="#about" className="hover:text-neutral-950 transition-colors">About</a>
            <a href="#services" className="hover:text-neutral-950 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-neutral-950 transition-colors">Portfolio</a>
            <a href="#why-me" className="hover:text-neutral-950 transition-colors">Why Work With Me</a>
            <a href="#faq" className="hover:text-neutral-950 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-neutral-950 transition-colors">Contact</a>
          </nav>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-3 text-neutral-600">
            <span>© {new Date().getFullYear()} Eniola Sarah. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Wix Studio Certified · Squarespace Circle</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
              aria-label="Dribbble Portfolio"
            >
              <Dribbble className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors flex items-center gap-1.5 text-xs font-medium"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
