import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/CtaBand";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { CTAS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services. LinkedIn Growth, End to End",
  description:
    "Profile optimisation, content, lead generation, personal branding, coaching and audits. The full Soch Catalyst LinkedIn system for B2B founders and CEOs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            The full system to make you{" "}
            <span className="italic text-brand">unmissable</span> on LinkedIn.
          </>
        }
        intro="Take the whole system, or start with the piece you need most. Every service is done with you, and points at one outcome. Authority that turns into booked calls."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={CTAS.primary.href} variant="primary" size="lg">
            {CTAS.primary.label}
          </Button>
          <Button href={CTAS.secondary.href} variant="secondary" size="lg">
            {CTAS.secondary.label}
          </Button>
        </div>
      </PageHero>

      <ServicesShowcase />

      <CtaBand
        title="Not sure where to start"
        subtitle="That's what the discovery call is for. We look at where you are and tell you the one place to start."
      />
    </>
  );
}
