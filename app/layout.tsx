import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollRevealScript from "@/components/ScrollRevealScript";
import HydrationFix from "@/components/HydrationFix";
import { siteName, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portfolio | Software Developer",
    template: `%s | ${siteName}`,
  },
  description:
    "Portfolio van Nawid Haidari — projecten, vaardigheden en ervaring als software developer.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Portfolio | Software Developer",
    description:
      "Portfolio van Nawid Haidari — projecten, vaardigheden en ervaring als software developer.",
    siteName,
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Software Developer",
    description:
      "Portfolio van Nawid Haidari — projecten, vaardigheden en ervaring als software developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <HydrationFix />
        <ScrollRevealScript />
      </body>
    </html>
  );
}
