import type { Metadata } from "next";
import Experience from "@/components/Experience";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Experience",
  description: "My education, career path, and growth as a software developer.",
};

export default function ExperiencePage() {
  return (
    <SiteFrame>
      <Experience />
    </SiteFrame>
  );
}
