"use client";

import { useState, useMemo } from "react";
import { icons as allIcons, searchIcons, getCategories } from "@/lib/icon-data";
import { IconCard } from "@/components/icons/IconCard";
import { AnimatedIcon } from "@/components/icons/AnimatedIcon";
import { SearchBar } from "@/components/shared/SearchBar";
import { motion } from "motion/react";
import { BrandColorsToggle } from "@/components/brand-colors-toggle";
import {
  ReactIcon,
  FigmaIcon,
  GitHubIcon,
  TailwindIcon,
  TypeScriptIcon,
  VercelIcon,
} from "@iconora/icons";

const categoryLabels: Record<string, string> = {
  social: "Social Media",
  tech: "Tech Stack",
  game: "Game",
};

const heroIcons = [
  ReactIcon,
  FigmaIcon,
  GitHubIcon,
  TailwindIcon,
  TypeScriptIcon,
  VercelIcon,
];

const positions = [
  { top: "15%", left: "5%" },
  { top: "10%", right: "8%" },
  { top: "50%", left: "3%" },
  { top: "60%", right: "5%" },
  { top: "25%", right: "25%" },
  { top: "70%", left: "20%" },
];

export function HomeContent() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => getCategories(), []);

  const allCategories = useMemo(
    () => [{ slug: "all", count: allIcons.length }, ...categories],
    [categories],
  );

  const filteredIcons = useMemo(() => {
    const searched = query ? searchIcons(query) : allIcons;
    if (selectedCategory === "all") return searched;
    return searched.filter((i) => i.category === selectedCategory);
  }, [query, selectedCategory]);

  const browseByCategory = useMemo(() => {
    if (selectedCategory !== "all") {
      return [
        {
          slug: selectedCategory,
          count: filteredIcons.length,
          icons: filteredIcons,
        },
      ];
    }
    return categories
      .map((cat) => ({
        ...cat,
        icons: filteredIcons.filter((i) => i.category === cat.slug),
      }))
      .filter((cat) => cat.icons.length > 0);
  }, [categories, filteredIcons, selectedCategory]);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_70%)]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {heroIcons.map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: positions[i].top,
                left: positions[i].left,
                right: (positions[i] as any).right,
              }}
              animate={{
                y: [0, -8, 0],
                opacity: [0.08, 0.12, 0.08],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <Icon
                size={48}
                className="text-blue-500/20"
                autoPlay
                loop
                animateOnHover={false}
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-12 text-center sm:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-center text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Animated
              </span>
              <br />
              Icons for your projects
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
          >
            {allIcons.length} hand-crafted, motion-powered icons. Install
            individually via{" "}
            <span className="text-card-foreground font-medium">shadcn CLI</span> or export as{" "}
            <span className="text-card-foreground font-medium">static SVGs</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-8 max-w-md"
          >
            <SearchBar value={query} onChange={setQuery} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-6 text-sm"
          >
            <div>
              <span className="text-foreground font-semibold">
                {allIcons.length}
              </span>{" "}
              <span className="text-muted-foreground">Icons</span>
            </div>
            <div className="bg-border h-4 w-px" />
            <div>
              <span className="text-foreground font-semibold">
                {categories.length}
              </span>{" "}
              <span className="text-muted-foreground">Categories</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.slug
                  ? "border-blue-500 bg-blue-600/15 text-blue-600 dark:text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                  : "border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground"
              }`}
            >
              {cat.slug === "all"
                ? "All"
                : (categoryLabels[cat.slug] ?? cat.slug)}
              <span className="ml-1.5 text-xs opacity-60">({cat.count})</span>
            </button>
          ))}
        </div>

        <div className="mb-8 flex justify-center">
          <BrandColorsToggle />
        </div>

        {browseByCategory.length === 0 ? (
          <p className="text-muted-foreground py-24 text-center">
            No icons match your search.
          </p>
        ) : (
          browseByCategory.map((cat) => (
            <div key={cat.slug} className="mb-12">
              <h2 className="text-muted-foreground mb-5 text-xs font-medium tracking-widest uppercase">
                {categoryLabels[cat.slug] ?? cat.slug}
                <span className="ml-2 font-normal tracking-normal">
                  ({cat.count})
                </span>
              </h2>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {cat.icons.map((icon) => (
                  <motion.div
                    key={icon.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconCard icon={icon} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}
