"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "FAQs", href: "/#faqs" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6 lg:px-8">
        <Link href="/#home" className="flex items-center">
          <div className="relative h-8 w-32 md:h-10 md:w-40">
            <Image
              src="/devtor360-logo.svg"
              alt="Devtor360 Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden rounded-md bg-primary px-6 py-2.5 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-brand-600 lg:inline-block"
        >
          Contact Us
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-1 border-t border-border px-6 py-4 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 rounded-md bg-primary px-3 py-2.5 text-center text-base font-semibold text-primary-foreground"
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}
