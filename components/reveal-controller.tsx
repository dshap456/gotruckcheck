"use client";

import { useEffect } from "react";

/** Nothing may stay hidden longer than this, whatever the observer does. */
const SAFETY_MS = 4000;

export function RevealController() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const revealAll = () =>
      elements.forEach((element) => element.classList.add("is-revealed"));

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealAll();
      return;
    }

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.1,
      },
    );

    elements.forEach((element) => observer.observe(element));

    // Fast scrolling, print, and headless capture can all outrun the observer.
    // Reveal-on-scroll is decoration; the content must never depend on it.
    const safety = window.setTimeout(() => {
      revealAll();
      observer.disconnect();
    }, SAFETY_MS);

    return () => {
      window.clearTimeout(safety);
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
