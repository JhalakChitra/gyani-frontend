import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Gyani – Next-Gen Accounting Platform",
  description:
    "Modern AI-powered accounting and business management SaaS platform.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}