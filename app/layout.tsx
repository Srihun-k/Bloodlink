import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BloodLink — Emergency Blood Supply",
  description: "BloodLink connects hospitals, blood banks and verified donors on one trauma-grade platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
