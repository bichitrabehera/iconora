"use client"

import { useState, useMemo } from "react"
import { icons as allIcons, searchIcons, getCategories } from "@/lib/icon-data"
import { IconCard } from "@/components/icons/IconCard"
import { IconGrid } from "@/components/icons/IconGrid"
import { SearchBar } from "@/components/shared/SearchBar"

export function HomeContent() {
  const [query, setQuery] = useState("")
  const [browseOpen, setBrowseOpen] = useState(false)

  const categories = useMemo(() => getCategories(), [])

  const filtered = useMemo(() => {
    if (!query) return allIcons
    return searchIcons(query)
  }, [query])

  const browseByCategory = useMemo(() => {
    return categories.map((cat) => ({
      ...cat,
      icons: allIcons.filter((i) => i.category === cat.slug),
    }))
  }, [categories])

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-28 pb-8 text-center sm:pt-32">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          iconora
        </h1>
        <p className="mt-3 text-muted-foreground text">
          Hand-crafted animated icons for React.
        </p>
        <div className="mx-auto mt-6 max-w-md">
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </section>

      {query ? (
        <section className="mx-auto max-w-6xl px-4 pb-28">
          <p className="mb-4 text text-muted-foreground">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &quot;{query}&quot;
          </p>
          <IconGrid icons={filtered} />
        </section>
      ) : (
        <>
          <section className="mx-auto max-w-6xl px-4 pb-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {allIcons.slice(0, 4).map((icon) => (
                <IconCard key={icon.slug} icon={icon} />
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-28 text-center">
            <button
              onClick={() => setBrowseOpen(!browseOpen)}
              className="cursor-pointer rounded-lg border border-border px-5 py-2 text text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
            >
              {browseOpen ? "Show less" : "Browse all icons"}
            </button>

            {browseOpen && (
              <div className="mt-8 text-left">
                {browseByCategory.map((cat) => (
                  <div key={cat.slug} className="mb-8">
                    <h2 className="mb-3 text-left text font-semibold capitalize">
                      {cat.slug} ({cat.count})
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
      )}
    </>
  )
}
