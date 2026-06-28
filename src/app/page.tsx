import { Navbar } from "@/components/layout/navbar";
import { FeatureSection } from "@/components/sections/feature-section";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* sections here */}
        <Hero />
        <FeatureSection />
      </main>
    </>
  );
}
