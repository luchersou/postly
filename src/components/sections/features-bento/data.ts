export interface BentoFeature {
  title: string;
  description: string;
  illustration: "scheduling" | "analytics" | "multiplatform" | "team" | "library" | "repurposing";
  className?: string;
}

export const BENTO_FEATURES: BentoFeature[] = [
  {
    title: "AI Scheduling",
    description: "Post at the perfect time, automatically. Let AI analyze your audience and schedule content when engagement is highest.",
    illustration: "scheduling",
    className: "col-span-2 row-span-1",
  },
  {
    title: "Content Library",
    description: "Keep every asset, draft and template organized and ready to reuse.",
    illustration: "library",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Multi-platform",
    description: "Publish to Instagram, TikTok, X and LinkedIn simultaneously.",
    illustration: "multiplatform",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Team Workflows",
    description: "Collaborate, review and approve content without leaving Postly.",
    illustration: "team",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Deep Analytics",
    description: "Track what's working across every channel in one clean dashboard.",
    illustration: "analytics",
    className: "col-span-1 row-span-2",
  },
  {
    title: "AI Repurposing",
    description: "Turn one piece of content into posts for every platform automatically. Postly adapts your message, format and tone for each channel.",
    illustration: "repurposing",
    className: "col-span-2 row-span-1",
  },
];