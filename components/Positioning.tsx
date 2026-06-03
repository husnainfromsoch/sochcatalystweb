import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/Icons";

const PILLARS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Done-with-you, not DIY",
    body: "A real team runs your profile, content and outreach with you. You are never left alone with a template.",
  },
  {
    icon: "chat",
    title: "Your voice, not ours",
    body: "We interview you and write in your voice. Every post sounds like you, and you approve it before it goes out.",
  },
  {
    icon: "target",
    title: "Built for booked calls",
    body: "Everything points at one goal. More authority, more inbound, more calls on your calendar.",
  },
];

export function Positioning() {
  return (
    <section className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">The Catalyst difference</span>
          <h2 className="text-h2 mt-6">
            This isn&apos;t a course. It&apos;s not a template. It&apos;s a{" "}
            <span className="italic text-brand">done-with-you system</span>.
          </h2>
          <p className="lead mt-5">
            Your buyers are already on LinkedIn. We handle the branding, content,
            outreach and profile, so the platform brings you work instead of wasting
            your time.
          </p>
        </Reveal>

        {/* pillars as an editorial row, divided by hairlines — not boxes */}
        <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-line pt-12 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className={i > 0 ? "md:border-l md:border-dashed md:border-line md:pl-10" : ""}
            >
              <Icon name={p.icon} className="h-7 w-7 text-brand" strokeWidth={1.5} />
              <h3 className="text-h3 mt-4">{p.title}</h3>
              <p className="mt-2.5 text-[0.975rem] leading-relaxed text-slate">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
