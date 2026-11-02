import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Toolbox } from "@/components/portfolio/Toolbox";

const title = "Carol Wang — Computer Science Student at UofT";
const description =
  "Portfolio of Carol Wang, a University of Toronto computer science student building with AI, GPUs and game dev. Featuring Home Hero and Empact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

/** Adds scroll-reveal to [data-reveal] elements; content stays visible without JS. */
function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("can-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useScrollReveal();
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Toolbox />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
