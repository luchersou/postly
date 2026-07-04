export interface FeatureItem {
  index: number;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  image: string;
}

export const FEATURES: FeatureItem[] = [
  {
    index: 1,
    tag: "AI Scheduling",
    title: "Post at the perfect time, every time",
    description:
      "Postly's AI analyzes your audience behavior and automatically schedules your content when engagement is highest — across every platform, with zero manual effort.",
    bullets: [
      "Audience peak time detection",
      "Cross-platform queue management",
      "Recurring post automation",
      "Visual calendar overview",
    ],
    cta: "AI Scheduling",
    image: "/feature-1.svg",
  },
  {
    index: 2,
    tag: "AI Assistant",
    title: "Write once, publish everywhere",
    description:
      "Generate platform-optimized captions, hashtags and post variations from a single idea in seconds. Postly writes in your brand voice so you never start from a blank page.",
    bullets: [
      "Platform-optimized captions",
      "Smart hashtag suggestions",
      "Brand voice training",
      "A/B post variations",
    ],
    cta: "AI Assistant",
    image: "/feature-2.svg",
  },
  {
    index: 3,
    tag: "Analytics",
    title: "Know what works and double down",
    description:
      "Track reach, engagement and follower growth across all your channels in one clean dashboard. Understand what content drives results and stop guessing.",
    bullets: [
      "Engagement metrics per post",
      "Follower growth tracking",
      "Best content reports",
      "Custom date range filters",
    ],
    cta: "Analytics",
    image: "/feature-3.svg",
  },
  {
    index: 4,
    tag: "Automation",
    title: "Set it up once, let it run",
    description:
      "Build powerful workflows that publish, recycle and adapt your content automatically. Spend less time managing posts and more time creating.",
    bullets: [
      "Evergreen content recycling",
      "Trigger-based publishing",
      "Auto-adapt content per platform",
      "Workflow templates",
    ],
    cta: "Automation",
    image: "/feature-1.svg",
  },
  {
    index: 5,
    tag: "Publishing",
    title: "Manage all your channels in one place",
    description:
      "Connect Instagram, TikTok, X, LinkedIn and more from a single dashboard. Publish to every platform simultaneously without switching between apps.",
    bullets: [
      "One-click multi-platform publish",
      "Unified inbox for all channels",
      "Cross-platform content preview",
      "Team collaboration & approvals",
    ],
    cta: "Publishing",
    image: "/feature-2.svg",
  },
];