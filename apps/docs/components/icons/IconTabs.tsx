"use client"

import { useState } from "react"
import type { IconData } from "@/lib/icon-data"
import { CodeBlock } from "@/components/shared/CodeBlock"
import { CopyButton } from "@/components/shared/CopyButton"

const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000"

const tabs = ["shadcn", "react", "figma", "jsx", "html", "svg"] as const
type Tab = (typeof tabs)[number]

function slugToComponentName(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("") + "Icon"
}

export function IconTabs({ icon }: { icon: IconData }) {
  const [active, setActive] = useState<Tab>("shadcn")

  return (
    <div>
      <div className="mb-4 flex gap-1 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`cursor-pointer px-3 pb-2 text font-medium transition-colors ${
              active === tab
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {active === "shadcn" && (
          <div>
            <CodeBlock
              title="shadcn CLI"
              code={`npx shadcn@latest add ${baseUrl}/r/${icon.category}/${icon.slug}.json`}
            />
          </div>
        )}

        {active === "react" && (
          <div className="space-y-3">
            <CodeBlock
              title="React"
              code={`import { ${slugToComponentName(icon.slug)} } from "@iconora/icons"

export function Example() {
  return (
    <${slugToComponentName(icon.slug)}
      size={24}
      color="currentColor"
      animateOnHover
    />
  )
}`}
            />
            <p className="text-xs text-muted-foreground">
              Hover over the icon or set{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">autoPlay</code>{" "}
              to play automatically. Use{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">loop</code>{" "}
              and{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">duration</code>{" "}
              to control playback.
            </p>
          </div>
        )}

        {active === "figma" && (
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground">
              Drag this SVG into Figma or paste the copied SVG.
            </p>
            <div className="flex gap-2">
              <CopyButton value={icon.svg} label="Copy SVG" />
            </div>
            <p className="text-xs text-muted-foreground">
              SVG exports are intentionally static for maximum compatibility.
              Use the React component for interactive hover animations.
            </p>
          </div>
        )}

        {active === "jsx" && (
          <CodeBlock title="JSX" code={icon.jsx} />
        )}

        {active === "html" && (
          <div>
            <CodeBlock title="HTML" code={icon.html} />
            <p className="mt-2 text-xs text-muted-foreground">
              SVG exports are intentionally static for maximum compatibility.
              Use the React component for interactive hover animations.
            </p>
          </div>
        )}

        {active === "svg" && (
          <div>
            <CodeBlock title="SVG" code={icon.svg} />
            <p className="mt-2 text-xs text-muted-foreground">
              SVG exports are intentionally static for maximum compatibility.
              Use the React component for interactive hover animations.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
