"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BentoFeature } from "./data";
import { SchedulingIllustration } from "./illustrations/scheduling";
import { AnalyticsIllustration } from "./illustrations/analytics";
import { MultiplatformIllustration } from "./illustrations/multiplatform";
import { TeamIllustration } from "./illustrations/team";
import { LibraryIllustration } from "./illustrations/library";
import { RepurposingIllustration } from "./illustrations/repurposing";

const illustrations = {
  scheduling: SchedulingIllustration,
  analytics: AnalyticsIllustration,
  multiplatform: MultiplatformIllustration,
  team: TeamIllustration,
  library: LibraryIllustration,
  repurposing: RepurposingIllustration,
};

interface FeaturesBentoCardProps {
  feature: BentoFeature;
  index: number;
}

export function FeaturesBentoCard({ feature, index }: FeaturesBentoCardProps) {
  const Illustration = illustrations[feature.illustration];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border",
        feature.className
      )}
    >
      {/* Illustration */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden p-1">
        <Illustration />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5 border-t p-5">
        <h3 className="text-sm font-semibold">{feature.title}</h3>
        <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
      </div>
    </motion.div>
  );
}