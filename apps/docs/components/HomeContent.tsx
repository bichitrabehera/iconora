"use client";

import { useState, useMemo } from "react";
import { icons as allIcons, searchIcons, getCategories } from "@/lib/icon-data";
import { IconCard } from "@/components/icons/IconCard";
import { IconGrid } from "@/components/icons/IconGrid";
import { SearchBar } from "@/components/shared/SearchBar";
import { motion } from "motion/react";

export function HomeContent() {
  const [query, setQuery] = useState("");
  const [browseOpen, setBrowseOpen] = useState(true);

  const categories = useMemo(() => getCategories(), []);

  const filtered = useMemo(() => {
    if (!query) return allIcons;
    return searchIcons(query);
  }, [query]);

  const browseByCategory = useMemo(() => {
    return categories.map((cat) => ({
      ...cat,
      icons: allIcons.filter((i) => i.category === cat.slug),
    }));
  }, [categories]);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-28 pb-8 text-center sm:pt-32">
        <h1 className="text-6xl font-semibold tracking-tight text-neutral-400 sm:text-5xl">
          <motion.span
            className="inline-block text-blue-900"
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

      {browseOpen && (
        <div className="mx-auto mt-8 max-w-6xl px-4 text-left">
          {browseByCategory.map((cat) => (
            <div key={cat.slug} className="mb-8">
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 xl:grid-cols-6">
                {cat.icons.map((icon) => (
                  <IconCard key={icon.slug} icon={icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
