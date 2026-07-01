"use client";

import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  {
    display: "#1",
    isStatic: true,
    label: "AI-powered social media tool for creators",
  },
  {
    value: 2.5,
    suffix: "M+",
    decimal: true,
    label: "Posts scheduled and published automatically",
  },
  {
    value: 180,
    suffix: "k+",
    decimal: false,
    label: "Creators and brands growing with Postly",
  },
  {
    value: 40,
    suffix: "%",
    decimal: false,
    label: "Average increase in engagement after 30 days",
  },
];

function StatItem({ stat }: { stat: (typeof stats)[number] }) {
  const { count, ref } = useCountUp(
    "value" in stat ? (stat.value as number) : 0,
    1600,
    "decimal" in stat ? (stat.decimal as boolean) : false
  );

  return (
    <div className="flex flex-1 flex-col justify-center gap-3 px-6 py-4">
      {stat.isStatic ? (
        <p className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
          {stat.display}
        </p>
      ) : (
        <p className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
          <span ref={ref as React.RefObject<HTMLSpanElement>}>
            {"decimal" in stat && stat.decimal
              ? (count as number).toFixed(1)
              : count}
          </span>
          {"suffix" in stat && stat.suffix}
        </p>
      )}
      <p className="text-primary-foreground/70 text-balance leading-snug">{stat.label}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-8 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-6 sm:px-10">
          <div className="relative flex flex-col divide-y divide-primary-foreground/20 sm:flex-row sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}