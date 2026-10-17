import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Mail, MessageCircle, Calendar, ArrowRight, Sparkles, Clock, Globe } from 'lucide-react';

interface ContactProps {
  initialScope?: {
    platform: string;
    projectType: string;
    addons: string[];
    estimatedRange: string;
    timeline: string;
  } | null;
}

export const Contact: React.FC<ContactProps> = ({ initialScope }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    currentWebsite: '',
    platform: 'Squarespace',
    projectScope: 'Essential Launch Site (1–5 Pages)',
    budget: '$2,000 – $3,500',
    timeline: 'Within 2–4 Weeks',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [callBooked, setCallBooked] = useState(false);
  const [callDate, setCallDate] = useState('Next Tuesday, 2:00 PM GMT');

  // Sync if initialScope changes from estimator
  useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({
        ...prev,
        platform: initialScope.platform.includes('Wix')
          ? 'Wix Studio'
          : initialScope.platform.includes('Squarespace')
          ? 'Squarespace'
          : 'Not Sure Yet',
        projectScope: initialScope.projectType,
        budget: initialScope.estimatedRange,
        message: `Scope estimated via Estimator: ${initialScope.projectType} on ${initialScope.platform}. Add-ons: ${
          initialScope.addons.length > 0 ? initialScope.addons.join(', ') : 'None'
        }. Timeline: ${initialScope.timeline}.`
      }));
    }
  }, [initialScope]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a brief summary of what you are looking to build';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate realistic submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF9F5] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            Let's Collaborate
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-950 mb-4 text-balance">
            Start Your Project With Eniola
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Ready for a website that elevates your business and commands client respect? Fill out the brief below and I’ll get back to you with next steps, sprint availability, and custom proposal details within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Inquiry Form or Success State */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-8 sm:p-10 shadow-xs">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-neutral-950 mb-2">
                      Inquiry Received!
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong>{formData.fullName}</strong>. I have received your project details for <strong>{formData.businessName || 'your business'}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-neutral-200 text-left text-xs text-neutral-700 max-w-md mx-auto space-y-1.5">
                    <p className="font-semibold text-neutral-900 mb-1">Next Steps:</p>
                    <p>• I will review your requirements and website links personally.</p>
                    <p>• You will receive a custom proposal and sprint dates at <strong>{formData.email}</strong> within 24 hours.</p>
                    <p>• Need to chat sooner? You can schedule a 15-minute discovery call below.</p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setShowCallModal(true)}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 transition-colors"
                    >
                      Book 15-Min Discovery Call Now
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          businessName: '',
                          currentWebsite: '',
                          platform: 'Squarespace',
                          projectScope: 'Essential Launch Site (1–5 Pages)',
                          budget: '$2,000 – $3,500',
                          timeline: 'Within 2–4 Weeks',
                          message: ''
                        });
                      }}
                      className="px-4 py-2.5 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                    >
                      Submit Another Project
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {initialScope && (
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-xs text-neutral-700 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-neutral-900 shrink-0" />
                        <span>Scope imported from Project Estimator ({initialScope.projectType})</span>
                      </div>
                      <span className="font-semibold text-neutral-900">{initialScope.estimatedRange}</span>
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Maya Lin"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-neutral-300'
                        }`}
                      />
                      {errors.fullName && <p className="mt-1 text-xs text-rose-500">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. maya@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all ${
                          errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-neutral-300'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Business Name and Current Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="businessName" className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                        Business / Organization Name
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        placeholder="e.g. Lin Design Studio"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="currentWebsite" className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                        Current Website (if redesign)
                      </label>
                      <input
                        id="currentWebsite"
                        type="text"
                        placeholder="e.g. www.mysite.com"
                        value={formData.currentWebsite}
                        onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                      />
                    </div>
                  </div>

                  {/* Platform Preference & Project Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="platform" className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                        Platform Preference
                      </label>
                      <select
                        id="platform"
                        value={formData.platform}
                        onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                      >
                        <option value="Squarespace">Squarespace (Fluid Engine)</option>
                        <option value="Wix Studio">Wix Studio (Proportional scaling)</option>
                        <option value="Wix Stores / Squarespace Commerce">E-Commerce Storefront</option>
                        <option value="Not Sure Yet">Not Sure Yet (Need Advice)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="projectScope" className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                        Project Type / Scope
                      </label>
                      <select
                        id="projectScope"
                        value={formData.projectScope}
                        onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                      >
                        <option value="Essential Launch Site (1–5 Pages)">Essential Launch Site (1–5 Pages)</option>
                        <option value="Growth & Authority Site (6–10 Pages)">Growth &amp; Authority Site (6–10 Pages)</option>
                        <option value="Full E-Commerce or Booking System">Full E-Commerce or Booking System</option>
                        <option value="Strategic Website Redesign & Refresh">Strategic Website Redesign &amp; Refresh</option>
                        <option value="Custom CSS / Velo Code Integration">Custom CSS / Velo Code Integration</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Target Launch Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                        Approximate Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                      >
                        <option value="$1,800 – $2,500">$1,800 – $2,500</option>
                        <option value="$2,500 – $3,500">$2,500 – $3,500</option>
                        <option value="$3,500 – $5,000">$3,500 – $5,000</option>
                        <option value="$5,000+">$5,000+ (Extensive Build)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                        Target Launch Date
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                      >
                        <option value="Immediately (Next 2–3 Weeks)">Immediately (Next 2–3 Weeks)</option>
                        <option value="Within 1 Month">Within 1 Month</option>
                        <option value="Within 2–3 Months">Within 2–3 Months</option>
                        <option value="Flexible / Just Planning">Flexible / Just Planning</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Project Description */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                      Tell me about your project &amp; goals <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="What does your business do, what is your primary goal for the new site, and are there any specific features (booking, store, animations) you need?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all ${
                        errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-neutral-300'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-rose-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-neutral-500">
                    I respect your privacy. No spam. You will hear back personally within 24 business hours.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Channels & Discovery Call */}
          <div className="lg:col-span-5 space-y-6">
            {/* Discovery Call Card */}
            <div className="bg-neutral-900 text-white rounded-2xl p-7 border border-neutral-800 shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                <Calendar className="w-4 h-4" />
                <span>Prefer to Talk First?</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Schedule a 15-Minute Intro Call
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Hop on a short, zero-pressure video call to discuss your website vision, ask technical questions, and see if we are a good fit.
              </p>

              <button
                type="button"
                onClick={() => setShowCallModal(true)}
                className="w-full py-3 px-4 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Select a Time on My Calendar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct Communication Channels */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-7 space-y-5">
              <h4 className="text-sm font-bold font-display text-neutral-950 pb-3 border-b border-neutral-100">
                Direct Contact Details
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
                <a
                  href="mailto:eniola@sarahdesigns.com"
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 block group-hover:underline">
                      eniola@sarahdesigns.com
                    </span>
                    <span className="text-xs text-neutral-500">Direct inquiries &amp; project RFPs</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/447000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 block group-hover:underline">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-xs text-neutral-500">Fast questions &amp; availability checks</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-2.5 rounded-lg">
                  <Globe className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 block">
                      London, UK (GMT) · Remote Worldwide
                    </span>
                    <span className="text-xs text-neutral-500">Working seamlessly across US &amp; European time zones</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-5 rounded-2xl bg-neutral-100/80 border border-neutral-200/70 text-xs text-neutral-700">
              <p className="font-semibold text-neutral-950 mb-1">
                Current Studio Availability:
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Currently booking projects for <strong>Q2 &amp; Q3 2026</strong>. Sprints are limited to 2 clients per month to ensure dedicated attention and fast delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Discovery Call Booking Modal */}
      {showCallModal && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setShowCallModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {callBooked ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-display text-neutral-950">
                  Discovery Call Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">
                  You are booked for <strong>{callDate}</strong> with Eniola Sarah. A Google Meet invitation has been prepared.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowCallModal(false);
                    setCallBooked(false);
                  }}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-5">
                  <div>
                    <h3 className="text-lg font-bold font-display text-neutral-950">
                      15-Min Strategy Intro
                    </h3>
                    <p className="text-xs text-neutral-500">With Eniola Sarah · Google Meet</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCallModal(false)}
                    className="text-neutral-400 hover:text-neutral-800 p-1"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-xs text-neutral-600">
                    Pick an upcoming slot that works best for your schedule:
                  </p>
                  <div className="space-y-2">
                    {[
                      'Next Tuesday, 2:00 PM GMT (10:00 AM EST)',
                      'Next Wednesday, 3:30 PM GMT (11:30 AM EST)',
                      'Next Thursday, 5:00 PM GMT (1:00 PM EST)',
                      'Friday, 1:00 PM GMT (9:00 AM EST)'
                    ].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setCallDate(slot)}
                        className={`w-full p-3 text-xs text-left rounded-lg border transition-all flex items-center justify-between ${
                          callDate === slot
                            ? 'border-neutral-950 bg-neutral-950 text-white font-semibold'
                            : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-800'
                        }`}
                      >
                        <span>{slot}</span>
                        {callDate === slot && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setCallBooked(true)}
                  className="w-full py-3 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Confirm 15-Minute Intro Call
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
