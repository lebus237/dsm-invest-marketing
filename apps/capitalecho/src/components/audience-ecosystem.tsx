"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@dsm/ui/components/ui/carousel";
import { ecosystemScene } from "@/assets/static";
import { Eyebrow } from "@/components/section-scenery";
import type { CSSProperties } from "react";

const audiences = [
  [
    "National & International Investors",
    "Looking for reliable market intelligence and investment opportunities.",
  ],
  ["Entrepreneurs", "Seeking business insights, funding trends and inspiring success stories."],
  ["Corporate Leaders", "Monitoring industries, competitors and market developments."],
  ["Financial Institutions", "Following capital markets and economic indicators."],
  ["Governments and Policymakers", "Tracking investment and economic trends."],
  [
    "Researchers, Students and Professionals",
    "Interested in African business, finance and economic development.",
  ],
] as const;

function EditorialArt({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 320 190"
      fill="none"
      aria-hidden="true"
      className="h-full w-full text-foreground"
    >
      <path
        d="M20 150H300M20 110H300M20 70H300M60 25V170M120 25V170M180 25V170M240 25V170"
        stroke="currentColor"
        opacity="0.08"
      />
      {index === 0 && (
        <>
          <path
            d="M25 143L85 115L133 129L190 72L240 89L294 35"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M190 72L240 89L294 35" className="stroke-capitalecho" strokeWidth="3" />
          <circle cx="190" cy="72" r="6" className="fill-capitalecho" />
        </>
      )}
      {index === 1 && (
        <>
          {[0, 1, 2, 3, 4].map((n) => (
            <rect
              key={n}
              x={45 + n * 47}
              y={130 - n * 23}
              width="28"
              height={35 + n * 23}
              className={n === 4 ? "fill-capitalecho" : "fill-foreground/15"}
            />
          ))}
        </>
      )}
      {index === 2 && (
        <>
          <path
            d="M45 160V77L115 40V160M115 160V90L185 59V160M185 160V34L270 70V160"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M185 34L270 70" className="stroke-capitalecho" strokeWidth="4" />
        </>
      )}
      {index === 3 && (
        <>
          <path
            d="M40 67L160 24L280 67H40ZM53 163H267M40 173H280"
            stroke="currentColor"
            strokeWidth="2"
          />
          {[65, 110, 155, 200, 245].map((x) => (
            <path key={x} d={`M${x} 82V149`} stroke="currentColor" strokeWidth="9" opacity="0.2" />
          ))}
          <path d="M40 67H280" className="stroke-capitalecho" strokeWidth="3" />
        </>
      )}
      {index === 4 && (
        <>
          <path
            d="M55 63L145 33L258 70L228 147L126 164L55 63ZM55 63L228 147M145 33L126 164M258 70L126 164"
            stroke="currentColor"
            opacity="0.4"
          />
          {[
            [55, 63],
            [145, 33],
            [258, 70],
            [228, 147],
            [126, 164],
          ].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="7" className="fill-capitalecho" />
          ))}
        </>
      )}
      {index === 5 && (
        <>
          <path
            d="M40 40Q100 24 160 54Q220 24 280 40V149Q220 133 160 165Q100 133 40 149V40ZM160 54V165"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M61 65L135 77M61 87L135 99M61 109L115 118M184 77L259 65M184 99L259 87"
            stroke="currentColor"
            opacity="0.3"
          />
          <path d="M184 122L240 111" className="stroke-capitalecho" strokeWidth="3" />
        </>
      )}
    </svg>
  );
}

