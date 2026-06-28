"use client"

import { motion } from "motion/react"
import { createIcon } from "./createIcon"

export const YouTubeIcon = createIcon({
  displayName: "YouTubeIcon",
  render: () => (
    <>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <motion.path
        className="yt-play"
        d="m10 15 5-3-5-3z"
        style={{ originX: "12.5px", originY: "12px" }}
      />
    </>
  ),
  animations: {
    start: [
      {
        selector: ".yt-play",
        keyframes: { scale: [1, 1.2, 1] },
        options: { duration: 0.8, ease: "easeInOut", repeat: Infinity },
      },
    ],
    stop: [
      { selector: ".yt-play", keyframes: { scale: 1 } },
    ],
  },
})
