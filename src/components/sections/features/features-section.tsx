"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { FEATURES } from "./data";
import { FeaturesContent } from "./features-content";
import { FeaturesPreview } from "./features-preview";
import { FeaturesSidebar } from "./features-sidebar";
import { useFeaturesScroll } from "./hooks/use-features-scroll";

export function FeaturesSection() {
  const desktopItemRefs = useRef<(HTMLDivElement | null)[]>(
    Array(FEATURES.length).fill(null)
  );

  const mobileItemRefs = useRef<(HTMLDivElement | null)[]>(
    Array(FEATURES.length).fill(null)
  );

  const mobileTagRefs = useRef<(HTMLSpanElement | null)[]>(
    Array(FEATURES.length).fill(null)
  );

  const activeIndex = useFeaturesScroll(
    desktopItemRefs,
    mobileItemRefs
  );

  useEffect(() => {
    const tag = mobileTagRefs.current[activeIndex];
    if (tag) {
      const container = tag.closest(".overflow-x-auto");
      if (container) {
        const tagLeft = tag.offsetLeft;
        const tagWidth = tag.offsetWidth;
        const containerWidth = container.clientWidth;
        container.scrollTo({
          left: tagLeft - containerWidth / 2 + tagWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const scrollToFeature = (index: number) => {
    const isDesktop = window.innerWidth >= 1024;

    const refs = isDesktop
      ? desktopItemRefs.current
      : mobileItemRefs.current;

    refs[index]?.scrollIntoView({
      behavior: "smooth",
      block: isDesktop ? "center" : "start",
    });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Mobile Topics */}
        <div className="sticky top-16 z-20 mb-8 lg:hidden">
          <div className="relative">

            {/* Left fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent" />

            {/* Right fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent" />

            <div className="flex gap-4 overflow-x-auto no-scrollbar border-b bg-background/95 px-8 py-4 backdrop-blur">
              {FEATURES.map((feature, index) => (
                <button
                  key={feature.tag}
                  ref={(el) => {
                    mobileTagRefs.current[index] = el;
                  }}
                  onClick={() => scrollToFeature(index)}
                  className={`cursor-pointer shrink-0 text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {feature.tag}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-[160px_1fr_1fr] lg:gap-16">

          <aside className="relative">
            <div className="sticky top-32">
              <FeaturesSidebar
                activeIndex={activeIndex}
                onSelect={scrollToFeature}
              />
            </div>
          </aside>

          <FeaturesContent itemRefs={desktopItemRefs} />

          <aside className="relative">
            <div className="sticky top-32 h-[500px]">
              <FeaturesPreview activeIndex={activeIndex} />
            </div>
          </aside>

        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-16 lg:hidden">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.tag}
              ref={(el) => {
                mobileItemRefs.current[index] = el;
              }}
              className="flex flex-col gap-2 py-2"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  {feature.title}
                </h2>

                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3"
                    >
                      <Check className="size-4 shrink-0 text-brand" />
                      <span className="text-sm text-muted-foreground">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}