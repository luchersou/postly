"use client";

import { ChevronDown,Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { NAV_ITEMS } from "./nav-items";

export function NavbarMobile({ logo }: { logo: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (title: string) =>
    setExpanded((prev) => (prev === title ? null : title));

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between">
        {logo}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-1 pb-4">
          {NAV_ITEMS.map((item) => {
            if (item.items) {
              const isOpen = expanded === item.title;
              return (
                <div key={item.title}>
                  <button
                    onClick={() => toggle(item.title)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-1 ml-2 flex flex-col gap-1">
                      {item.items.map((sub) => (
                        <a
                          key={sub.title}
                          href={sub.href}
                          className="flex items-start gap-3 rounded-md px-3 py-2 transition-colors hover:bg-muted"
                        >
                          <span className="mt-0.5 text-muted-foreground">
                            {sub.icon}
                          </span>
                          <div>
                            <p className="text-sm font-medium">{sub.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {sub.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.title}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.title}
              </a>
            );
          })}

          <div className="mt-4 flex flex-col gap-2 border-t pt-4">
            <Button asChild variant="outline" className="w-full">
              <a href="#">Login</a>
            </Button>
            <Button asChild className="w-full">
              <a href="#">Get started</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}