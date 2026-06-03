import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Proof, not promises</span>
          <h2 className="text-h2 mt-6">Founders who stopped being invisible.</h2>
        </Reveal>

        {/* featured case study — portrait + large pull-quote */}
        <Reveal className="mt-12 grid items-stretch gap-8 rounded-2xl border border-line bg-white p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:p-10">
          {/* portrait placeholder */}
          <div
            className="relative flex min-h-[15rem] items-end overflow-hidden rounded-xl p-6"
            style={{ background: featured.accent }}
          >
            <span
              className="absolute right-5 top-5 text-7xl text-white/25"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {featured.initials}
            </span>
            <div className="relative rounded-lg bg-white/95 px-4 py-2.5">
              <p className="text-sm font-semibold text-ink">{featured.name}</p>
              <p className="text-xs text-muted">{featured.role}</p>
            </div>
          </div>

          {/* quote + metrics */}
          <div className="flex flex-col justify-center">
            <blockquote
              className="text-[1.45rem] leading-snug text-ink sm:text-[1.7rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              &ldquo;{featured.quote}&rdquo;
            </blockquote>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-dashed border-line pt-6">
              <Metric value="3.5×" label="more profile views in 90 days" />
              <Metric value="9 / mo" label="qualified calls booked" />
            </div>
          </div>
        </Reveal>

        {/* secondary quotes — two, divided by a hairline (not equal heavy boxes) */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {rest.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.1}
              className={i > 0 ? "sm:border-l sm:border-dashed sm:border-line sm:pl-8" : ""}
            >
              <p className="text-[1.05rem] leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: t.accent }}
                >
                  {t.initials}
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-muted">{t.role}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl text-ink" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
        {value}
      </p>
      <p className="mt-1 text-sm text-slate">{label}</p>
    </div>
  );
}
