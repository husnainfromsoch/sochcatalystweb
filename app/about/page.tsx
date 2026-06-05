import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Stats } from "@/components/Stats";
import { CtaBand } from "@/components/CtaBand";
import { Icon, type IconName } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About. Built for Founders Done Being Invisible",
  description:
    "Soch Catalyst is a LinkedIn agency for founders and senior executives. We run personal branding, content, outreach and profile management, so your LinkedIn brings you work.",
};

const VALUES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Substance over hacks",
    body: "The LinkedIn services market is full of shortcuts — engagement pods, follow-for-follow tactics, algorithm hacks. They work briefly and erode credibility permanently. Every account Soch runs is built on a genuine point of view, published consistently, without shortcuts.",
  },
  {
    icon: "chat",
    title: "Your voice, always",
    body: "We run an interview before writing anything. We study how you explain things, what you believe, where you disagree with the consensus in your industry. The result sounds like you because it starts with you. We never use templates. Every account is built from the founder up.",
  },
  {
    icon: "target",
    title: "Outcomes, not vanity",
    body: "We measure success by qualified conversations started, inbound leads generated, and opportunities created. Follower counts and impression numbers appear in every monthly report. They are context, not the goal. The goal is always a business outcome.",
  },
  {
    icon: "spark",
    title: "Partners, not vendors",
    body: "Soch takes a small number of clients at a time, deliberately. We are not a content mill. Every client gets direct access to the people doing the work. If something is not working, we say so. If the strategy needs changing, we change it. That is what a partner does.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Soch Catalyst"
        title="Built by a practitioner. Built for founders."
        intro="Soch Catalyst is a LinkedIn positioning agency led by Umair Shahzad, an award-winning LinkedIn creator and LinkedIn Top Voice, recognised globally in Venture Capital. We work with founders and senior executives who want their LinkedIn presence to reflect the seriousness of what they are building."
      />

      {/* mission */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">Why we exist</span>
            <h2 className="text-h2 mt-6">The problem we kept seeing</h2>
            <div className="mt-6 space-y-4 text-slate">
              <p>
                Most LinkedIn services sell content. They write posts, schedule them,
                and call it done. The problem is that content without positioning is
                noise. A founder can post every day for a year and still be invisible
                if the underlying strategy is missing.
              </p>
              <p>
                The founders who build real authority on LinkedIn are not the ones who
                post the most. They are the ones who are clear on what they stand for,
                who they are trying to reach, and why their perspective is worth
                following. That clarity does not come from a content calendar. It comes
                from doing the positioning work first.
              </p>
              <p className="font-medium text-ink">
                Soch Catalyst was built to do that work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="rounded-2xl border border-line bg-cream p-8 sm:p-10">
              <p
                className="text-[1.6rem] leading-snug text-ink"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                &ldquo;We don&apos;t make you go viral. We make you{" "}
                <span className="text-brand">credible</span> to the people who can say
                yes.&rdquo;
              </p>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-dashed border-line pt-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  SC
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-ink">
                    The Soch Catalyst team
                  </span>
                  <span className="block text-xs text-muted">
                    Your LinkedIn growth partners
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <Stats />

      {/* values — editorial 2-col, dashed dividers, no glossy tiles */}
      <section className="bg-cream py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">What we believe</span>
            <h2 className="text-h2 mt-6">Principles that shape every account we run.</h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(i % 2) * 0.1}
                className={`${i % 2 === 1 ? "sm:border-l sm:border-dashed sm:border-line sm:pl-12" : ""} ${i >= 2 ? "border-t border-dashed border-line pt-10 sm:border-t-0 sm:pt-0" : ""}`}
              >
                <Icon name={v.icon} className="h-7 w-7 text-brand" strokeWidth={1.5} />
                <h3 className="text-h3 mt-4">{v.title}</h3>
                <p className="mt-2.5 text-[0.975rem] leading-relaxed text-slate">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* founder bio */}
      <section className="bg-mist py-20 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* image — replace placeholder with <Image src="/umair.jpg" alt="Umair Shahzad" fill className="object-cover" /> */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-cream">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <span className="inline-flex h-28 w-28 items-center justify-center rounded-full bg-brand text-4xl font-bold text-white">
                    US
                  </span>
                  <p className="mt-4 text-xs text-muted">Photo coming soon</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* text */}
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="eyebrow">Who leads this</span>

            <div className="mt-6 space-y-4 text-slate">
              <p>
                Umair Shahzad is an award-winning LinkedIn creator recognised as a
                LinkedIn Top Voice — ranked in the top 200 globally in Venture
                Capital. He has built his own presence publicly, with real results,
                and spent years working with founders in high-stakes sectors where
                trust and credibility are not optional.
              </p>
              <p>
                Before starting Soch, Umair managed LinkedIn strategy for founders
                in institutional finance and construction — industries where a single
                poorly placed post can damage relationships built over years. That
                experience shaped the Soch approach: positioning first, content
                second, always in your voice, always pointed at a business outcome.
              </p>
              <p>
                The practitioners who advise on personal brand should have one worth
                examining. You can find Umair{" "}
                <a
                  href="#"
                  className="font-medium text-linkedin underline decoration-linkedin/40 underline-offset-2 hover:decoration-linkedin"
                >
                  on LinkedIn
                </a>
                .
              </p>
            </div>

            {/* credentials */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "LinkedIn Top Voice",
                "Top 200 globally in Venture Capital",
                "Award-winning LinkedIn creator",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-line bg-white px-3 py-1 text-xs font-semibold text-ink"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* LinkedIn CTA */}
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-linkedin/30 bg-linkedin/5 px-4 py-2.5 text-sm font-semibold text-linkedin transition-colors hover:bg-linkedin/10"
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              View Umair on LinkedIn
            </a>

            {/* pull quote */}
            <figure className="mt-8 rounded-xl border border-dashed border-line bg-white p-6">
              <p
                className="text-[1.05rem] leading-relaxed text-ink"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                &ldquo;We don&apos;t make you go viral. We make you{" "}
                <span className="text-brand">credible</span> to the people who can
                say yes.&rdquo;
              </p>
              <figcaption className="mt-4 flex items-center gap-2.5 border-t border-dashed border-line pt-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                  SC
                </span>
                <span className="text-xs font-semibold text-ink">
                  The Soch Catalyst team
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
