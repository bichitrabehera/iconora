import { CopyButton } from "@/components/shared/CopyButton"

export function CodeBlock({
  title,
  code,
}: {
  title: string
  code: string
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2">
        <span className="text-xs text-muted-foreground">{title}</span>
        <CopyButton value={code} label="Copy" />
      </div>
      <pre className="overflow-x-auto p-4 text">
        <code>{code}</code>
      </pre>
    </div>
  )
}
