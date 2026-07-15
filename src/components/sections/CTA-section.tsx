"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <div className="relative px-4 py-16 sm:px-6 sm:py-32 lg:px-8">

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 space-y-4 text-center"
      >
        <h2 className="text-3xl font-bold text-balance lg:text-4xl/tight">
          Start growing your audience today.
        </h2>
        <p className="text-muted-foreground lg:text-lg">
          Join 180k+ creators and teams already using Postly to schedule, publish and grow.
        </p>
        <div className="flex justify-center gap-3">
          <Button className="btn-brand" size="lg" asChild>
            <Link href="#">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#">
              See pricing
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Grid background */}
      <div
        className="absolute inset-0 z-0 dark:opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      {/* Brand glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(99,102,241,0.08),transparent)]" />

    </div>
  );
}