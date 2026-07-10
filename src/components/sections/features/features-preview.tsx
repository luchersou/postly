"use client";

import Image from "next/image";
import { FEATURES } from "./data";

interface FeaturesPreviewProps {
  activeIndex: number;
}

export function FeaturesPreview({ activeIndex }: FeaturesPreviewProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={FEATURES[activeIndex].image}
        alt={FEATURES[activeIndex].title}
        fill
        className="object-contain p-2"
      />
    </div>
  );
}