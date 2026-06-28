"use client"

import { useState } from "react"

export function CopyButton({
  value,
  label,
}: {
  value: string
  label: string
}) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex h-7 items-center rounded-md border border-border bg-background px-2.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      {copied ? "copied" : label}
    </button>
  )
}
