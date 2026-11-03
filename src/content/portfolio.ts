import hhHome from "@/assets/hh-home.jpg";
import hhPlan from "@/assets/hh-plan.jpg";
import hhEquipment from "@/assets/hh-equipment.jpg";
import hhDetect from "@/assets/hh-detect.jpg";
import hhDiagram from "@/assets/hh-diagram.jpg";
import emHero from "@/assets/em-hero.jpg";
import emFeed from "@/assets/em-feed.jpg";

/** All personal content lives here so copy edits never touch layout code. */

export const profile = {
  name: "Carol Wang",
  firstName: "Carol",
  role: "Computer Science Student",
  school: "University of Toronto",
  schoolShort: "UofT",
  gradYear: "2029",
  email: "carolzj.wang@mail.utoronto.ca",
  intro:
    "I'm a computer science student at the University of Toronto who likes building things that think, render and play. Right now that means poking at AI, GPUs and game dev — usually at a hackathon, with a great team.",
};

export type SocialKey = "github" | "linkedin" | "devpost";

export const socials: { key: SocialKey; label: string; handle: string; href: string }[] = [
  { key: "github", label: "GitHub", handle: "carolwangg", href: "https://github.com/carolwangg" },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "carol-wang",
    href: "https://www.linkedin.com/in/carol-wang-3b6101204/",
  },
  {
    key: "devpost",
    label: "Devpost",
    handle: "carolzjwang",
    href: "https://devpost.com/carolzjwang",
  },
];

export const skills = {
  languages: ["Python", "React / JS", "C", "Java", "Bash / Shell"],
  frameworks: ["Expo", "ReactJS", "Torch", "Flask"],
  curiousAbout: ["AI", "GPUs", "Game dev"],
};

export const offKeyboard = [
  { label: "Swimming", doodle: "wave" },
  { label: "Rock climbing", doodle: "hold" },
  { label: "Drawing", doodle: "pencil" },
] as const;

export type Project = {
  slug: string;
  number: string;
  name: string;
  event: string;
  tagline: string;
  problem: string;
  summary: string;
  contribution: string;
  tech: string[];
  links: { label: string; href: string }[];
  theme: "pool" | "blush";
};

export const projects: Project[] = [
  {
    slug: "home-hero",
    number: "01",
    name: "Home Hero",
    event: "BearHack 2026",
    tagline: "An AI home-maintenance assistant that helps before things break.",
    problem:
      "Most people wait until something breaks, then scramble through manuals, forums or expensive emergency repairs. We thought home maintenance should be proactive, simple and guided by AI.",
    summary:
      "Home Hero is an AI-powered assistant that supports both proactive maintenance and reactive repair guidance — snap your appliances, get a maintenance plan, and get walked through fixes when something goes wrong.",
    contribution:
      "I worked on appliance identification and the proactive maintenance steps using Cloud Vision + Gemini, and helped smooth out the UI.",
    tech: ["React Native / Expo", "Gemini", "Python", "TypeScript", "ElevenLabs"],
    links: [
      { label: "Code on GitHub", href: "https://github.com/Nosanna/BearHack2026" },
      { label: "Devpost", href: "https://devpost.com/software/homi-ai" },
    ],
    theme: "pool",
  },
  {
    slug: "empact",
    number: "02",
    name: "Empact",
    event: "GenAI Genesis 2026",
    tagline: "Matching real-world humanitarian crises with the people who want to help.",
    problem:
      "Global crisis information is scattered across long humanitarian reports, and it's hard for would-be donors to know where help is needed or which organizations to trust.",
    summary:
      "Empact automatically discovers global problems, uses AI to analyze and summarize humanitarian reports, and pairs ongoing crises with trusted charities working on the ground — turning crisis data into actionable ways to help.",
    contribution:
      "I worked on the backend database and a Selenium agent that automatically autofills donation forms.",
    tech: ["ExpressJS", "FastAPI", "Gemini", "MySQL", "BeautifulSoup"],
    links: [
      { label: "Code on GitHub", href: "https://github.com/MaryamElhamidi/Empact" },
      { label: "Live site", href: "https://empact-genai.netlify.app" },
    ],
    theme: "blush",
  },
];

export const media = {
  homeHero: {
    phones: [
      { src: hhPlan, alt: "Home Hero maintenance plan screen listing tasks due this week" },
      { src: hhHome, alt: "Home Hero home screen with quick actions and upcoming tasks" },
      {
        src: hhEquipment,
        alt: "Home Hero equipment screen for a washing machine with repair and maintenance options",
      },
    ],
    detect: {
      src: hhDetect,
      alt: "Photo of a dryer with Cloud Vision bounding boxes labelling the dryer drum and lint filter",
    },
    diagram: {
      src: hhDiagram,
      alt: "Pipeline diagram: register an appliance, Cloud Vision API, Gemma describes maintenance, proactive tasks stored in PostgreSQL",
    },
  },
  empact: {
    main: { src: emHero, alt: "Empact landing page reading 'See the world. Change the outcome.' with a dotted globe" },
    secondary: { src: emFeed, alt: "Empact crisis feed showing humanitarian situations with support buttons" },
    url: "empact-genai.netlify.app",
  },
};

export const navItems = [
  { id: "about", label: "about" },
  { id: "work", label: "work" },
  { id: "toolbox", label: "toolbox" },
  { id: "contact", label: "contact" },
] as const;
