import type { IconData } from "../../types"

export const dpadIconData: IconData = {
  name: "D-Pad",
  slug: "dpad",
  category: "game",
  tags: ["dpad", "directional", "controller", "cross", "gaming"],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path class="dp-up" d="M12 3l3 4h-2v3h-2V7H9z" />
  <path class="dp-down" d="M12 21l-3-4h2v-3h2v3h2z" />
  <path class="dp-left" d="M3 12l4-3v2h3v2H7v2z" />
  <path class="dp-right" d="M21 12l-4 3v-2h-3v-2h3V9z" />
</svg>`,
}
