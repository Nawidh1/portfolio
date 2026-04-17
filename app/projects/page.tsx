import type { Metadata } from "next";
import Projects from "@/components/Projects";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse my portfolio projects and technical case studies.",
};

export default function ProjectsPage() {
  return (
    <SiteFrame>
      <Projects />
    </SiteFrame>
  );
}
