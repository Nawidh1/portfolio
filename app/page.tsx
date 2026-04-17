import Hero from "@/components/Hero";
import SiteFrame from "@/components/SiteFrame";

export default function Home() {
  return (
    <SiteFrame padTop={false}>
      <Hero />
    </SiteFrame>
  );
}
