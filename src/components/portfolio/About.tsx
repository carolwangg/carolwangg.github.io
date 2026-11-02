import type { CSSProperties } from "react";
import { offKeyboard, profile } from "@/content/portfolio";
import { doodleMap } from "./Doodles";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="01" kicker="about">
        Curious about the space where <span className="marker">hardware, AI and play</span> meet.
      </SectionHeading>

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div data-reveal className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            I study computer science at the {profile.school} and graduate in {profile.gradYear}.
            The things that pull me in are how models learn, how GPUs make them fast, and how games
            turn all of that into something you can actually feel.
          </p>
          <p>
            Most of my learning happens by building. At hackathons I've teamed up on an AI
            home-maintenance assistant and a platform that connects humanitarian crises with donors
            — usually ending up somewhere between the AI pipeline and the backend.
          </p>
          <p>
            Next, I'm hoping to go deeper into AI and GPU computing, and keep building things that
            are useful <em>and</em> a little bit fun.
          </p>
        </div>

        <aside
          data-reveal
          style={{ "--d": "120ms" } as CSSProperties}
          className="relative h-fit rotate-[1.5deg] rounded-sm border bg-card p-7 shadow-[0_1px_0_var(--color-border),0_18px_30px_-22px_var(--color-ink)]"
          aria-labelledby="off-keyboard"
        >
          <span aria-hidden="true" className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" />
          <h3 id="off-keyboard" className="font-hand text-3xl text-primary">
            off the keyboard…
          </h3>
          <ul className="mt-5 space-y-4">
            {offKeyboard.map(({ label, doodle }) => {
              const Icon = doodleMap[doodle];
              return (
                <li key={label} className="flex items-center gap-4">
                  <Icon className="h-11 w-11 shrink-0 text-foreground" />
                  <span className="font-display text-xl">{label}</span>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </section>
  );
}
