"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NavbarDesktop } from "./navbar/NavbarDesktop";
import { NavbarMobile } from "./navbar/NavbarMobile";

const Logo = () => (
  <a href="/" className="flex items-center gap-2">
    <span className="text-lg font-semibold tracking-tight">Postly</span>
  </a>
);

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        mounted && scrolled
          ? "border-b bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-4">
        <NavbarDesktop logo={<Logo />} />
        <NavbarMobile logo={<Logo />} />
      </div>
    </header>
  );
}