import type { Metadata } from "next";
import About from "@/components/About";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Over mij",
  description: "Leer meer over Nawid Haidari, mijn achtergrond en doelen.",
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <About />
    </SiteFrame>
  );
}
