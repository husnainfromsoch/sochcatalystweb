"use client";

import { useEffect } from "react";
import { useBookingModal } from "@/context/BookingModalContext";

export function BookAutoOpen() {
  const { openModal } = useBookingModal();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("book") === "true") {
      openModal();
      const url = new URL(window.location.href);
      url.searchParams.delete("book");
      window.history.replaceState({}, "", url.pathname);
    }
  }, [openModal]);

  return null;
}
