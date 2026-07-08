import { InfiniteSlider } from "@/components/ui/infinite-slider";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaPinterest,
  FaThreads,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const platforms = [
  { icon: FaInstagram, name: "Instagram" },
  { icon: FaTiktok, name: "TikTok" },
  { icon: FaXTwitter, name: "X" },
  { icon: FaLinkedin, name: "LinkedIn" },
  { icon: FaFacebook, name: "Facebook" },
  { icon: FaYoutube, name: "YouTube" },
  { icon: FaPinterest, name: "Pinterest" },
  { icon: FaThreads, name: "Threads" },
];

export function LogoCloud() {
  return (
    <div className="py-8">
      <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
        Works with your favorite platforms
      </p>
      <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] overflow-hidden">
        <InfiniteSlider gap={48} speed={60} speedOnHover={20}>
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-2 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <platform.icon className="size-8 shrink-0" />
              <span className="text-sm font-semibold whitespace-nowrap">
                {platform.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}