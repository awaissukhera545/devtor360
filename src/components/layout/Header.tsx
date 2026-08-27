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
      <div className="mx-auto flex h-16 sm:h-18 lg:h-20 xl:h-22 2xl:h-24 max-w-content items-center justify-between px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* ── Logo ────────────────────────────────────────────────────── */}
        <Link href="/#home" className="flex items-center">
          <div className="relative h-8 w-32 sm:h-9 sm:w-40 lg:h-10 lg:w-44 xl:h-11 xl:w-48 2xl:h-12 2xl:w-56">
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
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA Button ──────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={SITE_META.ctaButton.href}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 text-xs sm:text-sm lg:text-base font-bold text-foreground shadow-xs transition-all hover:border-primary hover:text-primary hover:shadow-sm"
          >
            <span>{SITE_META.ctaButton.label}</span>
            <ArrowUpRight size={15} className="text-primary lg:w-5 lg:h-5" />
          </Link>
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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={SITE_META.ctaButton.href}
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-brand"
          >
            <span>{SITE_META.ctaButton.label}</span>
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      )}
    </header>
  );
}
