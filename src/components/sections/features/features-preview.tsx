"use client";

import Image from "next/image";
import { FEATURES } from "./data";

interface FeaturesPreviewProps {
  activeIndex: number;
}

export function FeaturesPreview({ activeIndex }: FeaturesPreviewProps) {
  console.log("Preview:", activeIndex);

  return (
    <div className="relative h-full w-full rounded-2xl border bg-muted/30">
      <h1 className="absolute left-5 top-5 z-50 text-7xl font-bold">
        {activeIndex}
      </h1>

      <Image
        src={FEATURES[activeIndex].image}
        alt={FEATURES[activeIndex].title}
        fill
        className="object-contain p-8"
      />
    </div>
  );
}