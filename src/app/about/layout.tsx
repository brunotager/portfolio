import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bruno Tager | Product Designer",
  description:
    "16 years of experience across strategic communications, operations, and product design. I remove the friction between user intention and action.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
