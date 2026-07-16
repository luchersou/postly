import "./globals.css";

import type { Metadata } from "next";
import { Geist_Mono,Sora } from "next/font/google";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Postly — AI-Powered Social Media Content Creation",
  description: "Postly uses artificial intelligence to generate, schedule, and publish social media content in minutes. Save time and scale your online presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"> {children}</body>
    </html>
  );
}
