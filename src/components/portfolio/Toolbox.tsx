import type { CSSProperties } from "react";
import { skills } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const drawers = [
  {
    title: "Languages",
    tag: "lang/",
    items: skills.languages,
    chip: "bg-foreground text-background font-mono",
  },
  {
    title: "Frameworks & libraries",
    tag: "lib/",
    items: skills.frameworks,
    chip: "bg-secondary text-secondary-foreground font-mono",
  },
  {
    title: "Currently curious about",
    tag: "next/",
    items: skills.curiousAbout,
    chip: "bg-accent text-accent-foreground font-hand text-2xl leading-none",
  },
];

export function Toolbox() {
  return (
    <section id="toolbox" className="border-y bg-muted/60">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading index="03" kicker="toolbox">
          What I reach for.
        </SectionHeading>

        <div className="grid gap-px overflow-hidden rounded-md border-2 border-foreground bg-foreground md:grid-cols-3">
          {drawers.map((d, i) => (
            <div
              key={d.title}
              data-reveal
              style={{ "--d": `${i * 100}ms` } as CSSProperties}
              className="bg-card p-7 md:p-8"
            >
              <p className="font-mono text-xs text-primary">{d.tag}</p>
              <h3 className="font-display mt-1 text-2xl font-semibold">{d.title}</h3>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {d.items.map((item, j) => (
                  <li
                    key={item}
                    className={cn("rounded-sm px-3 py-1.5 text-sm", d.chip)}
                    style={{ transform: `rotate(${j % 2 ? 1 : -1}deg)` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
