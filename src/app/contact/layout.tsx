import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bruno Tager | Product Designer",
  description:
    "Get in touch with Bruno Tager for product design, UX/UI consulting, or collaboration opportunities. I respond the same day.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
