"use client"

export function SearchBar({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="relative mb-6">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search icons..."
        className="border-border py-2 bg-background text-foreground placeholder:text-muted-foreground h-10 w-full rounded-lg border px-4 text focus:ring-2 focus:ring-ring focus:outline-none"
      />
    </div>
  )
}
