import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { profile, socials } from "@/content/portfolio";
import { SparkDoodle } from "./Doodles";
import { SocialIcon } from "./SocialIcon";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div data-reveal className="relative">
        <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
          <span className="text-primary">05</span> — contact
        </p>
        <h2 className="font-display-soft mt-4 max-w-4xl text-5xl leading-[0.98] font-bold tracking-tight text-balance md:text-7xl">
          Got an idea, a role, or a hackathon team with room? <span className="text-primary italic">Say hi.</span>
        </h2>
        <SparkDoodle className="bob absolute top-0 right-0 hidden h-12 w-12 text-accent md:block" />
      </div>

      <div data-reveal className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex min-w-0 items-center gap-3 rounded-md border-2 border-foreground bg-primary px-5 py-4 text-primary-foreground shadow-print transition-transform hover:-translate-y-0.5"
        >
          <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span className="truncate font-mono text-sm sm:text-base">{profile.email}</span>
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex w-fit items-center gap-2 rounded-md border-2 border-foreground bg-card px-4 py-4 text-sm font-medium transition-colors hover:bg-accent"
        >
          {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
          <span aria-live="polite">{copied ? "copied!" : "copy email"}</span>
        </button>
      </div>

      <ul data-reveal className="mt-14 grid border-t-2 border-foreground sm:grid-cols-3">
        {socials.map((s) => (
          <li key={s.key} className="border-b sm:border-r sm:last:border-r-0">
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-1 py-6 transition-colors hover:bg-accent/60 sm:px-5"
            >
              <SocialIcon name={s.key} className="h-7 w-7 shrink-0" />
              <span className="min-w-0 flex-1">
                <span className="font-display block text-xl font-semibold">{s.label}</span>
                <span className="block truncate font-mono text-xs text-muted-foreground">{s.handle}</span>
              </span>
              <ArrowUpRight
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
