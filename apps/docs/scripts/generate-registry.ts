import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { icons } from "../lib/icon-data";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const iconsDir = resolve(__dirname, "../../../packages/icons");
const outDir = resolve(__dirname, "../public/r");

const typesSource = readFileSync(resolve(iconsDir, "types.ts"), "utf-8");

for (const icon of icons) {
  const dir = resolve(outDir, icon.category);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const sourcePath = resolve(iconsDir, `components/${icon.category}/${icon.slug}.tsx`);
  let source = readFileSync(sourcePath, "utf-8");
  source = source.replace(/from\s+"\.\.\/\.\.\/types"/g, 'from "./types"');
  source = source.replace(/from\s+"\.\.\/\.\.\/data\/.+?\/(.+?)"/g, 'from "./$1"');

  const registry = {
    name: `${icon.slug}-icon`,
    type: "registry:component",
    dependencies: ["motion"],
    files: [
      {
        path: `ui/${icon.slug}-icon.tsx`,
        content: source,
        type: "registry:component",
        target: `@ui/${icon.slug}-icon.tsx`,
      },
      {
        path: "ui/types.ts",
        content: typesSource,
        type: "registry:file",
        target: "@ui/types.ts",
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
