"use client";

import type { IconData } from "@/lib/icon-data";
import { IconCard } from "@/components/icons/IconCard";

export function IconGrid({ icons }: { icons: IconData[] }) {
  if (icons.length === 0) {
    return (
      <p className="text text-muted-foreground py-12 text-center">
        no icons found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {icons.map((icon) => (
        <IconCard key={icon.slug} icon={icon} />
      ))}
    </div>
  );
}
