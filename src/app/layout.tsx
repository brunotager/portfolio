import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruno Tager | Product Designer",
  description: "I design products that help people act, not hesitate.",
  openGraph: {
    title: "Bruno Tager | Product Designer",
    description: "I design products that help people act, not hesitate.",
    url: "https://brunotager.com",
    siteName: "Bruno Tager Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Tager | Product Designer",
    description: "I design products that help people act, not hesitate.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen pt-[88px]">
        <Navigation />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
