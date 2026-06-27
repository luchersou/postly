import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NAV_ITEMS } from "./nav-items";

export function NavbarMobile({ logo }: { logo: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between lg:hidden">
      {logo}

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle asChild>{logo}</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-6 p-4 pt-8">
            <Accordion type="single" collapsible className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                if (item.items) {
                  return (
                    <AccordionItem
                      key={item.title}
                      value={item.title}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="py-0 text-sm font-medium hover:no-underline">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="mt-2 flex flex-col gap-1">
                        {item.items.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-muted"
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
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </a>
                );
              })}
            </Accordion>

            <div className="flex flex-col gap-3">
              <Button asChild variant="outline">
                <a href="#">Login</a>
              </Button>
              <Button asChild>
                <a href="#">Get started</a>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}