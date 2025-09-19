import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info - ChinaTalk",
  description: "Learn about ChinaTalk project, contact information, and terms of use",
};

export default function InfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

