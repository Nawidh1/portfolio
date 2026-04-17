import type { Metadata } from "next";
import Experience from "@/components/Experience";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Experience",
  description: "See my education timeline and software development journey.",
};

export default function ExperiencePage() {
  return (
    <SiteFrame>
      <Experience />
    </SiteFrame>
  );
}
