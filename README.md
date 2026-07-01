<p align="center">
  <img src="https://img.shields.io/badge/iconora-animated%20icons-000?style=flat&labelColor=888" alt="Iconora">
</p>

<h1 align="center">Iconora</h1>

<p align="center">
  Animated brand icons for React.<br>
  Add one. Hover it. Done.
</p>

<p align="center">
  <a href="https://iconora.vercel.app">🌐 Browse Icons</a>
  ·
  <a href="#usage">📖 Usage</a>
  ·
  <a href="#license">📄 License</a>
</p>

<p align="center">
  ⭐ Star us on GitHub — it helps more people find this project.
</p>

---

Add animated versions of the internet's most recognizable brand icons to your React project in 10 seconds. No config. No build step. Just install and hover.

Available as a **[shadcn](https://ui.shadcn.com) registry**. Built with [motion](https://motion.dev) and TypeScript.

## Usage

```bash
npx shadcn@latest add https://iconora.vercel.app/r/social/github.json
```

```tsx
import { GitHubIcon } from "@/components/ui/github-icon";

export function Header() {
  return <GitHubIcon size={32} />;
}
```

Hover over it — the icon comes to life.

### Props

All icons accept these optional props:

| Prop             | Type      | What it does                             |
| ---------------- | --------- | ---------------------------------------- |
| `size`           | `number`  | Width & height in px (default: `24`)     |
| `color`          | `string`  | Stroke color (default: `"currentColor"`) |
| `strokeWidth`    | `number`  | SVG stroke width (default: `2`)          |
| `animateOnHover` | `boolean` | Animate on hover (default: `true`)       |
| `autoPlay`       | `boolean` | Animate on mount (default: `false`)      |
| `loop`           | `boolean` | Repeat animation (default: `true`)       |
| `duration`       | `number`  | Override animation speed                 |
| `className`      | `string`  | Extra CSS classes                        |

## Browse All Icons

See every icon in action at **[iconora.vercel.app](https://iconora.vercel.app)** — preview animations, grab the install command, or copy the raw SVG.

## License

MIT © [Bichitra Behera](LICENSE)
