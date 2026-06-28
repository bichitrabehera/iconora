import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { icons } from "../lib/icon-data";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outDir = resolve(__dirname, "../public/r");

for (const icon of icons) {
  const dir = resolve(outDir, icon.category);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const registry = {
    name: icon.slug,
    type: "registry:icon",
    files: [
      {
        path: `icons/${icon.slug}.tsx`,
        content: icon.jsx,
        type: "registry:icon",
      },
    ],
    categories: [icon.category],
    meta: {
      name: icon.name,
      tags: icon.tags,
    },
  };

  writeFileSync(
    resolve(dir, `${icon.slug}.json`),
    JSON.stringify(registry, null, 2),
  );
}

console.log(`Generated ${icons.length} registry files`);
