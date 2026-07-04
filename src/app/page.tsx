import { Navbar } from "@/components/layout/navbar";
import { CTASection } from "@/components/sections/CTA-section";
import { FeaturesSection } from "@/components/sections/features/features-section";
import { Footer } from "@/components/sections/footer-section";
import { Hero } from "@/components/sections/hero";
import { FeaturesBentoSection } from "@/components/sections/feature-bento-section";
import { PricingSection } from "@/components/sections/pricing/pricing-section";
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
        <FeaturesBentoSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