export function Auditors() {
  return (
    <section
      id="personalized-intelligence"
      aria-labelledby="auditors-heading"
      className="scroll-mt-20 overflow-hidden border-b border-border/70 bg-background"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <h2
          id="auditors-heading"
          data-reveal
          className="text-xs font-semibold uppercase text-capitalecho"
        >
          AUDITORS
        </h2>
        <p
          data-reveal
          className="mt-5 max-w-4xl font-editorial text-3xl leading-tight sm:text-4xl [--ce-delay:90ms]"
        >
          CapitalEcho is designed for everyone seeking a deeper understanding of Africa&apos;s
          economic and investment landscape, including:
        </p>
        <Carousel
          opts={{ align: "start", dragFree: false, skipSnaps: false }}
          className="mt-10"
          aria-label="CapitalEcho audiences"
        >
          <div className="mb-6 flex justify-end gap-2">
            <CarouselPrevious
              title="Previous audience"
              className="static size-10 translate-y-0 rounded-md"
            />
            <CarouselNext
              title="Next audience"
              className="static size-10 translate-y-0 rounded-md"
            />
          </div>
          <CarouselContent className="-ml-5">
            {audiences.map(([title, description], index) => (
              <CarouselItem
                key={title}
                data-reveal
                className="basis-[88%] pl-5 sm:basis-[47%] lg:basis-[31%]"
                style={{ "--ce-delay": `${Math.min(index, 3) * 80}ms` } as CSSProperties}
              >
                <article className="ce-editorial-card flex h-full min-h-[470px] flex-col border border-border bg-card p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    <span className="h-px w-8 bg-capitalecho" />
                  </div>
                  <div className="my-5 aspect-[320/190] w-full">
                    <EditorialArt index={index} />
                  </div>
                  <h3 className="font-editorial text-3xl leading-tight">{title}</h3>
                  <p className="mt-5 border-t border-border pt-5 text-sm leading-7 text-muted-foreground">
                    {description}
                  </p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

const ecosystemLockups = [
  {
    mark: <CapitalEchoMark />,
    title: (
      <>
        Inform &amp; <span className="text-capitalecho">Understand</span>
      </>
    ),
    titleClass: "text-foreground",
    description: "In-depth journalism, financial research and strategic analysis on Africa.",
  },
  {
    mark: <FinPathMark />,
    title: "Manage & Build Financial Discipline",
    titleClass: "text-emerald-700",
    description: "Tools and insights to better manage your finances and achieve your goals.",
  },
  {
    mark: <BridgeFundMark />,
    title: "Invest & Grow",
    titleClass: "text-dsm-navy",
    description: "Access investment opportunities across Africa and beyond.",
  },
] as const;

function CapitalEchoMark() {
  return (
    <span className="inline-flex items-center font-editorial text-[1.65rem] leading-none tracking-tight">
      Capital<span className="text-capitalecho">Echo</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 size-6 text-capitalecho">
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M10 6.5c1.6-.6 3.4-.2 4.2 1.2.7.8 1.6 1.2 2 2.2-.4 1.6-.6 2.8-1.6 3.8-1 1.6-2.4 2.2-3.4 1.6-.8.8-2.2.8-3-.4-.8-1.2-1.4-2.6-.8-4 .4-1.6 1.2-2.6 2.6-4z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function FinPathMark() {
  return (
    <span className="inline-flex items-center gap-2 text-emerald-700">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
        <path d="M3 16h3.2v5H3zm5.6-5h3.2v10H8.6zm5.6-5H17.4v15h-3.2z" fill="currentColor" />
      </svg>
      <span className="text-xl font-semibold tracking-tight">FinPath</span>
    </span>
  );
}

function BridgeFundMark() {
  return (
    <span className="inline-flex items-center gap-2 text-dsm-navy">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
        <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7.2 14.2c1.5-2.8 8.1-2.8 9.6 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="9.5" r="1.25" fill="currentColor" />
      </svg>
      <span className="text-xl font-semibold tracking-tight">BridgeFund</span>
    </span>
  );
}

export function InformationToAction() {
  return (
    <section
      id="information-to-action"
      aria-labelledby="ecosystem-heading"
      className="scroll-mt-20 overflow-hidden border-b border-border/70 bg-white"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 py-20 text-center sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div data-reveal className="flex justify-center">
          <Eyebrow centered>From information to action</Eyebrow>
        </div>
        <h2
          id="ecosystem-heading"
          data-reveal
          className="mx-auto mt-5 max-w-4xl font-editorial text-4xl font-semibold leading-[1.05] [--ce-delay:90ms] sm:text-5xl lg:text-[3.4rem]"
        >
          One Ecosystem. Three Ways to
          <br />
          <span className="text-capitalecho">Build Your Financial Future.</span>
        </h2>
        <p
          data-reveal
          className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground [--ce-delay:150ms] lg:text-lg"
        >
          From understanding Africa&apos;s economy to managing your finances and accessing
          investment opportunities, DSM Invest brings the journey together in one ecosystem.
        </p>
        <p
          data-reveal
          className="mt-8 text-2xl font-semibold tracking-tight [--ce-delay:190ms] sm:text-3xl"
        >
          <span className="text-capitalecho">Inform.</span>{" "}
          <span className="text-emerald-700">Manage.</span>{" "}
          <span className="text-blue-700">Invest.</span>
        </p>

        <figure
          data-reveal="visual"
          className="mx-auto mt-10 w-full max-w-[64rem] [--ce-delay:120ms]"
        >
          <img
            src={ecosystemScene}
            alt="CapitalEcho, FinPath and BridgeFund applications shown on three smartphones"
            width={1024}
            height={436}
            className="h-auto w-full object-contain"
          />
          <figcaption className="mt-8 grid gap-10 text-left sm:grid-cols-3 sm:gap-6 sm:text-center">
            {ecosystemLockups.map((lockup) => (
              <div key={lockup.description} className="mx-auto max-w-xs">
                <div className="flex justify-center">{lockup.mark}</div>
                <p className={`mt-3 text-lg font-semibold leading-tight ${lockup.titleClass}`}>
                  {lockup.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{lockup.description}</p>
              </div>
            ))}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
