import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dwight | The AI Agent That Knows Your Business",
  description: "A custom AI Agent, trained to understand your business like an experienced team member.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
