/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — Single Source of Truth for the Entire Devtor360 Website
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit ANY data, copy, titles, links, images, or configuration directly in this file.
 * Components across the website consume these data structures directly.
 */

// ─── 1. Site Metadata & Global Info ──────────────────────────────────────────

export const SITE_META = {
  company: "Devtor360",
  tagline: "We Build Digital Products for High-Growth Companies",
  title: "Devtor360 | Digital Product & Software Engineering Agency",
  description: "Turning Complexity into digital Excellence. We partner with founders and enterprise leaders to design, engineer, and launch high-impact digital products.",
  email: "hello@devtor360.com",
  contactEmail: "info@devtor360.com",
  phone: "+1-912-345-6789",
  phoneClean: "+19123456789",
  linkedin: "https://linkedin.com/company/devtor360",
  github: "https://github.com/devtor360",
  twitter: "#",
  status: "Available for new projects (Q3/Q4)",
  responseTime: "< 2 Hours",
  logo: {
    dark: "/devtor360-logo.svg",
    light: "/devtor360-light.svg",
    alt: "Devtor360",
  },
  ctaButton: {
    label: "Let's Talk",
    href: "/contact",
  },
};

// ─── 2. Navigation ───────────────────────────────────────────────────────────

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Work", href: "/#portfolio" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQs", href: "/#faqs" },
];

// ─── 3. Hero Section ─────────────────────────────────────────────────────────

export type StatItem = {
  value: number;
  label: string;
  suffix: string;
  highlight: string;
  iconName: "Calendar" | "Users" | "CheckCircle2" | "Globe";
};

export const HERO_DATA = {
  badge: "DIGITAL PRODUCT AGENCY",
  headlinePrefix: "We build digital products for",
  headlineCycling: [
    "ambitious startups",
    "global enterprises",
    "modern brands",
    "industry leaders",
    "high-growth scaleups",
  ],
  description:
    "Devtor360 is a full-service software agency. We partner with founders and enterprise leaders to design, engineer, and launch high-impact web platforms, mobile apps, and AI solutions.",
  ctaPrimary: { label: "Start a Project", href: "/contact" },
  ctaSecondary: { label: "View Our Work", href: "/#portfolio" },
  stats: [
    { value: 8, label: "Years of Experience", suffix: "+", highlight: "Proven Track Record", iconName: "Calendar" as const },
    { value: 120, label: "Clients Worldwide", suffix: "+", highlight: "Global Reach", iconName: "Users" as const },
    { value: 137, label: "Projects Delivered", suffix: "+", highlight: "On-Time Delivery", iconName: "CheckCircle2" as const },
    { value: 15, label: "Industry Sectors", suffix: "+", highlight: "Cross-Industry", iconName: "Globe" as const },
  ],
};

// Alias for backward compatibility if imported as HERO
export const HERO = HERO_DATA;

// ─── 4. Client Logos ─────────────────────────────────────────────────────────

export type ClientLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const CLIENTS_DATA = {
  eyebrow: "Trusted by Ambitious Businesses",
  clients: [
    { name: "Flop Hero", src: "/icons/clients/flop-hero.svg", width: 495, height: 168 },
    { name: "Localised", src: "/icons/clients/localised.svg", width: 416, height: 168 },
    { name: "Emirates Post", src: "/icons/clients/emirates-post.svg", width: 285, height: 168 },
    { name: "CareerNetwork.co", src: "/icons/clients/careernetwork.svg", width: 649, height: 168 },
    { name: "No Hesi", src: "/icons/clients/no-hesi.svg", width: 371, height: 168 },
    { name: "Snoonu", src: "/icons/clients/snoonu.svg", width: 509, height: 168 },
  ],
};

export const CLIENTS = CLIENTS_DATA.clients;

// ─── 5. Services & Capabilities ──────────────────────────────────────────────

export type ServiceMetric = {
  label: string;
  value: string;
};

export type ServiceItem = {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  features: string[];
  techStack: string[];
  metrics: ServiceMetric[];
};

