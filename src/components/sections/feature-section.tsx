import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FeatureSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-18 px-4 sm:px-6 lg:space-y-4 lg:px-8">

				<div className="mx-auto max-w-2xl text-center">
					<h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
						Everything you need to{" "}
						<span className="bg-gradient-to-r from-brand to-indigo-400 bg-clip-text text-transparent">
							grow on social media
						</span>
					</h2>
					<p className="mt-4 text-muted-foreground">
						From AI-powered content creation to smart scheduling and deep analytics —
						Postly handles the heavy lifting so you don't have to.
					</p>
				</div>

        {/* Feature 1 */}
        <div className="grid items-center gap-4 sm:gap-4 lg:grid-cols-2 lg:gap-10">
          <figure className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/feature-1.svg"
              fill
              alt="AI content generation"
            />
          </figure>

          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <div className="text-muted-foreground text-xs tracking-wider uppercase">
                <span className="me-2 inline-block size-2 rounded-full bg-brand"></span>
                AI Content Generation
              </div>
              <h3 className="text-2xl leading-tight font-bold text-balance sm:text-3xl lg:text-4xl/tight">
                Write once, publish everywhere with AI
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base lg:text-lg">
              Let Postly's AI generate platform-optimized captions, hashtags and
              post variations from a single idea — saving hours of manual writing
              every week.
            </p>
            <Button variant="outline" size="lg">
              See how it works
              <ArrowUpRight />
            </Button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid items-center gap-4 sm:gap-4 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 space-y-4 lg:order-1 lg:space-y-6">
            <div className="space-y-2">
              <div className="text-muted-foreground text-xs tracking-wider uppercase">
                <span className="me-2 inline-block size-2 rounded-full bg-brand"></span>
                Smart Scheduling
              </div>
              <h3 className="text-2xl leading-tight font-bold text-balance sm:text-3xl lg:text-4xl/tight">
                Post at the perfect time, automatically
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base lg:text-lg">
              Postly analyzes your audience's behavior and automatically schedules
              your posts when engagement is highest — across every platform, with
              zero manual effort.
            </p>
            <Button variant="outline" size="lg">
              Explore scheduling
              <ArrowUpRight />
            </Button>
          </div>

          <figure className="relative order-1 aspect-4/3 w-full overflow-hidden lg:order-2">
            <Image
              src="/feature-2.svg"
              fill
              alt="Smart scheduling"
            />
          </figure>
        </div>

        {/* Feature 3 */}
        <div className="grid items-center gap-4 sm:gap-4 lg:grid-cols-2 lg:gap-10">
          <figure className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/feature-3.svg"
              fill
              alt="Analytics and insights"
            />
          </figure>

          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <div className="text-muted-foreground text-xs tracking-wider uppercase">
                <span className="me-2 inline-block size-2 rounded-full bg-brand"></span>
                Analytics & Insights
              </div>
              <h3 className="text-2xl leading-tight font-bold text-balance sm:text-3xl lg:text-4xl/tight">
                Know what works and double down on it
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base lg:text-lg">
              Track reach, engagement and follower growth across all your
              channels in one dashboard. Spot your best-performing content and
              replicate what drives results.
            </p>
            <Button variant="outline" size="lg">
              View analytics
              <ArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}