import { Button } from "@/components/ui/Button";
import { CTAS } from "@/lib/content";

export function CtaBand({
  title = "Turn your LinkedIn into booked calls",
  subtitle = "Book a free discovery call. We will show you where your LinkedIn is leaking opportunity and how to fix it. No obligation, no pitch.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const accentDot = /[a-zA-Z]$/.test(title);
  return (
    <section className="bg-forest">
      <div className="container-x py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <h2 className="text-h2 text-white">
            {title}
            {accentDot && <span className="text-brand">.</span>}
          </h2>
          <p className="lead mt-5 max-w-2xl text-white/75">{subtitle}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={CTAS.primary.href} variant="primary" size="lg">
              {CTAS.primary.label}
            </Button>
            <Button href={CTAS.secondary.href} variant="light" size="lg">
              {CTAS.secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
