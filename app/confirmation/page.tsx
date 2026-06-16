import type { Metadata } from "next";
import { ConfirmationContent } from "./ConfirmationContent";

export const metadata: Metadata = {
  title: "Audit Submitted · Soch Catalyst",
  description:
    "Your LinkedIn profile is with us. Umair will review it personally and send you the full breakdown within 24 hours.",
};

export default function ConfirmationPage() {
  return <ConfirmationContent />;
}