export const SERVICES_SECTION_DATA = {
  eyebrow: "Services & Capabilities",
  badgeSubtitle: "Full Service Delivery",
  deliverablesHeading: "What We Deliver:",
  advantagesHeading: "Core Advantages",
  ctaButtonPrefix: "Get a Proposal for",
  ctaHref: "/contact",
  services: [
    {
      id: "web-platforms",
      tabLabel: "Web & SaaS Platforms",
      badge: "Full-Stack Development",
      title: "Web & SaaS Platforms",
      headline: "Custom web applications engineered for speed, reliability, and scale.",
      description:
        "We design and build complete cloud-native web platforms using Next.js, React, Node.js, and Python. Every platform features fast page loads, automated deployments, and resilient database architectures.",
      deliverables: [
        "Custom SaaS platforms with multi-tenant architecture",
        "Interactive customer portals & management dashboards",
        "High-conversion e-commerce & web applications",
        "Scalable REST and GraphQL API backends",
      ],
      features: [
        "Sub-second page load speeds & Core Web Vitals",
        "Role-based access control & SOC2 security",
        "Automated CI/CD zero-downtime deployments",
        "Cloud-native auto-scaling infrastructure",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS"],
      metrics: [
        { label: "Page Load Speed", value: "< 0.4s" },
        { label: "Lighthouse Score", value: "98/100" },
        { label: "Uptime SLA", value: "99.99%" },
      ],
    },
    {
      id: "ai-systems",
      tabLabel: "AI & Machine Learning",
      badge: "Smart Automation",
      title: "AI & Machine Learning Systems",
      headline: "Integrate intelligent AI models and smart workflows directly into your business.",
      description:
        "We integrate modern artificial intelligence into your software — from automated customer assistants and intelligent document analysis to custom LLM pipelines that save hundreds of human hours every week.",
      deliverables: [
        "Custom generative AI agents & smart automation",
        "Vector search & document retrieval (RAG) systems",
        "Custom model fine-tuning for proprietary data",
        "Automated data extraction & analytics pipelines",
      ],
      features: [
        "Ultra-low latency AI inference pipeline",
        "Enterprise security & data privacy guardrails",
        "Seamless integration with existing databases",
        "Continuous evaluation & response quality monitoring",
      ],
      techStack: ["OpenAI API", "Claude API", "LangChain", "Pinecone", "Python", "PyTorch"],
      metrics: [
        { label: "Inference Latency", value: "18ms" },
        { label: "Accuracy Rate", value: "99.4%" },
        { label: "Time Saved", value: "85%" },
      ],
    },
    {
      id: "mobile-apps",
      tabLabel: "Mobile Applications",
      badge: "iOS & Android",
      title: "Native & Cross-Platform Mobile Apps",
      headline: "Smooth, responsive mobile experiences users love opening every day.",
      description:
        "We build responsive, beautiful mobile apps for iOS and Android using React Native and Swift. Features include biometric authentication, push notifications, offline syncing, and in-app purchases.",
      deliverables: [
        "Cross-platform iOS & Android mobile apps",
        "Apple Pay, Google Pay & in-app purchases",
        "Real-time GPS tracking & push notification engines",
        "Complete App Store & Google Play launch support",
      ],
      features: [
        "Fluid 60 FPS native gesture animations",
        "Offline-first local data synchronization",
        "Native device hardware & sensors integration",
        "Biometric security & instant push notifications",
      ],
      techStack: ["React Native", "Swift", "Kotlin", "Expo", "WebSockets", "Firebase"],
      metrics: [
        { label: "Frame Rate", value: "60 FPS" },
        { label: "Store Rating", value: "4.9 ★" },
        { label: "Crash-Free Rate", value: "99.9%" },
      ],
    },
    {
      id: "cloud-devops",
      tabLabel: "Cloud & DevOps",
      badge: "Infrastructure",
      title: "Cloud Infrastructure & DevOps",
      headline: "Automated deployments, multi-region scaling, and 24/7 reliability.",
      description:
        "Never worry about downtime or traffic spikes. We set up automated cloud clusters, continuous integration pipelines, and proactive server monitoring so your application stays fast and available worldwide.",
      deliverables: [
        "Cloud architecture setup on AWS, GCP & Vercel",
        "Automated zero-downtime CI/CD release pipelines",
        "Infrastructure-as-Code (Terraform) setup",
        "Security hardening, backups & disaster recovery",
      ],
      features: [
        "Zero-downtime automated deployment pipelines",
        "SOC2 & GDPR compliance readiness controls",
        "Global edge content delivery & CDN caching",
        "Real-time observability & automated health alerts",
      ],
      techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Cloudflare"],
      metrics: [
        { label: "Deploy Time", value: "< 2 mins" },
        { label: "Availability", value: "99.99%" },
        { label: "Vulnerabilities", value: "0" },
      ],
    },
    {
      id: "ui-ux-design",
      tabLabel: "UI/UX & Design Systems",
      badge: "Product Design",
      title: "UI/UX Design & Component Systems",
      headline: "Design crafted for clarity, conversion, and memorable user experiences.",
      description:
        "We design clean, intuitive user interfaces in Figma, backed by comprehensive component design systems so your product looks and feels world-class from day one.",
      deliverables: [
        "Interactive clickable Figma prototypes",
        "Component design systems & typography tokens",
        "User journeys, wireframes & UX audits",
        "Seamless developer-ready design handoffs",
      ],
      features: [
        "Conversion-focused layout hierarchy",
        "Consistent cross-platform design tokens",
        "WCAG accessibility standards compliant",
        "Production-ready interactive component library",
      ],
      techStack: ["Figma", "Design Systems", "Framer Motion", "Tailwind CSS", "Storybook"],
      metrics: [
        { label: "Conversion Lift", value: "+38%" },
        { label: "User Retention", value: "+44%" },
        { label: "Design Delivery", value: "Prompt" },
      ],
    },
  ] as ServiceItem[],
};

export const SERVICES_DATA = SERVICES_SECTION_DATA.services;
export const SERVICES = SERVICES_DATA;
export const CAPABILITIES = SERVICES_DATA;

// ─── 6. Industries ───────────────────────────────────────────────────────────

export type IndustryCategory = "Technology" | "Commerce" | "Health & Finance" | "Hospitality";

export type IndustryItem = {
  icon: string;
  title: string;
  description: string;
  category: IndustryCategory;
  metric: string;
};

export const INDUSTRIES_DATA = {
  eyebrow: "Industry Verticals",
  headline: "Domain Engineering for High-Stakes Sectors",
  description: "We engineer tailored solutions meeting stringent regulatory standards and enterprise workloads.",
  caseStudyLabel: "Case Study →",
  tabs: ["Technology", "Commerce", "Health & Finance", "Hospitality"] as IndustryCategory[],
  industries: [
    // ── Technology ──
    {
      icon: "/icons/industries/edtech.svg",
      title: "EdTech & Education",
      description: "Virtual classrooms, interactive assessment platforms, and student management systems.",
      category: "Technology" as const,
      metric: "100K+ Learners",
    },
    {
      icon: "/icons/industries/blockchain.svg",
      title: "Web3 & Blockchain",
      description: "Smart contracts, decentralized wallets, and secure enterprise data protocols.",
      category: "Technology" as const,
      metric: "Audited Code",
    },
    {
      icon: "/icons/expertise-custom-development.svg",
      title: "AI & Intelligent Systems",
      description: "Custom LLM pipelines, autonomous agents, and smart predictive analytics.",
      category: "Technology" as const,
      metric: "Sub-15ms Latency",
    },
    {
      icon: "/icons/industries/cloud-infra.svg",
      title: "Cloud & DevOps Infrastructure",
      description: "Multi-region cluster orchestration, automated CI/CD pipelines, and zero-downtime scaling.",
      category: "Technology" as const,
      metric: "99.99% Uptime",
    },

    // ── Commerce ──
    {
      icon: "/icons/industries/retail-tech.svg",
      title: "Retail & E-Commerce",
      description: "High-conversion storefronts, dynamic inventory syncing, and loyalty systems.",
      category: "Commerce" as const,
      metric: "+34% Conversion",
    },
    {
      icon: "/icons/industries/autotech.svg",
      title: "AutoTech & Telematics",
      description: "Connected vehicle apps, fleet tracking dashboards, and IoT gateway interfaces.",
      category: "Commerce" as const,
      metric: "10K+ Nodes",
    },
    {
      icon: "/icons/industries/fmcg.svg",
      title: "FMCG & Consumer Goods",
      description: "Direct-to-consumer platforms, wholesale distribution networks, and digital brand hubs.",
      category: "Commerce" as const,
      metric: "500K+ SKUs",
    },
    {
      icon: "/icons/industries/agr-tech.svg",
      title: "AgriTech & Supply Chain",
      description: "Farm yield tracking dashboards, grain logistics portals, and automated distribution pipelines.",
      category: "Commerce" as const,
      metric: "40% Fast Logistics",
    },

    // ── Health & Finance ──
    {
      icon: "/icons/industries/health-tech.svg",
      title: "HealthTech & MedTech",
      description: "HIPAA-compliant telehealth platforms, patient portals, and diagnostic workflows.",
      category: "Health & Finance" as const,
      metric: "HIPAA Compliant",
    },
    {
      icon: "/icons/industries/fintech.svg",
      title: "FinTech & Payments",
      description: "Payment integrations, neo-banking applications, and risk assessment engines.",
      category: "Health & Finance" as const,
      metric: "$50M+ Volume",
    },
    {
      icon: "/icons/expertise-it-consulting.svg",
      title: "InsurTech & Risk Analytics",
      description: "Automated underwriting tools, digital claim processing engines, and policy portals.",
      category: "Health & Finance" as const,
      metric: "Bank Encryption",
    },
    {
      icon: "/icons/expertise-digital-transformation.svg",
      title: "BioTech & Clinical Systems",
      description: "Clinical trial management platforms, lab data pipelines, and encrypted diagnostic data hubs.",
      category: "Health & Finance" as const,
      metric: "Zero Data Loss",
    },

    // ── Hospitality ──
    {
      icon: "/icons/industries/travel-tech.svg",
      title: "Travel & Booking",
      description: "Real-time reservation engines, itinerary planners, and multi-currency platforms.",
      category: "Hospitality" as const,
      metric: "Instant Booking",
    },
    {
      icon: "/icons/industries/prop-tech.svg",
      title: "PropTech & Real Estate",
      description: "Property listing portals, tenant onboarding tools, and automated management software.",
      category: "Hospitality" as const,
      metric: "80% Time Saved",
    },
    {
      icon: "/icons/service-mobile-app.svg",
      title: "FoodTech & Delivery",
      description: "On-demand food ordering platforms, multi-branch kitchen sync, and route optimization.",
      category: "Hospitality" as const,
      metric: "< 1s Dispatch",
    },
    {
      icon: "/icons/service-web-app.svg",
      title: "Events & Venue Booking",
      description: "Interactive seat map booking, live attendee check-in tools, and event management engines.",
      category: "Hospitality" as const,
      metric: "1M+ Attendees",
    },
  ] as IndustryItem[],
};

export const INDUSTRY_TABS = INDUSTRIES_DATA.tabs;
export const INDUSTRIES = INDUSTRIES_DATA.industries;

// ─── 7. Case Studies / Featured Projects ─────────────────────────────────────

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string;
  highlights: string[];
};

