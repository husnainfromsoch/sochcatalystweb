import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SchedulerEmbed } from "@/components/SchedulerEmbed";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Get a Free LinkedIn Audit",
  description:
    "Request a free LinkedIn audit. We review your profile, content and outreach and send back a prioritised plan of the moves that will get you the most return.",
};

const GET = [
  {
    icon: "profile" as const,
    title: "Profile teardown",
    body: "Headline, about, banner and featured, checked against what actually turns visitors into conversations.",
  },
  {
    icon: "pen" as const,
    title: "Content review",
    body: "An honest look at your hooks, formats and consistency, and the gaps holding your reach back.",
  },
  {
    icon: "target" as const,
    title: "Positioning gaps",
    body: "Where you blur into competitors, and the angle that would make you the obvious choice.",
  },
  {
    icon: "trend" as const,
    title: "90-day roadmap",
    body: "A prioritised, do-this-next plan you can start on right away, with or without us.",
  },
];

export default function AuditPage() {
  return (
    <>
      <PageHero
        eyebrow="Free LinkedIn audit"
        title={
          <>
            See exactly what&apos;s{" "}
            <span className="text-gradient">holding your LinkedIn back.</span>
          </>
        }
        intro="Request a free audit, no strings. We review your profile, content and outreach by hand, then send back a clear plan of what to fix first."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* left: what you get */}
          <div>
            <h2 className="text-h2">What&apos;s inside your audit</h2>
            <p className="lead mt-4">
              A real teardown, not an automated score. A strategist reviews your
              presence by hand.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {GET.map((g) => (
                <div
                  key={g.title}
                  className="rounded-xl border border-line bg-white p-5"
                >
                  <Icon name={g.icon} className="h-7 w-7 text-brand" strokeWidth={1.5} />
                  <h3 className="mt-4 text-base font-semibold text-ink">{g.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">{g.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-line bg-mist p-5 text-sm text-slate">
              <Icon name="shield" className="h-5 w-5 shrink-0 text-brand-dark" />
              No commitment required. The audit is yours to keep, whether or not we
              work together.
            </div>
          </div>

          {/* right: scheduler */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SchedulerEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
