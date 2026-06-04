import type { Metadata } from "next";
import Skills from "@/components/Skills";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Vaardigheden",
  description: "Ontdek de technologieën en tools die ik in mijn projecten gebruik.",
};

export default function SkillsPage() {
  return (
    <SiteFrame>
      <Skills />
    </SiteFrame>
  );
}
