"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

import { FEATURES } from "./data";

const tagVariants: Variants = {
  inactive: { opacity: 0.4 },
  active: { opacity: 1, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

interface FeaturesSidebarProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function FeaturesSidebar({ activeIndex, onSelect }: FeaturesSidebarProps) {
  return (
    <div className="flex flex-col gap-6">
      {FEATURES.map((feature, index) => (
        <motion.button
          key={feature.tag}
          type="button"
          onClick={() => onSelect(index)}
          variants={tagVariants}
          animate={activeIndex === index ? "active" : "inactive"}
          className="flex w-full cursor-pointer items-center gap-3 text-left"
        >
          <span
            className={cn(
              "text-xs font-mono transition-colors duration-300",
              activeIndex === index
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {feature.index}
          </span>
          <span
            className={cn(
              "text-xs font-medium uppercase tracking-widest transition-colors duration-300",
              activeIndex === index
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {feature.tag}
          </span>
        </motion.button>
      ))}
    </div>
  );
}