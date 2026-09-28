"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  LoaderCircle,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import { Button } from "@dsm/ui/components/ui/button";
import { Input } from "@dsm/ui/components/ui/input";
import { newsletterSchema } from "@/lib/newsletter-schema";
import { subscribeNewsletter } from "@/app/actions/newsletter";

export function FinalCallToAction() {
  return (
    <section
      id="start"
      aria-labelledby="final-heading"
      className="scroll-mt-28 bg-dsm-navy px-6 py-24 text-center text-dsm-navy-foreground sm:px-10 lg:py-32"
    >
      <div data-reveal className="mx-auto max-w-4xl">
        <div className="mx-auto mb-9 h-px w-16 bg-capitalecho" aria-hidden="true" />
        <h2
          id="final-heading"
          className="font-editorial text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          Understand Africa.
          <br />
          Follow What Matters.
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-dsm-navy-foreground/75 sm:text-lg">
          The African economy is changing fast. CapitalEcho helps you understand the forces shaping
          its future.
        </p>
        <Button
          variant="capitalecho"
          size="lg"
          className="mt-10 h-14 px-9 text-base"
          disabled
          title="DSM Invest registration link coming soon"
        >
          Start Your Journey <ArrowRight aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [state, setState] = useState<"idle" | "pending" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "pending") return;
    const form = new FormData(event.currentTarget);
    const result = newsletterSchema.safeParse({ name: form.get("name"), email: form.get("email") });
    if (!result.success) {
      const fields = result.error.flatten().fieldErrors;
      setErrors({
        ...(fields.name?.[0] ? { name: fields.name[0] } : {}),
        ...(fields.email?.[0] ? { email: fields.email[0] } : {}),
      });
      setState("idle");
      return;
    }
    setErrors({});
    setState("pending");
    try {
      const response = await subscribeNewsletter(result.data);
      setState(response.success ? "success" : "error");
    } catch {
      setState("error");
    }
  }
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="scroll-mt-28 border-b border-border bg-paper px-6 py-20 sm:px-10 lg:py-24"
    >
      <div data-reveal className="mx-auto max-w-4xl text-center">
        <h2
          id="newsletter-heading"
          className="font-editorial text-4xl font-medium leading-tight sm:text-5xl"
        >
          Stay Ahead of Africa
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground">
          Get the latest economic, financial and business insights from CapitalEcho directly in your
          inbox.
        </p>
        {state === "success" ? (
          <div
            role="status"
            className="mt-10 flex items-center justify-center gap-3 py-6 text-foreground"
          >
            <Check className="shrink-0 text-capitalecho" />
            Thank you. You’re subscribed to CapitalEcho.
          </div>
        ) : (
          <form
            onSubmit={submit}
            noValidate
            className="mt-10 text-left"
            aria-busy={state === "pending"}
          >
            <div className="grid items-start gap-5 md:grid-cols-[1fr_1.3fr_auto]">
              <div>
                <label htmlFor="newsletter-name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="newsletter-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="h-14 bg-background shadow-none"
                />
                {errors.name && (
                  <p role="alert" id="name-error" className="mt-2 text-sm text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="newsletter-email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={255}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="h-14 bg-background shadow-none"
                />
                {errors.email && (
                  <p role="alert" id="email-error" className="mt-2 text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                variant="capitalecho"
                disabled={state === "pending"}
                className="h-14 px-7 text-base md:mt-7"
              >
                {state === "pending" ? (
                  <>
                    Subscribing <LoaderCircle className="animate-spin motion-reduce:animate-none" />
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight aria-hidden="true" />
                  </>
                )}
              </Button>
            </div>
            {state === "error" && (
              <p role="alert" className="mt-4 text-sm text-destructive">
                We couldn’t save your subscription. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.9-9L.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M16.6 2c.4 2.5 1.8 4 4.4 4.2v3.4a9 9 0 0 1-4.4-1.3v7.1a6.5 6.5 0 1 1-5.6-6.5v3.5a3.1 3.1 0 1 0 2.1 3V2h3.5Z" />
    </svg>
  );
}

export function ContactCapitalEcho() {
  const social = [
    { name: "LinkedIn", Icon: Linkedin },
    { name: "X", Icon: XIcon },
    { name: "Facebook", Icon: Facebook },
    { name: "Instagram", Icon: Instagram },
    { name: "YouTube", Icon: Youtube },
    { name: "TikTok", Icon: TikTokIcon },
  ];
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-28 bg-background">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-6 py-20 sm:px-10 md:grid-cols-[1.2fr_1fr] lg:gap-24 lg:px-16 lg:py-24">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase text-capitalecho">Contact CapitalEcho</p>
          <h2
            id="contact-heading"
            className="mt-5 font-editorial text-4xl font-medium leading-tight sm:text-5xl"
          >
            Connect With CapitalEcho
          </h2>
          <div className="mt-6 space-y-2 text-base leading-8 text-muted-foreground">
            <p>Have a question, a story to share or an editorial inquiry?</p>
            <p>Get in touch with the CapitalEcho team.</p>
          </div>
        </div>
        <div
          data-reveal
          className="border-t border-border pt-8 [--ce-delay:100ms] md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-16"
        >
          <h3 className="font-editorial text-2xl">Editorial Office</h3>
          <address className="mt-6 flex flex-col items-start gap-4 not-italic">
            <a
              href="tel:+237683867083"
              className="inline-flex min-h-11 items-center gap-3 transition-colors duration-200 hover:text-capitalecho"
            >
              <Phone size={18} aria-hidden="true" />
              +237 683 867 083
            </a>
            <a
              href="mailto:dsminvest@outlook.com"
              className="inline-flex min-h-11 items-center gap-3 break-all transition-colors duration-200 hover:text-capitalecho"
            >
              <Mail size={18} className="shrink-0" aria-hidden="true" />
              dsminvest@outlook.com
            </a>
          </address>
          <div className="mt-7 flex flex-wrap gap-2" aria-label="CapitalEcho social media">
            {social.map(({ name, Icon }) => (
              <span
                key={name}
                role="link"
                aria-disabled="true"
                aria-label={`${name} — link coming soon`}
                title={`${name} — link coming soon`}
                tabIndex={0}
                className="flex size-11 items-center justify-center text-muted-foreground transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-capitalecho focus-visible:outline focus-visible:outline-ring"
              >
                <Icon size={20} aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
