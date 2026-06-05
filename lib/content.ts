// ------------------------------------------------------------------
//  Soch Catalyst — single source of content & config.
//  Copy, services, process, proof and the scheduler link all live here
//  so the client can update everything from one file.
// ------------------------------------------------------------------

import type { IconName } from "@/components/Icons";

export const HERO = {
  eyebrow: "LinkedIn positioning system",
  headline: "Your LinkedIn should be your most credible business asset.",
  headlineEmphasis: "We build it that way.",
};

export const SITE = {
  name: "Soch Catalyst",
  tagline: "LinkedIn growth for founders and senior executives.",
  email: "hello@sochcatalyst.com",
  linkedin: "https://www.linkedin.com/company/sochcatalyst",
};

/**
 * Where the CTAs send people to schedule.
 * Replace with your real Calendly / TidyCal link and the embed lights up
 * automatically. Until then a styled fallback card is shown.
 */
export const SCHEDULER_URL =
  process.env.NEXT_PUBLIC_SCHEDULER_URL ?? "";

export const CTAS = {
  primary: { label: "Book a Discovery Call", href: "/book" },
  secondary: { label: "Get a Free LinkedIn Audit", href: "/audit" },
};

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "How we work", href: "/#how-we-work" },
  { label: "Case studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  hook: string;
  description: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "profile-optimisation",
    icon: "profile",
    title: "LinkedIn Profile Optimisation",
    hook: "Win the visitor in the first five seconds.",
    description:
      "A founder or executive checks your profile before they reply to anything. If it reads like a CV, you lose them before the conversation starts. We rebuild your headline, about section, and featured content so visitors understand immediately what you stand for and who you serve.",
    points: [
      "Conversion-led headline, about & banner",
      "Featured section that routes to your offer",
      "Positioning-led rewrite, not a cosmetic refresh",
    ],
  },
  {
    slug: "content-writing",
    icon: "pen",
    title: "Content Writing & Posting",
    hook: "Post every week without writing a word.",
    description:
      "You have opinions, expertise, and a point of view worth sharing. You do not have time to turn that into consistent, well-crafted LinkedIn content. We run a monthly interview, write in your voice, build the calendar, and publish. You spend less than two hours a month. The content compounds.",
    points: [
      "Founder-voice ghostwriting",
      "Editorial calendar & scheduling",
      "Hooks that earn attention",
    ],
  },
  {
    slug: "lead-generation",
    icon: "target",
    title: "Lead Generation & Outreach",
    hook: "Booked calls, not vanity connections.",
    description:
      "We map your ICP, build the target list, write personalised outreach that sounds like you, and run the sequences. You receive warm conversations with qualified people already familiar with your positioning. No cold pitching on your end.",
    points: [
      "ICP targeting & list building",
      "Personalised multi-touch sequences",
      "Warm conversations handed to you",
    ],
  },
  {
    slug: "personal-branding",
    icon: "spark",
    title: "Personal Branding Strategy",
    hook: "Be the name your market already trusts.",
    description:
      "Before we write anything, we establish what you stand for and who needs to hear it. Your narrative strategy, content pillars, and messaging framework become the foundation that every post, outreach message, and conversation builds on. This is the work most services skip. It is the reason Soch results compound.",
    points: [
      "Positioning & messaging pillars",
      "A point of view you own",
      "A story that builds over time",
    ],
  },
  {
    slug: "coaching-workshops",
    icon: "compass",
    title: "Coaching & Workshops",
    hook: "Get your team posting with confidence.",
    description:
      "Your team sits on LinkedIn all day and posts nothing. We run live coaching and workshops that get founders and staff posting with confidence, and keep them at it.",
    points: [
      "1:1 founder coaching",
      "Team & executive workshops",
      "Playbooks your team keeps",
    ],
  },
  {
    slug: "growth-audit",
    icon: "audit",
    title: "LinkedIn Growth Audit",
    hook: "Know exactly what is holding you back.",
    description:
      "A straight read on your profile, content and outreach. We show you what is working, what is not, and the moves that matter most over the next 90 days. Every engagement with Soch begins with a version of this audit.",
    points: [
      "Profile & content teardown",
      "Competitor & positioning gaps",
      "Prioritised 90-day roadmap",
    ],
  },
];

