import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.smokeshowband.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SmokeShow",
    template: "%s | SmokeShow",
  },
  description:
    "SmokeShow is an independent band with sharp guitars, late-night synth textures, and a cinematic live presence.",
  openGraph: {
    title: "SmokeShow",
    description:
      "Music, live dates, and the latest from SmokeShow in one Vercel-ready Next.js site.",
    url: siteUrl,
    siteName: "SmokeShow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmokeShow",
    description:
      "Music, live dates, and the latest from SmokeShow in one Vercel-ready Next.js site.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
