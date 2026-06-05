import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icons";
import { CTAS, HERO } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mist">
      {/* one soft, flat peach wash behind the visual — no glow blobs */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 bg-[radial-gradient(60%_60%_at_70%_35%,var(--color-peach),transparent_70%)] opacity-70 lg:block" />

      <div className="container-x relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        {/* ---- copy ---- */}
        <div className="max-w-xl">
          <span className="eyebrow animate-fade-up">{HERO.eyebrow}</span>

          <h1 className="text-display mt-6 animate-fade-up [animation-delay:80ms]">
            {HERO.headline}{" "}
            <span className="italic text-brand">{HERO.headlineEmphasis}</span>
          </h1>

          <p className="lead mt-6 animate-fade-up [animation-delay:160ms]">
            Soch Catalyst is a LinkedIn agency for B2B founders and CEOs. We handle
            your profile, content and outreach, so you get inbound, booked calls, and
            a name people trust. We do the work. You approve it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
            <Button href={CTAS.primary.href} variant="primary" size="lg">
              {CTAS.primary.label}
            </Button>
            <Button href={CTAS.secondary.href} variant="secondary" size="lg">
              {CTAS.secondary.label}
            </Button>
          </div>

          <div className="mt-9 flex items-center gap-4 animate-fade-up [animation-delay:340ms]">
            <div className="flex -space-x-2.5">
              {[
                { c: "#0a66c2", t: "AR" },
                { c: "#ff5c35", t: "SM" },
                { c: "#1f7a8c", t: "JO" },
                { c: "#33403b", t: "+" },
              ].map((a, i) => (
                <span
                  key={i}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white ring-2 ring-mist"
                  style={{ background: a.c }}
                >
                  {a.t}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted">
              Trusted by <span className="font-semibold text-ink">40+ founders</span>{" "}
              &amp; executives
            </p>
          </div>
        </div>

        {/* ---- product visual ---- */}
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md animate-pop lg:mx-0 lg:ml-auto">
      {/* main profile card */}
      <div className="animate-float-a relative z-10 overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-lift)] ring-1 ring-line">
        <div className="h-20 bg-linkedin" />
        <div className="px-6 pb-6">
          <div className="-mt-9 flex items-end justify-between">
            <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-brand text-lg font-bold text-white ring-4 ring-white"
              style={{ fontFamily: "var(--font-display)" }}>
              YN
            </span>
            <span className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-linkedin px-3.5 py-1.5 text-sm font-semibold text-white">
              <Icon name="check" className="h-4 w-4" />
              Following
            </span>
          </div>

          <div className="mt-3">
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg font-semibold text-ink" style={{ fontFamily: "var(--font-sans)" }}>
                Your Name
              </h3>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-linkedin text-white">
                <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
            </div>
            <p className="text-sm text-slate">
              Founder &amp; CEO · Helping B2B teams scale revenue
            </p>
            <p className="mt-1 text-xs text-muted">Greater London · 14,280 followers</p>
          </div>

          <div className="mt-4 grid grid-cols-3 divide-x divide-line rounded-xl border border-line bg-mist py-3 text-center">
            <Stat value="312%" label="Profile views" />
            <Stat value="48" label="Inbound DMs" />
            <Stat value="9" label="Calls booked" />
          </div>
        </div>
      </div>

      {/* floating post card */}
      <div className="animate-float-b absolute -bottom-12 -left-2 z-20 w-56 rounded-2xl bg-white p-4 shadow-[var(--shadow-lift)] ring-1 ring-line sm:-left-14 sm:w-64">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-[0.65rem] font-bold text-white">
            YN
          </span>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-ink">Your Name</p>
            <p className="text-[0.65rem] text-muted">Just now · Edited</p>
          </div>
        </div>
        <div className="mt-3 space-y-1.5">
          <span className="block h-2 w-full rounded-full bg-line" />
          <span className="block h-2 w-11/12 rounded-full bg-line" />
          <span className="block h-2 w-3/5 rounded-full bg-brand/30" />
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-line pt-2.5">
          <div className="flex -space-x-1">
            <Dot c="#0a66c2" />
            <Dot c="#ff5c35" />
            <Dot c="#1f8a66" />
          </div>
          <p className="text-[0.65rem] font-medium text-muted">1,204 · 86 comments</p>
        </div>
      </div>

      {/* floating growth chip */}
      <div className="animate-float-c absolute -top-9 right-0 z-20 w-40 rounded-2xl bg-white p-3.5 shadow-[var(--shadow-lift)] ring-1 ring-line sm:-right-8 sm:w-44">
        <div className="flex items-center justify-between">
          <p className="text-[0.7rem] font-semibold text-muted">Reach this month</p>
          <span className="inline-flex items-center gap-0.5 rounded-md bg-leaf/12 px-1.5 py-0.5 text-[0.65rem] font-bold text-leaf">
            <Icon name="trend" className="h-3 w-3" /> 3.5×
          </span>
        </div>
        <p className="mt-1 text-2xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
          184k
        </p>
        <svg viewBox="0 0 120 36" className="mt-1 w-full" fill="none">
          <polyline
            points="0,30 18,26 36,28 54,18 72,20 90,10 108,6 120,2"
            stroke="#ff5c35"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-1">
      <p className="flex items-center justify-center gap-0.5 text-base font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
        {value}
        <Icon name="trend" className="h-3.5 w-3.5 text-leaf" />
      </p>
      <p className="text-[0.65rem] leading-tight text-muted">{label}</p>
    </div>
  );
}

function Dot({ c }: { c: string }) {
  return (
    <span className="inline-block h-4 w-4 rounded-full ring-2 ring-white" style={{ background: c }} />
  );
}
