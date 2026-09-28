"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { logo } from "@/assets/static";

const NAV = [
  "The Group",
  "Investment",
  "Investors",
  "Business Units",
  "Portfolio",
  "Insights",
  "Sustainability",
  "Careers",
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-28 max-w-[1400px] items-center gap-6 px-6 lg:h-32 lg:px-10">
        <a href="/" className="flex shrink-0 items-center" aria-label="DSM Invest">
          <img
            src={logo.url}
            alt="DSM Invest — Partnership Investment"
            width={280}
            height={118}
            className="h-24 w-auto lg:h-28"
          />
        </a>

        <nav
          id="site-navigation"
          className="hidden flex-1 items-center justify-center gap-9 xl:flex"
        >
          {NAV.map((item, i) => {
            const isActive = i === 0;
            const className = `text-[12px] font-medium tracking-wide transition-colors hover:text-accent ${
              isActive ? "border-b border-accent pb-1 text-primary" : "text-primary/70"
            }`;
            return item === "The Group" ? (
              <Link
                key={item}
                href="/the-group"
                aria-current={isActive ? "page" : undefined}
                className={className}
              >
                {item}
              </Link>
            ) : (
              <a
                key={item}
                href="#"
                aria-current={isActive ? "page" : undefined}
                className={className}
              >
                {item}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <a
            href="#"
            className="hidden border border-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block"
          >
            Investor Access
          </a>
          <div className="flex items-center gap-1 text-[11px] font-medium tracking-wide">
            <span className="text-primary">EN</span>
            <span className="text-border">/</span>
            <span className="text-muted-foreground transition-colors hover:text-primary">FR</span>
          </div>

          {/* Mobile / tablet menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((s) => !s)}
            aria-expanded={menuOpen}
            aria-controls="site-navigation-mobile"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground xl:hidden"
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet horizontal navigation panel */}
      {menuOpen && (
        <div className="border-b border-border bg-background xl:hidden">
          <nav id="site-navigation-mobile" className="mx-auto max-w-[1400px] px-6 py-5 lg:px-10">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {NAV.map((item, i) => {
                const isActive = i === 0;
                const className = `block text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  isActive ? "text-primary" : "text-primary/70"
                }`;
                return (
                  <li key={item}>
                    {item === "The Group" ? (
                      <Link
                        href="/the-group"
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={className}
                      >
                        {item}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={className}
                      >
                        {item}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
