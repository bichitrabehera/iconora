"use client"

import { motion } from "motion/react"
import { createIcon } from "./createIcon"

export const DiscordIcon = createIcon({
  displayName: "DiscordIcon",
  render: () => (
    <>
      <motion.g className="dc-head" style={{ originX: "12px", originY: "12px" }}>
        <path d="M8.5 17c0 0-1.5 1-3.5 1 0 0 .5-3.5 0-5C3.5 10 4 7.5 6 5c2-1.5 4-1.5 6-1.5s4 0 6 1.5c2 2.5 2.5 5 1 8-.5 1.5 0 5 0 5-2 0-3.5-1-3.5-1" />
        <path d="M5.5 13.5C7 15 9 16 12 16s5-1 6.5-2.5" />
      </motion.g>
      <motion.g
        className="dc-eyes"
        style={{ originX: "12px", originY: "12px" }}
      >
        <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
        <path d="M14 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      </motion.g>
    </>
  ),
  animations: {
    start: [
      {
        selector: ".dc-head",
        keyframes: { y: [0, -2, 0] },
        options: { duration: 1, ease: "easeInOut", repeat: Infinity },
      },
      {
        selector: ".dc-eyes",
        keyframes: { scale: [1, 1.3, 1] },
        options: { duration: 0.6, ease: "easeInOut", repeat: Infinity },
      },
    ],
    stop: [
      { selector: ".dc-head", keyframes: { y: 0 } },
      { selector: ".dc-eyes", keyframes: { scale: 1 } },
    ],
  },
})
