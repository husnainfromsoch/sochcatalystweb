import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { CTAS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies — Client Results | Soch Catalyst",
  description:
    "Real results from Soch Catalyst client engagements across LinkedIn strategy, personal branding, and go-to-market positioning.",
};

/* ─── Case study 1 — Gaia Antonescu / Byzantine ─────────────────────── */

const HERO_STATS = [
  { num: 100, suffix: "%", label: "Posting consistency maintained" },
  { num: 4, suffix: "×", label: "Growth in profile views within 60 days" },
  { num: 12, suffix: "+", label: "Qualified inbound conversations in first 90 days" },
];

const META = [
  { label: "Industry", value: "Strategy & Advisory" },
  { label: "Region", value: "Europe" },
  { label: "Duration", value: "12 weeks" },
  {
    label: "Service",
    value:
      "LinkedIn Profile Optimisation · Content Writing & Posting · Lead Generation & Outreach",
  },
];

const PROBLEMS = [
  "Gaia&rsquo;s profile wasn&rsquo;t converting. The headline described her role rather than her value. The About section was a company description, not a founder story. There was no clear point of view — nothing that told a prospective client why Gaia specifically, why Byzantine specifically. Visitors landed and left with no strong reason to reach out.",
  "Content was inconsistent and reactive. When she had a thought worth sharing, she&rsquo;d post. Most weeks, nothing went out. There was no strategy, no rhythm, and no system for turning her genuine expertise into material that reached the right people. The algorithm punishes inconsistency, and it was.",
  "Outreach had never been tried systematically. Conversations were happening, but only through warm introductions. There was no process for expanding into adjacent founder communities and decision-makers who didn&rsquo;t already know her name.",
];

const FRAMEWORK = [
  {
    no: "01",
    title: "Audit & Positioning",
    body: "We spent the first two weeks understanding Gaia's business, her clients, her voice, and what Byzantine does differently. We interviewed her, reviewed her past work, and mapped the founder communities she most wanted to reach. Everything downstream was built on this foundation.",
  },
  {
    no: "02",
    title: "Profile Overhaul",
    body: "We rewrote every section from scratch. The headline became value-first and specific. The About section became a founder story. Keywords were embedded throughout for discoverability. It now reads like Gaia wrote it on her best day.",
  },
  {
    no: "03",
    title: "Content Engine",
    body: "We built a content calendar anchored in three pillars. We ghostwrite every post in Gaia's voice, put it through a review round, and publish on a consistent three-times-per-week schedule. Within 60 days, profile views had grown 4×.",
  },
  {
    no: "04",
    title: "Outreach Sequencing",
    body: "We built a targeted outreach system using Sales Navigator to identify founder-profile connections in Gaia's target segments. Connection requests are personalised and non-salesy — the goal is conversation, not pitch. Follow-up sequences are human-written and context-aware. Within 90 days, 12 qualified conversations had been initiated through outreach alone.",
  },
];

const RESULTS = [
  {
    value: "100%",
    num: 100,
    suffix: "%",
    headline: "Posting consistency maintained.",
    body: "Three posts per week, every week, for the full engagement — no missed weeks.",
  },
  {
    value: "4×",
    num: 4,
    suffix: "×",
    headline: "Growth in profile views within 60 days.",
    body: "From the profile overhaul and content engine going live simultaneously.",
  },
  {
    value: "12+",
    num: 12,
    suffix: "+",
    headline: "Qualified inbound conversations in 90 days.",
    body: "Founders and decision-makers matching Byzantine's ideal client profile, through content and outreach combined.",
  },
];

/* ─── Case study 2 — Biola Babawale / Cycle Together ────────────────── */

const HERO_STATS_2 = [
  { num: 3, suffix: "×", label: "Growth in LinkedIn followers in 60 days" },
  { num: 5, suffix: "+", label: "Partnership conversations opened through LinkedIn outreach" },
  { num: 100, suffix: "%", label: "Consistent weekly content maintained throughout engagement" },
];

