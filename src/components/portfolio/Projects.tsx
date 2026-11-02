import { ArrowUpRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { media, projects, type Project } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { ArrowDoodle } from "./Doodles";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [homeHero, empact] = projects as [Project, Project];
  return (
    <section id="work" className="border-y bg-muted/60">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading index="02" kicker="selected work" note="(built with some great teammates)">
          Things I've helped build.
        </SectionHeading>

        <div className="space-y-28 md:space-y-36">
          <ProjectShowcase project={homeHero} media={<HomeHeroMedia />} extra={<HomeHeroPipeline />} />
          <ProjectShowcase project={empact} media={<EmpactMedia />} flip />
        </div>
      </div>
    </section>
  );
}

function ProjectShowcase({
  project,
  media: mediaNode,
  extra,
  flip = false,
}: {
  project: Project;
  media: ReactNode;
  extra?: ReactNode;
  flip?: boolean;
}) {
  return (
    <article aria-labelledby={`${project.slug}-title`} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div data-reveal className={cn("mx-auto mb-8 w-full max-w-xl lg:mb-0 lg:max-w-none", flip && "lg:order-2")}>
        {mediaNode}
      </div>

      <div data-reveal style={{ "--d": "120ms" } as CSSProperties} className={cn(flip && "lg:order-1")}>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="font-mono text-sm text-primary">{project.number}</span>
          <span className="rounded-full border border-foreground/30 px-3 py-0.5 font-mono text-xs tracking-wide text-muted-foreground">
            {project.event}
          </span>
        </div>
        <h3
          id={`${project.slug}-title`}
          className="font-display-soft mt-3 text-5xl leading-none font-bold tracking-tight md:text-6xl"
        >
          {project.name}
        </h3>
        <p className="font-display mt-4 text-xl leading-snug text-foreground/90 italic">{project.tagline}</p>

        <div className="mt-6 space-y-3 leading-relaxed text-foreground/80">
          <p>{project.problem}</p>
          <p>{project.summary}</p>
        </div>

        {/* Contribution — the part recruiters should see first */}
        <div className="relative mt-8">
          <p className="font-hand absolute -top-8 left-2 flex items-end gap-1 text-2xl text-primary">
            my part
            <ArrowDoodle className="h-8 w-12 translate-y-3 rotate-12 text-primary" />
          </p>
          <div className="rounded-md border-2 border-foreground bg-card p-5 shadow-print">
            <p className="leading-relaxed">
              <span className="marker font-medium">{project.contribution}</span>
            </p>
          </div>
        </div>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
          {project.tech.map((t) => (
            <li
              key={t}
              className={cn(
                "rounded-sm px-2.5 py-1 font-mono text-xs",
                project.theme === "pool" ? "bg-pool-soft text-foreground" : "bg-blush text-foreground",
              )}
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 border-b-2 border-primary pb-0.5 font-medium transition-colors hover:text-primary"
            >
              {l.label}
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </div>

        {extra}
      </div>
    </article>
  );
}

function HomeHeroMedia() {
  const { phones, detect } = media.homeHero;
  const tilt = ["-rotate-6 translate-y-6", "z-10 -translate-y-2", "rotate-6 translate-y-6"];
  return (
    <div className="relative rounded-lg bg-pool-soft px-4 pt-12 pb-20 sm:px-8">
      <div className="flex items-start justify-center">
        {phones.map((p, i) => (
          <figure
            key={p.src}
            className={cn(
              "-mx-3 w-[34%] max-w-[190px] overflow-hidden rounded-[1.4rem] border-[5px] border-foreground bg-foreground shadow-[0_24px_30px_-20px_var(--color-ink)] transition-transform duration-500 hover:-translate-y-3 sm:-mx-2",
              tilt[i],
            )}
          >
            <img src={p.src} alt={p.alt} loading="lazy" width={540} height={1170} className="block h-auto w-full rounded-[1rem]" />
          </figure>
        ))}
      </div>

      {/* Polaroid of the appliance-identification feature Carol built */}
      <figure className="absolute -bottom-10 -left-2 w-32 rotate-[-7deg] bg-card p-2 pb-1 shadow-[0_14px_24px_-14px_var(--color-ink)] sm:-left-6 sm:w-44">
        <span aria-hidden="true" className="tape -top-3 left-1/2 w-16 -translate-x-1/2 rotate-6" />
        <img src={detect.src} alt={detect.alt} loading="lazy" width={760} height={1013} className="aspect-[4/5] w-full object-cover" />
        <figcaption className="font-hand py-1 text-center text-lg leading-tight">appliance ID ✎</figcaption>
      </figure>
    </div>
  );
}

function HomeHeroPipeline() {
  const { diagram } = media.homeHero;
  return (
    <details className="group mt-8 rounded-md border border-dashed border-foreground/40 bg-card/60 p-4 open:bg-card">
      <summary className="cursor-pointer list-none font-mono text-sm marker:hidden">
        <span className="mr-2 inline-block transition-transform group-open:rotate-90">▸</span>
        peek at the maintenance pipeline
      </summary>
      <img src={diagram.src} alt={diagram.alt} loading="lazy" width={1153} height={620} className="mt-4 w-full rounded-sm" />
    </details>
  );
}

function EmpactMedia() {
  const { main, secondary, url } = media.empact;
  return (
    <div className="relative rounded-lg bg-blush px-4 pt-10 pb-24 sm:px-8 sm:pb-28">
      <BrowserFrame url={url} className="relative z-10 -rotate-1">
        <img src={main.src} alt={main.alt} loading="lazy" width={1600} height={1000} className="block h-auto w-full" />
      </BrowserFrame>
      <BrowserFrame url={`${url}/feed`} className="absolute right-0 bottom-4 z-20 w-[62%] rotate-2 sm:-right-4">
        <img src={secondary.src} alt={secondary.alt} loading="lazy" width={1600} height={1000} className="block h-auto w-full" />
      </BrowserFrame>
      <p className="font-hand absolute bottom-6 left-6 max-w-[32%] text-xl leading-tight text-foreground/80 sm:text-2xl">
        crisis data → ways to help
      </p>
    </div>
  );
}

function BrowserFrame({ url, className, children }: { url: string; className?: string; children: ReactNode }) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-md border-2 border-foreground bg-card shadow-[0_22px_30px_-22px_var(--color-ink)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b-2 border-foreground px-3 py-1.5">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border-2 border-foreground bg-primary" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border-2 border-foreground bg-accent" />
        <span className="ml-1 truncate font-mono text-[0.65rem] text-muted-foreground">{url}</span>
      </div>
      {children}
    </figure>
  );
}
