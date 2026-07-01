"use client";

import { useState, useMemo } from "react";
import { icons as allIcons, searchIcons, getCategories } from "@/lib/icon-data";
import { IconCard } from "@/components/icons/IconCard";
import { AnimatedIcon } from "@/components/icons/AnimatedIcon";
import { SearchBar } from "@/components/shared/SearchBar";
import { motion } from "motion/react";

const categoryLabels: Record<string, string> = {
  social: "Social Media",
  tech: "Tech Stack",
};

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
      <section className="mx-auto max-w-6xl px-4 pt-28 pb-8 text-center sm:pt-32">
        <h1 className="text-6xl font-bold tracking-tight text-neutral-300 sm:text-5xl">
          <motion.span
            className="inline-block text-blue-600"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            icon
          </motion.span>
          ora
        </h1>
        <p className="text-muted-foreground text mt-3">
          Hand-crafted animated icons for React.
        </p>
        <div className="mx-auto mt-6 max-w-md">
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </section>

      <div className="mx-auto mb-6 max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedCategory === cat.slug
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-border text-muted-foreground hover:border-neutral-500 hover:text-neutral-300"
              }`}
            >
              {cat.slug === "all"
                ? "All"
                : (categoryLabels[cat.slug] ?? cat.slug)}
              <span className="ml-1.5 text-xs opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        {browseByCategory.length === 0 ? (
          <p className="text-muted-foreground py-16 text-center">
            No icons match your search.
          </p>
        ) : (
          browseByCategory.map((cat) => (
            <div key={cat.slug} className="mb-10">
              <h2 className="mb-4 text-lg font-semibold text-neutral-300">
                {categoryLabels[cat.slug] ?? cat.slug}
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({cat.count})
                </span>
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {cat.icons.map((icon) => (
                  <motion.div
                    key={icon.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                  >
                    <IconCard icon={icon} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
