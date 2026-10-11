import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Facebook,
  FileText,
  Instagram,
  Lightbulb,
  Linkedin,
} from "lucide-react";

import { Button } from "@dsm/ui/components/ui/button";
import { aboutScene, echoIntelligenceScene, heroScene } from "@/assets/static";
import { Auditors, InformationToAction } from "@/components/audience-ecosystem";
import { ContactCapitalEcho, FinalCallToAction, Newsletter } from "@/components/closing-sections";
import { ScrollExperience } from "@/components/scroll-experience";
import { Eyebrow } from "@/components/section-scenery";
import { Header } from "@/components/site-header";

const sections = [
  {
    number: "03",
    title: "The CapitalEcho Editorial Universe",
    id: "editorial-series",
    tone: "bg-background",
    height: "min-h-[68vh]",
  },
  {
    number: "05",
    title: "Auditors",
    id: "personalized-intelligence",
    tone: "bg-background",
    height: "min-h-[62vh]",
  },
  {
    number: "06",
    title: "From Information to Action",
    id: "information-to-action",
    tone: "bg-paper",
    height: "min-h-[62vh]",
  },
  {
    number: "07",
    title: "Understand Africa. Follow What Matters.",
    id: "start",
    tone: "bg-background",
    height: "min-h-[54vh]",
  },
  { number: "08", title: "Newsletter", id: "newsletter", tone: "bg-paper", height: "min-h-[48vh]" },
  {
    number: "09",
    title: "Contact CapitalEcho",
    id: "contact",
    tone: "bg-background",
    height: "min-h-[52vh]",
  },
] as const;

