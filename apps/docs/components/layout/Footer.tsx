"use client";

import { motion } from "motion/react";
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  NodejsIcon,
  TailwindIcon,
  DockerIcon,
  FigmaIcon,
  ViteIcon,
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  VueIcon,
  SvelteIcon,
  PythonIcon,
  RustIcon,
  PrismaIcon,
  FirebaseIcon,
  VercelIcon,
} from "@iconora/icons";

const marqueeIcons = [
  ReactIcon, NextjsIcon, TypeScriptIcon, NodejsIcon,
  TailwindIcon, DockerIcon, FigmaIcon, ViteIcon,
  VueIcon, SvelteIcon, PythonIcon, RustIcon,
  PrismaIcon, FirebaseIcon, VercelIcon,
  GitHubIcon, TwitterIcon, LinkedInIcon,
];

export default function Footer() {
  return (
    <footer className="border-border/50 relative border-t">
      <div className="relative h-24 overflow-hidden sm:h-28">
        <div className="from-background via-background/50 to-background pointer-events-none absolute inset-0 z-10 w-20 bg-gradient-to-r" />
        <div className="from-background via-background/50 to-background pointer-events-none absolute inset-0 z-10 ml-auto w-20 bg-gradient-to-l" />
        <motion.div
          className="absolute top-1/2 flex -translate-y-1/2 gap-10 sm:gap-14"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(10)].flatMap((_, setIdx) =>
            marqueeIcons.map((Icon, i) => (
              <div
                key={`${setIdx}-${i}`}
                className="flex items-center justify-center"
              >
                <Icon
                  size={32}
                  className="text-muted-foreground/20 sm:text-muted-foreground/25"
                  autoPlay
                  loop
                  animateOnHover={false}
                />
              </div>
            )),
          )}
        </motion.div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 pb-8 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-muted-foreground text-xs sm:text-sm">
          Built by{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text font-medium text-transparent">
            Bichitra Behera
          </span>{" "}
          <span className="text-muted-foreground">:)</span>
        </p>
        <div className="flex gap-5">
          <a
            href="https://github.com/bichitrabehera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <GitHubIcon size={18} autoPlay={false} animateOnHover={false} />
          </a>
          <a
            href="https://x.com/in/bichitradotdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <TwitterIcon size={18} autoPlay={false} animateOnHover={false} />
          </a>
          <a
            href="https://linkedin.com/in/bichitrabehera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <LinkedInIcon size={18} autoPlay={false} animateOnHover={false} />
          </a>
        </div>
      </div>
    </footer>
  );
}
