import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Stats } from "@/components/Stats";
import { CtaBand } from "@/components/CtaBand";
import { Icon, type IconName } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About. Built for Founders Done Being Invisible",
  description:
    "Soch Catalyst is a LinkedIn agency for B2B founders and CEOs. We run personal branding, content, outreach and profile management, so your LinkedIn brings you work.",
};

const VALUES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Substance over hacks",
    body: "No growth hacks or follower tricks. We build a reputation on a real point of view, the kind that lasts.",
  },
  {
    icon: "chat",
    title: "Your voice, always",
    body: "We work from how you already think and talk. The result sounds like you, because it is you.",
  },
  {
    icon: "target",
    title: "Outcomes, not vanity",
    body: "Likes are nice. Booked calls pay the bills. We work for pipeline, not applause.",
  },
  {
    icon: "spark",
    title: "Partners, not vendors",
    body: "We work next to you, not at arm's length. Your results are what keep us in business.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Soch Catalyst"
        title={
          <>
            Built for founders who are{" "}
            <span className="italic text-brand">done being invisible</span>.
          </>
        }
        intro="Soch Catalyst is a LinkedIn agency for B2B founders and CEOs. We handle the personal branding, content, lead generation and profile management, so your LinkedIn brings you work instead of sitting idle."
      />

      {/* mission */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">Why we exist</span>
            <h2 className="text-h2 mt-6">
              The most credible voice in the room is not the loudest. It is the
              clearest.
            </h2>
            <div className="mt-6 space-y-4 text-slate">
              <p>
                Most founders know more than their market gives them credit for. The
                expertise is there. Almost no one sees it. Their buyers are on
                LinkedIn every day, scrolling past them toward someone less qualified
                but more visible.
              </p>
              <p>
                We started Soch Catalyst to close that gap. Not with a course. Not
                with a template you&apos;ll never finish. With a team that builds your
                profile, content and outreach with you.
              </p>
              <p className="font-medium text-ink">
                Your buyers are already on LinkedIn. We put you in front of them.
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

      <CtaBand />
    </>
  );
}
