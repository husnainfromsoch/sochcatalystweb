import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Editorial serif for headlines — the HubSpot brand voice.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://sochcatalyst.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Soch Catalyst: LinkedIn Growth for Founders & CEOs",
    template: "%s · Soch Catalyst",
  },
  description:
    "Soch Catalyst is a LinkedIn agency for B2B founders and CEOs. We run your profile, content and outreach, so you get inbound and booked calls and become the most trusted voice in your industry.",
  keywords: [
    "LinkedIn growth agency",
    "personal branding for founders",
    "LinkedIn lead generation",
    "B2B LinkedIn marketing",
    "LinkedIn profile optimisation",
  ],
  openGraph: {
    title: "Soch Catalyst: LinkedIn Growth for Founders & CEOs",
    description:
      "Done-with-you LinkedIn growth: profile, content, lead generation and personal branding for B2B founders and CEOs.",
    url: SITE_URL,
    siteName: "Soch Catalyst",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soch Catalyst: LinkedIn Growth for Founders & CEOs",
    description:
      "Done-with-you LinkedIn growth for B2B founders and CEOs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
