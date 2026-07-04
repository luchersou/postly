"use client";

import { RefObject, useEffect, useState } from "react";

export function useFeaturesScroll(
  desktopItemRefs: RefObject<(HTMLDivElement | null)[]>,
  mobileItemRefs: RefObject<(HTMLDivElement | null)[]>
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateActiveFeature = () => {
      const isDesktop = window.innerWidth >= 1024;

      const refs = isDesktop
        ? desktopItemRefs.current
        : mobileItemRefs.current;

      if (isDesktop) {
        // ===== Desktop =====
        const viewportCenter = window.innerHeight / 2;

        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        refs.forEach((element, index) => {
          if (!element) return;

          const rect = element.getBoundingClientRect();
          const center = rect.top + rect.height / 2;

          const distance = Math.abs(center - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex((prev) =>
          prev === closestIndex ? prev : closestIndex
        );
      } else {
        // ===== Mobile =====
        let currentIndex = 0;

        refs.forEach((element, index) => {
          if (!element) return;

          const rect = element.getBoundingClientRect();

          if (rect.top <= 120) {
            currentIndex = index;
          }
        });

        setActiveIndex((prev) =>
          prev === currentIndex ? prev : currentIndex
        );
      }
    };

    updateActiveFeature();

    window.addEventListener("scroll", updateActiveFeature, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveFeature);

    return () => {
      window.removeEventListener("scroll", updateActiveFeature);
      window.removeEventListener("resize", updateActiveFeature);
    };
  }, [desktopItemRefs, mobileItemRefs]);

  return activeIndex;
}