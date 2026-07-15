"use client";

import { FileText, Hash, ImageIcon,Video } from "lucide-react";
import { motion } from "motion/react";
import { useEffect,useState } from "react";

import { cn } from "@/lib/utils";

const CARDS = [
  {
    id: 1,
    title: "Summer Campaign",
    desc: "Instagram · 4 assets",
    status: "Ready",
    color: "text-green-600",
    bg: "bg-green-50",
    icon: <ImageIcon size={20} />,
  },
  {
    id: 2,
    title: "Brand Guidelines",
    desc: "PDF · Updated today",
    status: "Saved",
    color: "text-green-600",
    bg: "bg-green-50",
    icon: <FileText size={20} />,
  },
  {
    id: 3,
    title: "Reel Template",
    desc: "TikTok · 15s format",
    status: "Draft",
    color: "text-gray-500",
    bg: "bg-gray-100",
    icon: <Video size={20} />,
  },
  {
    id: 4,
    title: "Hashtag Bank",
    desc: "142 tags · 6 niches",
    status: "Active",
    color: "text-blue-600",
    bg: "bg-blue-50",
    icon: <Hash size={20} />,
  },
];

const CARD_HEIGHT = 96;

export function LibraryIllustration() {
  const [index, setIndex] = useState(0);
  const displayCards = [...CARDS, ...CARDS, ...CARDS];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % (displayCards.length - 2));
    }, 2000);
    return () => clearInterval(timer);
  }, [displayCards.length]);

  return (
    <div className="relative h-60 w-full max-w-md overflow-hidden">
      <motion.div
        animate={{ y: -(index * CARD_HEIGHT) }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="flex flex-col items-center px-4"
      >
        {displayCards.map((item, i) => {
          const isCenter = i === index + 1;
          return (
            <motion.div
              key={`${item.id}-${i}`}
              animate={{
                scale: isCenter ? 1.05 : 0.9,
                opacity: isCenter ? 1 : 0.4,
                z: isCenter ? 10 : 0,
              }}
              className={cn(
                "relative mb-4 flex h-20 w-full items-center justify-between rounded-2xl border p-4 transition-colors",
                isCenter ? "shadow-lg" : "shadow-none",
              )}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold ${item.bg} ${item.color} border-current/10`}
              >
                {item.status === "Confirming" && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                    className="h-2.5 w-2.5 rounded-full border-2 border-current border-t-transparent"
                  />
                )}
                {item.status}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}