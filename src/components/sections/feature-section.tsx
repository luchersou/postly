"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

const FEATURES = [
  {
    tag: "AI Content Generation",
    title: "Write once, publish everywhere with AI",
    description:
      "Let Postly's AI generate platform-optimized captions, hashtags and post variations from a single idea — saving hours of manual writing every week.",
    cta: "See how it works",
    image: "/feature-1.svg",
    imageAlt: "AI content generation",
    reverse: false,
  },
  {
    tag: "Smart Scheduling",
    title: "Post at the perfect time, automatically",
    description:
      "Postly analyzes your audience's behavior and automatically schedules your posts when engagement is highest — across every platform, with zero manual effort.",
    cta: "Explore scheduling",
    image: "/feature-2.svg",
    imageAlt: "Smart scheduling",
    reverse: true,
  },
  {
    tag: "Analytics & Insights",
    title: "Know what works and double down on it",
    description:
      "Track reach, engagement and follower growth across all your channels in one dashboard. Spot your best-performing content and replicate what drives results.",
    cta: "View analytics",
    image: "/feature-3.svg",
    imageAlt: "Analytics and insights",
    reverse: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

function FeatureItem({ feature }: { feature: (typeof FEATURES)[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const imageVariant = feature.reverse ? fadeRight : fadeLeft;
  const textVariant = feature.reverse ? fadeLeft : fadeRight;
  const transition = { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <motion.div
      ref={ref}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.figure
        variants={imageVariant}
        transition={{ ...transition, delay: 0.1 }}
				whileHover={{ scale: 1.02 }}
        className={`relative aspect-4/3 w-full overflow-hidden rounded-2xl ${
          feature.reverse ? "lg:order-2" : ""
        }`}
      >
        <Image src={feature.image} fill alt={feature.imageAlt} />
      </motion.figure>

      <motion.div
        variants={textVariant}
        transition={{ ...transition, delay: 0.25 }}
        className={`space-y-5 ${feature.reverse ? "lg:order-1" : ""}`}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="inline-block size-2 rounded-full bg-brand" />
            {feature.tag}
          </div>
          <h3 className="text-2xl font-bold leading-tight text-balance sm:text-3xl lg:text-4xl/tight">
            {feature.title}
          </h3>
        </div>
        <p className="text-muted-foreground leading-relaxed lg:text-lg">
          {feature.description}
        </p>
        <Button variant="outline" size="lg">
          {feature.cta}
          <ArrowUpRight className="size-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}

export function FeatureSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="mx-auto max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to{" "}
            <span className="text-gradient">
              grow on social media
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From AI-powered content creation to smart scheduling and deep analytics —
            Postly handles the heavy lifting so you don't have to.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-20 flex flex-col gap-24 lg:gap-2">
          {FEATURES.map((feature) => (
            <FeatureItem key={feature.tag} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
}