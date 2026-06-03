import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Bruno Tager — Product Designer",
  description:
    "AI-native UX/UI designer with 16 years of experience in product design, strategic communications, and operations. View and download my resume.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