export const PROJECTS_DATA = {
  eyebrow: "Featured Work",
  headline: "Case Studies & Proven Deliverables",
  description: "Real software solutions shipped for high-growth startups and global enterprises.",
  cta: {
    label: "Explore all case studies",
    href: "/contact",
  },
  projects: [
    {
      title: "HRM Enterprise Suite",
      category: "Cloud SaaS Platform",
      description:
        "A comprehensive workforce platform managing employee onboarding, automated payroll calculations, and compliance reporting.",
      image: "/images/portfolio/compliance-suite.jpg",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
      metrics: "40% Faster Onboarding",
      highlights: ["99.99% Uptime", "Sub-40ms Query Speed", "SOC2 Compliant"],
    },
    {
      title: "Smart Delivery Super App",
      category: "Mobile & Logistics",
      description:
        "An on-demand delivery ecosystem featuring multi-vendor routing, live GPS tracking, and instant secure payments.",
      image: "/images/portfolio/smart-delivery.jpg",
      tags: ["React Native", "Node.js", "Redis", "Stripe"],
      metrics: "250K+ Active Users",
      highlights: ["< 1s Dispatch Latency", "Offline Geofencing", "Multi-Language"],
    },
    {
      title: "GTO AI Training Suite",
      category: "AI & Simulation",
      description:
        "An interactive training platform executing real-time strategy simulations with actionable decision insights.",
      image: "/images/portfolio/gto-training.jpg",
      tags: ["Python", "FastAPI", "PyTorch", "WebSockets"],
      metrics: "99.8% Precision Rate",
      highlights: ["10M+ Sim Runs/Day", "Sub-15ms AI Inference", "Custom ML Model"],
    },
    {
      title: "Compliance Automation Suite",
      category: "Fintech & Regulatory",
      description:
        "A compliance automation engine analyzing cross-border transactions against international regulatory policies.",
      image: "/images/portfolio/hrm-system.jpg",
      tags: ["Next.js", "GraphQL", "Tailwind CSS", "Security"],
      metrics: "60% Time Saved",
      highlights: ["Automated Evidence Logs", "Immutable Audit Trail", "Bank-Grade Encryption"],
    },
  ] as ProjectItem[],
};

