import type { ReactNode } from "react";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";

import { Button } from "@dsm/ui/components/ui/button";
import { echoIntelligenceAsset, homeScreenAsset, phonesAsset } from "@/assets/static";
import { Auditors, InformationToAction } from "@/components/audience-ecosystem";
import { ContactCapitalEcho, FinalCallToAction, Newsletter } from "@/components/closing-sections";
import { ScrollExperience } from "@/components/scroll-experience";
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
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-14 px-6 py-20 sm:px-10 sm:py-24 md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:gap-20 lg:px-16 lg:py-28">
        <div className="max-w-2xl">
          <p data-reveal className="text-xs font-semibold uppercase text-capitalecho">
            What is CapitalEcho?
          </p>
          <h2
            id="what-is-capitalecho-heading"
            data-reveal
            className="mt-5 max-w-xl font-editorial text-4xl font-medium leading-[1.08] [--ce-delay:80ms] sm:text-5xl lg:text-6xl"
          >
            One Platform. One View of Africa.
          </h2>
          <div className="mt-8 h-px w-16 bg-capitalecho" aria-hidden="true" />
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
          className="mx-auto w-full max-w-[36rem] [--ce-delay:100ms] md:justify-self-end"
        >
          <img
            src={homeScreenAsset}
            alt="CapitalEcho home screen showing its editorial universe and latest company stories"
            width={848}
            height={1264}
            className="mx-auto h-auto w-full object-contain drop-shadow-[0_24px_24px_color-mix(in_oklab,var(--foreground)_14%,transparent)]"
          />
          <figcaption className="mt-5 text-center font-editorial text-lg text-foreground/70">
            From information to understanding.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function EchoIntelligence() {
  return (
    <section
      id="echo-intelligence"
      aria-labelledby="echo-intelligence-heading"
      className="scroll-mt-20 overflow-hidden border-b border-border/70 bg-paper"
    >
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-14 px-6 py-20 sm:px-10 sm:py-24 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-20 lg:px-16 lg:py-28">
        <div
          data-reveal="visual"
          data-parallax="8"
          className="mx-auto w-full max-w-[36rem] md:justify-self-start"
        >
          <img
            src={echoIntelligenceAsset}
            alt="Echo Intelligence continuing an article with a contextual reader question and response"
            width={848}
            height={1264}
            className="mx-auto h-auto w-full object-contain drop-shadow-[0_24px_24px_color-mix(in_oklab,var(--foreground)_14%,transparent)]"
          />
        </div>

        <div className="max-w-2xl md:justify-self-end">
          <p data-reveal className="text-xs font-semibold uppercase text-capitalecho">
            Echo Intelligence
          </p>
          <h2
            id="echo-intelligence-heading"
            data-reveal
            className="mt-5 max-w-xl font-editorial text-4xl font-medium leading-[1.08] [--ce-delay:80ms] sm:text-5xl lg:text-6xl"
          >
            Don&apos;t Just Read. Ask.
          </h2>
          <p
            data-reveal
            className="mt-6 font-editorial text-2xl text-foreground/80 [--ce-delay:140ms] sm:text-3xl"
          >
            Read. Ask. Understand.
          </p>
          <div className="mt-8 h-px w-16 bg-capitalecho" aria-hidden="true" />
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
      {/* subtle paper texture accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-12%] left-[38%] -z-10 h-[38vh] w-[38vh] rounded-full opacity-[0.07] blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--capitalecho) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[42fr_58fr] lg:gap-8 lg:px-16 lg:py-16">
        <div className="max-w-2xl">
          <h1
            id="hero-headline"
            data-hero-step
            className="font-editorial text-4xl font-medium leading-[1.08] tracking-tight [--ce-hero-delay:80ms] sm:text-5xl lg:text-[3.6rem]"
          >
            Africa&apos;s Business &amp; Financial Intelligence Platform
          </h1>

          <p
            data-hero-step
            className="mt-7 font-editorial text-xl leading-snug text-foreground/80 [--ce-hero-delay:150ms] sm:text-2xl"
          >
            Understand Africa. Follow the Markets. Discover What Matters.
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
              className="h-13 rounded-md px-8 text-base font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <a href="#start">
                Start Your Journey <ArrowRight />
              </a>
            </Button>
            <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground/70">
              Part of the DSM Invest ecosystem
            </p>
          </div>
        </div>

        <div
          data-hero-step
          data-parallax="10"
          className="relative flex justify-center [--ce-hero-delay:190ms] lg:justify-end"
        >
          <img
            src={phonesAsset.url}
            alt="The CapitalEcho application shown on premium smartphones"
            width={1369}
            height={917}
            className="w-full max-w-[34rem] object-contain drop-shadow-2xl sm:max-w-[38rem] lg:max-w-none lg:w-[112%] lg:translate-x-[6%]"
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
