"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };

    // The panel covers the page on small screens; freeze the page behind it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" data-scrolled={scrolled ? "true" : undefined}
      data-menu-open={menuOpen ? "true" : undefined}>
      <div className="container nav">
        <Link className="brand" href="/" aria-label="GoTruckCheck home">
          <Image
            src="/brand/gotruckcheck-logo.png"
            alt="GoTruckCheck"
            width={787}
            height={148}
            priority
          />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="nav__links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <Link className="button button--nav" href="/#early-access">
            Get early access
          </Link>
          <button
            ref={toggleRef}
            className="nav__toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className="mobile-nav" id="mobile-nav" hidden={!menuOpen}>
        <div className="container">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="button button--primary"
            href="/#early-access"
            onClick={() => setMenuOpen(false)}
          >
            Get early access
          </Link>
        </div>
      </div>
    </header>
  );
}
