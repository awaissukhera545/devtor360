import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const SERVICES = [
  "Custom Software Development",
  "MVP Development",
  "Mobile/Web App Development",
  "Shopify Development",
  "Design Services",
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/devtor360",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.15c0-1.47-.03-3.36-2.05-3.36-2.06 0-2.37 1.6-2.37 3.26V21h-4V9Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.93.26-1.56 1.6-1.56H16.7V3.3c-.27-.03-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.7H8v3.2h2.6v8h2.9Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6ZM12 2c-2.72 0-3.06.01-4.13.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.16a4.9 4.9 0 0 0-1.16 1.77c-.25.64-.42 1.37-.47 2.43C2 8.94 2 9.28 2 12s.01 3.06.06 4.13c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.16 1.77.55.56 1.11.9 1.77 1.16.64.25 1.37.42 2.43.47C8.94 22 9.28 22 12 22s3.06-.01 4.13-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.16 4.9 4.9 0 0 0 1.16-1.77c.25-.64.42-1.37.47-2.43.05-1.07.06-1.41.06-4.13s-.01-3.06-.06-4.13c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.16-1.77 4.9 4.9 0 0 0-1.77-1.16c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 5.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm5.65-.25a1.03 1.03 0 1 1-2.05 0 1.03 1.03 0 0 1 2.05 0Z",
  },
  {
    label: "Twitter",
    href: "#",
    path: "M22 5.9c-.7.32-1.46.53-2.25.63a3.9 3.9 0 0 0 1.72-2.16 7.8 7.8 0 0 1-2.48.95A3.9 3.9 0 0 0 12.2 8.6c0 .3.04.6.1.89A11.05 11.05 0 0 1 4.1 4.6a3.9 3.9 0 0 0 1.2 5.2 3.9 3.9 0 0 1-1.76-.49v.05a3.9 3.9 0 0 0 3.12 3.82c-.55.15-1.13.17-1.72.06a3.9 3.9 0 0 0 3.64 2.7A7.83 7.83 0 0 1 2 17.5a11.03 11.03 0 0 0 5.97 1.75c7.17 0 11.1-5.94 11.1-11.09l-.01-.5A7.9 7.9 0 0 0 22 5.9Z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M23 12s0-3.36-.43-4.98a2.94 2.94 0 0 0-2.07-2.07C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.5.45c-.99.27-1.8 1.08-2.07 2.07C1 8.64 1 12 1 12s0 3.36.43 4.98c.27.99 1.08 1.8 2.07 2.07C5.1 19.5 12 19.5 12 19.5s6.9 0 8.5-.45a2.94 2.94 0 0 0 2.07-2.07C23 15.36 23 12 23 12ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="relative h-12 w-48 flex items-center gap-2">
            <Image
              src="/devtor360-light.svg"
              alt="Devtor360-logo"
              className="object-contain"
              fill
            />
          </div>

          <p className="mt-4 mb-10 max-w-xs text-sm leading-relaxed text-white/70">
            Say goodbye to long development cycles and save time, money, and
            opportunity cost with Devtor360.
          </p>
          <div>
            <a
              href="/contact"
              className="rounded-md border border-primary bg-accent text-brand-700 px-7 py-3.5 text-base font-semibold transition-colors hover:bg-brand-100"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-lg text-white/70">
            {SERVICES.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">Available For Help</h3>
          <p className="mt-4 text-sm text-white/70">
            24 Hours A Day &ndash; 5 Days A Week
          </p>
          <div className="mt-4 space-y-3 text-lg">
            <a
              href="mailto:info@devtor360.com"
              className="flex items-center gap-3 text-white/90 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                <Mail size={16} />
              </span>
              info@devtor360.com
            </a>
            <a
              href="tel:+19123456789"
              className="flex items-center gap-3 text-white/90 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                <Phone size={16} />
              </span>
              +1-912-345-6789
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/70 sm:flex-row lg:px-8">
          <p>&copy; devtor360 Inc. {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/terms_and_conditions" className="hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="/privacy_policy" className="hover:text-white">
              Privacy Policy
            </a>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width={14}
                    height={14}
                    fill="currentColor"
                    aria-hidden="true"
                  >
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