const META_2 = [
  { label: "Industry", value: "Sport, Wellness & Community" },
  { label: "Region", value: "United Kingdom" },
  { label: "Duration", value: "10 weeks" },
  {
    label: "Service",
    value:
      "LinkedIn Profile Optimisation · Personal Branding Strategy · Content Writing & Posting · Lead Generation & Outreach",
  },
];

const PROBLEMS_2 = [
  "Biola&rsquo;s LinkedIn profile wasn&rsquo;t telling her story. The headline led with job title. The About section listed activities without communicating the mission or the why. There was no clear articulation of what Cycle Together is, who it&rsquo;s for, or why Biola is the person building it. Visitors came and left without understanding the depth of what she was doing.",
  "Content had been tried and abandoned. Biola had the ideas &mdash; she thinks clearly and cares deeply about the space &mdash; but converting that into a consistent LinkedIn presence felt overwhelming on top of everything else she was running. Posts went out in bursts and then went quiet for weeks. The inconsistency was costing her visibility and credibility with the exact audience she needed to build.",
  "Partnership outreach was happening informally &mdash; conversations through mutual connections, emails that didn&rsquo;t always land, and no systematic way to reach the corporate wellness teams and sport organisations who would benefit from partnering with Cycle Together. The opportunity was there. The process to capture it wasn&rsquo;t.",
];

const FRAMEWORK_2 = [
  {
    no: "01",
    title: "Mission-Led Positioning",
    body: "We started by getting deep on the mission. Cycle Together isn't a product — it's a movement, and Biola's LinkedIn needed to feel like one. We ran a positioning session to extract the core beliefs, the community story, and the specific language Biola uses when she talks about inclusion and access in sport. This became the foundation for everything: profile, content, and outreach. The goal was a LinkedIn presence that felt unmistakably Biola — not polished into blandness, but sharp and specific about what she stands for.",
  },
  {
    no: "02",
    title: "Profile Rebuild",
    body: "We rebuilt the profile around the mission, not the CV. The headline became a clear statement of what Cycle Together does and who it's for. The About section opened with the founding story — the moment Biola knew cycling needed to change — and moved into what the community has become and where it's going. Featured content was curated to show the work in action: events, community moments, and press coverage. The result was a profile that any corporate wellness lead, sport organisation, or community funder could land on and immediately understand.",
  },
  {
    no: "03",
    title: "Content Voice & Calendar",
    body: "We developed three content pillars for Biola: community stories from the ground, perspective pieces on inclusion in sport, and founder reflections on building something that matters. Every post is ghostwritten in her voice — warm, direct, and grounded in real experience. We publish twice a week on a fixed schedule. Within 60 days, follower growth had tripled against the previous 60-day baseline.",
  },
  {
    no: "04",
    title: "Partnership Outreach",
    body: "We built a targeted outreach list of corporate wellness teams, sport governing bodies, and community sport funders using Sales Navigator. Connection requests led with the mission — what Cycle Together does, why it matters, and what a partnership could look like — without asking for anything in the first message. The goal was to open conversations, not close deals. Within the engagement period, five substantive partnership conversations were initiated through LinkedIn outreach alone.",
  },
];

const RESULTS_2 = [
  {
    value: "3×",
    num: 3,
    suffix: "×",
    headline: "Follower growth in 60 days.",
    body: "Measured against the previous 60-day baseline before the engagement began.",
  },
  {
    value: "5+",
    num: 5,
    suffix: "+",
    headline: "Partnership conversations opened.",
    body: "With corporate wellness teams, sport organisations, and community funders — through LinkedIn outreach alone.",
  },
  {
    value: "100%",
    num: 100,
    suffix: "%",
    headline: "Consistent weekly content maintained.",
    body: "Two posts per week, every week, for the full engagement — in a voice that sounds like Biola wrote it herself.",
  },
];

