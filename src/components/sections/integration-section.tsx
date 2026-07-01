"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const integrations = [
  {
    image: "/integration-scheduling.svg",
    title: "Smart Scheduling",
    description: "Let AI pick the best time to post for maximum engagement on every platform.",
  },
  {
    image: "/integration-analytics.svg",
    title: "Deep Analytics",
    description: "Track what's working across all your channels in one clean dashboard.",
  },
  {
    image: "/integration-multiplatform.svg",
    title: "Multi-platform",
    description: "Publish to Instagram, TikTok, X, LinkedIn and more from a single place.",
  },
  {
    image: "/integration-team.svg",
    title: "Team Workflows",
    description: "Collaborate, review and approve content together without the back and forth.",
  },
  {
    image: "/integration-library.svg",
    title: "Content Library",
    description: "Store, organize and reuse your best assets, templates and captions.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function IntegrationCard({
  item,
  index,
}: {
  item: (typeof integrations)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group flex flex-col gap-5 rounded-2xl border border-border/60 bg-muted/20 p-6 shadow-sm transition-all duration-300 hover:border-border hover:bg-muted/40 hover:shadow-md"
    >
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-muted/30">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function IntegrationsGrid() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            One platform,{" "}
            <span className="text-gradient">every tool you need</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything built-in so you never have to switch between apps again.
          </p>
        </motion.div>

        {/* Row 1 — 2 cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {integrations.slice(0, 2).map((item, i) => (
            <IntegrationCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Row 2 — 3 cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {integrations.slice(2).map((item, i) => (
            <IntegrationCard key={item.title} item={item} index={i + 2} />
          ))}
        </div>

      </div>
    </section>
  );
}