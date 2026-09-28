import type { Metadata } from "next";
import {
  groupGovernanceImg,
  groupOverviewImg,
  groupPresenceImg,
  groupVisionImg,
  heroSkyline,
  insightGreenImg,
  insightMarketsImg,
  insightPeImg,
  insightTokenImg,
} from "@/assets/static";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const VALUES = [
  {
    title: "Integrity",
    description:
      "We operate with transparency, accountability and the highest standards of professional ethics.",
  },
  {
    title: "Innovation",
    description:
      "We use technology, blockchain and digital finance to develop smarter investment solutions and expand access to African markets.",
  },
  {
    title: "Excellence",
    description:
      "We pursue disciplined execution, rigorous analysis and continuous improvement across everything we do.",
  },
  {
    title: "Collaboration",
    description:
      "We create lasting value through strong relationships with investors, businesses, institutions and local partners.",
  },
  {
    title: "Leadership",
    description:
      "We combine strategic vision, financial expertise and deep knowledge of African markets to guide DSM Invest toward sustainable long-term growth.",
  },
];

/**
 * Cinematic image block placed directly below a section title/subtitle.
 * Keeps the left-to-right fade and subtle tonal treatment while sitting
 * inline in the vertical editorial flow: label → title → image → content.
 */
function SectionImage({
  src,
  tone = "light",
  position = "object-left",
  alt = "",
}: {
  src: string;
  tone?: "light" | "dark";
  position?: string;
  alt?: string;
}) {
  return (
    <div className="relative mt-10 h-64 w-full overflow-hidden sm:h-80 lg:mt-14 lg:h-[420px]">
      <img
        src={src}
        alt={alt}
        aria-hidden={alt === ""}
        loading="lazy"
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${position} ${
          tone === "light"
            ? "contrast-[0.94] saturate-[0.92] brightness-[1.04]"
            : "contrast-[0.98] saturate-[0.95]"
        }`}
      />
    </div>
  );
}

function SectionLabel({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
        tone === "light" ? "text-muted-foreground" : "text-primary-foreground/80"
      }`}
    >
      {children}
    </p>
  );
}

