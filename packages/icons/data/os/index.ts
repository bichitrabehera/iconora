import type { IconData } from "../../types"
import { androidIconData } from "./android.data"
import { appleIconData } from "./apple.data"
import { ubuntuIconData } from "./ubuntu.data"
import { windowsIconData } from "./windows.data"

export type { IconData }

export {
  androidIconData,
  appleIconData,
  ubuntuIconData,
  windowsIconData,
}

export const osIcons: IconData[] = [
  androidIconData,
  appleIconData,
  ubuntuIconData,
  windowsIconData,
]
