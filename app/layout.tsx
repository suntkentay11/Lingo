import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const font = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Lingo",
  description: "Lingo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn("h-full", "antialiased", font.variable, "font-sans")}
      >
        <body className="min-h-full">{children}</body>
      </html>
    </ClerkProvider>
  );
}