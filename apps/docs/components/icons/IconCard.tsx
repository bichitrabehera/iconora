"use client";

import Link from "next/link";
import type { IconData } from "@/lib/icon-data";
import { AnimatedIcon } from "@/components/icons/AnimatedIcon";

export function IconCard({ icon }: { icon: IconData }) {
  return (
    <Link
      href={`/icon/${icon.slug}`}
      className="border-border hover:bg-card flex flex-col items-center justify-center gap-2 rounded-lg border p-4 transition-colors"
    >
      <AnimatedIcon slug={icon.slug} size={30} />
      <span className="text-muted-foreground text-sm">{icon.name}</span>
    </Link>
  );
}
