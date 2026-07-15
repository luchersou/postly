"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Postly cut our content planning time in half. We went from spending hours scheduling posts manually to having everything automated and optimized in minutes.",
    name: "Sophia Carter",
    position: "Social Media Manager, Bloom Agency",
    image: "https://i.pravatar.cc/100?img=31",
    bg: "bg-blue-100 dark:bg-blue-950",
    x: "10%",
    y: "5%",
    rotate: -3,
  },
  {
    quote:
      "The AI caption generator is a game changer. It writes in our brand voice better than we expected and saves our team hours every single week.",
    name: "Daniel Park",
    position: "Content Lead, Nova Brands",
    image: "https://i.pravatar.cc/100?img=52",
    bg: "bg-violet-100 dark:bg-violet-950",
    x: "45%",
    y: "0%",
    rotate: 2,
  },
  {
    quote:
      "Since switching to Postly, our engagement went up 40% in the first month. The smart scheduling alone is worth every penny.",
    name: "Priya Nair",
    position: "Growth Marketer, Stackr",
    image: "https://i.pravatar.cc/100?img=44",
    bg: "bg-green-100 dark:bg-green-950",
    x: "0%",
    y: "35%",
    rotate: 4,
  },
  {
    quote:
      "Managing five client accounts used to be a nightmare. Postly made it feel effortless — one dashboard, everything under control.",
    name: "Lucas Ferreira",
    position: "Freelance Social Media Strategist",
    image: "https://i.pravatar.cc/100?img=13",
    bg: "bg-rose-100 dark:bg-rose-950",
    x: "8%",
    y: "55%",
    rotate: -2,
  },
  {
    quote:
      "The analytics dashboard finally gave us clarity on what content actually works. We stopped guessing and started growing.",
    name: "Amanda Chen",
    position: "Marketing Director, Pivot Studio",
    image: "https://i.pravatar.cc/100?img=29",
    bg: "bg-amber-100 dark:bg-amber-950",
    x: "35%",
    y: "50%",
    rotate: 1,
  },
  {
    quote:
      "Postly is the tool I recommend to every creator I know. It just works — the scheduling, the AI, the integrations. Everything clicks.",
    name: "Jordan Williams",
    position: "Content Creator, 280k followers",
    image: "https://i.pravatar.cc/100?img=62",
    bg: "bg-teal-100 dark:bg-teal-950",
    x: "55%",
    y: "45%",
    rotate: -4,
  },
] as const;

const BASE_Z = 1;
const TOP_Z = 100;
const DRAGGING_Z = 150;

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [lastDroppedIndex, setLastDroppedIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 max-w-xl"
        >
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Loved by creators
            <br />
            and teams worldwide
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join 180k+ creators already using Postly to grow their audience.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative mt-14 min-h-[520px] md:min-h-[580px] mx-auto max-w-4xl" 
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`absolute w-[min(320px,85vw)] max-w-sm cursor-grab rounded-2xl p-4  active:cursor-grabbing ${t.bg}`}
              style={{
                left: t.x,
                top: t.y,
                rotate: t.rotate,
                zIndex:
                  draggingIndex === i
                    ? DRAGGING_Z
                    : lastDroppedIndex === i
                      ? TOP_Z
                      : BASE_Z + i,
              }}
              initial={false}
              drag
              dragElastic={0.1}
              dragMomentum
              dragConstraints={containerRef}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              onDragStart={() => {
                setLastDroppedIndex(i);
                setDraggingIndex(i);
              }}
              onDragEnd={() => setDraggingIndex(null)}
              whileDrag={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
            >
              <div className="rounded-xl p-4">
                <Quote
                  className="text-foreground/70 mb-2 size-10"
                  strokeWidth={1}
                  aria-hidden
                />
                <blockquote className="text-foreground text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {t.position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}