"use client"

import { motion } from "motion/react"
import { createIcon } from "./createIcon"

export const GitHubIcon = createIcon({
  displayName: "GitHubIcon",
  render: () => (
    <>
      <motion.path
        className="gh-body"
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      />
      <motion.path
        className="gh-arm"
        d="M9 18c-4.51 2-5-2-7-2"
        style={{ originX: "9px", originY: "17px" }}
      />
    </>
  ),
  animations: {
    start: [
      {
        selector: ".gh-body",
        keyframes: { y: [0, -2, 0] },
        options: { duration: 1, ease: "easeInOut", repeat: Infinity },
      },
      {
        selector: ".gh-arm",
        keyframes: { rotate: [0, 15, 0, -15, 0] },
        options: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
      },
    ],
    stop: [
      { selector: ".gh-body", keyframes: { y: 0 } },
      { selector: ".gh-arm", keyframes: { rotate: 0 } },
    ],
  },
})
