import type { SVGProps } from "react";

/**
 * Hand-drawn line doodles. They inherit color via `currentColor`
 * and use fill tokens (sun / pool-soft / blush) for the "coloured in" bits.
 */
type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ChipDoodle(props: P) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M22 9v7M32 8v8M42 9v7M22 48v7M32 48v8M42 48v7M9 22h7M8 32h8M9 42h7M48 22h7M48 32h8M48 42h7" />
      <path d="M18 16.5c5-.8 23-1 28.5-.2 1.4 6 1.3 24 .3 29.6-6 1-23 .9-28.6.1-1-5.7-1.2-23.6-.2-29.5z" />
      <path
        d="M25 25.5c4-.5 10-.4 14 0 .4 4 .4 9 0 13-4 .5-10 .5-14 0-.5-4-.4-9 0-13z"
        fill="var(--sun)"
      />
    </svg>
  );
}

export function ControllerDoodle(props: P) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path
        d="M15 22.5c11-1.4 23-1.3 34 0 6 1 9 9 9.5 17 .4 6-2.5 10.5-7 10.5-4.5 0-6.5-5-9.5-7.5H22c-3 2.5-5 7.5-9.5 7.5-4.6 0-7.4-4.6-7-10.6.6-8 3.6-15.9 9.5-16.9z"
        fill="var(--pool-soft)"
      />
      <path d="M18 30.5v9M13.5 35h9" />
      <circle cx="44" cy="32" r="1.8" fill="currentColor" />
      <circle cx="50" cy="37.5" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function WaveDoodle(props: P) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M5 26c5-6 10-6 14.5 0s9.5 6 14 0 9.5-6 14 0 8.5 6 11.5 1" />
      <path d="M5 38c5-6 10-6 14.5 0s9.5 6 14 0 9.5-6 14 0 8.5 6 11.5 1" stroke="var(--pool)" />
      <path d="M12 50c4-4 8-4 11.5 0s8 4 11.5 0" opacity=".55" />
    </svg>
  );
}

export function HoldDoodle(props: P) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path
        d="M10.5 36c-2.5-10 5.5-21 18.5-22.5 11-1.2 24 4.5 24.5 15.5.5 11-8 19.5-21 20-11 .4-19.5-3.5-22-13z"
        fill="var(--blush)"
      />
      <circle cx="31" cy="31.5" r="4" />
      <path d="M31 31.5h.01" strokeWidth="3" />
    </svg>
  );
}

export function PencilDoodle(props: P) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M12 52.5l3.8-14 27.5-27.7c2-2 5-2 7 0l3 3c2 2 2 5 0 7L25.6 48.5 12 52.5z" fill="var(--sun)" />
      <path d="M39 15l10 10M15.8 38.5l9.8 10" />
      <path d="M12 52.5l2-7 5 5z" fill="currentColor" />
    </svg>
  );
}

export function SparkDoodle(props: P) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M16 3c.6 6 1.8 11.2 13 13-11 1.6-12.4 6.6-13 13-.8-6.4-2-11.4-13-13 11-1.8 12.2-7 13-13z" fill="currentColor" />
    </svg>
  );
}

export function ArrowDoodle(props: P) {
  return (
    <svg viewBox="0 0 100 60" {...base} {...props}>
      <path className="draw-in" d="M6 10c22-6 52-2 68 20 4 6 6 11 7 17" />
      <path d="M71 39c4 3 7 6 10 9 2-5 4-9 7-13" />
    </svg>
  );
}

export function SquiggleDoodle(props: P) {
  return (
    <svg viewBox="0 0 200 16" preserveAspectRatio="none" {...base} {...props}>
      <path d="M2 10c12-8 22-8 32 0s22 8 32 0 22-8 32 0 22 8 32 0 22-8 32 0 22 8 34-2" />
    </svg>
  );
}

export function BlobDoodle(props: P) {
  return (
    <svg viewBox="0 0 400 160" aria-hidden="true" {...props}>
      <path
        d="M30 92C18 54 58 20 132 14c62-5 136-6 196 10 46 12 70 38 58 74-12 34-62 52-150 52-82 0-188-10-206-58z"
        fill="currentColor"
      />
    </svg>
  );
}

export const doodleMap = {
  wave: WaveDoodle,
  hold: HoldDoodle,
  pencil: PencilDoodle,
} as const;
