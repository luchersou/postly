import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar/navbar";
import { CTASection } from "@/components/sections/CTA-section";
import { FeaturesSection } from "@/components/sections/features/features-section";
import { FeaturesBento } from "@/components/sections/features-bento/features-bento-section";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { PricingSection } from "@/components/sections/pricing/pricing-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <FeaturesSection />
        <StatsSection />
        <FeaturesBento />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
