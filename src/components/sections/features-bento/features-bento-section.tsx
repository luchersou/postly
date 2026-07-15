"use client";

import { motion } from "framer-motion";

import { BENTO_FEATURES } from "./data";
import { FeaturesBentoCard } from "./features-bento-card";

export function FeaturesBento() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Built for how you
            <br />
            <span className="text-gradient">actually work</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to plan, create and grow — in one connected workspace.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {BENTO_FEATURES.map((feature, index) => (
            <FeaturesBentoCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}