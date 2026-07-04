import { Navbar } from "@/components/layout/navbar";
import { CTASection } from "@/components/sections/CTA-section";
import { FeaturesSection } from "@/components/sections/features/features-section";
import { Footer } from "@/components/sections/footer-section";
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
        <FeaturesSection />
        <StatsSection />
        <IntegrationsGrid />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
