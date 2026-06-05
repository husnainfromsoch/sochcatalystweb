"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const count = CASE_STUDIES.length;
  const next = () => setCurrent((c) => (c + 1) % count);

  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Proof, not promises</span>
          <h2 className="text-h2 mt-6">Founders who stopped being invisible.</h2>
        </Reveal>

        {/* ── Carousel ── */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          {/* sliding track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {CASE_STUDIES.map((cs) => (
              <Slide key={cs.company} study={cs} onNext={next} />
            ))}
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="mt-5 flex items-center gap-2">
          {CASE_STUDIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to case study ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-brand" : "w-1.5 bg-line hover:bg-slate"
              }`}
            />
          ))}
          <span className="ml-3 text-xs text-muted">
            {current + 1} / {count}
          </span>
        </div>


      </div>
    </section>
  );
}

function Slide({ study, onNext }: { study: CaseStudy; onNext: () => void }) {
  return (
    <div className="grid w-full flex-shrink-0 lg:grid-cols-[2fr_3fr]" style={{ minWidth: "100%" }}>
      {/* ── Left: brand panel ── */}
      <div
        className="relative flex min-h-[14rem] flex-col items-start justify-end p-8 lg:min-h-[28rem]"
        style={{ background: study.accent }}
      >
        {/* ghost initials watermark */}
        <span
          className="absolute right-6 top-6 select-none text-[7rem] font-bold leading-none text-white/10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {study.initials}
        </span>

        <div className="relative space-y-1">
          <p
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {study.company}
          </p>
          <p className="text-sm text-white/65">{study.industry}</p>
        </div>
      </div>

      {/* ── Right: content + arrow ── */}
      <div className="relative flex flex-col justify-center gap-6 p-8 pr-16 lg:p-10 lg:pr-20">

        {/* case study label + meta */}
        <div>
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">
            Case Study
          </span>
          <p className="mt-2 text-[0.85rem] text-slate">
            {study.region}&nbsp;·&nbsp;{study.duration}&nbsp;·&nbsp;{study.scope}
          </p>
        </div>

        {/* metrics grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-dashed border-line pt-6">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <p
                className="text-[1.6rem] font-bold leading-none text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.value}
              </p>
              <p className="mt-1 text-[0.75rem] leading-snug text-slate">{m.label}</p>
            </div>
          ))}
        </div>

        {/* quote + attribution */}
        <div className="border-t border-dashed border-line pt-6">
          <blockquote className="text-[1.05rem] leading-relaxed text-ink-soft">
            &ldquo;{study.quote}&rdquo;
          </blockquote>
          <p className="mt-3 text-sm font-semibold text-ink">
            — {study.author},{" "}
            <span className="font-normal text-slate">{study.authorRole}</span>
          </p>
        </div>

        {/* ── Next arrow — vertically centred on right edge ── */}
        <button
          onClick={onNext}
          aria-label="Next case study"
          className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate shadow-[0_1px_6px_rgba(0,0,0,0.12)] ring-1 ring-black/8 transition hover:bg-mist hover:text-ink active:scale-95 lg:right-6"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 4l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
