"use client";

import { useBookingModal } from "@/context/BookingModalContext";

export function BookFooterLink() {
  const { openModal } = useBookingModal();
  return (
    <li>
      <button
        type="button"
        onClick={openModal}
        className="text-sm text-white/60 transition-colors hover:text-brand-light"
      >
        Book a discovery call
      </button>
    </li>
  );
}
