'use client'
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Positioning } from "@/components/Positioning";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowWeWork } from "@/components/HowWeWork";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import AnimateIn from "@/components/AnimateIn";

export default function Home() {
  return (
    <>
      <Hero />
      <AnimateIn><LogoMarquee /></AnimateIn>
      <AnimateIn><Positioning /></AnimateIn>
      <AnimateIn><ServicesGrid /></AnimateIn>
      <AnimateIn><HowWeWork /></AnimateIn>
      <AnimateIn><Stats /></AnimateIn>
      <AnimateIn><Testimonials /></AnimateIn>
      <AnimateIn><CtaBand /></AnimateIn>
    </>
  );
}
