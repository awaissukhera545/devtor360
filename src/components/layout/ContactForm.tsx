"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";
import { CONTACT_PAGE_DATA } from "@/lib/site-data";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/25 sm:text-sm";

const labelClass = "mb-2 block text-sm font-semibold text-foreground";

export default function ContactForm() {
  const { form } = CONTACT_PAGE_DATA;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMessage(form.errorMissingConfigMessage);
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
      setErrorMessage(form.errorDefaultMessage);
    }
  }

  const isSending = status === "sending";

  return (
    <div id="contact-form" className="rounded-2xl border border-border bg-card p-5 shadow-md sm:p-8 lg:p-10 scroll-mt-24">
      <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-[1.75rem]">
        {form.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {form.description}
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5 sm:mt-8">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <div>
            <label htmlFor="from_name" className={labelClass}>
              Full Name <span className="text-destructive">*</span>
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              required
              autoComplete="name"
              placeholder="John Carter"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="reply_to" className={labelClass}>
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              id="reply_to"
              name="reply_to"
              type="email"
              required
              autoComplete="email"
              placeholder="john@company.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+1 912 345 6789"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Acme Inc."
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="service" className={labelClass}>
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select a service
              </option>
              {form.services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className={labelClass}>
              Estimated Budget
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select a range
              </option>
              {form.budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Project Details <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your goals, timeline, and what success looks like."
            className={`${inputClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-brand transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isSending ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              {form.sendingButtonText}
            </>
          ) : (
            <>
              <Send size={18} />
              {form.submitButtonText}
            </>
          )}
        </button>

        <p aria-live="polite" className="sr-only">
          {status === "sending" ? form.sendingButtonText : ""}
        </p>

        {status === "success" && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-md border border-success/30 bg-success/10 px-4 py-3 text-sm text-foreground"
          >
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-success" />
            <span>{form.successMessage}</span>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground"
          >
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-destructive" />
            <span>{errorMessage}</span>
          </div>
        )}

        <p className="text-xs leading-relaxed text-muted-foreground">
          {form.privacyText}
          <a href="/privacy_policy" className="text-primary hover:underline">
            {form.privacyLinkText}
          </a>
          {form.privacyPostText}
        </p>
      </form>
    </div>
  );
}
