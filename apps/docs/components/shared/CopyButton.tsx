"use client";

import { useState } from "react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      onClick={handleCopy}
      className="border-border bg-background text-muted-foreground hover:text-foreground inline-flex h-7 items-center rounded-md border px-2.5 text-xs transition-colors"
    >
      {copied ? "copied" : label}
    </button>
  );
}
