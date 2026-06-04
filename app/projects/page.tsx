import type { Metadata } from "next";
import Projects from "@/components/Projects";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Projecten",
  description: "Bekijk mijn portfolio-projecten en technische case studies.",
};

export default function ProjectsPage() {
  return (
    <SiteFrame>
      <Projects />
    </SiteFrame>
  );
}
