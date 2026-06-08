"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { BookButton } from "@/components/BookButton";
import { Icon } from "@/components/Icons";
import { NAV, CTAS } from "@/lib/content";
import { useAuditModal } from "@/context/AuditModalContext";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useAuditModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-slate transition-colors hover:bg-mist hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={openModal}
            className="text-[0.95rem] font-semibold text-ink underline-offset-4 hover:text-brand-dark hover:underline"
          >
            {CTAS.secondary.label}
          </button>
          <BookButton variant="primary" size="md">
            {CTAS.primary.label}
          </BookButton>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink ring-1 ring-line md:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {/* mobile panel */}
      <div
        className={`md:hidden overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 ease-out ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-mist"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => { openModal(); setOpen(false); }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-ink ring-1 ring-ink/20 transition-colors duration-200 hover:ring-ink/45"
            >
              {CTAS.secondary.label}
            </button>
            <BookButton variant="primary" size="lg" className="w-full">
              {CTAS.primary.label}
            </BookButton>
          </div>
        </div>
      </div>
    </header>
  );
}
