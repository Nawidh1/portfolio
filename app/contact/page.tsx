import type { Metadata } from "next";
import Contact from "@/components/Contact";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nawid Haidari for collaboration or questions.",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <Contact />
    </SiteFrame>
  );
}
