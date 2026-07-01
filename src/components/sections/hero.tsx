import { ArrowRightIcon, PlayCircleIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-35 pb-0">
      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 text-center">
				{/* Badge */}
				<div className="mb-4 flex justify-center">
					<Link
						href="#"
						className="flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-sm backdrop-blur-sm transition-colors hover:bg-muted/60"
					>
						<Badge>New</Badge>
						AI scheduling is now available!
						<ArrowRightIcon className="size-4" />
					</Link>
				</div>

				<h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
					The smarter way to schedule,
					<br />
					publish and{" "}
					<span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-brand">
						<span className="relative text-white">grow faster.</span>
					</span>
				</h1>

				<p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
					AI-powered social media scheduling for teams that want results.
				</p>

				<div className="mt-6 flex items-center justify-center gap-3">
					<Button size="lg" asChild>
						<Link href="#">Get started for free</Link>
					</Button>
					<Button size="lg" variant="secondary" asChild>
						<Link href="#">
							<PlayCircleIcon className="mr-1 size-4" />
							Watch demo
						</Link>
					</Button>
				</div>
			</div>

      {/* Images */}
      <div className="relative mt-3">
				<Image
					src="/hero-bg.png"
					alt="Hero background"
					width={1280}
					height={420}
					className="w-full object-cover"
					priority
				/>
				<div className="absolute inset-0 flex items-start justify-center pt-[3%]">
					<Image
						src="/dashboard-preview.png"
						alt="Postly dashboard"
						width={1000}
						height={720}
						className="w-[60%] h-auto rounded-xl"
					/>
				</div>
				<div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
			</div>
    </section>
  );
}