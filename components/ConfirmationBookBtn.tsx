"use client";

import { useBookingModal } from "@/context/BookingModalContext";

export function ConfirmationBookBtn() {
  const { openModal } = useBookingModal();
  return (
    <button
      type="button"
      onClick={openModal}
      style={{
        background: "#e8633e",
        color: "white",
        padding: "16px 40px",
        borderRadius: 8,
        fontSize: 16,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        display: "inline-block",
        boxShadow: "0 4px 16px rgba(232,99,62,0.4)",
      }}
    >
      Book My Free Strategy Call
    </button>
  );
}
