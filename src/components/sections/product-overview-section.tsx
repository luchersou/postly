import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const tabContent = {
  "ai-scheduling": {
    description:
      "Let Postly's AI analyze your audience behavior and automatically schedule posts at the exact times that drive the most engagement — across every platform, with zero manual effort.",
    image: "/product-calendar.jpg",
    features: [
      {
        title: "Peak Time Detection",
        description:
          "Automatically identify when your audience is most active and ready to engage.",
      },
      {
        title: "Queue Management",
        description:
          "Build and manage your content queue with drag-and-drop simplicity.",
      },
      {
        title: "Recurring Posts",
        description:
          "Schedule evergreen content to repeat automatically on a custom cadence.",
      },
      {
        title: "Calendar Overview",
        description:
          "Visualize your entire publishing schedule across all platforms in one view.",
      },
    ],
  },
  "multi-platform": {
    description:
      "Manage Instagram, TikTok, X, LinkedIn and more from a single unified dashboard. Create once, adapt for each platform, and publish everywhere without switching between apps.",
    image: "/product-multiplatform.jpg",
    features: [
      {
        title: "Platform Adaption",
        description:
          "Automatically adjust captions, hashtags and formats for each social network.",
      },
      {
        title: "Unified Inbox",
        description:
          "Manage comments and messages from all platforms in one place.",
      },
      {
        title: "Cross-Platform Preview",
        description:
          "See exactly how your post will look on each platform before publishing.",
      },
      {
        title: "One-Click Publishing",
        description:
          "Publish to all connected accounts simultaneously with a single click.",
      },
    ],
  },
  "analytics": {
    description:
      "Track reach, engagement and follower growth across all your channels in one clean dashboard. Understand what content drives results and double down on what works.",
    image: "/product-analytics.jpg",
    features: [
      {
        title: "Engagement Metrics",
        description:
          "Monitor likes, comments, shares and saves across every post and platform.",
      },
      {
        title: "Follower Growth",
        description:
          "Track audience growth over time and identify what drives new followers.",
      },
      {
        title: "Best Content Reports",
        description:
          "Automatically surface your top-performing posts and replicate their success.",
      },
      {
        title: "Custom Date Ranges",
        description:
          "Analyze performance over any time period with flexible reporting filters.",
      },
    ],
  },
  "ai-content": {
    description:
      "Generate platform-optimized captions, hashtags and post variations from a single idea in seconds. Postly's AI writes in your brand voice so you never start from a blank page again.",
    image: "/product-ai-content.jpg",
    features: [
      {
        title: "Caption Generation",
        description:
          "Turn a brief idea into a polished, platform-ready caption instantly.",
      },
      {
        title: "Hashtag Suggestions",
        description:
          "Get data-driven hashtag recommendations tailored to your niche and audience.",
      },
      {
        title: "Brand Voice Training",
        description:
          "Teach Postly your tone and style so every caption sounds like you.",
      },
      {
        title: "Post Variations",
        description:
          "Generate multiple versions of the same post to A/B test what resonates.",
      },
    ],
  },
};

const tabs = [
  { value: "ai-scheduling", label: "AI Scheduling" },
  { value: "multi-platform", label: "Multi-Platform" },
  { value: "analytics", label: "Analytics" },
  { value: "ai-content", label: "AI Content" },
];

export function ProductOverview() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
            Your social media,{" "}
            <span className="text-gradient">finally under control</span>
          </h2>
          <p className="text-lg/relaxed text-muted-foreground">
            From AI-powered scheduling to deep analytics — everything you need
            to grow your audience is built into Postly.
          </p>
        </div>

        <div className="mt-8 lg:mt-12">
          <Tabs defaultValue="ai-scheduling" className="w-full">
            <div className="flex justify-center">
              <TabsList className="inline-flex h-auto w-full flex-col md:h-12 md:flex-row">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    className="w-full md:w-auto"
                    value={tab.value}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(tabContent).map(([key, content]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border shadow-md">
                    <Image
                      src={content.image}
                      alt="Postly dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-6 lg:space-y-10">
                    <p className="leading-relaxed text-muted-foreground">
                      {content.description}
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {content.features.map((feature) => (
                        <Card
                          key={feature.title}
                          className="border-0 bg-muted/50 shadow-none"
                        >
                          <CardContent>
                            <h5 className="mb-2 font-medium">{feature.title}</h5>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {feature.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}