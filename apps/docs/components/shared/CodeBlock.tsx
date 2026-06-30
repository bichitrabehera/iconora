import { CopyButton } from "@/components/copy-button";

export function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-neutral-800 ">
      <div className="flex h-10 items-center justify-between border-b px-2">
        <code>
          <span className="text-xs ml-2 text-white">{title}</span>
        </code>
        <CopyButton
          className="size-6 rounded-md border-none [&_svg:not([class*='size-'])]:size-3.5"
          variant="ghost"
          size="icon-sm"
          text={code}
        />
      </div>
      <pre className="overflow-x-auto overscroll-x-contain p-4 leading-6">
        <code
          data-slot="code-block"
          className="text-muted-foreground font-mono text-sm"
        >
          {code}
        </code>
      </pre>
    </div>
  );
}
