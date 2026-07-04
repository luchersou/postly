import { InstagramIcon } from "@/components/shared/icons/instagram-icon";
import { LinkedinIcon } from "@/components/shared/icons/linkedin-icon";
import { XIcon } from "@/components/shared/icons/x-icon";
import {
  CalendarClock,
  BarChart2,
  Layers,
} from "lucide-react";

interface SubItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

interface NavItem {
  title: string;
  href: string;
  items?: SubItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Features",
    href: "#features",
    items: [
      {
        title: "AI Scheduling",
        description: "Let AI pick the best time to post for your audience",
        href: "#",
        icon: <CalendarClock className="size-4" />,
      },
      {
        title: "Analytics",
        description: "Track performance across all your social channels",
        href: "#",
        icon: <BarChart2 className="size-4" />,
      },
      {
        title: "Multi-platform",
        description: "Manage all your accounts from a single dashboard",
        href: "#",
        icon: <Layers className="size-4" />,
      },
    ],
  },
  {
    title: "Integrations",
    href: "#integrations",
    items: [
      {
        title: "Instagram",
        description: "Schedule posts, reels and stories automatically",
        href: "#",
        icon: <InstagramIcon />,
      },
      {
        title: "Twitter / X",
        description: "Post threads and single tweets at the right time",
        href: "#",
        icon: <XIcon />,
      },
      {
        title: "LinkedIn",
        description: "Reach your professional network with scheduled content",
        href: "#",
        icon: <LinkedinIcon />,
      },
    ],
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Blog",
    href: "#",
  },
];