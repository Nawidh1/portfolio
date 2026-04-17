import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RobotBuddy from "@/components/RobotBuddy";
import CursorTrail from "@/components/CursorTrail";
import FloatingCode from "@/components/FloatingCode";
import InteractiveGrid from "@/components/InteractiveGrid";
import ScrollProgress from "@/components/ScrollProgress";
import MorphingBlob from "@/components/MorphingBlob";
import SoundWave from "@/components/SoundWave";

interface SiteFrameProps {
  children: ReactNode;
  padTop?: boolean;
}

export default function SiteFrame({ children, padTop = true }: SiteFrameProps) {
  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <InteractiveGrid />
      <MorphingBlob />
      <FloatingCode />
      <CursorTrail />
      <ScrollProgress />
      <Header />
      <div className={padTop ? "pt-20" : ""}>{children}</div>
      <Footer />
      <RobotBuddy />
      <SoundWave />
    </main>
  );
}