export const PROJECTS = PROJECTS_DATA.projects;
export type Project = ProjectItem;

// ─── 8. Tech Stack ───────────────────────────────────────────────────────────

export type TechItem = {
  name: string;
  src: string;
  width: number;
  height: number;
  category: string;
};

export const TECH_STACK_DATA = {
  eyebrow: "Technology Stack",
  headline: "Production-Grade Frameworks & Toolchains",
  description: "Battle-tested libraries chosen for zero-dependency bloat, high security, and high execution speed.",
  items: [
    { name: "Ionic", src: "/icons/tech/ionic.svg", width: 222, height: 140, category: "Mobile" },
    { name: "Python", src: "/icons/tech/python.svg", width: 313, height: 140, category: "AI & Backend" },
    { name: "Photoshop", src: "/icons/tech/photoshop.svg", width: 105, height: 140, category: "Design" },
    { name: "Node.js", src: "/icons/tech/nodejs.svg", width: 254, height: 140, category: "Backend" },
    { name: "Swift", src: "/icons/tech/swift.svg", width: 255, height: 140, category: "iOS Native" },
    { name: "Illustrator", src: "/icons/tech/illustrator.svg", width: 112, height: 140, category: "Vector UI" },
    { name: "Google Cloud", src: "/icons/tech/google-cloud.svg", width: 375, height: 140, category: "Cloud" },
    { name: "Java", src: "/icons/tech/java.svg", width: 86, height: 140, category: "Enterprise" },
  ] as TechItem[],
};

