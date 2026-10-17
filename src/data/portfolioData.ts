export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Wix' | 'Squarespace' | 'E-Commerce' | 'Redesign';
  platform: 'Wix Studio' | 'Squarespace 7.1' | 'Squarespace Commerce' | 'Wix CMS & Velo';
  year: string;
  image: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
  tags: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  platform: string;
  description: string;
  timeline: string;
  features: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  platform: 'Wix Studio' | 'Squarespace' | 'Wix E-Commerce';
  avatarInitials: string;
  quote: string;
  highlight: string;
  metric: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Platform' | 'Process' | 'Post-Launch' | 'Pricing';
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'aura-wellness',
    title: 'Aura Sanctuary & Holistic Spa',
    client: 'Aura Wellness Group',
    category: 'Squarespace',
    platform: 'Squarespace 7.1',
    year: '2026',
    image: '/src/assets/images/project_aura_wellness_1792247075654.jpg',
    headline: 'High-conversion luxury spa booking portal & editorial digital presence',
    summary: 'A bespoke sanctuary aesthetic built on Squarespace Fluid Engine with seamless Acuity Scheduling integration, custom typography, and curated treatment menus.',
    challenge: 'Aura was struggling with a dated WordPress site where appointment drop-offs reached 42% due to cumbersome external redirect links and poor mobile touch targets.',
    solution: 'Designed a serene, high-end editorial experience with native Acuity calendar booking embedded directly into treatment detail drawers, custom CSS animations, and instant checkout.',
    deliverables: [
      'Custom Squarespace Fluid Engine design',
      'Embedded Acuity Scheduling with automated email workflows',
      'Custom CSS styling for luxury typography & smooth accordions',
      'Mobile-first responsive optimization',
      'Local SEO setup & Google My Business integration'
    ],
    metrics: [
      { label: 'Booking Conversion', value: '+78%' },
      { label: 'Mobile Bounce Rate', value: '-34%' },
      { label: 'Page Load Speed', value: '1.4s' }
    ],
    clientQuote: {
      text: 'Eniola completely transformed our brand online. Our clients constantly mention how calm and effortless it is to book appointments on mobile. She delivered a week ahead of schedule!',
      author: 'Elena Rostova',
      role: 'Founder & Creative Director, Aura Sanctuary'
    },
    tags: ['Squarespace 7.1', 'Acuity Scheduling', 'Custom CSS', 'Luxury Wellness']
  },
  {
    id: 'vanguard-capital',
    title: 'Vanguard Venture Partners',
    client: 'Vanguard Capital',
    category: 'Wix',
    platform: 'Wix Studio',
    year: '2026',
    image: '/src/assets/images/project_vanguard_capital_1792247076751.jpg',
    headline: 'Architectural dark-mode portfolio & dynamic CMS for $40M tech fund',
    summary: 'An authoritative, dark-mode investor portal featuring interactive portfolio filtering, Velo CMS collections, and responsive proportional grid scaling.',
    challenge: 'The partners needed to showcase 35+ active investments with categorized founder stories and LP investor decks, requiring zero-maintenance CMS updates by the internal team.',
    solution: 'Leveraged Wix Studio with advanced proportional scaling, Velo JavaScript for real-time sector filtering, dynamic dataset pages, and gated investor resource portals.',
    deliverables: [
      'Bespoke Wix Studio responsive layout with fluid breakpoints',
      'Custom Velo JS for multi-faceted portfolio filtering',
      'CMS collections for team bios, press releases, and portfolio companies',
      'Restricted password-protected LP document library',
      'Enterprise security & performance optimization'
    ],
    metrics: [
      { label: 'Founder Inbound Inquiries', value: '+115%' },
      { label: 'Average Session Time', value: '3m 45s' },
      { label: 'CMS Update Speed', value: '<2 mins' }
    ],
    clientQuote: {
      text: 'We interviewed four boutique agencies before finding Eniola. She gave us an institutional-grade site built in Wix Studio that our team can update in minutes without touching code.',
      author: 'Marcus Vance',
      role: 'Managing Partner, Vanguard Capital'
    },
    tags: ['Wix Studio', 'Velo JavaScript', 'Dynamic CMS', 'Fintech & VC']
  },
  {
    id: 'sola-botanicals',
    title: 'Sola Organic Botanicals',
    client: 'Sola Skin Sciences',
    category: 'E-Commerce',
    platform: 'Squarespace Commerce',
    year: '2026',
    image: '/src/assets/images/project_sola_botanicals_1792247076542.jpg',
    headline: 'High-converting organic DTC skincare store with subscription checkout',
    summary: 'A minimalist organic skincare storefront featuring custom ingredient glossaries, product bundles, automated restocking subscriptions, and frictionless checkout.',
    challenge: 'Sola had high traffic from social media but suffered from cart abandonment due to cluttered product pages and a lack of clear ingredient transparency.',
    solution: 'Structured a conversion-engineered product page layout, customized the Squarespace checkout flow, built interactive ingredient deep-dives, and configured bundle discounts.',
    deliverables: [
      'Squarespace Commerce store architecture & product catalog',
      'Custom CSS quantity selectors and ingredient accordion tabs',
      'Subscription billing configuration',
      'Automated abandoned-cart recovery emails',
      'Cross-sell slide-out mini cart'
    ],
    metrics: [
      { label: 'DTC Revenue Lift', value: '+142%' },
      { label: 'Checkout Completion', value: '68.4%' },
      { label: 'Repeat Subscriptions', value: '38%' }
    ],
    clientQuote: {
      text: 'Our monthly online sales doubled within 60 days of launching the new site. Eniola knows exactly where to place call-to-actions and how to make products look irresistible.',
      author: 'Chantal Dubois',
      role: 'Co-Founder & Formulator, Sola Botanicals'
    },
    tags: ['Squarespace Commerce', 'E-Commerce', 'Subscription Billing', 'Custom CSS']
  },
  {
    id: 'nordic-atelier',
    title: 'Nordic Atelier Architects',
    client: 'Nordic Atelier Copenhagen',
    category: 'Wix',
    platform: 'Wix CMS & Velo',
    year: '2025',
    image: '/src/assets/images/project_nordic_atelier_1792247076637.jpg',
    headline: 'Monochrome architectural monograph & project archive',
    summary: 'An editorial portfolio featuring high-resolution photography grids, subtle horizontal case study reveals, and project blueprints archive.',
    challenge: 'The architecture firm required a website that felt like an ultra-luxury physical monograph, with zero visual clutter and flawless image optimization on 4K monitors.',
    solution: 'Built an asymmetric grid layout in Wix Studio with custom aspect-ratio containers, smooth transitions, and dynamic project filtering by typology and country.',
    deliverables: [
      'Wix Studio custom typography & grid structure',
      'High-res retina image optimization with zero latency',
      'Editorial case study layouts with blueprint blueprints zoom',
      'Bilingual architecture press kit download centre',
      'Client presentation portal'
    ],
    metrics: [
      { label: 'Commercial RFPs Received', value: '+90%' },
      { label: 'Image Render Score', value: '98/100' },
      { label: 'International Traffic', value: '+64%' }
    ],
    clientQuote: {
      text: 'Eniola understood our architectural language immediately. She treated our digital portfolio with the same geometric precision we apply to physical buildings.',
      author: 'Søren Lindqvist',
      role: 'Principal Architect, Nordic Atelier'
    },
    tags: ['Wix Studio', 'Editorial Grid', 'Architecture', 'High-Res Media']
  },
  {
    id: 'elevate-executive-coaching',
    title: 'Dr. Marcus Chen Executive Advisory',
    client: 'Marcus Chen Leadership',
    category: 'Redesign',
    platform: 'Squarespace 7.1',
    year: '2025',
    image: '/src/assets/images/project_aura_wellness_1792247075654.jpg',
    headline: 'Corporate advisory landing funnel for Fortune 500 leadership coaching',
    summary: 'A complete brand and digital overhaul turning a static biography into an authoritative inbound client engine with qualification forms and private client portal.',
    challenge: 'Dr. Chen was receiving unqualified inquiries and spending hours manually vetting prospects via back-and-forth emails.',
    solution: 'Engineered a strategic qualification funnel with automated questionnaire logic, video testimonials showcase, and direct sync with executive calendar.',
    deliverables: [
      'Complete Squarespace 7.1 redesign from scratch',
      'Interactive multi-step client qualification intake',
      'Speaking engagement media kit & press logos',
      'Podcast episode embed library with transcript search',
      '1-on-1 Loom handover video training'
    ],
    metrics: [
      { label: 'Qualified Inbound Leads', value: '+160%' },
      { label: 'Admin Hours Saved', value: '14 hrs/wk' },
      { label: 'Retainer Close Rate', value: '45%' }
    ],
    clientQuote: {
      text: 'The site paid for itself within two weeks of launch when I closed a new enterprise advisory client directly through the new intake workflow Eniola built.',
      author: 'Dr. Marcus Chen',
      role: 'Executive Coach & Author'
    },
    tags: ['Squarespace 7.1', 'Lead Funnel', 'Redesign', 'Executive Coaching']
  },
  {
    id: 'solstice-roasters',
    title: 'Solstice Artisan Coffee Roasters',
    client: 'Solstice Roasters Co.',
    category: 'E-Commerce',
    platform: 'Wix CMS & Velo',
    year: '2025',
    image: '/src/assets/images/project_sola_botanicals_1792247076542.jpg',
    headline: 'Specialty coffee e-commerce with grind selector & cafe locator',
    summary: 'A warm, community-driven online shop featuring bean grind customizers, recurring club subscriptions, wholesale inquiry portal, and interactive retail map.',
    challenge: 'Needed to bridge direct-to-consumer online coffee bag sales with wholesale cafe partnership inquiries on a single cohesive platform.',
    solution: 'Designed a dual-track experience in Wix Studio with separate B2C shopping flow and B2B wholesale pricing portal with tax-exempt registration.',
    deliverables: [
      'Wix Stores customization with roast flavor profile badges',
      'Interactive wholesale inquiry application form',
      'Store locator with Google Maps integration',
      'Subscription frequency selector (weekly/monthly delivery)',
      'Speed optimization for mobile shoppers'
    ],
    metrics: [
      { label: 'Online Subscription Base', value: '+210%' },
      { label: 'Wholesale Accounts Added', value: '28' },
      { label: 'Average Order Value', value: '+$14.50' }
    ],
    clientQuote: {
      text: 'Eniola gave our brand an online home that truly mirrors the warmth of our physical cafes. Her communication throughout the project was impeccable.',
      author: 'Aria Thompson',
      role: 'Head of Brand, Solstice Roasters'
    },
    tags: ['Wix Stores', 'Velo JS', 'B2B & B2C', 'Subscription']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'wix-studio',
    number: '01',
    title: 'Custom Wix & Wix Studio Development',
    platform: 'Wix & Wix Studio',
    description: 'Bespoke, breakpoint-crafted websites engineered with proportional scaling, custom typography, animations, and Velo JavaScript logic for dynamic capabilities.',
    timeline: '2–3 Weeks',
    features: [
      'Pixel-perfect multi-breakpoint responsive layouts',
      'Custom animations, scroll triggers & micro-interactions',
      'Dynamic CMS database collections & repeater filtering',
      'Velo custom code for advanced functionality',
      'Full SEO infrastructure & Google Search Console indexing'
    ],
    idealFor: 'Startups, creative agencies, enterprise portfolios, and businesses wanting agency-grade design with effortless visual editing.'
  },
  {
    id: 'squarespace',
    number: '02',
    title: 'Bespoke Squarespace Websites',
    platform: 'Squarespace 7.1 & Fluid Engine',
    description: 'Clean, modern, editorial websites built on Fluid Engine, elevated with custom CSS to break past template limitations into truly unique brand experiences.',
    timeline: '2–3 Weeks',
    features: [
      'Fluid Engine layout architecture with custom grid spacing',
      'Bespoke CSS styling (custom fonts, hover states, split layouts)',
      'Seamless mobile touch optimization',
      'Acuity Scheduling, contact workflows, and newsletter integrations',
      'Clean metadata & on-page search engine optimization'
    ],
    idealFor: 'Coaches, consultants, luxury service businesses, interior designers, and founders who want an intuitive, self-manageable platform.'
  },
  {
    id: 'redesigns',
    number: '03',
    title: 'Strategic Website Redesigns',
    platform: 'Wix or Squarespace',
    description: 'Transform an outdated, low-converting, or difficult-to-maintain website into a high-impact digital asset that commands higher pricing and turns visitors into clients.',
    timeline: '2 Weeks',
    features: [
      'In-depth audit of current user drop-offs and friction points',
      'Strategic conversion architecture & wireframe restructuring',
      'Modern visual refresh aligned with your premium positioning',
      '301 redirect mapping to preserve existing Google rankings',
      'Simplified navigation and streamlined lead capture pathways'
    ],
    idealFor: 'Established businesses with an outdated website that no longer reflects their caliber or generates adequate qualified leads.'
  },
  {
    id: 'ecommerce-booking',
    number: '04',
    title: 'E-Commerce & Booking Systems',
    platform: 'Wix Stores & Squarespace Commerce',
    description: 'Frictionless storefronts, digital product shops, and automated client booking systems designed to maximize average order value and eliminate booking friction.',
    timeline: '3–4 Weeks',
    features: [
      'Product catalog setup with variant options and inventory sync',
      'Recurring subscriptions & member-only areas',
      'Acuity Scheduling / Wix Bookings setup with payment gateways',
      'Custom slide-out cart drawers and conversion-tested checkout',
      'Automated email sequences (order confirmation, abandoned carts)'
    ],
    idealFor: 'Boutique retail brands, product founders, therapists, fitness studios, and service providers selling sessions or digital goods.'
  },
  {
    id: 'custom-code-maintenance',
    number: '05',
    title: 'Platform Migration & Custom Code',
    platform: 'Wix Velo & Squarespace CSS',
    description: 'Moving away from complex WordPress or Shopify setups into Wix or Squarespace, plus custom code troubleshooting, speed tune-ups, and bespoke widgets.',
    timeline: '1–2 Weeks',
    features: [
      'Seamless content migration from WordPress, Webflow, or Shopify',
      'Custom CSS injection for bespoke hover effects & UI components',
      'Velo JavaScript APIs, custom webhooks, and third-party tools',
      'Core Web Vitals speed optimization and image compression',
      '1-on-1 personalized Loom video training for full team independence'
    ],
    idealFor: 'Businesses tired of plugin updates, security vulnerabilities, and developer dependency who want autonomy.'
  }
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Design Excellence + Conversion Strategy',
    description: 'A beautiful website that does not convert is just art. I combine editorial visual aesthetics with proven lead-generation psychology so your site turns traffic into booked clients.'
  },
  {
    title: 'Zero Template Clones (100% Bespoke)',
    description: 'No generic pre-made templates or cookie-cutter layouts. Every section is custom-crafted to reflect your unique brand identity, color story, and business goals.'
  },
  {
    title: 'Bespoke Custom Code (CSS & Velo)',
    description: 'I elevate no-code platforms past their default boundaries with custom CSS, fluid typography, and Velo JavaScript logic, giving you custom-coded quality with drag-and-drop ease.'
  },
  {
    title: 'True Client Autonomy & Zero Lock-in',
    description: 'You will never need to pay an expensive retainer just to swap text, upload a blog post, or add a product. I provide custom recorded Loom tutorials so you are in complete control.'
  },
  {
    title: 'Fast, Dependable 2–3 Week Delivery',
    description: 'No endless 6-month agency lag. With a disciplined sprint process and transparent client portals, we move from initial kickoff to live launch on schedule, every time.'
  },
  {
    title: 'Official Platform Partner & Certified',
    description: 'Recognized Wix Studio Partner and Squarespace Circle Member, meaning you get early access to platform features, prioritized support, and exclusive subscription discounts.'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Discovery & Strategic Direction',
    description: 'We dive deep into your target audience, core offerings, brand aesthetic, and conversion goals through a strategic intake questionnaire and kickoff session.'
  },
  {
    step: '02',
    title: 'Wireframing & Bespoke Visual Design',
    description: 'I architect the page flow, headline hierarchy, and interactive wireframes. You review high-fidelity layout concepts to establish visual styling before development begins.'
  },
  {
    step: '03',
    title: 'Platform Build & Custom Code Integration',
    description: 'I develop your site directly in Wix Studio or Squarespace, injecting custom CSS, responsive breakpoints, booking/e-commerce integrations, and SEO metadata.'
  },
  {
    step: '04',
    title: 'QA, Loom Training & Launch',
    description: 'Rigorous cross-device testing on mobile, tablet, and desktop. I transfer site ownership, connect your custom domain, and record step-by-step Loom video training.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Rostova',
    role: 'Founder & Creative Director',
    company: 'Aura Sanctuary',
    platform: 'Squarespace',
    avatarInitials: 'ER',
    highlight: '+78% Booking Conversion',
    quote: 'Eniola took our vision and elevated it far beyond what we imagined possible on Squarespace. Our clients constantly comment on how serene and easy the booking flow is. She delivered a week early!',
    metric: 'Appointment drop-offs dropped from 42% to 8%'
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Vanguard Capital',
    platform: 'Wix Studio',
    avatarInitials: 'MV',
    highlight: 'Agency-Grade Quality at Sprint Speed',
    quote: 'We interviewed four boutique digital agencies before hiring Eniola. She built an institutional-grade dark-mode site in Wix Studio that our team can update in minutes without touching code.',
    metric: '+115% qualified founder pitch submissions'
  },
  {
    id: '3',
    name: 'Chantal Dubois',
    role: 'Co-Founder',
    company: 'Sola Botanicals',
    platform: 'Squarespace',
    avatarInitials: 'CD',
    highlight: '+142% E-Commerce Revenue Lift',
    quote: 'Our previous shop looked homemade and lost customers at checkout. Eniola engineered a clean, luxurious storefront with subscription logic that doubled our revenue in two months.',
    metric: '68.4% completed checkout rate on mobile'
  },
  {
    id: '4',
    name: 'Dr. Marcus Chen',
    role: 'Executive Coach & Advisor',
    company: 'Chen Advisory',
    platform: 'Squarespace',
    avatarInitials: 'MC',
    highlight: 'Closed $24K Retainer in Week 2',
    quote: 'The intake funnel Eniola designed completely filtered out tire-kickers. The site paid for itself two weeks post-launch when an enterprise client booked through her automated qualification flow.',
    metric: '14 hours saved weekly on manual client vetting'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Platform',
    question: 'Why choose Wix or Squarespace instead of WordPress or Webflow?',
    answer: 'WordPress requires perpetual plugin updates, security patches, and expensive developer retainers whenever something breaks. Webflow has a steep learning curve that leaves most founders reliant on outside help. Wix Studio and Squarespace provide agency-grade custom visual aesthetics with the massive benefit of total client autonomy — you can update text, add blog articles, or upload new products in seconds without breaking the layout.'
  },
  {
    category: 'Platform',
    question: 'Should I choose Wix Studio or Squarespace for my project?',
    answer: 'Both platforms are exceptional, but each excels in different areas. I recommend Squarespace for consultants, coaches, interior designers, wellness practitioners, and editorial brands who want a minimalist aesthetic with frictionless blogging and Acuity Scheduling. I recommend Wix Studio for tech startups, creative agencies, and brands requiring intricate responsive breakpoints, complex database collections, or custom Velo JavaScript logic. If you are unsure, we will decide together during our discovery call!'
  },
  {
    category: 'Process',
    question: 'How long does a typical website project take from start to finish?',
    answer: 'Most standard custom website projects take between 2 to 3 weeks from kickoff to launch. More extensive builds with e-commerce, custom database collections, or extensive copy revisions take approximately 3 to 4 weeks. My sprint process ensures we maintain momentum without long periods of silence.'
  },
  {
    category: 'Post-Launch',
    question: 'Will I be able to easily update and manage the site myself after launch?',
    answer: 'Yes, 100%! That is one of the primary reasons clients choose me. At project completion, I provide a comprehensive library of personalized Loom video recordings walking you through your exact website backend. You will know exactly how to edit copy, swap images, create blog posts, manage bookings, and view client inquiries.'
  },
  {
    category: 'Process',
    question: 'Do you write the copy and provide the photos, or do I need to prepare them?',
    answer: 'You can provide your own branding assets, copy, and photography, or we can collaborate. I provide content outline templates and wireframes that guide you on what copy is needed for every section. I also assist with copy editing for conversion flow, and can source curated high-resolution commercial imagery that fits your aesthetic.'
  },
  {
    category: 'Process',
    question: 'Do you handle domain connection, SEO optimization, and launch?',
    answer: 'Yes, absolutely. I take care of the entire launch checklist: connecting your custom domain, setting up SSL certificates, configuring 301 redirects, adding Google Analytics / Google Tag Manager, optimizing page titles and meta descriptions for search engines, and submitting your XML sitemap to Google Search Console.'
  },
  {
    category: 'Pricing',
    question: 'What are your project payment terms?',
    answer: 'Projects are structured with a standard 50% deposit upon contract signing to reserve your sprint date on my calendar, with the remaining 50% due upon final design approval before the website is transferred to your account and launched live.'
  }
];
