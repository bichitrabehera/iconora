"use client";

import { ArrowLeftIcon } from "lucide-react";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="border-border/60 text-muted-foreground hover:text-foreground hover:border-neutral-600 flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition-all duration-200"
    >
      <ArrowLeftIcon className="size-3.5" />
      Back
    </button>
  );
}
