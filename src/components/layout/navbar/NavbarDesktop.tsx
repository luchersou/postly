import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "./nav-items";

export function NavbarDesktop({ logo }: { logo: React.ReactNode }) {
  return (
    <nav className="hidden w-full items-center justify-between lg:flex">
      <div className="flex items-center gap-8">
        {logo}
        <NavigationMenu>
          <NavigationMenuList>
            {NAV_ITEMS.map((item) => {
              if (item.items) {
                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-64 gap-1 p-2">
                        {item.items.map((sub) => (
                          <li key={sub.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={sub.href}
                                className="flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-muted"
                              >
                                <span className="mt-0.5 text-muted-foreground">
                                  {sub.icon}
                                </span>
                                <div>
                                  <p className="text-sm font-medium leading-none">
                                    {sub.title}
                                  </p>
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    {sub.description}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm">
          <a href="#">Login</a>
        </Button>
        <Button asChild size="sm">
          <a href="#">Get started</a>
        </Button>
      </div>
    </nav>
  );
}