export const TECH_STACK = TECH_STACK_DATA.items;

// ─── 9. Why Choose Us / Value Pillars ────────────────────────────────────────

export type PillarItem = {
  title: string;
  description: string;
  iconName?: "Zap" | "Users2" | "Code2" | "ShieldCheck";
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  timeline: string;
};

export const WHY_US_DATA = {
  eyebrow: "WHY DEVTOR360",
  headline: "Built for Speed, Engineered for Scale",
  description:
    "We blend technical precision with rapid execution — delivering digital products that not only work flawlessly, but give your business a measurable competitive advantage.",
  qualityBadge: "Standard Quality",
  pillars: [
    {
      title: "Fast-Track Velocity",
      description: "Bi-weekly agile sprints with working staging builds from Day 14. We eliminate months of unnecessary delays.",
      iconName: "Zap" as const,
    },
    {
      title: "Senior Engineering Pods",
      description: "Dedicated staff engineers and designers working directly with you. Zero junior handoffs or outsourcing.",
      iconName: "Users2" as const,
    },
    {
      title: "Bespoke Architecture",
      description: "Every platform is custom-built around your exact business goals and workflows — zero cookie-cutter templates.",
      iconName: "Code2" as const,
    },
    {
      title: "Complete Code Ownership",
      description: "You own 100% of the code, intellectual property, and infrastructure from day one with full GitHub access.",
      iconName: "ShieldCheck" as const,
    },
  ],
  methodology: {
    eyebrow: "Our Methodology",
    headline: "Agile 4-Phase Delivery Process",
    description: "Predictable, transparent sprints designed to keep your project moving forward without surprises.",
    deliverableLabel: "Sprint Deliverable",
    verifiedLabel: "✓ Verified",
    process: [
      {
        step: "01",
        title: "Discovery & Blueprint",
        description: "We map user journeys, technical requirements, and define the complete architecture plan.",
        timeline: "Week 1",
      },
      {
        step: "02",
        title: "Agile Sprint Builds",
        description: "2-week sprint cycles with live staging previews, rapid feedback, and continuous progress.",
        timeline: "Weeks 2–5",
      },
      {
        step: "03",
        title: "Quality Assurance",
        description: "Comprehensive end-to-end testing, security audits, and cross-device performance optimization.",
        timeline: "Week 6",
      },
      {
        step: "04",
        title: "Launch & Support",
        description: "Smooth production deployment, DNS setup, and dedicated post-launch support retainers.",
        timeline: "Ongoing",
      },
    ] as ProcessStep[],
  },
};

