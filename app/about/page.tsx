import type { Metadata } from "next";
import About from "@/components/About";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Nawid Haidari, background, and goals.",
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <About />
    </SiteFrame>
  );
}
