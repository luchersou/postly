"use client";

import { RefObject } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FEATURES } from "./data";

interface FeaturesContentProps {
  itemRefs: RefObject<(HTMLDivElement | null)[]>;
}

export function FeaturesContent({
  itemRefs,
}: FeaturesContentProps) {
  return (
    <div className="flex flex-col">
      {FEATURES.map((feature, index) => (
        <div
          key={feature.tag}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className="flex min-h-screen flex-col justify-start pb-24"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {feature.title}
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {feature.description}
            </p>

            <ul className="space-y-3">
              {feature.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3"
                >
                  <Check className="size-4 shrink-0 text-brand" />
                  <span className="text-sm text-muted-foreground">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <Button variant="outline" size="lg">
              {feature.cta}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}