/* ─── page ──────────────────────────────────────────────────────────── */

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">

      {/* ════════════════════════════════════════════════════════════════
          CASE STUDY 1 — Gaia Antonescu / Byzantine
      ════════════════════════════════════════════════════════════════ */}

      {/* ── Breadcrumb ── */}
      <div className="border-b border-line bg-cream">
        <div className="container-x py-3">
          <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
            Case Studies
            <span className="mx-2 text-line">&rsaquo;</span>
            Gaia Antonescu &mdash; Byzantine
          </p>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* left column */}
          <div>
            <span
              className="animate-fade-up inline-flex items-center rounded bg-peach px-3 py-1 text-xs font-bold text-brand-dark"
              style={{ animationDelay: "0ms" }}
            >
              LinkedIn Management
            </span>

            <p
              className="animate-fade-up mt-4 text-[0.7rem] font-bold uppercase tracking-widest text-muted"
              style={{ animationDelay: "70ms" }}
            >
              Gaia Antonescu &mdash; Soch Case Study
            </p>

            <h1
              className="animate-fade-up mt-5 text-display text-[clamp(2rem,1.2rem+2.6vw,3.1rem)]"
              style={{ animationDelay: "140ms" }}
            >
              Turning a founder&rsquo;s LinkedIn into a consistent pipeline of
              qualified conversations
            </h1>

            <p
              className="animate-fade-up lead mt-6 text-muted"
              style={{ animationDelay: "210ms" }}
            >
              Gaia Antonescu, Founder of Byzantine, was showing up inconsistently
              on LinkedIn. We rebuilt her presence from the ground up &mdash;
              profile, content, and outreach &mdash; turning it into a channel that
              generates qualified conversations every week, without her spending
              hours on it.
            </p>

            {/* stat rows */}
            <div
              className="animate-fade-up mt-10 divide-y divide-line"
              style={{ animationDelay: "280ms" }}
            >
              {HERO_STATS.map((s) => (
                <div key={s.suffix + s.num} className="flex items-baseline gap-5 py-5">
                  <StatCounter
                    num={s.num}
                    suffix={s.suffix}
                    className="shrink-0 leading-none text-ink"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.2rem,1.6rem+1.6vw,2.8rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.022em",
                    }}
                  />
                  <span className="text-sm text-slate">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right column — portrait placeholder */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded border border-line bg-cream">
              <div className="text-center">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white">
                  GA
                </span>
                <p className="mt-3 text-xs text-muted">Portrait placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Thin rule ── */}
      <hr className="border-line" />

      {/* ── Meta bar ── */}
      <div className="container-x">
        <dl className="flex flex-col divide-y divide-line border-b border-line sm:flex-row sm:divide-x sm:divide-y-0">
          {META.map((f) => (
            <div key={f.label} className="flex-1 py-5 sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <dt className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                {f.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium leading-relaxed text-ink">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Overview ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            {/* sticky label */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Overview
              </span>
            </div>

            {/* content */}
            <Reveal>
              <h2 className="text-h2">The context behind the work.</h2>
              <div className="mt-8 space-y-5 text-[1rem] leading-relaxed text-slate">
                <p>
                  Gaia had built Byzantine into a respected boutique strategy firm
                  through referrals and reputation. She knew LinkedIn mattered &mdash;
                  her clients were there, her peers were there, and the conversations
                  she wanted to be part of were happening there daily. But LinkedIn had
                  always felt like a chore. She&rsquo;d post sporadically when she had
                  time, struggle to know what to say, and watch the engagement flatline.
                  Her profile still read like a CV from three years ago.
                </p>
                <p>
                  She came to Soch not because she didn&rsquo;t understand LinkedIn, but
                  because she understood it well enough to know she wasn&rsquo;t doing it
                  justice. She needed a partner who could take full ownership of her
                  presence &mdash; strategy, content, and outreach &mdash; so she could
                  stay focused on running the business. We started with a full audit
                  before touching anything. You don&rsquo;t fix what you haven&rsquo;t
                  properly diagnosed.
                </p>
              </div>

              {/* landscape image placeholder */}
              <div className="mt-10 flex aspect-[16/8] w-full items-center justify-center rounded border border-line bg-cream">
                <p className="text-sm text-muted">Landscape image placeholder</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            {/* sticky label */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                The Problem
              </span>
            </div>

            {/* content */}
            <div>
              <Reveal>
                <h2 className="text-h2">What they came to us with.</h2>
              </Reveal>

              <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_20rem] lg:gap-12">

                {/* problem items */}
                <Reveal delay={0.05}>
                  <div className="divide-y divide-line">
                    {PROBLEMS.map((text, i) => (
                      <div key={i} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                        <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-brand" />
                        <p
                          className="text-[0.975rem] leading-relaxed text-slate"
                          dangerouslySetInnerHTML={{ __html: text }}
                        />
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* sticky quote card */}
                <Reveal delay={0.15}>
                  <figure className="rounded border-l-4 border-brand bg-cream p-6 lg:sticky lg:top-28 lg:self-start">
                    <span
                      className="block text-[3.5rem] leading-none text-brand opacity-25"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <p
                      className="-mt-2 text-[1.05rem] italic leading-relaxed text-ink"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      I knew what good LinkedIn looked like. I just couldn&rsquo;t
                      make it happen alongside everything else. Handing it to Soch
                      was the right call &mdash; within a few weeks it felt like my
                      profile finally sounded like me.
                    </p>
                    <figcaption className="mt-5 border-t border-dashed border-line pt-5">
                      <span className="block text-sm font-semibold text-ink">
                        Gaia Antonescu
                      </span>
                      <span className="block text-xs text-muted">
                        Founder, Byzantine
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Framework ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            {/* sticky label */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Our Framework
              </span>
            </div>

            {/* content */}
            <div>
              <Reveal>
                <h2 className="text-h2">How we solved it.</h2>
              </Reveal>

              {/* top row: steps 01–03 */}
              <Reveal delay={0.05}>
                <div className="mt-10 grid divide-y divide-line overflow-hidden rounded border border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {FRAMEWORK.slice(0, 3).map((step) => (
                    <div key={step.no} className="bg-cream p-7">
                      <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand">
                        Step {step.no}
                      </span>
                      <h3
                        className="mt-3 text-base font-semibold leading-snug text-ink"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* step 04 — full-width */}
              <Reveal delay={0.1}>
                <div className="mt-3 grid overflow-hidden rounded border border-line sm:grid-cols-[10rem_1fr]">
                  <div className="flex items-center justify-center border-b border-line bg-cream px-8 py-6 sm:border-b-0 sm:border-r">
                    <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand">
                      Step {FRAMEWORK[3].no}
                    </span>
                  </div>
                  <div className="bg-cream p-7">
                    <h3
                      className="text-base font-semibold leading-snug text-ink"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {FRAMEWORK[3].title}
                    </h3>
                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">
                      {FRAMEWORK[3].body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            {/* sticky label */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Results
              </span>
            </div>

            {/* content */}
            <div>
              <Reveal>
                <h2 className="text-h2">What shipped.</h2>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-10 grid gap-px bg-line sm:grid-cols-3">
                  {RESULTS.map((r) => (
                    <div
                      key={r.value}
                      className="border-t-2 border-brand bg-white p-7 lg:p-9"
                    >
                      <StatCounter
                        num={r.num}
                        suffix={r.suffix}
                        className="block leading-none text-ink"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2.6rem,2rem+1.5vw,3.4rem)",
                          fontWeight: 600,
                          letterSpacing: "-0.022em",
                        }}
                      />
                      <p className="mt-4 text-base font-semibold text-ink">
                        {r.headline}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">
                        {r.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          DIVIDER
      ════════════════════════════════════════════════════════════════ */}

      <div className="py-20 sm:py-24">
        <hr className="border-line" />
      </div>

      {/* ════════════════════════════════════════════════════════════════
          CASE STUDY 2 — Biola Babawale / Cycle Together
      ════════════════════════════════════════════════════════════════ */}

      {/* ── Hero ── */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-28">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* left column */}
          <div>
            <span
              className="animate-fade-up inline-flex items-center rounded bg-peach px-3 py-1 text-xs font-bold text-brand-dark"
              style={{ animationDelay: "0ms" }}
            >
              Personal Branding &amp; Community Growth
            </span>

            <p
              className="animate-fade-up mt-4 text-[0.7rem] font-bold uppercase tracking-widest text-muted"
              style={{ animationDelay: "70ms" }}
            >
              Biola Babawale &mdash; Soch Case Study
            </p>

            <h2
              className="animate-fade-up mt-5 text-display text-[clamp(2rem,1.2rem+2.6vw,3.1rem)]"
              style={{ animationDelay: "140ms" }}
            >
              Giving a movement founder the LinkedIn presence her mission deserved
            </h2>

            <p
              className="animate-fade-up lead mt-6 text-muted"
              style={{ animationDelay: "210ms" }}
            >
              Biola Babawale founded Cycle Together to make cycling more inclusive
              and accessible &mdash; but the community she was building offline
              wasn&rsquo;t reflected in her LinkedIn presence. We rebuilt her
              profile, developed her content voice, and helped her reach the right
              people in sport, wellness, and corporate partnerships.
            </p>

            {/* stat rows */}
            <div
              className="animate-fade-up mt-10 divide-y divide-line"
              style={{ animationDelay: "280ms" }}
            >
              {HERO_STATS_2.map((s) => (
                <div key={s.suffix + s.num} className="flex items-baseline gap-5 py-5">
                  <StatCounter
                    num={s.num}
                    suffix={s.suffix}
                    className="shrink-0 leading-none text-ink"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.2rem,1.6rem+1.6vw,2.8rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.022em",
                    }}
                  />
                  <span className="text-sm text-slate">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right column — portrait placeholder */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded border border-line bg-cream">
              <div className="text-center">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white">
                  BB
                </span>
                <p className="mt-3 text-xs text-muted">Portrait placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Thin rule ── */}
      <hr className="border-line" />

      {/* ── Meta bar ── */}
      <div className="container-x">
        <dl className="flex flex-col divide-y divide-line border-b border-line sm:flex-row sm:divide-x sm:divide-y-0">
          {META_2.map((f) => (
            <div key={f.label} className="flex-1 py-5 sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <dt className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                {f.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium leading-relaxed text-ink">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Overview ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            {/* sticky label */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Overview
              </span>
            </div>

            {/* content */}
            <Reveal>
              <h2 className="text-h2">The context behind the work.</h2>
              <div className="mt-8 space-y-5 text-[1rem] leading-relaxed text-slate">
                <p>
                  Biola built Cycle Together from a personal belief &mdash; that cycling
                  should be for everyone, regardless of background, ability, or budget.
                  What started as a grassroots community initiative had grown into
                  something with real momentum: events, partnerships, and a growing
                  following of people who shared her vision. But on LinkedIn, none of
                  that came through.
                </p>
                <p>
                  Her profile read like a professional CV, not a founder story. Her
                  content was sporadic and unfocused. And the people she most needed to
                  reach &mdash; corporate sponsors, sport and wellness organisations,
                  community funders, and like-minded founders &mdash; had no easy way
                  to find her or understand what Cycle Together stood for. She came to
                  Soch to fix that. Not to grow follower numbers for their own sake, but
                  to make her LinkedIn presence do actual work for her mission.
                </p>
              </div>

              {/* landscape image placeholder */}
              <div className="mt-10 flex aspect-[16/8] w-full items-center justify-center rounded border border-line bg-cream">
                <p className="text-sm text-muted">Landscape image placeholder</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            {/* sticky label */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                The Problem
              </span>
            </div>

            {/* content */}
            <div>
              <Reveal>
                <h2 className="text-h2">What they came to us with.</h2>
              </Reveal>

              <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_20rem] lg:gap-12">

                {/* problem items */}
                <Reveal delay={0.05}>
                  <div className="divide-y divide-line">
                    {PROBLEMS_2.map((text, i) => (
                      <div key={i} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                        <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-brand" />
                        <p
                          className="text-[0.975rem] leading-relaxed text-slate"
                          dangerouslySetInnerHTML={{ __html: text }}
                        />
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* sticky quote card */}
                <Reveal delay={0.15}>
                  <figure className="rounded border-l-4 border-brand bg-cream p-6 lg:sticky lg:top-28 lg:self-start">
                    <span
                      className="block text-[3.5rem] leading-none text-brand opacity-25"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <p
                      className="-mt-2 text-[1.05rem] italic leading-relaxed text-ink"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      I had so much to say about what we&rsquo;re building, but I
                      couldn&rsquo;t figure out how to say it on LinkedIn in a way
                      that felt right. Soch helped me find that voice &mdash; and
                      then made sure it showed up every single week.
                    </p>
                    <figcaption className="mt-5 border-t border-dashed border-line pt-5">
                      <span className="block text-sm font-semibold text-ink">
                        Biola Babawale
                      </span>
                      <span className="block text-xs text-muted">
                        Founder, Cycle Together
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Framework ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            {/* sticky label */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Our Framework
              </span>
            </div>

            {/* content */}
            <div>
              <Reveal>
                <h2 className="text-h2">How we solved it.</h2>
              </Reveal>

              {/* top row: steps 01–03 */}
              <Reveal delay={0.05}>
                <div className="mt-10 grid divide-y divide-line overflow-hidden rounded border border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {FRAMEWORK_2.slice(0, 3).map((step) => (
                    <div key={step.no} className="bg-cream p-7">
                      <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand">
                        Step {step.no}
                      </span>
                      <h3
                        className="mt-3 text-base font-semibold leading-snug text-ink"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* step 04 — full-width */}
              <Reveal delay={0.1}>
                <div className="mt-3 grid overflow-hidden rounded border border-line sm:grid-cols-[10rem_1fr]">
                  <div className="flex items-center justify-center border-b border-line bg-cream px-8 py-6 sm:border-b-0 sm:border-r">
                    <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand">
                      Step {FRAMEWORK_2[3].no}
                    </span>
                  </div>
                  <div className="bg-cream p-7">
                    <h3
                      className="text-base font-semibold leading-snug text-ink"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {FRAMEWORK_2[3].title}
                    </h3>
                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">
                      {FRAMEWORK_2[3].body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            {/* sticky label */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Results
              </span>
            </div>

            {/* content */}
            <div>
              <Reveal>
                <h2 className="text-h2">What shipped.</h2>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-10 grid gap-px bg-line sm:grid-cols-3">
                  {RESULTS_2.map((r) => (
                    <div
                      key={r.value}
                      className="border-t-2 border-brand bg-white p-7 lg:p-9"
                    >
                      <StatCounter
                        num={r.num}
                        suffix={r.suffix}
                        className="block leading-none text-ink"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2.6rem,2rem+1.5vw,3.4rem)",
                          fontWeight: 600,
                          letterSpacing: "-0.022em",
                        }}
                      />
                      <p className="mt-4 text-base font-semibold text-ink">
                        {r.headline}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">
                        {r.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-line bg-mist py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-h2">
                Your results should be on this page.
              </h2>
              <p className="lead mt-5 text-muted">
                Book a discovery call. We will be straight with you about what
                is achievable and how long it will take.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BookButton variant="primary" size="lg">
                  {CTAS.primary.label}
                </BookButton>
                <AuditButton variant="secondary" size="lg">
                  {CTAS.secondary.label}
                </AuditButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
