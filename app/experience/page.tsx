import type { Metadata } from "next";
import Experience from "@/components/Experience";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Ervaring",
  description: "Mijn opleiding, loopbaan en groei als software developer.",
};

export default function ExperiencePage() {
  return (
    <SiteFrame>
      <Experience />
    </SiteFrame>
  );
}
