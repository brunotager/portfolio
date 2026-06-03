import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-brunotager.vercel.app"),
  title: "Bruno Tager | Product Designer",
  description: "I design products that help people act, not hesitate.",
  openGraph: {
    title: "Bruno Tager | Product Designer",
    description: "I design products that help people act, not hesitate.",
    url: "https://portfolio-brunotager.vercel.app",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bruno Tager",
  url: "https://portfolio-brunotager.vercel.app",
  jobTitle: "Product Designer",
  description:
    "AI-native UX/UI designer with 16 years of experience. I design products that help people act, not hesitate.",
  sameAs: ["https://www.linkedin.com/in/brunotager"],
  knowsAbout: [
    "Product Design",
    "UX/UI Design",
    "Human-Centered Design",
    "User Research",
    "Systems Thinking",
    "Behavioral Design",
    "Information Architecture",
    "WCAG & 508 Compliance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen pt-[88px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

