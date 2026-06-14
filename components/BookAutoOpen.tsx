"use client";

import { useEffect } from "react";
import { useBookingModal } from "@/context/BookingModalContext";
import { useAuditModal } from "@/context/AuditModalContext";

export function BookAutoOpen() {
  const { openModal: openBookingModal } = useBookingModal();
  const { openModal: openAuditModal } = useAuditModal();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("book") === "true") {
      openBookingModal();
      const url = new URL(window.location.href);
      url.searchParams.delete("book");
      window.history.replaceState({}, "", url.pathname);
    }

    if (params.get("audit") === "true") {
      openAuditModal();
      const url = new URL(window.location.href);
      url.searchParams.delete("audit");
      window.history.replaceState({}, "", url.pathname);
    }
  }, [openBookingModal, openAuditModal]);

  return null;
}
