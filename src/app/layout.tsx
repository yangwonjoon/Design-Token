import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Token",
  description: "Design Token system with Style Dictionary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
