import { Navbar } from "@/components/layout/navbar";
import { FeatureSection } from "@/components/sections/feature-section";
import { Hero } from "@/components/sections/hero";
import { IntegrationsGrid } from "@/components/sections/integration-section";
import { StatsSection } from "@/components/sections/stats-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureSection />
        <StatsSection />
        <IntegrationsGrid />
      </main>
    </>
  );
}
