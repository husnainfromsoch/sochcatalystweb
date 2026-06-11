// Bespoke, presentational mini-mockups — one per service slug.
// Same card idiom as the homepage Hero: white rounded-2xl cards, ring-1 ring-line,
// soft lift shadow, skeleton bars, avatar circles and brand/linkedin/leaf accents.
import { Icon } from "@/components/Icons";

/* ---------- shared primitives ---------- */

function Bar({ w = "100%", tone = "line" }: { w?: string; tone?: "line" | "brand" | "ink" }) {
  const bg = tone === "brand" ? "bg-brand/30" : tone === "ink" ? "bg-ink/15" : "bg-line";
  return <span className={`block h-2 rounded-full ${bg}`} style={{ width: w }} />;
}

function Avatar({ c, t, className = "" }: { c: string; t: string; className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold text-white ${className}`}
      style={{ background: c }}
    >
      {t}
    </span>
  );
}

const card =
  "relative z-10 rounded-2xl bg-white shadow-[var(--shadow-lift)] ring-1 ring-line";
const chip =
  "absolute z-20 rounded-xl bg-white p-2.5 shadow-[var(--shadow-lift)] ring-1 ring-line";

function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative mx-auto w-full max-w-sm px-2 py-4 lg:px-3">{children}</div>;
}

/* ---------- per-service visuals ---------- */

function ProfileVisual() {
  return (
    <Stage>
      <div className={`${card} overflow-hidden animate-float-a`}>
        <div className="h-16 bg-linkedin" />
        <div className="px-5 pb-5">
          <div className="-mt-7 flex items-end justify-between">
            <span className="inline-flex h-14 w-14 shrink-0 overflow-hidden rounded-full ring-4 ring-white">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}} alt="James Whitfield" />
            </span>
            <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-mist px-2.5 py-1 text-[0.65rem] font-semibold text-ink-soft ring-1 ring-line">
              <Icon name="check" className="h-3 w-3 text-leaf" strokeWidth={3} /> Optimised
            </span>
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <p className="text-sm font-semibold text-ink" style={{ fontFamily: "var(--font-sans)" }}>
              James Whitfield
            </p>
            <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-linkedin text-white">
              <Icon name="check" className="h-2 w-2" strokeWidth={3} />
            </span>
          </div>
          <div className="mt-2.5 space-y-2">
            <Bar w="90%" tone="ink" />
            <Bar w="65%" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {["Featured", "Offer"].map((t) => (
              <div key={t} className="rounded-lg border border-line bg-mist p-2.5">
                <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted">{t}</p>
                <span className="mt-1.5 block h-1.5 w-3/4 rounded-full bg-brand/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${chip} -bottom-1 -left-1 w-36 animate-float-c`}>
        <p className="text-[0.6rem] font-semibold text-muted">Search visibility</p>
        <p className="mt-0.5 flex items-center gap-1 text-sm font-semibold text-ink">
          <Icon name="trend" className="h-3.5 w-3.5 text-leaf" /> Top 1%
        </p>
      </div>
    </Stage>
  );
}

function ContentVisual() {
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}} alt="James Whitfield" />
          </span>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-ink">James Whitfield</p>
            <p className="text-[0.65rem] text-muted">Founder & CEO · Whitfield Advisory</p>
          </div>
        </div>
        <div className="mt-3.5 space-y-2">
          <Bar w="85%" tone="brand" />
          <Bar w="100%" />
          <Bar w="95%" />
          <Bar w="55%" />
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <div className="flex -space-x-1">
            {["#0a66c2", "#ff5c35", "#1f8a66"].map((c) => (
              <span key={c} className="h-4 w-4 rounded-full ring-2 ring-white" style={{ background: c }} />
            ))}
          </div>
          <p className="text-[0.65rem] font-medium text-muted">1,204 · 86 comments</p>
        </div>
      </div>
      <div className={`${chip} -right-1 -top-2 flex w-auto items-center gap-2 animate-float-b`}>
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-peach text-brand">
          <Icon name="clock" className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-[0.6rem] text-muted">Scheduled</p>
          <p className="text-xs font-semibold text-ink">Mon · 9:00</p>
        </div>
      </div>
    </Stage>
  );
}