const footerGroups = [
  {
    title: "Company",
    links: ["The Group", "Investment", "Investors", "Portfolio", "Insights", "Contact"],
  },
  {
    title: "Business Units",
    links: ["BridgeFund", "CapitalEcho", "FinPath", "Sentinel", "Valoris", "Avalone"],
  },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
] as const;

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollExperience />
      <Header />
      <main>
        <Hero />
        <WhatIsCapitalEcho />
        {sections.map((section) => (
          <div key={section.number}>
            {section.id === "personalized-intelligence" ? (
              <Auditors />
            ) : section.id === "information-to-action" ? (
              <InformationToAction />
            ) : section.id === "start" ? (
              <FinalCallToAction />
            ) : section.id === "newsletter" ? (
              <Newsletter />
            ) : section.id === "contact" ? (
              <ContactCapitalEcho />
            ) : (
              <section
                id={section.id}
                aria-labelledby={`section-${section.number}`}
                className={`scroll-mt-20 border-b border-border/70 ${section.tone} ${section.height}`}
              >
                <div className="mx-auto flex min-h-[inherit] w-full max-w-[90rem] flex-col px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
                  <div
                    data-reveal
                    className="flex items-center gap-5 border-t border-foreground/15 pt-5"
                  >
                    <span className="font-mono text-xs text-capitalecho">{section.number}</span>
                    <h2
                      id={`section-${section.number}`}
                      className="max-w-4xl font-editorial text-2xl font-medium leading-tight sm:text-3xl lg:text-4xl"
                    >
                      {section.title}
                    </h2>
                  </div>
                  <div
                    data-reveal
                    className="mt-auto flex items-end justify-between pt-16 [--ce-delay:100ms]"
                    aria-hidden="true"
                  >
                    <span className="h-px w-16 bg-capitalecho" />
                    <span className="font-mono text-[10px] uppercase text-muted-foreground">
                      CapitalEcho / Structure
                    </span>
                  </div>
                </div>
              </section>
            )}
            {section.id === "editorial-series" ? <EchoIntelligence /> : null}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

function WhatIsCapitalEcho() {
  return (
    <section
      id="about"
      aria-labelledby="what-is-capitalecho-heading"
      className="scroll-mt-20 overflow-hidden border-y border-border/70 bg-paper"
    >
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-14 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-16 lg:py-28">
        <div className="max-w-2xl">
          <div data-reveal>
            <Eyebrow>What is CapitalEcho ?</Eyebrow>
          </div>
          <h2
            id="what-is-capitalecho-heading"
            data-reveal
            className="mt-5 max-w-xl font-editorial text-4xl font-semibold leading-[1.02] [--ce-delay:80ms] sm:text-5xl lg:text-6xl"
          >
            One Platform.
            <br />
            One View of
            <br />
            <span className="text-capitalecho">Africa.</span>
          </h2>
          <div
            data-reveal
            className="mt-8 max-w-xl space-y-6 text-base leading-8 text-muted-foreground [--ce-delay:160ms] lg:text-lg lg:leading-9"
          >
            <p>
              CapitalEcho combines journalism, financial research and strategic analysis to help
              users understand the forces shaping Africa&apos;s economic future.
            </p>
            <p>
              From breaking economic developments to market movements, companies, sectors, countries
              and investment trends, CapitalEcho brings the information together in one intelligent
              environment.
            </p>
          </div>
        </div>

        <figure
          data-reveal="visual"
          data-parallax="8"
          className="relative mx-auto w-full max-w-[36rem] [--ce-delay:100ms] lg:max-w-none"
        >
          <img
            src={aboutScene}
            alt="CapitalEcho home screen on a phone, with a dotted map of Africa and red arcs behind it"
            width={549}
            height={760}
            className="relative z-10 mx-auto h-auto w-full object-contain"
          />
          <figcaption className="relative z-10 mt-6 flex items-center justify-center gap-3 text-center font-editorial text-lg text-foreground/80 sm:text-xl">
            <span aria-hidden="true" className="h-[3px] w-8 shrink-0 bg-capitalecho" />
            From information to <span className="text-capitalecho">understanding.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

const echoFeatures = [
  { icon: FileText, label: "Ask about any article", bubble: "bg-red-50 text-capitalecho" },
  { icon: Lightbulb, label: "Get clear explanations", bubble: "bg-rose-50 text-capitalecho" },
  { icon: BarChart3, label: "Go deeper into the insights", bubble: "bg-sky-50 text-sky-600" },
] as const;

function EchoIntelligence() {
  return (
    <section
      id="echo-intelligence"
      aria-labelledby="echo-intelligence-heading"
      className="scroll-mt-20 overflow-hidden border-b border-border/70 bg-white"
    >
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-14 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:px-16 lg:py-28">
        <div className="max-w-2xl">
          <div data-reveal>
            <Eyebrow>Echo Intelligence</Eyebrow>
          </div>
          <h2
            id="echo-intelligence-heading"
            data-reveal
            className="mt-5 max-w-xl font-editorial text-4xl font-semibold leading-[1.02] [--ce-delay:80ms] sm:text-5xl lg:text-6xl"
          >
            Don&apos;t Just
            <br />
            Read. <span className="text-capitalecho">Ask.</span>
          </h2>
          <p
            data-reveal
            className="mt-6 text-2xl text-foreground/70 [--ce-delay:140ms] sm:text-3xl"
          >
            Read. Ask. Understand.
          </p>
          <div
            data-reveal
            className="mt-8 max-w-xl space-y-6 text-base leading-8 text-muted-foreground [--ce-delay:200ms] lg:text-lg lg:leading-9"
          >
            <p className="text-foreground">Every story can lead to a deeper question.</p>
            <p>
              Echo Intelligence allows readers to interact with the content, ask contextual
              questions and better understand the economic, financial or business issues behind each
              publication.
            </p>
          </div>
          <ul
            data-reveal
            className="mt-10 grid max-w-xl grid-cols-3 gap-3 [--ce-delay:260ms] sm:gap-5"
          >
            {echoFeatures.map((feature) => (
              <li key={feature.label} className="flex flex-col items-start gap-3">
                <span
                  className={`flex size-12 items-center justify-center rounded-full sm:size-14 ${feature.bubble}`}
                >
                  <feature.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-xs leading-snug text-foreground/80 sm:text-sm">
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="visual" data-parallax="8" className="relative [--ce-delay:100ms]">
          <img
            src={echoIntelligenceScene}
            alt="Echo Intelligence answering a question beside an infrastructure article, with suggestion cards and a dotted map of Africa"
            width={588}
            height={772}
            className="mx-auto h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-headline"
      className="relative isolate flex min-h-[88vh] scroll-mt-20 items-center overflow-hidden bg-background text-foreground lg:min-h-[92vh]"
    >
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:px-16 lg:py-12">
        <div className="max-w-2xl">
          <span
            aria-hidden="true"
            data-hero-step
            className="mb-6 block h-[3px] w-10 bg-capitalecho"
          />
          <h1
            id="hero-headline"
            data-hero-step
            className="font-editorial text-[2.6rem] font-semibold leading-[1.02] tracking-tight [--ce-hero-delay:80ms] sm:text-5xl lg:text-[2.75rem] xl:text-[3.15rem]"
          >
            <span className="block">Africa&apos;s Business &amp;</span>
            <span className="block">Financial Intelligence</span>
            <span className="block text-capitalecho">Platform</span>
          </h1>

          <p
            data-hero-step
            className="mt-7 text-lg leading-snug text-foreground/70 [--ce-hero-delay:150ms] sm:text-2xl"
          >
            Understand Africa.
            <br />
            Follow the Markets.
            <br />
            Discover What Matters.
          </p>

          <p
            data-hero-step
            className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground [--ce-hero-delay:220ms] sm:text-base sm:leading-8"
          >
            CapitalEcho delivers trusted economic news, financial intelligence and in-depth analysis
            on Africa&apos;s markets, businesses, countries, sectors and investment opportunities.
          </p>

          <div data-hero-step className="mt-10 [--ce-hero-delay:290ms]">
            <Button
              asChild
              variant="capitalecho"
              size="lg"
              className="h-12 rounded-xl px-7 text-base font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <a href="#start">
                Start Your Journey <ArrowRight />
              </a>
            </Button>
            <p className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
              <span aria-hidden="true" className="h-px w-10 bg-foreground/30" />
              Part of the DSM Invest ecosystem
            </p>
          </div>
        </div>

        <div
          data-hero-step
          data-parallax="10"
          className="relative mx-auto w-full max-w-[40rem] [--ce-hero-delay:190ms] lg:max-w-none"
        >
          <img
            src={heroScene}
            alt="Three smartphones on a podium showing DSM Invest, the business units, and CapitalEcho, with a dotted globe behind them"
            width={672}
            height={737}
            className="relative z-10 h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="dsm-invest" className="bg-dsm-navy text-dsm-navy-foreground">
      <div className="h-1 w-full bg-dsm-red" />
      <div className="mx-auto max-w-[90rem] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-14 border-b border-dsm-navy-foreground/15 pb-16 md:grid-cols-2 lg:grid-cols-[1.6fr_0.75fr_0.9fr_0.65fr_1fr]">
          <div className="max-w-md">
            <p className="font-editorial text-3xl">DSM INVEST</p>
            <p className="mt-7 font-editorial text-xl leading-snug">
              An Integrated Ecosystem for Investing Across Africa
            </p>
            <p className="mt-5 text-sm leading-7 text-dsm-navy-foreground/65">
              Partnership Investment. A long-term investment group building durable value across
              African markets.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <FooterHeading>{group.title}</FooterHeading>
              <ul className="mt-6 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-dsm-navy-foreground/65 transition-colors hover:text-dsm-navy-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <FooterHeading>Get in touch</FooterHeading>
            <div className="mt-6 space-y-5 text-sm">
              <p>
                <span className="block text-dsm-navy-foreground/45">Email</span>
                <a href="mailto:dsminvest@outlook.com" className="mt-1 block break-all">
                  dsminvest@outlook.com
                </a>
              </p>
              <p>
                <span className="block text-dsm-navy-foreground/45">Phone</span>
                <a href="tel:+237683867083" className="mt-1 block">
                  +237 683 867 083
                </a>
              </p>
            </div>
            <FooterHeading extraClass="mt-10">Follow us</FooterHeading>
            <div className="mt-5 flex gap-2">
              <SocialLink label="LinkedIn">
                <Linkedin />
              </SocialLink>
              <SocialLink label="Facebook">
                <Facebook />
              </SocialLink>
              <SocialLink label="X">
                <span className="text-sm font-semibold">X</span>
              </SocialLink>
              <SocialLink label="Instagram">
                <Instagram />
              </SocialLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-xs uppercase text-dsm-navy-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DSM Invest. All rights reserved.</p>
          <p className="border-l-2 border-dsm-red pl-4 text-dsm-navy-foreground">
            Partnership Investment
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({
  children,
  extraClass = "",
}: {
  children: ReactNode;
  extraClass?: string;
}) {
  return (
    <h2 className={`text-xs font-semibold uppercase text-dsm-red ${extraClass}`}>{children}</h2>
  );
}

function SocialLink({ label, children }: { label: string; children: ReactNode }) {
  return (
    <a
      href="#home"
      aria-label={label}
      title={label}
      className="flex size-9 items-center justify-center border border-dsm-navy-foreground/20 text-dsm-navy-foreground transition-colors hover:border-dsm-red hover:text-dsm-red [&_svg]:size-4"
    >
      {children}
    </a>
  );
}
