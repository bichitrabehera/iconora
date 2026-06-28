"use client"

import type { IconData } from "@/lib/icon-data"
import { AnimatedIcon } from "@/components/icons/AnimatedIcon"

export function IconPreview({ icon }: { icon: IconData }) {
  return (
    <div className="mb-10 mt-10 flex flex-col items-center gap-4 text-center">
      <div className="flex size-24 items-center justify-center rounded-xl border border-border bg-card transition-shadow duration-300 hover:shadow-lg">
        <AnimatedIcon slug={icon.slug} size={40} />
      </div>
      <div>
        <h1 className="text font-semibold tracking-tight">{icon.name}</h1>
        <p className="mt-1 text text-muted-foreground">
          {icon.tags.join(", ")}
        </p>
      </div>
    </div>
  )
}
