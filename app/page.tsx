import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Positioning } from "@/components/Positioning";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowWeWork } from "@/components/HowWeWork";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Positioning />
      <ServicesGrid />
      <HowWeWork />
      <Stats />
      <Testimonials />
      <CtaBand />
    </>
  );
}
