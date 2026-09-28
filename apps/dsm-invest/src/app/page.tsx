import type { Metadata } from "next";
import {
  avaloneLogo,
  bridgefundLogo,
  capitalMarketsImg,
  capitalechoLogo,
  finpathLogo,
  heroVideo,
  infrastructureImg,
  insightGreenImg,
  insightMarketsImg,
  insightPeImg,
  insightTokenImg,
  integratedImg,
  longtermImg,
  panafricanImg,
  privateEquityImg,
  realEstateImg,
  sentinelLogo,
  techdrivenImg,
  valorisLogo,
} from "@/assets/static";
import { Globe2, Network, Cpu, TrendingUp } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const ABOUT_CARDS = [
  {
    icon: Globe2,
    title: "Pan-African Presence",
    image: panafricanImg.url,
    description:
      "A growing pan-African network connecting investors to opportunities across Africa's dynamic markets, combining local insight, trusted partnerships, and international standards to enable secure cross-border investment.",
  },
  {
    icon: Network,
    title: "Integrated Investment Ecosystem",
    image: integratedImg.url,
    description:
      "An integrated ecosystem bringing together investment, technology, intelligence and operational expertise across public markets, private equity, real estate and infrastructure — from opportunity to investment and beyond.",
  },
  {
    icon: Cpu,
    title: "Technology-Driven Investing",
    image: techdrivenImg.url,
    description:
      "Technology transforms how investors access Africa — combining blockchain, asset tokenization, AI and digital infrastructure to make investing more accessible, transparent, diversified and efficient.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Value Creation & Financial Wealth",
    image: longtermImg.url,
    description:
      "Making long-term wealth creation accessible through disciplined investing, informed decisions and the power of compounding.",
  },
];

export const metadata: Metadata = {
  title: "DSM Invest — Investing in Africa's Long-Term Growth",
  description:
    "DSM Invest is a partnership investment group building long-term value across African capital markets, real estate, infrastructure and private equity.",
  openGraph: {
    title: "DSM Invest — Investing in Africa's Long-Term Growth",
    description:
      "A partnership investment group building durable value across African markets through disciplined, long-horizon capital.",
  },
};

const MARKETS = [
  {
    title: "Capital Markets",
    image: capitalMarketsImg.url,
    text: "Connecting Africa's public markets through one unified investment ecosystem, enabling investors to access listed equities, bonds, funds and thematic opportunities across multiple African exchanges while building diversified Pan-African portfolios.",
  },
  {
    title: "Real Estate & Land",
    image: realEstateImg.url,
    text: "Unlocking value across African real estate and land through carefully selected developments and innovative investment structures designed to broaden access to quality property opportunities.",
  },
  {
    title: "Infrastructure",
    image: infrastructureImg.url,
    text: "Backing strategic infrastructure that strengthens Africa's economies while creating resilient, long-term investment opportunities across the real economy.",
  },
  {
    title: "Private Equity",
    image: privateEquityImg.url,
    text: "Investing in high-potential African businesses to accelerate growth, strengthen enterprises and drive economic development while creating long-term value for investors.",
  },
];

const ECOSYSTEM = [
  {
    name: "BridgeFund",
    logo: bridgefundLogo.url,
    numeral: "01",
    subtitle: "One platform for investing across Africa.",
    text: "BridgeFund connects investors to multiple African markets and investment opportunities through a single, secure platform, enabling diversified portfolios and a seamless investment experience.",
  },
  {
    name: "CapitalEcho",
    logo: capitalechoLogo.url,
    numeral: "02",
    subtitle: "Africa's Business & Financial Intelligence Platform.",
    text: "CapitalEcho delivers financial news, market analysis and strategic insights that help investors make informed decisions while discovering the opportunities and companies shaping Africa's investment landscape.",
  },
  {
    name: "FinPath",
    logo: finpathLogo.url,
    numeral: "03",
    subtitle: "Building Wealth Through Financial Discipline.",
    text: "FinPath empowers investors with education, personalized guidance and AI-driven insights — helping them build disciplined investment strategies aligned with their goals, experience and risk profile.",
  },
  {
    name: "Sentinel",
    logo: sentinelLogo.url,
    numeral: "04",
    subtitle: "The intelligence engine behind smarter investment decisions.",
    text: "Sentinel centralizes data across DSM Invest's portfolio, combining financial, operational and market analytics to monitor performance, identify risks and uncover opportunities — strengthening decision-making across the entire investment ecosystem.",
  },
  {
    name: "Valoris",
    logo: valorisLogo.url,
    numeral: "05",
    subtitle: "Local presence. Pan-African reach.",
    text: "Valoris brings DSM Invest's ecosystem closer to investors, businesses and investment opportunities on the ground, providing local support, operational coordination and trusted relationships across strategic African markets.",
  },
  {
    name: "Avalone",
    logo: avaloneLogo.url,
    numeral: "06",
    subtitle: "Powering Digital Growth.",
    text: "Avalone delivers scalable solutions across software, SaaS, AI, web and digital identity, helping businesses, organizations and individuals build and continuously evolve their digital presence and capabilities.",
  },
];