export const metadata: Metadata = {
  title: "The Group — DSM Invest",
  description:
    "Discover DSM Invest: a Pan-African investment group connecting capital with opportunity across Africa's most promising markets.",
  openGraph: {
    title: "The Group — DSM Invest",
    description:
      "A Pan-African investment group connecting capital with opportunity across Africa's most promising markets.",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <img
            src={heroSkyline}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.78]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-primary/20"
          />
          <div className="relative mx-auto flex min-h-[58vh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-32 lg:min-h-[62vh] lg:px-10 lg:pb-24 lg:pt-40">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
              The Group
            </p>
            <h1 className="mt-5 max-w-3xl font-serif font-bold text-5xl leading-[1.05] tracking-tight lg:text-7xl">
              Building the Future of Investment in Africa
            </h1>
            <div className="mt-7 h-px w-24 bg-accent" />
          </div>
        </section>

        {/* 01 — OVERVIEW */}
        <section className="relative overflow-hidden border-b border-border bg-background">
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
              <div>
                <SectionLabel>01 — Overview</SectionLabel>
              </div>
              <div>
                <h2 className="font-serif font-bold text-4xl leading-[1.1] text-primary lg:text-5xl">
                  A New Generation of Pan-African Investment
                </h2>
              </div>
            </div>

            <SectionImage src={groupOverviewImg.url} position="object-[20%_center]" />

            <div className="mt-10 lg:mt-14">
              <div className="group ml-auto max-w-4xl border border-border/[0.35] bg-secondary/[0.55] p-8 transition-all duration-300 hover:border-border/50 hover:bg-secondary/[0.65] lg:p-12">
                <div className="grid gap-8 md:grid-cols-2">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    DSM Invest is a Pan-African investment group connecting investors with
                    opportunities across Africa's most promising markets.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Through an integrated model spanning Capital Markets, Private Equity, Real
                    Estate and Infrastructure, we structure and support investments designed to
                    create long-term value while contributing to Africa's economic development.
                  </p>
                </div>
                <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  By combining financial expertise, technology and local market knowledge, DSM
                  Invest is building a more connected, transparent and accessible investment
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — OUR VISION */}
        <section className="relative overflow-hidden border-b border-border bg-secondary/60">
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
              <div>
                <SectionLabel>02 — Our Vision</SectionLabel>
              </div>
              <div>
                <h2 className="max-w-2xl font-serif font-bold text-4xl leading-[1.1] text-primary lg:text-5xl">
                  Connecting Capital. Empowering Investors. Building Africa's Wealth.
                </h2>
              </div>
            </div>

            <SectionImage src={groupVisionImg.url} position="object-[25%_center]" />

            <div className="mt-10 lg:mt-14">
              <div className="group ml-auto max-w-4xl border border-border/30 bg-secondary/80 p-8 transition-all duration-300 hover:border-border/40 hover:bg-secondary/90 lg:p-12">
                <div className="grid gap-8 md:grid-cols-2">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We aim to build a leading Pan-African investment ecosystem that connects local
                    and global capital with Africa's most promising opportunities.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Through technology, innovation and strategic partnerships, we make investing
                    across African markets more accessible, transparent and connected.
                  </p>
                </div>
                <div className="mt-10 border-l border-accent/60 pl-6">
                  <p className="text-sm leading-relaxed text-primary">
                    But our ambition goes beyond investment.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    We aim to become a long-term financial partner for our investors — supporting
                    them throughout their financial journey, from managing their finances and
                    accessing investment opportunities to growing, preserving and ultimately
                    managing long-term wealth.
                  </p>
                </div>
              </div>
              <p className="ml-auto mt-10 max-w-4xl text-sm font-semibold leading-relaxed text-primary">
                Our ambition: connect capital, empower investors and contribute to Africa's
                financial and economic transformation.
              </p>
            </div>
          </div>
        </section>

        {/* 03 — GOVERNANCE */}
        <section className="relative overflow-hidden border-b border-border bg-background">
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
              <div>
                <SectionLabel>03 — Governance</SectionLabel>
              </div>
              <div>
                <h2 className="font-serif font-bold text-4xl leading-[1.1] text-primary lg:text-5xl">
                  Expertise, Discipline and Accountability
                </h2>
              </div>
            </div>

            <SectionImage src={groupGovernanceImg.url} position="object-[15%_center]" />

            <div className="mt-10 lg:mt-14">
              <div className="ml-auto max-w-2xl bg-background/70 p-8 lg:p-10">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  People are at the heart of DSM Invest.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Our teams combine financial expertise, local market knowledge and strategic
                  thinking to identify, structure and manage investment opportunities with
                  discipline.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Supported by robust governance and digital tools, our professionals ensure
                  rigorous decision-making, transparent operations and effective oversight across
                  the Group.
                </p>
                <div className="mt-10">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 border-b border-primary pb-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    Leadership & Expertise <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — GLOBAL PRESENCE */}
        <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
              <div>
                <SectionLabel tone="dark">04 — Global Presence</SectionLabel>
              </div>
              <div>
                <h2 className="font-serif font-bold text-4xl leading-[1.1] lg:text-5xl">
                  A Pan-African Ecosystem with a Global Perspective
                </h2>
              </div>
            </div>

            <SectionImage src={groupPresenceImg.url} tone="dark" position="object-left" />

            <div className="mt-10 space-y-8 lg:mt-14">
              <div className="group ml-auto max-w-4xl border border-primary-foreground/[0.08] bg-primary/[0.55] p-8 transition-all duration-300 hover:border-primary-foreground/[0.14] hover:bg-primary/[0.5] lg:p-12">
                <div className="grid gap-8 md:grid-cols-2">
                  <p className="text-sm leading-relaxed text-primary-foreground/80">
                    DSM Invest is building a strategic presence across Africa while connecting the
                    continent to international investors and partners.
                  </p>
                  <p className="text-sm leading-relaxed text-primary-foreground/80">
                    Our regional network and digital infrastructure enable cross-border investment,
                    local market access and continuous portfolio monitoring, while allowing us to
                    adapt to the realities of each market.
                  </p>
                </div>
                <p className="mt-8 max-w-2xl text-sm leading-relaxed text-primary-foreground/80">
                  We combine local knowledge with international standards to create a trusted bridge
                  between African opportunities and global capital.
                </p>
              </div>

              <div className="group ml-auto max-w-4xl border border-primary-foreground/[0.10] bg-primary/[0.6] p-8 transition-all duration-300 hover:border-primary-foreground/[0.16] hover:bg-primary/[0.55] lg:p-10">
                <h3 className="font-serif font-bold text-2xl lg:text-3xl">
                  Partner with a Trusted Investment Group
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/75">
                  Strong partnerships are essential to our model.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/75">
                  We work with trusted financial institutions, local experts and strategic partners
                  to combine specialized expertise, market knowledge and international standards —
                  strengthening our ability to deliver reliable investment solutions.
                </p>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 border-b border-primary-foreground/40 pb-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    Our Global Structure & Partnerships <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — VALUES & LEADERSHIP */}
        <section className="relative overflow-hidden border-b border-border bg-background">
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
              <div>
                <SectionLabel>05 — Values & Leadership</SectionLabel>
              </div>
              <div>
                <h2 className="font-serif font-bold text-4xl leading-[1.1] text-primary lg:text-5xl">
                  Guided by Principles. Driven by Excellence.
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Our values shape how we invest, how we operate and how we build relationships with
                  investors, partners and the communities in which we operate.
                </p>
              </div>
            </div>

            <SectionImage src={heroSkyline} position="object-[30%_center]" />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {VALUES.map((value, i) => {
                const images = [
                  insightPeImg,
                  insightGreenImg,
                  insightTokenImg,
                  insightMarketsImg,
                  insightPeImg,
                ];
                const image = images[i % images.length];
                return (
                  <div
                    key={value.title}
                    className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden border border-border bg-primary p-8 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_oklch(0.28_0.075_265/0.45)] lg:p-10"
                  >
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center opacity-30 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40"
                    />
                    <div className="relative">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                        0{i + 1}
                      </span>
                      <h3 className="mt-4 font-serif font-bold text-3xl text-primary-foreground lg:text-4xl">
                        {value.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-secondary/60">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Investing in Africa. Building What Comes Next.
              </p>
              <h2 className="mt-5 font-serif font-bold text-4xl leading-[1.1] text-primary lg:text-5xl">
                Discover the companies, assets and opportunities shaping our investment ecosystem.
              </h2>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="bg-primary px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Explore Our Portfolio →
                </a>
                <a
                  href="#"
                  className="border border-primary px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Contact Us →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
