"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "The Group", href: "/the-group" },
      { label: "Investment", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Portfolio", href: "#" },
      { label: "Insights", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Business Units",
    links: [
      { label: "BridgeFund", href: "#" },
      { label: "CapitalEcho", href: "#" },
      { label: "FinPath", href: "#" },
      { label: "Sentinel", href: "#" },
      { label: "Valoris", href: "#" },
      { label: "Avalone", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="font-serif text-2xl tracking-[0.18em]">DSM INVEST</div>
            <p className="mt-2 font-serif text-sm italic tracking-wide text-primary-foreground/80">
              An Integrated Ecosystem for Investing Across Africa
            </p>
            <div className="mt-3 h-px w-24 bg-accent" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Partnership Investment. A long-term investment group building durable value across
              African markets.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href === "#" ? (
                      <a
                        href="#"
                        className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        aria-current={link.href === pathname ? "page" : undefined}
                        className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} DSM Invest. All rights reserved.</span>
          <span className="tracking-[0.16em] uppercase">Partnership Investment</span>
        </div>
      </div>
    </footer>
  );
}
