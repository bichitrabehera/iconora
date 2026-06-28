import Link from "next/link";
import { GitHubIcon } from "../ui/github-icon";
import { TwitterIcon } from "../ui/twitter-icon";
import { LinkedInIcon } from "../ui/linkedin-icon";

export function Navbar() {
  return (
    <header className="border-border bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          iconora
        </Link>
        <div className="flex gap-6">
          <a
            href="https://github.com/bichitrabehera/iconora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text transition-colors"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://x.com/in/bichitradotdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text transition-colors"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://linkedin.com/in/bichitrabehera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text transition-colors"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
