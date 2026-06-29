"use client";

import { useState } from "react";
import type { IconData } from "@/lib/icon-data";
import { CodeBlock } from "@/components/shared/CodeBlock";
import { CodeBlockCommand } from "../code-block-command";

const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

const tabs = ["shadcn", "svg"] as const;
type Tab = (typeof tabs)[number];

function slugToComponentName(slug: string): string {
  return (
    slug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("") + "Icon"
  );
}

export function IconTabs({ icon }: { icon: IconData }) {
  const [active, setActive] = useState<Tab>("shadcn");

  return (
    <div>
      <div className="border-border mb-4 flex gap-1 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`text cursor-pointer px-3 pb-2 font-medium transition-colors ${
              active === tab
                ? "border-foreground text-foreground border-b-2"
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
            <CodeBlockCommand
              // prompt="Add this component to your project"
              pnpm={`pnpm dlx shadcn@latest add ${baseUrl}/r/${icon.category}/${icon.slug}.json`}
              npm={`npx shadcn@latest add ${baseUrl}/r/${icon.category}/${icon.slug}.json`}
              bun={`bunx --bun shadcn@latest add ${baseUrl}/r/${icon.category}/${icon.slug}.json`}
            />
          </div>
        )}

        {active === "svg" && (
          <div>
            <CodeBlock title="SVG" code={icon.svg} />
            <p className="text-muted-foreground mt-2 text-xs">
              SVG exports are intentionally static for maximum compatibility.
              Use the Shadcn component for interactive hover animations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
