import Link from "next/link";
import { GitHubIcon } from "../ui/github-icon";
import { TwitterIcon } from "../ui/twitter-icon";
import { LinkedInIcon } from "../ui/linkedin-icon";
import { ThemeToggle } from "../ui/theme-toggle";

export function Navbar() {
  return (
    <header className="border-border/50 bg-background/70 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-foreground"
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">icon</span>ora
        </Link>
        <div className="flex items-center gap-5">
          <ThemeToggle />
          <a
            href="https://github.com/bichitrabehera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/in/bichitradotdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <TwitterIcon className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/bichitrabehera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
