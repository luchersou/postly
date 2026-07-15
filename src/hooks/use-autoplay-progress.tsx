import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";

import {  type CarouselApi } from "@/components/ui/carousel";

const PROGRESS_ANIMATION_NAME = "autoplay-progress";

export function useAutoplayProgress(
  emblaApi: CarouselApi | undefined,
  progressNodes: React.MutableRefObject<(HTMLDivElement | null)[]>,
  current: number,
) {
  const [showAutoplayProgress, setShowAutoplayProgress] = useState(false);
  const animationName = useRef("");
  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);
  const rafId = useRef<number | undefined>(undefined);
  const currentRef = useRef(current);

  // Update current ref when current changes
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  // Reset all progress bars
  const resetAllProgress = useCallback(() => {
    progressNodes.current.forEach((node) => {
      if (node) {
        node.style.animationName = "none";
        node.style.transform = "translate3d(0,0,0)";
      }
    });
  }, [progressNodes]);

  const startProgress = useCallback(
    (timeUntilNext: number | null, targetIndex?: number) => {
      const index =
        targetIndex !== undefined ? targetIndex : currentRef.current;
      const node = progressNodes.current[index];
      if (!node) return;
      if (timeUntilNext === null || timeUntilNext <= 0) return;

      animationName.current = PROGRESS_ANIMATION_NAME;

      // Clear any existing timeouts and animations
      if (timeoutId.current) clearTimeout(timeoutId.current);
      if (rafId.current) cancelAnimationFrame(rafId.current);

      // Reset the node first
      node.style.animationName = "none";
      node.style.transform = "translate3d(0,0,0)";

      // Force reflow
      void node.offsetHeight;

      // Start animation in next frame
      rafId.current = window.requestAnimationFrame(() => {
        timeoutId.current = setTimeout(() => {
          const currentNode = progressNodes.current[index];
          if (currentNode && index === currentRef.current) {
            currentNode.style.animationName = animationName.current;
            currentNode.style.animationDuration = `${timeUntilNext}ms`;
            setShowAutoplayProgress(true);
          }
        }, 0);
      });
    },
    [progressNodes],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    const handleTimerset = () => {
      const timeUntilNext = autoplay.timeUntilNext();
      const selectedIndex = emblaApi.selectedScrollSnap();
      startProgress(timeUntilNext, selectedIndex);
    };

    const handleTimerStopped = () => {
      setShowAutoplayProgress(false);
      resetAllProgress();
    };

    const handlePlay = () => {
      const timeUntilNext = autoplay.timeUntilNext();
      const selectedIndex = emblaApi.selectedScrollSnap();
      startProgress(timeUntilNext, selectedIndex);
    };

    const handleSelect = () => {
      // Reset all progress bars when slide changes
      resetAllProgress();
      setShowAutoplayProgress(false);

      // Start progress for new slide
      const timeUntilNext = autoplay.timeUntilNext();
      const selectedIndex = emblaApi.selectedScrollSnap();
      if (timeUntilNext !== null && timeUntilNext > 0) {
        setTimeout(() => {
          startProgress(timeUntilNext, selectedIndex);
        }, 50);
      }
    };

    emblaApi.on("autoplay:timerset", handleTimerset);
    emblaApi.on("autoplay:timerstopped", handleTimerStopped);
    emblaApi.on("autoplay:play", handlePlay);
    emblaApi.on("select", handleSelect);

    // Initialize progress on mount
    const timeUntilNext = autoplay.timeUntilNext();
    const selectedIndex = emblaApi.selectedScrollSnap();
    if (timeUntilNext !== null && timeUntilNext > 0) {
      setTimeout(() => {
        startProgress(timeUntilNext, selectedIndex);
      }, 100);
    }

    return () => {
      emblaApi.off("autoplay:timerset", handleTimerset);
      emblaApi.off("autoplay:timerstopped", handleTimerStopped);
      emblaApi.off("autoplay:play", handlePlay);
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi, startProgress, resetAllProgress]);

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const resetProgress = useCallback(() => {
    resetAllProgress();
    setShowAutoplayProgress(false);
    if (timeoutId.current) clearTimeout(timeoutId.current);
    if (rafId.current) cancelAnimationFrame(rafId.current);
  }, [resetAllProgress]);

  const restartProgress = useCallback(
    (timeUntilNext: number | null, targetIndex: number) => {
      startProgress(timeUntilNext, targetIndex);
    },
    [startProgress],
  );

  return {
    showAutoplayProgress,
    resetProgress,
    restartProgress,
  };
}