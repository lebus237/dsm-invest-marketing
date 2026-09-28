"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "home",
  "about",
  "editorial-series",
  "echo-intelligence",
  "personalized-intelligence",
  "information-to-action",
  "start",
  "newsletter",
  "contact",
  "dsm-invest",
] as const;

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = "home";
      let largestVisibleArea = 0;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, window.innerHeight);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);
        if (visibleArea > largestVisibleArea) {
          largestVisibleArea = visibleArea;
          current = id;
        }
      }

      setActiveSection((previous) => (previous === current ? previous : current));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return activeSection;
}

export function ScrollExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    root.classList.add("ce-motion-ready");

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset["visible"] = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );
    revealElements.forEach((element) => observer.observe(element));

    const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    const updateScrollEffects = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
      progress?.style.setProperty("--ce-progress", String(ratio));

      if (!reducedMotion.matches && window.innerWidth >= 768) {
        parallaxElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const centerOffset =
            (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
          const amount = Number(element.dataset["parallax"] ?? 10);
          element.style.setProperty(
            "--ce-parallax",
            `${Math.max(-amount, Math.min(amount, -centerOffset * amount))}px`,
          );
        });
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollEffects);
    };
    updateScrollEffects();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      root.classList.remove("ce-motion-ready");
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      data-scroll-progress
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-capitalecho"
    />
  );
}