export type Step = {
  no: string;
  icon: IconName;
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    no: "01",
    icon: "audit",
    title: "Audit & Strategy",
    description:
      "We read your profile, audience and goals. Then we agree the position that will set you apart from everyone else in your space.",
  },
  {
    no: "02",
    icon: "profile",
    title: "Optimise Your Profile",
    description:
      "We rewrite your headline, about, banner and featured section, so visitors see the authority and reach out.",
  },
  {
    no: "03",
    icon: "pen",
    title: "Content & Outreach",
    description:
      "We run your posting and your outreach in your voice. Consistent, on brand, and aimed at the people you want to meet.",
  },
  {
    no: "04",
    icon: "trend",
    title: "Inbound & Pipeline",
    description:
      "The work adds up. Inbound messages and booked calls start coming in, and we double down on what brings them.",
  },
];

export const STATS = [
  { value: "3.5×", label: "More profile views in 90 days" },
  { value: "10-20", label: "Qualified conversations / month" },
  { value: "40+", label: "Founders & execs we work with" },
  { value: "100%", label: "Done-with-you, never templated" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: string;
};

export type CaseStudy = {
  company: string;
  industry: string;
  region: string;
  duration: string;
  scope: string;
  metrics: { value: string; label: string }[];
  quote: string;
  author: string;
  authorRole: string;
  accent: string;
  initials: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    company: "Byzantine",
    industry: "Institutional Finance, Digital Assets",
    region: "Europe",
    duration: "5 months",
    scope: "LinkedIn strategy & thought leadership",
    metrics: [
      { value: "32%", label: "Outreach reply rate" },
      { value: "2,340+", label: "Followers (from 820)" },
      { value: "2", label: "Converted clients" },
      { value: "1.5 hrs", label: "Founder time on content/week (from 5)" },
    ],
    quote:
      "Soch didn't just help us post more consistently — they helped us figure out what Byzantine actually stands for in the market.",
    author: "Gaia Ferrero",
    authorRole: "Founder & CEO, Byzantine",
    accent: "#0a3d6b",
    initials: "BZ",
  },
  {
    company: "Cycle Together",
    industry: "Social Enterprise, UK",
    region: "United Kingdom",
    duration: "6 weeks",
    scope: "Go-to-market, positioning & outreach system",
    metrics: [
      { value: "46%", label: "Landing page conversion" },
      { value: "29%", label: "Outreach response rate (from 8%)" },
      { value: "4", label: "Tier-1 procurement meetings booked" },
      { value: "6", label: "Formal proposals sent in 6 weeks" },
    ],
    quote:
      "Before Soch, I was having a lot of conversations that went nowhere. Now every conversation starts from a position of credibility.",
    author: "Biola Akinwande",
    authorRole: "Founder & CEO, Cycle Together",
    accent: "#1a6b3c",
    initials: "CT",
  },
];

// NOTE: Placeholder testimonials — replace with real client quotes & names.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "In six weeks my profile went from a dead business card to my best sales rep. Three calls came in before we had even finished the first batch of posts.",
    name: "A. Rahman",
    role: "Founder & CEO, B2B SaaS",
    initials: "AR",
    accent: "#0a66c2",
  },
  {
    quote:
      "They write more like me than I do. I show up, talk through ideas, and the posts and outreach run without me chasing them.",
    name: "S. Mehta",
    role: "Managing Partner, Advisory",
    initials: "SM",
    accent: "#ff5c35",
  },
  {
    quote:
      "This is not a course or a template. A real team runs the whole thing with me. Now I am the name people bring up in my category.",
    name: "J. Olsen",
    role: "Co-founder, FinTech",
    initials: "JO",
    accent: "#00a4bd",
  },
];

// Placeholder client wordmarks for the trust strip.
export const CLIENT_LOGOS = [
  "NORTHBOUND",
  "Vantage",
  "Clearpoint",
  "HELIX",
  "Brightline",
  "Meridian",
];

export const FAQS = [
  {
    q: "Is this a course or a template?",
    a: "Neither. A real team works on your profile, content and outreach with you. You are not handed a PDF and left to figure it out.",
  },
  {
    q: "How much of my time does it take?",
    a: "About 30-45 minutes a week, usually one short call to talk through ideas. We handle the writing, scheduling, outreach and reporting.",
  },
  {
    q: "Whose voice is the content in?",
    a: "Always yours. We interview you, learn how you talk, and write in your voice. You approve every post before it goes live.",
  },
  {
    q: "How quickly will I see results?",
    a: "Profile and positioning change in week one. Reach and inbound conversations usually build over the first 60-90 days.",
  },
];
