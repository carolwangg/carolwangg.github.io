import type { ReactNode } from "react";
import { SquiggleDoodle } from "./Doodles";

export function SectionHeading({
  index,
  kicker,
  children,
  note,
}: {
  index: string;
  kicker: string;
  children: ReactNode;
  note?: string;
}) {
  return (
    <header data-reveal className="mb-12 md:mb-16">
      <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
        <span className="text-primary">{index}</span> — {kicker}
      </p>
      <h2 className="font-display-soft mt-3 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
        {children}
      </h2>
      <SquiggleDoodle className="mt-4 h-3 w-28 text-primary" />
      {note && <p className="font-hand mt-3 text-2xl text-secondary">{note}</p>}
    </header>
  );
}