const INSIGHTS = [
  {
    category: "Market Analysis",
    image: insightMarketsImg,
    headline: "African Capital Markets: Navigating Liquidity and Growth in 2026",
    description:
      "An overview of evolving liquidity conditions, cross-listings, and the structural trends shaping African exchanges.",
    date: "August 2026",
  },
  {
    category: "Private Equity",
    image: insightPeImg,
    headline: "The Rise of Mid-Market Buyouts Across Sub-Saharan Africa",
    description:
      "How local operational expertise and long-term capital are unlocking value in growing African enterprises.",
    date: "July 2026",
  },
  {
    category: "Sustainability",
    image: insightGreenImg,
    headline: "Green Infrastructure and the Future of African Investment",
    description:
      "Exploring the intersection of climate finance, energy transition, and resilient infrastructure development.",
    date: "June 2026",
  },
  {
    category: "Technology",
    image: insightTokenImg,
    headline: "Tokenization and Digital Assets: A New Era for African Markets",
    description:
      "Understanding how blockchain-based infrastructure is broadening access to African real-world assets.",
    date: "May 2026",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <video
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.82] contrast-[0.95]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/30"
          />
          <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
            <div>
              <h1 className="font-serif font-bold text-5xl leading-[1.05] tracking-tight lg:text-7xl">
                Connecting Capital.
                <br />
                Empowering Africa.
              </h1>
              <p className="mt-6 font-serif text-xl leading-snug text-primary-foreground lg:text-2xl">
                An Integrated Ecosystem for Investing Across Africa
              </p>
              <div className="mt-7 h-px w-24 bg-accent" />
              <p className="mt-7 max-w-xl text-sm leading-relaxed text-primary-foreground/75 lg:text-base">
                We connect global capital with Africa's most promising opportunities through an
                integrated, technology-driven ecosystem — giving investors seamless access to
                diversified African investments, intelligent guidance, and innovative opportunities
                designed to create long-term value.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#markets"
                  className="bg-primary-foreground px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary transition-opacity hover:opacity-90"
                >
                  Explore Investment Opportunities →
                </a>
                <a
                  href="#ecosystem"
                  className="border border-primary-foreground/40 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:border-primary-foreground"
                >
                  Discover Your Investment Space →
                </a>
              </div>
            </div>

            <div aria-hidden="true" className="hidden lg:block" />
          </div>
        </section>

        {/* INTRODUCTION */}
        <section id="about" className="border-b border-border bg-background">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                About DSM Invest
              </p>
              <h2 className="mt-7 font-serif font-bold text-5xl leading-[1.1] text-primary lg:text-7xl">
                Building Africa's Next Generation Investment Ecosystem
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
              {ABOUT_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden border border-border bg-primary transition-all duration-300 hover:shadow-[0_24px_48px_-24px_oklch(0.28_0.075_265/0.45)]"
                  >
                    <img
                      src={card.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/25"
                    />
                    <div className="relative p-8 lg:p-9">
                      <div className="inline-flex h-11 w-11 items-center justify-center border border-primary-foreground/35 text-primary-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-6 font-serif font-bold text-2xl leading-snug text-primary-foreground lg:text-3xl">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 lg:mt-24">
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-3 border-b border-primary pb-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:border-accent hover:text-accent"
              >
                Discover DSM Invest <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* MARKETS */}
        <section id="markets" className="border-b border-border bg-secondary/60">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Our Investment Markets
            </p>
            <h2 className="mt-5 max-w-2xl font-serif font-bold text-4xl leading-[1.1] text-primary lg:text-5xl">
              Four markets. One platform for African opportunity.
            </h2>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
              {MARKETS.map((m) => (
                <a
                  key={m.title}
                  href="#"
                  className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden bg-primary p-7"
                >
                  {m.image ? (
                    <>
                      <img
                        src={m.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/25"
                      />
                    </>
                  ) : null}
                  <div className="relative">
                    <h3 className="font-serif font-bold text-2xl text-primary-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-primary-foreground/75">
                      {m.text}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-8 block text-lg text-accent transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section id="ecosystem">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Our Ecosystem
            </p>
            <h2 className="mt-5 max-w-2xl font-serif font-bold text-4xl leading-[1.1] text-primary lg:text-5xl">
              Specialised business units, aligned capital
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ECOSYSTEM.map((unit) => (
                <a
                  key={unit.name}
                  href="#"
                  className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden border border-border bg-background p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_40px_-24px_oklch(0.28_0.075_265/0.35)] lg:p-10"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-primary/[0.32] via-primary/[0.12] to-transparent transition-all duration-300 group-hover:from-primary/[0.4]"
                  />
                  <div className="relative">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-sm tracking-[0.2em] text-accent">
                        {unit.numeral}
                      </span>
                      <span className="h-px w-12 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-accent" />
                    </div>
                    <h3 className="mt-8 flex h-16 items-center lg:h-20">
                      <img
                        src={unit.logo}
                        alt={`${unit.name} logo`}
                        loading="lazy"
                        className="max-h-full w-auto max-w-[220px] object-contain object-left transition-opacity duration-300 group-hover:opacity-90 lg:max-w-[240px]"
                      />
                    </h3>
                    <p className="mt-5 max-w-md text-sm font-semibold leading-relaxed text-primary">
                      {unit.subtitle}
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {unit.text}
                    </p>
                  </div>
                  <div className="relative mt-10 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary transition-colors group-hover:text-accent">
                    Explore
                    <span
                      aria-hidden="true"
                      className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* NEWS & INSIGHTS */}
        <section id="insights" className="border-b border-border bg-secondary/60">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              News & Insights
            </p>
            <h2 className="mt-5 max-w-2xl font-serif font-bold text-4xl leading-[1.1] text-primary lg:text-5xl">
              Perspectives on African markets and long-term capital
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {INSIGHTS.map((item) => (
                <a
                  key={item.headline}
                  href="#"
                  className="group flex flex-col border border-border bg-background transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_40px_-24px_oklch(0.28_0.075_265/0.35)]"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={item.image}
                      alt={item.headline}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 lg:p-8">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {item.category}
                    </span>
                    <h3 className="mt-3 font-serif font-bold text-xl leading-snug text-primary lg:text-2xl">
                      {item.headline}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground/70">{item.date}</span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors group-hover:text-accent">
                        Read More
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
