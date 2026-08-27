"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE_META } from "@/lib/site-data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md shadow-xs"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-18 max-w-content items-center justify-between px-6 lg:px-8">
        {/* ── Logo ────────────────────────────────────────────────────── */}
        <Link href="/#home" className="flex items-center">
          <div className="relative h-8 w-32 sm:h-9 sm:w-40">
            <Image
              src={SITE_META.logo.dark}
              alt={SITE_META.logo.alt}
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* ── Desktop Nav Links ───────────────────────────────────────── */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Desktop CTA Button ──────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={SITE_META.ctaButton.href}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-foreground shadow-xs transition-all hover:border-primary hover:text-primary hover:shadow-sm"
          >
            <span>{SITE_META.ctaButton.label}</span>
            <ArrowUpRight size={15} className="text-primary" />
          </a>
        </div>

        {/* ── Mobile Menu Trigger ─────────────────────────────────────── */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-muted lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Nav Dropdown ──────────────────────────────────────── */}
      {isMenuOpen && (
        <nav
          aria-label="Mobile"
          className="flex max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto border-t border-border bg-background px-6 py-4 lg:hidden shadow-lg"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE_META.ctaButton.href}
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-brand"
          >
            <span>{SITE_META.ctaButton.label}</span>
            <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
