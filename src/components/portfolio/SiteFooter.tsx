import { ArrowUp } from "lucide-react";
import { profile } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="font-hand text-2xl">
          drawn & coded by {profile.name} <span className="text-accent">☺</span>
        </p>
        <div className="flex items-center gap-6 font-mono text-xs">
          <span className="opacity-75">© {new Date().getFullYear()}</span>
          <a href="#top" className="inline-flex items-center gap-1 border-b border-background/50 pb-0.5 hover:border-accent hover:text-accent">
            back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
