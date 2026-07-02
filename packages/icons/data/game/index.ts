import type { IconData } from "../../types"
import { gamepadIconData } from "./gamepad.data"
import { pacmanIconData } from "./pacman.data"
import { ghostIconData } from "./ghost.data"
import { joystickIconData } from "./joystick.data"
import { dpadIconData } from "./dpad.data"
import { tetrisIconData } from "./tetris.data"

export type { IconData }

export {
  gamepadIconData,
  pacmanIconData,
  ghostIconData,
  joystickIconData,
  dpadIconData,
  tetrisIconData,
}

export const gameIcons = [
  gamepadIconData,
  pacmanIconData,
  ghostIconData,
  joystickIconData,
  dpadIconData,
  tetrisIconData,
]
