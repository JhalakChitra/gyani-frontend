import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme-provider";

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
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}