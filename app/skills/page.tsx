import type { Metadata } from "next";
import Skills from "@/components/Skills";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Skills",
  description: "Explore the technologies and tools I use in my projects.",
};

export default function SkillsPage() {
  return (
    <SiteFrame>
      <Skills />
    </SiteFrame>
  );
}
