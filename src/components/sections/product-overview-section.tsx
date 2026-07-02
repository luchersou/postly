"use client";

import React, { useEffect, useRef, useState } from "react";
import { BarChart3, Users, TrendingUp, BarChart2, Layers, CalendarClock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useAutoplayProgress } from "@/hooks/use-autoplay-progress";

type FeatureItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: CalendarClock,
    title: "AI-Powered Scheduling",
    description:
      "Let Postly analyze your audience and automatically schedule posts at the times that drive the most engagement.",
  },
  {
    icon: Layers,
    title: "Multi-Platform Publishing",
    description:
      "Publish to Instagram, TikTok, X, LinkedIn and more from a single dashboard — no more switching between apps.",
  },
  {
    icon: BarChart2,
    title: "Performance Analytics",
    description:
      "Track reach, engagement and follower growth across all your channels and replicate what drives results.",
  },
];

const images = [
  "integration-library.svg",
  "integration-library.svg",
  "integration-library.svg",
];

export function ProductOverview() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const progressNodes = useRef<(HTMLDivElement | null)[]>([]);
  const autoplay = React.useRef(Autoplay({ delay: 8000 }));

  // Initialize progress nodes array
  useEffect(() => {
    progressNodes.current = progressNodes.current.slice(0, features.length);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Use autoplay progress for each pagination card
  const { showAutoplayProgress, resetProgress, restartProgress } =
    useAutoplayProgress(api, progressNodes, current);

  const scrollTo = (index: number) => {
    if (!api) return;

    // Reset progress bar before scrolling
    resetProgress();

    // Scroll to the selected index
    api.scrollTo(index);

    // Restart progress after a short delay to ensure the slide has changed
    setTimeout(() => {
      const autoplay = api.plugins()?.autoplay;
      if (autoplay) {
        // Reset autoplay timer
        autoplay.reset();
        const timeUntilNext = autoplay.timeUntilNext();
        if (timeUntilNext !== null && timeUntilNext > 0) {
          restartProgress(timeUntilNext, index);
        }
      }
    }, 100);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-2">
					<h3 className="text-3xl leading-tight font-bold md:text-4xl">
						Your social media,{" "}
						<span className="text-gradient">finally under control</span>
					</h3>
				</div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="relative lg:col-span-2">
            <Carousel
              setApi={setApi}
              plugins={[autoplay.current]}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="basis-full p-0">
                    <div className="bg-muted relative aspect-video w-full overflow-hidden">
                      <Image
                        src={image}
                        alt={`Project dashboard ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Right Panel - Features List */}
          <div className="flex flex-col divide-y lg:col-span-1">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = current === index;

              return (
                <React.Fragment key={index}>
                  <div
                    className="relative cursor-pointer p-4 py-6"
                    onClick={() => scrollTo(index)}
                  >
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border">
                        <Icon className="size-4" />
                      </div>
                      <div className="flex-1 space-y-1.5">
                        <h4 className="text-foreground text-lg font-medium">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground text-sm/relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 w-full overflow-hidden">
                      <div
                        ref={(el) => {
                          progressNodes.current[index] = el;
                        }}
                        className={cn(
                          "embla__progress__bar bg-muted z-0 h-full",
                          !(isActive && showAutoplayProgress) && "opacity-0",
                        )}
                      />
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}