import { readdirSync } from "fs"
import { join } from "path"
import { icons, getIconBySlug } from "./icon-data"

export type RegistryCategory = {
  slug: string
  count: number
  icons: typeof icons
}

export function getRegistryCategories(): RegistryCategory[] {
  const rDir = join(process.cwd(), "public", "r")

  let dirs: string[]
  try {
    dirs = readdirSync(rDir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
  } catch {
    return []
  }

  const categories: RegistryCategory[] = []

  for (const dir of dirs) {
    const dirPath = join(rDir, dir)
    let files: string[]
    try {
      files = readdirSync(dirPath).filter((f) => f.endsWith(".json"))
    } catch {
      continue
    }

    const categoryIcons = files
      .map((f) => f.replace(/\.json$/, ""))
      .map((slug) => getIconBySlug(slug))
      .filter((i): i is (typeof icons)[number] => i !== undefined)

    categories.push({
      slug: dir,
      count: categoryIcons.length,
      icons: categoryIcons,
    })
  }

  return categories
}
