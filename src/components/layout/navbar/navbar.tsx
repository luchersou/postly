"use client";

import { useEffect, useState } from "react";

import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";

import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b bg-background/80 backdrop-blur-md shadow-sm"
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