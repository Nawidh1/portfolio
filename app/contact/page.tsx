import type { Metadata } from "next";
import Contact from "@/components/Contact";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Nawid Haidari voor samenwerking of vragen.",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <Contact />
    </SiteFrame>
  );
}
