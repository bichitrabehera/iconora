"use client";

import type { IconData } from "@/lib/icon-data";
import { AnimatedIcon } from "@/components/icons/AnimatedIcon";
import BackButton from "../shared/BackButton";

export function IconPreview({ icon }: { icon: IconData }) {
  return (
    <div className="mb-10 flex flex-col items-center gap-4 text-center">
      <div className="flex w-full items-start justify-start">
        <BackButton />
      </div>
      <div className="border-border bg-background flex size-24 items-center justify-center rounded-xl border transition-shadow duration-300 hover:shadow-lg">
        <AnimatedIcon slug={icon.slug} size={40} />
      </div>
      <div className="mt-2">
        <h1 className="text font-semibold tracking-tight">{icon.name}</h1>
        <p className="text-muted-foreground mt-4">
          {icon.tags.map((tag, index) => (
            <span key={tag}>
              <span className="underline decoration-blue-600 decoration-dashed underline-offset-6">
                {tag}
              </span>
              {index < icon.tags.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