export const WHY_US = {
  eyebrow: WHY_US_DATA.eyebrow,
  headline: WHY_US_DATA.headline,
  description: WHY_US_DATA.description,
  pillars: WHY_US_DATA.pillars,
  process: WHY_US_DATA.methodology.process,
};

// ─── 10. Reviews & Testimonials ──────────────────────────────────────────────

export type ReviewItem = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  verified: string;
};

export const REVIEWS_DATA = {
  eyebrow: "Engineering Leadership Reviews",
  headline: "Validated by Engineering & Product Executives",
  description: "Real feedback on technical execution, code quality, and delivery speed.",
  reviews: [
    {
      name: "Ayesha Khan",
      role: "VP of Product, CloudScale",
      quote:
        "Devtor360 completely transformed our delivery velocity. They took our SaaS platform from Figma designs to live production in 6 weeks with zero headaches.",
      avatar: "/images/avatars/avatar-1.jpg",
      verified: "Verified Client",
    },
    {
      name: "Zainab Malik",
      role: "Head of Engineering, HyperPay",
      quote:
        "Unlike traditional outsourced agencies, Devtor360 engineers write clean, thoroughly tested code that our internal team loved building upon.",
      avatar: "/images/avatars/avatar-2.jpg",
      verified: "Enterprise FinTech",
    },
    {
      name: "Sana Tariq",
      role: "Chief Growth Officer, RetailX",
      quote:
        "The custom platform they built for us lifted our checkout conversion rate by 38% in the first quarter. The results were evident right away.",
      avatar: "/images/avatars/avatar-3.jpg",
      verified: "E-Commerce",
    },
    {
      name: "Bilal Ahmed",
      role: "Lead Architect, Nexus Labs",
      quote:
        "Their team helped us deploy a custom AI assistant that handles thousands of customer inquiries daily at a fraction of our previous operational cost.",
      avatar: "/images/avatars/avatar-4.jpg",
      verified: "AI Platform",
    },
    {
      name: "Hira Sheikh",
      role: "Design Director, Horizon Tech",
      quote:
        "Every animation, design system token, and user flow was implemented with pixel-perfect accuracy. A truly design-conscious team.",
      avatar: "/images/avatars/avatar-5.jpg",
      verified: "Product Design",
    },
    {
      name: "Rukhsana Bibi",
      role: "Chief Operating Officer, Prime Logistics",
      quote:
        "Managing complex delivery operations used to be chaotic. Devtor360 built a custom dispatch engine that made our entire delivery network reliable.",
      avatar: "/images/avatars/avatar-6.jpg",
      verified: "Logistics",
    },
  ] as ReviewItem[],
};

