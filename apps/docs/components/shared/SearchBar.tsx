"use client";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative mb-6">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search icons..."
        className="border-border bg-background text-foreground placeholder:text-muted-foreground text focus:ring-ring w-full rounded-lg border px-4 py-4 focus:ring-2 focus:outline-none"
      />
    </div>
  );
}
