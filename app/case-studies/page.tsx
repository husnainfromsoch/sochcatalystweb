import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { CTAS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies: Client Results | Soch Catalyst",
  description:
    "Real results from Soch Catalyst client engagements across LinkedIn strategy, personal branding, and go-to-market positioning.",
};

const CARDS = [
  {
    initials: "GA",
    image: "https://cdn.prod.website-files.com/68e7ded717d0693d2c34536a/69a67f324415b174eb9108c9_Case%20Study%202%20(Gaia%27s).png",
    tags: ["LinkedIn Management"],
    title:
      "Turning a founder’s LinkedIn into a consistent pipeline of qualified conversations",
    stats: [
      { value: "100%", label: "Posting consistency maintained" },
      { value: "4×", label: "Growth in profile views within 60 days" },
      { value: "12+", label: "Qualified inbound conversations in 90 days" },
    ],
    href: "/case-studies/gaia-antonescu",
  },
  {
    initials: "BB",
    image: "https://cdn.prod.website-files.com/68e7ded717d0693d2c34536a/69a67b9de1d72ffdf6c29f9a_Case%20Study%201%20(Biola%27s).png",
    tags: ["Personal Branding & Community Growth"],
    title:
      "Giving a movement founder the LinkedIn presence her mission deserved",
    stats: [
      { value: "3×", label: "Follower growth in 60 days" },
      { value: "5+", label: "Partnership conversations opened" },
      { value: "100%", label: "Consistent weekly content maintained" },
    ],
    href: "/case-studies/biola-babawale",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">

      {/* ── Page header ── */}
      <section className="border-b border-line bg-cream py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <h1 className="text-display">
              Results that speak for themselves.
            </h1>
            <p className="lead mt-5 max-w-2xl text-muted">
              A selection of client engagements across LinkedIn strategy,
              go-to-market positioning, and personal brand builds. Every number
              here is verified with the client.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cards grid ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[56.25rem] px-6 lg:px-10">
          <div className="grid gap-8">
            {CARDS.map((card) => (
              <article
                key={card.href}
                className="group overflow-hidden rounded-xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_22px_48px_-22px_rgba(20,30,25,0.28)]"
              >
                <div className="flex flex-row">

                  {/* portrait */}
                  <div className="w-[280px] shrink-0 self-stretch overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.initials}
                      style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "320px", display: "block" }}
                    />
                  </div>

                  {/* content */}
                  <div className="flex flex-1 flex-col justify-between p-10">

                    <div>
                      {/* category tags */}
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* title */}
                      <h2
                        className="mt-4 text-[1.22rem] font-semibold leading-snug text-ink"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {card.title}
                      </h2>
                    </div>

                    {/* stat boxes */}
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {card.stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-lg border border-line px-4 py-3"
                        >
                          <p
                            className="leading-none text-ink"
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "1.5rem",
                              fontWeight: 600,
                              letterSpacing: "-0.022em",
                            }}
                          >
                            {s.value}
                          </p>
                          <p className="mt-1.5 text-[12px] leading-snug text-muted">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* link */}
                    <div className="mt-6">
                      <Link
                        href={card.href}
                        className="text-[14px] font-semibold text-brand transition-colors hover:text-brand-dark"
                      >
                        Read success story →
                      </Link>
                    </div>

                  </div>
                </div>
              </article>
            ))}
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
