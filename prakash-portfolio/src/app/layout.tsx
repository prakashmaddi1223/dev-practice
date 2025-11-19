import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prakash Maddi | Frontend / Full Stack Developer",
  description: "Portfolio of Prakash Maddi – React, Next.js, Node.js developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}