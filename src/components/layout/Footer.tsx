"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, CheckCircle2, Send } from "lucide-react";
import { SITE_META, SERVICES_DATA, NAV_LINKS, FOOTER_DATA } from "@/lib/site-data";

export default function Footer() {
  const { ctaBanner, brandDescription, navigationHeading, servicesHeading, contactHeading, socialLinks, legalLinks, copyrightText } = FOOTER_DATA;
  const [emailInput, setEmailInput] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSent(true);
      setTimeout(() => setIsSent(false), 4000);
      setEmailInput("");
    }
  };

  return (
    <footer className="border-t border-border bg-[#090e17] text-white">
      <div className="mx-auto max-w-content px-6 py-8 sm:py-10 lg:px-8 xl:px-12 2xl:px-16 lg:py-14 2xl:py-18">
        {/* ── Availability & Quick Contact Banner ─────────────────────── */}
        <div className="mb-8 2xl:mb-12 rounded-2xl 2xl:rounded-3xl border border-slate-800 bg-[#0c1322] p-4 sm:p-6 2xl:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl 2xl:text-2xl font-display">
              {ctaBanner.headline}
            </h3>
            <p className="mt-1 text-xs sm:text-sm 2xl:text-base text-slate-400">
              {ctaBanner.descriptionPrefix}{SITE_META.responseTime} directly from our product leads.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 max-w-md 2xl:max-w-lg w-full">
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder={ctaBanner.placeholder}
              className="w-full rounded-xl 2xl:rounded-2xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 2xl:py-3.5 text-xs sm:text-sm 2xl:text-base text-white placeholder-slate-500 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl 2xl:rounded-2xl bg-primary px-5 py-2.5 2xl:px-7 2xl:py-3.5 text-xs sm:text-sm 2xl:text-base font-bold text-white shadow-brand hover:bg-brand-600 transition-all"
            >
              <span>{isSent ? ctaBanner.buttonSuccessText : ctaBanner.buttonText}</span>
              {isSent ? <CheckCircle2 size={14} className="2xl:w-5 2xl:h-5" /> : <Send size={14} className="2xl:w-5 2xl:h-5" />}
            </button>
          </form>
        </div>

        {/* ── 4-Column Navigation Grid ────────────────────────────────── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-8 2xl:gap-12">
          {/* Brand */}
          <div>
            <Link href="/#home" className="flex items-center">
              <div className="relative h-8 w-32 sm:h-9 sm:w-40 2xl:h-12 2xl:w-52">
                <Image
                  src={SITE_META.logo.light}
                  alt={SITE_META.logo.alt}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="mt-3 2xl:mt-5 max-w-sm text-xs sm:text-sm 2xl:text-base leading-relaxed text-slate-400">
              {brandDescription}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs 2xl:text-sm font-bold text-slate-200 uppercase tracking-wider">
              {navigationHeading}
            </h4>
            <ul className="mt-3 2xl:mt-5 space-y-2 2xl:space-y-3 text-xs sm:text-sm 2xl:text-base text-slate-400">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs 2xl:text-sm font-bold text-slate-200 uppercase tracking-wider">
              {servicesHeading}
            </h4>
            <ul className="mt-3 2xl:mt-5 space-y-2 2xl:space-y-3 text-xs sm:text-sm 2xl:text-base text-slate-400">
              {SERVICES_DATA.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href="/#services" className="hover:text-primary transition-colors">
                    {service.tabLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs 2xl:text-sm font-bold text-slate-200 uppercase tracking-wider">
              {contactHeading}
            </h4>
            <div className="mt-3 2xl:mt-5 space-y-2.5 2xl:space-y-3.5 text-xs sm:text-sm 2xl:text-base text-slate-400">
              <a
                href={`mailto:${SITE_META.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-primary transition-colors"
              >
                <Mail size={15} className="text-primary shrink-0 2xl:w-5 2xl:h-5" />
                <span>{SITE_META.email}</span>
              </a>
              <a
                href={`tel:${SITE_META.phoneClean}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-primary transition-colors"
              >
                <Phone size={15} className="text-primary shrink-0 2xl:w-5 2xl:h-5" />
                <span>{SITE_META.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────────────── */}
        <div className="mt-8 2xl:mt-12 pt-5 2xl:pt-7 border-t border-slate-800 flex flex-col items-center justify-between gap-3 sm:flex-row text-xs 2xl:text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {SITE_META.company} {copyrightText}</p>
          <div className="flex items-center gap-5 2xl:gap-7">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-slate-300 transition-colors">
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 2xl:gap-3 ml-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-6 w-6 2xl:h-8 2xl:w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:bg-primary hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" width={12} height={12} className="2xl:w-4 2xl:h-4" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
