"use client"

import { motion } from "motion/react"
import { createIcon } from "./createIcon"

export const LinkedInIcon = createIcon({
  displayName: "LinkedInIcon",
  render: () => (
    <>
      <motion.path
        className="li-in"
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6"
        style={{ originX: "15px", originY: "15px" }}
      />
      <motion.rect
        className="li-in2"
        width="4"
        height="12"
        x="2"
        y="9"
        style={{ originX: "4px", originY: "15px" }}
      />
      <motion.circle
        className="li-dot"
        cx="4"
        cy="4"
        r="2"
        style={{ originX: "4px", originY: "4px" }}
      />
    </>
  ),
  animations: {
    start: [
      {
        selector: ".li-in",
        keyframes: { scale: [1, 1.08, 1] },
        options: { duration: 1, ease: "easeInOut", repeat: Infinity },
      },
      {
        selector: ".li-in2",
        keyframes: { scale: [1, 1.08, 1] },
        options: { duration: 1, ease: "easeInOut", repeat: Infinity },
      },
      {
        selector: ".li-dot",
        keyframes: { scale: [1, 1.3, 1] },
        options: { duration: 0.6, ease: "easeInOut", repeat: Infinity },
      },
    ],
    stop: [
      { selector: ".li-in", keyframes: { scale: 1 } },
      { selector: ".li-in2", keyframes: { scale: 1 } },
      { selector: ".li-dot", keyframes: { scale: 1 } },
    ],
  },
})
