export interface IconData {
  name: string
  slug: string
  category: string
  tags: string[]
  svg: string
  jsx: string
  html: string
}

const data: IconData[] = [
  {
    name: "Instagram",
    slug: "instagram",
    category: "social",
    tags: ["instagram", "social", "media", "photo", "camera"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
</svg>`,
    jsx: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
</svg>`,
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
</svg>`,
  },
  {
    name: "GitHub",
    slug: "github",
    category: "social",
    tags: ["github", "social", "code", "git", "development"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
  <path d="M9 18c-4.51 2-5-2-7-2"/>
</svg>`,
    jsx: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
  <path d="M9 18c-4.51 2-5-2-7-2"/>
</svg>`,
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
  <path d="M9 18c-4.51 2-5-2-7-2"/>
</svg>`,
  },
  {
    name: "Twitter",
    slug: "twitter",
    category: "social",
    tags: ["twitter", "social", "media", "x", "bird"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
</svg>`,
    jsx: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
</svg>`,
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
</svg>`,
  },
  {
    name: "YouTube",
    slug: "youtube",
    category: "social",
    tags: ["youtube", "social", "video", "media", "play"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
  <path d="m10 15 5-3-5-3z"/>
</svg>`,
    jsx: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
  <path d="m10 15 5-3-5-3z"/>
</svg>`,
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
  <path d="m10 15 5-3-5-3z"/>
</svg>`,
  },
  {
    name: "LinkedIn",
    slug: "linkedin",
    category: "social",
    tags: ["linkedin", "social", "professional", "network", "career"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6"/>
  <rect width="4" height="12" x="2" y="9"/>
  <circle cx="4" cy="4" r="2"/>
</svg>`,
    jsx: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6"/>
  <rect width="4" height="12" x="2" y="9"/>
  <circle cx="4" cy="4" r="2"/>
</svg>`,
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6"/>
  <rect width="4" height="12" x="2" y="9"/>
  <circle cx="4" cy="4" r="2"/>
</svg>`,
  },
  {
    name: "Discord",
    slug: "discord",
    category: "social",
    tags: ["discord", "social", "chat", "gaming", "community"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.5 17c0 0-1.5 1-3.5 1 0 0 .5-3.5 0-5C3.5 10 4 7.5 6 5c2-1.5 4-1.5 6-1.5s4 0 6 1.5c2 2.5 2.5 5 1 8-.5 1.5 0 5 0 5-2 0-3.5-1-3.5-1"/>
  <path d="M5.5 13.5C7 15 9 16 12 16s5-1 6.5-2.5"/>
  <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
  <path d="M14 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
</svg>`,
    jsx: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.5 17c0 0-1.5 1-3.5 1 0 0 .5-3.5 0-5C3.5 10 4 7.5 6 5c2-1.5 4-1.5 6-1.5s4 0 6 1.5c2 2.5 2.5 5 1 8-.5 1.5 0 5 0 5-2 0-3.5-1-3.5-1"/>
  <path d="M5.5 13.5C7 15 9 16 12 16s5-1 6.5-2.5"/>
  <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
  <path d="M14 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
</svg>`,
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.5 17c0 0-1.5 1-3.5 1 0 0 .5-3.5 0-5C3.5 10 4 7.5 6 5c2-1.5 4-1.5 6-1.5s4 0 6 1.5c2 2.5 2.5 5 1 8-.5 1.5 0 5 0 5-2 0-3.5-1-3.5-1"/>
  <path d="M5.5 13.5C7 15 9 16 12 16s5-1 6.5-2.5"/>
  <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
  <path d="M14 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
</svg>`,
  },
  {
    name: "Figma",
    slug: "figma",
    category: "social",
    tags: ["figma", "social", "design", "ui", "ux"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5"/>
  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2"/>
  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0"/>
  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0"/>
  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"/>
</svg>`,
    jsx: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5"/>
  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2"/>
  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0"/>
  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0"/>
  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"/>
</svg>`,
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5"/>
  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2"/>
  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0"/>
  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0"/>
  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"/>
</svg>`,
  },
]

export const icons = data

export function getIconBySlug(slug: string): IconData | undefined {
  return data.find((icon) => icon.slug === slug)
}

export function getIconsByCategory(category: string): IconData[] {
  return data.filter((icon) => icon.category === category)
}

export function searchIcons(query: string): IconData[] {
  const q = query.toLowerCase().trim()
  if (!q) return data
  return data.filter(
    (icon) =>
      icon.name.toLowerCase().includes(q) ||
      icon.slug.toLowerCase().includes(q) ||
      icon.tags.some((tag) => tag.toLowerCase().includes(q)),
  )
}

export function getCategories(): { slug: string; count: number }[] {
  const map = new Map<string, number>()
  for (const icon of data) {
    map.set(icon.category, (map.get(icon.category) || 0) + 1)
  }
  return Array.from(map.entries()).map(([slug, count]) => ({ slug, count }))
}
