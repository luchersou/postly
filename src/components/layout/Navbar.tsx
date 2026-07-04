"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NavbarDesktop } from "./navbar/navbar-desktop";
import { NavbarMobile } from "./navbar/navbar-mobile";
import { Logo } from "@/components/shared/logo";

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
        "fixed z-50 transition-all duration-300",
        mounted && scrolled
          ? "inset-x-4 top-4 rounded-2xl border bg-background/80 backdrop-blur-md shadow-lg"
          : "inset-x-0 top-0 bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-4">
        <NavbarDesktop logo={<Logo />} />
        <NavbarMobile logo={<Logo />} />
      </div>
    </header>
  );
}