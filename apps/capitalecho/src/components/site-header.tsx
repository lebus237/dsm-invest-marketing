"use client";

import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@dsm/ui/components/ui/button";
import { logoAsset } from "@/assets/static";
import { useActiveSection } from "@/components/scroll-experience";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@dsm/ui/components/ui/sheet";

const navigation = [
  { label: "Home", href: "#home", activeIds: ["home"] },
  { label: "About", href: "#about", activeIds: ["about"] },
  { label: "Editorial Series", href: "#editorial-series", activeIds: ["editorial-series"] },
  { label: "Echo Intelligence", href: "#echo-intelligence", activeIds: ["echo-intelligence"] },
  {
    label: "Auditors",
    href: "#personalized-intelligence",
    activeIds: ["personalized-intelligence"],
  },
  {
    label: "DSM Invest",
    href: "#dsm-invest",
    activeIds: ["information-to-action", "start", "newsletter", "contact", "dsm-invest"],
  },
] as const;

export function Header() {
  const activeSection = useActiveSection();
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background">
      <div className="mx-auto flex h-24 max-w-[90rem] items-center justify-between px-6 sm:px-10 lg:h-28 lg:px-16">
        <a
          href="#home"
          aria-label="CapitalEcho home"
          data-hero-step
          className="flex items-center [--ce-hero-delay:0ms]"
        >
          <img
            src={logoAsset.url}
            alt="CapitalEcho"
            className="h-14 w-auto bg-transparent object-contain sm:h-16 lg:h-20"
          />
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={
                item.activeIds.some((id) => id === activeSection) ? "location" : undefined
              }
              className="relative py-2 text-sm text-muted-foreground transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-capitalecho after:transition-transform after:duration-200 hover:text-foreground aria-[current=location]:text-foreground aria-[current=location]:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="capitalecho" size="lg">
            <a href="#start">
              Start Your Journey <ArrowUpRight />
            </a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-sm bg-background p-8">
            <SheetHeader className="border-b border-border pb-6 text-left">
              <SheetTitle className="font-editorial text-2xl">CapitalEcho</SheetTitle>
              <SheetDescription>Navigation</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="mt-10 flex flex-col">
              {navigation.map((item, index) => (
                <SheetClose asChild key={item.label}>
                  <a
                    href={item.href}
                    aria-current={
                      item.activeIds.some((id) => id === activeSection) ? "location" : undefined
                    }
                    className="flex items-center gap-4 border-b border-border py-5 text-lg transition-colors aria-[current=location]:text-capitalecho"
                  >
                    <span className="font-mono text-xs text-capitalecho">0{index + 1}</span>
                    {item.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild variant="capitalecho" size="lg" className="mt-8 w-full">
                  <a href="#start">
                    Start Your Journey <ArrowUpRight />
                  </a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
