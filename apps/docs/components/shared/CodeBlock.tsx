import { CopyButton } from "@/components/shared/CopyButton";

export function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="border-border overflow-hidden rounded-lg border">
      <div className="border-border bg-card flex items-center justify-between border-b px-4 py-2">
        <span className="text-muted-foreground text-xs">{title}</span>
        <CopyButton value={code} label="Copy" />
      </div>
      <pre className="overflow-x-auto p-4 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
