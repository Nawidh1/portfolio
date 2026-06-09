import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SoundWave from "@/components/SoundWave";
import ClientDecorations from "@/components/ClientDecorations";

interface SiteFrameProps {
  children: ReactNode;
  padTop?: boolean;
}

export default function SiteFrame({ children, padTop = true }: SiteFrameProps) {
  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <ClientDecorations />
      <ScrollProgress />
      <Header />
      <div className={padTop ? "pt-16 sm:pt-20" : ""}>{children}</div>
      <Footer />
      <SoundWave />
    </main>
  );
}
