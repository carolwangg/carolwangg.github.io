import { ArrowDown, Mail } from "lucide-react";
import { profile, socials } from "@/content/portfolio";
import {
  BlobDoodle,
  ChipDoodle,
  ControllerDoodle,
  HoldDoodle,
  PencilDoodle,
  SparkDoodle,
  WaveDoodle,
} from "./Doodles";
import { SocialIcon } from "./SocialIcon";
import type { CSSProperties, ComponentType, SVGProps } from "react";

type Sticker = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  className: string;
  r: string;
  d: number;
};

// Doodles of Carol's real interests, scattered around the name like sketchbook stickers.
const stickers: Sticker[] = [
  { Icon: ChipDoodle, label: "GPUs!", className: "left-[4%] top-[14%]", r: "-8deg", d: 0 },
  { Icon: ControllerDoodle, label: "game dev", className: "right-[5%] top-[10%]", r: "7deg", d: 700 },
  { Icon: WaveDoodle, label: "swim", className: "left-[8%] bottom-[16%]", r: "4deg", d: 1400 },
  { Icon: HoldDoodle, label: "climb", className: "right-[9%] bottom-[20%]", r: "-6deg", d: 2100 },
  { Icon: PencilDoodle, label: "draw", className: "right-[24%] top-[4%]", r: "12deg", d: 2800 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="paper-dots relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* Stickers (decorative) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        {stickers.map(({ Icon, label, className, r, d }) => (
          <div
            key={label}
            className={`bob absolute flex flex-col items-center ${className}`}
            style={{ "--r": r, "--d": `${d}ms` } as CSSProperties}
          >
            <Icon className="h-16 w-16 text-foreground lg:h-20 lg:w-20" />
            <span className="font-hand -mt-1 text-xl text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-5 text-center md:px-8">
        <div aria-hidden="true" className="rise mb-6 flex justify-center gap-4 md:hidden">
          {stickers.map(({ Icon, label, r }) => (
            <Icon key={label} className="h-10 w-10 text-foreground" style={{ transform: `rotate(${r})` }} />
          ))}
        </div>
        <p className="rise font-hand text-3xl text-primary md:text-4xl" style={{ "--d": "0ms" } as CSSProperties}>
          hi there! I'm
        </p>

        <h1
          className="rise font-display-soft relative mx-auto mt-1 w-fit text-[clamp(3.6rem,13vw,9.5rem)] leading-[0.9] font-bold tracking-[-0.03em]"
          style={{ "--d": "120ms" } as CSSProperties}
        >
          <BlobDoodle className="absolute top-1/2 left-1/2 -z-10 h-[125%] w-[112%] -translate-x-1/2 -translate-y-1/2 -rotate-2 text-accent" />
          Carol <span className="italic">Wang</span>
          <SparkDoodle className="absolute -top-2 -right-6 h-7 w-7 text-primary md:-right-10 md:h-10 md:w-10" />
        </h1>
        <p
          className="rise mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-foreground/85 md:text-xl"
          style={{ "--d": "340ms" } as CSSProperties}
        >
          {profile.intro}
        </p>

        <div
          className="rise mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ "--d": "460ms" } as CSSProperties}
        >
          <a
            href="#work"
            className="shadow-print inline-flex items-center gap-2 rounded-md border-2 border-foreground bg-primary px-5 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
          >
            see my projects <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border-2 border-foreground bg-card px-5 py-3 font-medium transition-colors hover:bg-accent"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> let's connect
          </a>
        </div>

        <ul
          className="rise mt-8 flex items-center justify-center gap-5"
          style={{ "--d": "580ms" } as CSSProperties}
        >
          {socials.map((s) => (
            <li key={s.key}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} (opens in a new tab)`}
                className="block text-foreground/70 transition-colors hover:text-primary"
              >
                <SocialIcon name={s.key} className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
