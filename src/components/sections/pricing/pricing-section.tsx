"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { plans } from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Simple, transparent
            <br />
            <span className="text-gradient">pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Start for free. Upgrade when you're ready.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 flex justify-center"
        >
          <div className="bg-muted inline-flex items-center gap-1 rounded-full border p-1">
            <Button
              variant={billingCycle === "monthly" ? "default" : "ghost"}
              className="rounded-full"
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === "yearly" ? "default" : "ghost"}
              className="rounded-full"
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
              <span className="ml-1.5 rounded-full bg-brand/15 px-1.5 py-0.5 text-[10px] font-medium text-brand">
                -17%
              </span>
            </Button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan, index) => {
            const isPopular = plan.name === "Pro";

            return (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-6",
                  isPopular
                    ? "border-brand/40 bg-brand/5 shadow-lg shadow-brand/10"
                    : "bg-background"
                )}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <div className="mb-4">
                  <h3 className="text-base font-semibold">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price[billingCycle]}</span>
                  <span className="text-muted-foreground text-sm">
                    {" "}/ {billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>

                <hr className="mb-6" />

                {/* Features */}
                <ul className="mb-8 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <Check className={cn("size-4 shrink-0", isPopular ? "text-brand" : "text-muted-foreground/60")} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    className={cn("w-full", isPopular && "btn-brand")}
                    variant={isPopular ? "default" : "outline"}
                  >
                    Get started
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}