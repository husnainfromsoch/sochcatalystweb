"use client";

import { useEffect, useRef } from "react";
import { useBookingModal } from "@/context/BookingModalContext";

const CAL_URL = "https://cal.com/withumair/30min?embed=true";

export function BookingModal() {
  const { isOpen, closeModal } = useBookingModal();
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center md:p-6"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onMouseDown={(e) => { if (e.target === backdropRef.current) closeModal(); }}
    >
      <div
        className="relative flex flex-col overflow-y-auto bg-white
          w-screen h-[100dvh] rounded-none
          md:w-full md:max-w-[1000px] md:h-[90vh] md:rounded-xl"
        style={{ boxShadow: "0 24px 64px -12px rgba(20,30,25,0.35)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Book a Discovery Call"
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/8 text-ink transition-colors hover:bg-black/15"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        </button>

        <iframe
          src={CAL_URL}
          title="Book a Discovery Call"
          className="w-full flex-1"
          style={{ border: "none", minHeight: "90vh" }}
          loading="eager"
        />
      </div>
    </div>
  );
}
