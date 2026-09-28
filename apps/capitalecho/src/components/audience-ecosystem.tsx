"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@dsm/ui/components/ui/carousel";
import { ecosystemAsset } from "@/assets/static";
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

export function InformationToAction() {
  return (
    <section
      id="information-to-action"
      aria-labelledby="ecosystem-heading"
      className="scroll-mt-20 overflow-hidden border-b border-border/70 bg-paper"
    >
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-14 px-6 py-20 sm:px-10 sm:py-24 md:grid-cols-[0.85fr_1.15fr] md:gap-10 lg:px-16 lg:py-28">
        <div className="min-w-0">
          <p data-reveal className="text-xs font-semibold uppercase text-dsm-navy">
            FROM INFORMATION TO ACTION
          </p>
          <h2
            id="ecosystem-heading"
            data-reveal
            className="mt-5 font-editorial text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl [--ce-delay:90ms]"
          >
            One Ecosystem. Three Ways to Build Your Financial Future.
          </h2>
          <div className="mt-8 h-px w-16 bg-capitalecho" aria-hidden="true" />
          <p
            data-reveal
            className="mt-8 max-w-xl text-base leading-8 text-muted-foreground [--ce-delay:170ms] lg:text-lg lg:leading-9"
          >
            From understanding Africa&apos;s economy to managing your finances and accessing
            investment opportunities, DSM Invest brings the journey together in one ecosystem.
          </p>
        </div>
        <figure data-reveal="visual" data-parallax="8" className="min-w-0 [--ce-delay:100ms]">
          <img
            src={ecosystemAsset}
            alt="CapitalEcho, FinPath and BridgeFund applications shown on three smartphones"
            width={1080}
            height={720}
            className="h-auto w-full object-contain drop-shadow-[0_24px_24px_color-mix(in_oklab,var(--foreground)_12%,transparent)]"
          />
          <figcaption className="mt-5 grid grid-cols-3 gap-3 text-center font-editorial text-sm text-foreground/75 sm:text-base">
            <span>Inform &amp; Understand</span>
            <span>Manage &amp; Build</span>
            <span>Invest &amp; Grow</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