export const REVIEWS = REVIEWS_DATA.reviews;

// ─── 11. Frequently Asked Questions ──────────────────────────────────────────

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQS_DATA = {
  eyebrow: "Frequently Asked Questions",
  headline: "Got Questions? We Have Answers.",
  description: "Everything you need to know about working with Devtor360.",
  faqs: [
    {
      question: "What digital services does Devtor360 offer?",
      answer:
        "We provide end-to-end digital product development including custom web applications, mobile apps (iOS & Android), AI integrations, cloud DevOps, fast-track MVP builds, and UI/UX product design.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "For fast-track MVPs, we deliver a production-ready system in 4 to 6 weeks. For larger web platforms or mobile applications, projects typically span 8 to 14 weeks with working demo builds released every 2 weeks.",
    },
    {
      question: "How do we collaborate and communicate during the build?",
      answer:
        "You will have direct daily access to your dedicated engineering pod via Slack, scheduled weekly sprint reviews, and live staging environments where you can test new features as they are built.",
    },
    {
      question: "Do we own the intellectual property and source code?",
      answer:
        "Yes, 100%. All source code, design files, database architectures, and intellectual property belong entirely to you from day one.",
    },
    {
      question: "Do you offer post-launch maintenance and support?",
      answer:
        "Yes. We offer flexible post-launch support retainers covering continuous monitoring, security updates, server scaling, and ongoing feature enhancements.",
    },
  ] as FAQItem[],
  helpBox: {
    title: "Still have questions?",
    description: "Can't find what you are looking for? Send us a message and our technical team will respond within 24 hours.",
    ctaText: "Get in Touch",
    ctaHref: "/contact",
  },
};

export const FAQS = FAQS_DATA.faqs;

// ─── 12. Footer ──────────────────────────────────────────────────────────────

export const FOOTER_DATA = {
  ctaBanner: {
    headline: "Ready to bring your product to life?",
    descriptionPrefix: "Average response time: ",
    placeholder: "Enter your email address...",
    buttonText: "Get in Touch",
    buttonSuccessText: "Message Sent!",
  },
  brandDescription:
    "A full-service software agency partnering with ambitious startups and global brands to design, engineer, and launch high-impact digital products.",
  navigationHeading: "Navigation",
  servicesHeading: "Services",
  contactHeading: "Contact Us",
  socialLinks: [
    {
      label: "GitHub",
      href: SITE_META.github,
      path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z",
    },
    {
      label: "LinkedIn",
      href: SITE_META.linkedin,
      path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.15c0-1.47-.03-3.36-2.05-3.36-2.06 0-2.37 1.6-2.37 3.26V21h-4V9Z",
    },
    {
      label: "Twitter",
      href: SITE_META.twitter,
      path: "M22 5.9c-.7.32-1.46.53-2.25.63a3.9 3.9 0 0 0 1.72-2.16 7.8 7.8 0 0 1-2.48.95A3.9 3.9 0 0 0 12.2 8.6c0 .3.04.6.1.89A11.05 11.05 0 0 1 4.1 4.6a3.9 3.9 0 0 0 1.2 5.2 3.9 3.9 0 0 1-1.76-.49v.05a3.9 3.9 0 0 0 3.12 3.82c-.55.15-1.13.17-1.72.06a3.9 3.9 0 0 0 3.64 2.7A7.83 7.83 0 0 1 2 17.5a11.03 11.03 0 0 0 5.97 1.75c7.17 0 11.1-5.94 11.1-11.09l-.01-.5A7.9 7.9 0 0 0 22 5.9Z",
    },
  ],
  legalLinks: [
    { label: "Terms of Service", href: "/terms_and_conditions" },
    { label: "Privacy Policy", href: "/privacy_policy" },
  ],
  copyrightText: "Inc. All rights reserved.",
};

