"use client"

import { motion } from "motion/react"
import { createIcon } from "./createIcon"

export const TwitterIcon = createIcon({
  displayName: "TwitterIcon",
  render: () => (
    <motion.path
      className="tw-body"
      d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
      style={{ originX: "12px", originY: "12px" }}
    />
  ),
  animations: {
    start: [
      {
        selector: ".tw-body",
        keyframes: { scale: [1, 1.1, 1], rotate: [0, -5, 0, 5, 0] },
        options: { duration: 1.2, ease: "easeInOut", repeat: Infinity },
      },
    ],
    stop: [
      { selector: ".tw-body", keyframes: { scale: 1, rotate: 0 } },
    ],
  },
})
