import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { CTAS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services. LinkedIn Growth, End to End",
  description:
    "Profile optimisation, content, lead generation, personal branding, coaching and audits. The full Soch Catalyst LinkedIn system for founders and senior executives.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Every service Soch Catalyst offers. Take the full system or start with the piece you need most."
        intro="Each service is built around one goal: making you the most credible voice in your space, in front of the people who matter most."
      >
        <div className="flex flex-wrap gap-3">
          <BookButton variant="primary" size="lg">
            {CTAS.primary.label}
          </BookButton>
          <AuditButton variant="secondary" size="lg">
            {CTAS.secondary.label}
          </AuditButton>
        </div>
      </PageHero>

      <ServicesShowcase />
    </>
  );
}
