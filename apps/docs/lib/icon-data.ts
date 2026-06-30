import { icons as allIcons } from "@iconora/icons/data";
import type { IconData } from "@iconora/icons/data";

export type { IconData };

export const icons = allIcons;

export function getIconBySlug(slug: string): IconData | undefined {
  return allIcons.find((icon) => icon.slug === slug);
}

export function getIconsByCategory(category: string): IconData[] {
  return allIcons.filter((icon) => icon.category === category);
}

export function searchIcons(query: string): IconData[] {
  const q = query.toLowerCase().trim();
  if (!q) return allIcons;
  return allIcons.filter(
    (icon) =>
      icon.name.toLowerCase().includes(q) ||
      icon.slug.toLowerCase().includes(q) ||
      icon.tags.some((tag) => tag.toLowerCase().includes(q)),
  );
}

export function getCategories(): { slug: string; count: number }[] {
  const map = new Map<string, number>();
  for (const icon of allIcons) {
    map.set(icon.category, (map.get(icon.category) || 0) + 1);
  }
  return Array.from(map.entries()).map(([slug, count]) => ({ slug, count }));
}
