import { useEffect, useState } from "react";
import { navItems } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
        scrolled ? "border-b bg-background" : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8"
      >
        <a
          href="#top"
          className="font-hand group relative text-3xl leading-none font-bold"
          aria-label="Carol Wang — back to top"
        >
          <span
            aria-hidden="true"
            className="absolute -inset-x-2 -inset-y-1 -z-10 -rotate-3 rounded-[45%_55%_50%_50%] bg-accent transition-transform group-hover:rotate-3"
          />
          cw
        </a>
        <ul className="flex items-center gap-3 font-display text-[0.95rem] sm:gap-6 sm:text-base">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "relative py-1 transition-colors hover:text-primary",
                  active === item.id ? "text-primary" : "text-foreground/80",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-primary transition-transform duration-300",
                    active === item.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
