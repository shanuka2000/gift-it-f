import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "./fonts";

export const metadata: Metadata = {
  title: "gift-it",
  description:
    "Gift it is platform where you can fully customize and send gitfs to you loved ones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>{children}</body>
    </html>
  );
}
