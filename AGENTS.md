<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Iconora — Progress & Structure

## Package Structure
```
iconora/
├── packages/icons/               # Animated icon components (primary product)
│   ├── components/               #  7 motion-powered animated components
│   │   ├── createIcon.tsx        #  Factory: forwardRef + useAnimate + hover/autoplay/loop
│   │   ├── {Icon}.tsx            #  Per-icon: SVG paths + animation keyframes
│   │   ├── types.ts              #  AnimatedIconProps, AnimatedIconHandle, AnimationStep
│   │   └── index.ts              #  Barrel export
│   ├── index.ts                  # Re-exports from ./components
│   ├── package.json              # tsup build, peer deps (motion, react)
│   ├── tsconfig.json
│   └── tsup.config.ts            # ESM/CJS + dts
│
├── apps/docs/                    # Demo/docs site (Next.js 15)
│   ├── lib/
│   │   └── icon-data.ts          #  All 7 icons' metadata (name, slug, svg, html, jsx)
│   ├── components/
│   │   ├── icons/
│   │   │   ├── AnimatedIcon.tsx  #  Slug → animated component mapper
│   │   │   ├── IconCard.tsx      #  Grid card (link to detail)
│   │   │   ├── IconGrid.tsx      #  Responsive grid wrapper
│   │   │   ├── IconPreview.tsx   #  Detail page preview
│   │   │   └── IconTabs.tsx      #  shadcn/react/figma/jsx/html/svg tabs
│   │   ├── layout/
│   │   │   └── Navbar.tsx
│   │   ├── shared/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── CodeBlock.tsx
│   │   │   └── CopyButton.tsx
│   │   └── HomeContent.tsx       #  Home page: search, featured, browse all
│   ├── app/
│   │   ├── page.tsx              #  Home: search bar → featured 4 → Browse All → categories
│   │   ├── icon/[slug]/page.tsx  #  Detail: preview + code tabs
│   │   └── layout.tsx + globals.css
│   └── scripts/generate-registry.ts
```

## Component API
All animated icons accept: `size`, `color`, `strokeWidth`, `animateOnHover` (default true), `autoPlay`, `loop`, `duration`, `className`. No ref required — self-managing.

## Build Commands
- `packages/icons`: `pnpm build` → tsup → `dist/`
- `apps/docs`: `pnpm build` → Next.js production build
- `apps/docs`: `pnpm registry` → shadcn registry JSON files under `public/r/`
- `apps/docs`: `pnpm dev` → dev server on port 3333
