import { Navbar } from "@/components/layout/navbar";
import { FeatureSection } from "@/components/sections/feature-section";
import { Hero } from "@/components/sections/hero";
import { IntegrationsGrid } from "@/components/sections/integration-section";
import { PricingSection } from "@/components/sections/pricing/pricing-section";
import { ProductOverview } from "@/components/sections/product-overview-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureSection />
        <StatsSection />
        <IntegrationsGrid />
        <ProductOverview />
        <TestimonialsSection />
        <PricingSection />
      </main>
    </>
  );
}
