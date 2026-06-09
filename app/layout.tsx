import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portfolio | Software Developer",
    template: `%s | ${siteName}`,
  },
  description:
    "Portfolio of Nawid Haidari — projects, skills, and experience as a software developer.",
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
      "Portfolio of Nawid Haidari — projects, skills, and experience as a software developer.",
    siteName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Software Developer",
    description:
      "Portfolio of Nawid Haidari — projects, skills, and experience as a software developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
