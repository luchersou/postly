"use client";

import { useRef, useState } from "react";
import { ArrowRightIcon, PlayCircleIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const tiltRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 10 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section className="pt-35 pb-0">
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-4 flex justify-center">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-sm backdrop-blur-sm transition-colors hover:bg-muted/60"
          >
            <Badge>New</Badge>
            AI scheduling is now available!
            <ArrowRightIcon className="size-4" />
          </Link>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl"
        >
          The smarter way to schedule,
          <br />
          publish and{" "}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-brand">
            <span className="relative text-white">grow faster.</span>
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          AI-powered social media scheduling for teams that want results.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-6 flex items-center justify-center gap-3">
          <Button className="btn-brand" size="lg" asChild>
            <Link href="#">Get started for free</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#">
              <PlayCircleIcon className="mr-1 size-4" />
              Watch demo
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Images */}
      <div className="relative mt-3">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/hero-bg.png"
            alt="Hero background"
            width={1280}
            height={420}
            className="w-full object-cover"
            priority
          />
        </motion.div>

        <div
          className="absolute inset-0 flex items-start justify-center pt-[3%]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: "1200px" }}
        >
          {/* glow */}
          <div className="absolute left-1/2 top-0 h-full w-[60%] -translate-x-1/2 bg-brand/20 blur-[100px]" />

          <motion.div
            ref={tiltRef}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              rotateX: tilt.x,
              rotateY: tilt.y,
              transformStyle: "preserve-3d",
            }}
            className="w-[80%] transition-transform duration-200 ease-out will-change-transform"
          >
            <Image
              src="/dashboard-preview.png"
              alt="Postly dashboard"
              width={1000}
              height={720}
              className="h-auto w-full rounded-xl border border-white/10 shadow-6xl"
              priority
            />
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}