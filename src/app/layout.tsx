import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruno Tager | Product Designer",
  description: "Product designer turning effort into progress.",
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
      </body>
    </html>
  );
}