// ─── 13. Contact Page ────────────────────────────────────────────────────────

export const CONTACT_PAGE_DATA = {
  meta: {
    title: "Contact Us | Devtor360",
    description: "Talk to the Devtor360 team about your next digital product. Get a free proposal within one business day.",
  },
  hero: {
    badge: "We reply within one business day",
    headlinePrefix: "Let's Build Something ",
    headlineHighlight: "Exceptional",
    description:
      "Tell us about your project and our team will map out the fastest path from idea to launch. No pressure, no obligation — just a clear plan you can act on.",
  },
  getInTouch: {
    eyebrow: "Get In Touch",
    headline: "Talk to a Real Human",
    description:
      "Whether you need a full product team or a second opinion on an existing build, we are happy to help you figure out the next step.",
  },
  contactDetails: [
    {
      label: "Email Us",
      value: "info@devtor360.com",
      href: "mailto:info@devtor360.com",
      description: "Drop us a line anytime",
      iconName: "Mail" as const,
    },
    {
      label: "Call Us",
      value: "+1-912-345-6789",
      href: "tel:+19123456789",
      description: "Mon to Fri, we are on the line",
      iconName: "Phone" as const,
    },
    {
      label: "Working Hours",
      value: "24 Hours A Day",
      href: null,
      description: "5 days a week",
      iconName: "Clock" as const,
    },
  ],
  whatHappensNext: {
    headline: "What Happens Next",
    steps: [
      {
        title: "We review your brief",
        description: "A specialist reads through your goals and prepares the right questions.",
      },
      {
        title: "We schedule a discovery call",
        description: "A free 30 minute session to align on scope, timeline, and budget.",
      },
      {
        title: "You receive a proposal",
        description: "A tailored plan with milestones, team structure, and clear pricing.",
      },
    ],
  },
  form: {
    title: "Send Us a Message",
    description: "Fill in the form and one of our specialists will get back to you within one business day.",
    services: [
      "Custom Software Development",
      "MVP Development",
      "Mobile/Web App Development",
      "Shopify Development",
      "Design Services",
      "Something Else",
    ],
    budgets: [
      "Under $5,000",
      "$5,000 – $15,000",
      "$15,000 – $50,000",
      "$50,000+",
      "Not sure yet",
    ],
    submitButtonText: "Send Message",
    sendingButtonText: "Sending...",
    successMessage:
      "Thanks for reaching out! Your message is on its way and we will reply within one business day.",
    errorDefaultMessage:
      "We could not send your message right now. Please try again or email us at info@devtor360.com.",
    errorMissingConfigMessage:
      "Email service is not configured yet. Please reach us at info@devtor360.com.",
    privacyText: "By submitting this form you agree to our ",
    privacyLinkText: "Privacy Policy",
    privacyPostText: ". We never share your details with third parties.",
  },
};

// ─── 14. Legal Pages (Privacy & Terms) ───────────────────────────────────────

export const LEGAL_PAGES_DATA = {
  privacyPolicy: {
    title: "Privacy Policy",
    content: "Our full privacy policy is on its way. In the meantime, reach us at ",
    contactEmail: "info@devtor360.com",
    contactEmailSuffix: " with any questions about how we handle your data.",
  },
  termsAndConditions: {
    title: "Terms & Conditions",
    content: "Our full terms and conditions are on their way. In the meantime, reach us at ",
    contactEmail: "info@devtor360.com",
    contactEmailSuffix: " with any questions about working with Devtor360.",
  },
};