function LeadsVisual() {
  const rows = [
    { c: "#0a66c2", t: "AR", status: "Booked call", tone: "leaf" as const },
    { c: "#1f7a8c", t: "JO", status: "Replied", tone: "ink" as const },
    { c: "#7a817d", t: "MK", status: "Sequenced", tone: "muted" as const },
  ];
  const statusCls = {
    leaf: "bg-leaf/12 text-leaf",
    ink: "bg-mist text-ink-soft ring-1 ring-line",
    muted: "bg-mist text-muted ring-1 ring-line",
  };
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-ink">Pipeline</p>
          <span className="inline-flex items-center gap-1 text-[0.65rem] font-semibold text-leaf">
            <Icon name="target" className="h-3.5 w-3.5" /> 24 prospects
          </span>
        </div>
        <div className="mt-3.5 space-y-2.5">
          {rows.map((r) => (
            <div key={r.t} className="flex items-center gap-2.5 rounded-lg border border-line bg-mist/60 p-2">
              <Avatar c={r.c} t={r.t} className="h-7 w-7" />
              <div className="flex-1 space-y-1.5">
                <Bar w="70%" tone="ink" />
                <Bar w="45%" />
              </div>
              <span className={`rounded-md px-2 py-0.5 text-[0.6rem] font-semibold ${statusCls[r.tone]}`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={`${chip} -bottom-1 right-2 w-32 animate-float-b`}>
        <p className="text-[0.6rem] font-semibold text-muted">Calls booked</p>
        <p className="mt-0.5 text-lg font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
          9 <span className="text-[0.65rem] font-medium text-muted">/ mo</span>
        </p>
      </div>
    </Stage>
  );
}

function BrandingVisual() {
  const pillars = ["Authority", "Point of view", "Narrative"];
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <p className="text-xs font-semibold text-ink">Positioning</p>
        <div className="mt-3 space-y-2">
          {pillars.map((p, i) => (
            <div
              key={p}
              className="flex items-center gap-2.5 rounded-full border border-line bg-mist/60 px-3 py-2"
            >
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-brand" style={{ opacity: 1 - i * 0.22 }} />
              <span className="text-[0.7rem] font-semibold text-ink-soft">{p}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-line bg-cream p-3.5">
          <span className="text-2xl leading-none text-brand" style={{ fontFamily: "var(--font-display)" }}>
            &ldquo;
          </span>
          <div className="mt-1 space-y-1.5">
            <Bar w="90%" tone="ink" />
            <Bar w="60%" />
          </div>
        </div>
      </div>
      <div className={`${chip} -right-1 top-4 flex w-auto items-center gap-1.5 animate-float-c`}>
        <Icon name="spark" className="h-4 w-4 text-brand" />
        <p className="text-xs font-semibold text-ink">Signature voice</p>
      </div>
    </Stage>
  );
}

function CoachingVisual() {
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-ink">Live workshop</p>
          <span className="inline-flex items-center gap-1 rounded-md bg-peach px-2 py-0.5 text-[0.6rem] font-semibold text-brand">
            <Icon name="clock" className="h-3 w-3" /> Thu · 60m
          </span>
        </div>
        <div className="mt-3.5 rounded-xl border border-line bg-mist/60 p-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-white">
              <Icon name="chat" className="h-4 w-4" />
            </span>
            <div className="flex-1 space-y-1.5">
              <Bar w="80%" tone="ink" />
              <Bar w="50%" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            {[
              { c: "#0a66c2", t: "AR" },
              { c: "#ff5c35", t: "SM" },
              { c: "#1f7a8c", t: "JO" },
              { c: "#33403b", t: "+6" },
            ].map((a) => (
              <Avatar key={a.t} c={a.c} t={a.t} className="h-7 w-7 ring-2 ring-white" />
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-[0.65rem] font-semibold text-white">
            Join <Icon name="arrow" className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <div className={`${chip} -left-1 bottom-2 flex w-auto items-center gap-1.5 animate-float-b`}>
        <Icon name="compass" className="h-4 w-4 text-brand" />
        <p className="text-xs font-semibold text-ink">1:1 coaching</p>
      </div>
    </Stage>
  );
}

function AuditVisual() {
  const items = ["Profile teardown", "Content gaps", "90-day roadmap"];
  // donut: r=20, circumference ≈ 125.7; show ~72%
  const C = 2 * Math.PI * 20;
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center gap-4">
          <div className="relative h-[4.5rem] w-[4.5rem] shrink-0">
            <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90">
              <circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-line)" strokeWidth="5" />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="var(--color-brand)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={C}
                strokeDashoffset={C * (1 - 0.72)}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
                72
              </span>
              <span className="text-[0.55rem] text-muted">/ 100</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-ink">Growth score</p>
            <p className="mt-0.5 text-[0.65rem] text-muted">Profile · Content · Outreach</p>
          </div>
        </div>
        <div className="mt-4 space-y-2.5">
          {items.map((t) => (
            <div key={t} className="flex items-center gap-2.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-leaf/12 text-leaf">
                <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span className="text-[0.7rem] text-ink-soft">{t}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`${chip} -right-1 -top-2 w-32 animate-float-c`}>
        <p className="text-[0.6rem] font-semibold text-muted">Quick wins</p>
        <p className="mt-0.5 flex items-center gap-1 text-sm font-semibold text-ink">
          <Icon name="trend" className="h-3.5 w-3.5 text-leaf" /> 12 found
        </p>
      </div>
    </Stage>
  );
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "profile-optimisation": ProfileVisual,
  "content-writing": ContentVisual,
  "lead-generation": LeadsVisual,
  "personal-branding": BrandingVisual,
  "coaching-workshops": CoachingVisual,
  "growth-audit": AuditVisual,
};

export function ServiceVisual({ slug }: { slug: string }) {
  const Visual = VISUALS[slug];
  if (!Visual) {
    return (
      <Stage>
        <div className={`${card} flex items-center justify-center p-10`}>
          <Icon name="spark" className="h-10 w-10 text-brand" />
        </div>
      </Stage>
    );
  }
  return <Visual />;
}
