"use client";

import { useState, useMemo } from "react";
import { icons as allIcons, searchIcons } from "@/lib/icon-data";
import { IconCard } from "@/components/icons/IconCard";
import { SearchBar } from "@/components/shared/SearchBar";
import type { RegistryCategory } from "@/lib/registry-categories";

export function HomeContent({ categories }: { categories: RegistryCategory[] }) {
  const [query, setQuery] = useState("");
  const [browseOpen, setBrowseOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!query) return allIcons;
    return searchIcons(query);
  }, [query]);

  return (
    <>
     

      <section className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-32 pb-16 text-center">
        <div className="mb-6 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-600">
          Motion-powered React Icons
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          <span className="text-blue-600">icon</span>ora
        </h1>

        <p className="text text-muted-foreground mt-5 max-w-2xl">
          Hand-crafted animated icons for React. Install one icon at a time
          using the shadcn registry or copy clean static SVGs.
        </p>

        <div className="mt-8 w-full max-w-lg">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="border-border bg-background rounded-full border px-3 py-1 text-xs">
            Motion
          </span>
          <span className="border-border bg-background rounded-full border px-3 py-1 text-xs">
            shadcn Registry
          </span>
          <span className="border-border bg-background rounded-full border px-3 py-1 text-xs">
            Static SVG
          </span>
          <span className="border-border bg-background rounded-full border px-3 py-1 text-xs">
            React 19
          </span>
        </div>
      </section>

      {/* {query ? (
        <section className="mx-auto max-w-6xl px-4 pb-28">
          <p className="text text-muted-foreground mb-5">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "
            {query}"
          </p>

          <IconGrid icons={filtered} />
        </section>
      ) : ( */}
      <>
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Featured Icons</h2>
              <p className="text-muted-foreground text-sm">
                Hover to preview animations
              </p>
            </div>

            <span className="bg-background text-muted-foreground rounded-full border px-3 py-1 text-xs">
              {allIcons.length} Icons
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {allIcons.slice(0, 7).map((icon) => (
              <IconCard key={icon.slug} icon={icon} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-28 text-center">
          <button
            onClick={() => setBrowseOpen(!browseOpen)}
            className="cursor-pointer rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            {browseOpen ? "Show less" : "Browse all icons"}
          </button>

          {browseOpen && (
            <div className="mt-10 text-left">
              {categories.map((cat) => (
                <div key={cat.slug} className="mb-10">
                  <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold capitalize">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    {cat.slug}
                    <span className="text-muted-foreground text-sm font-normal">
                      ({cat.count})
                    </span>
                  </h2>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {cat.icons.map((icon) => (
                      <IconCard key={icon.slug} icon={icon} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </>
    </>
  );
}
