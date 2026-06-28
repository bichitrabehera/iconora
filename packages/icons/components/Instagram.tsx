"use client"

import { motion } from "motion/react"
import { createIcon } from "./createIcon"

export const InstagramIcon = createIcon({
  displayName: "InstagramIcon",
  render: () => (
    <>
      <motion.rect
        className="insta-rect"
        width="20"
        height="20"
        x="2"
        y="2"
        rx="5"
        ry="5"
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.path
        className="insta-circle"
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.line
        className="insta-dot"
        x1="17.5"
        y1="6.5"
        x2="17.51"
        y2="6.5"
      />
    </>
  ),
  animations: {
    start: [
      {
        selector: ".insta-rect",
        keyframes: { rotate: [0, -8, 0, 8, 0] },
        options: { duration: 1.2, ease: "easeInOut", repeat: Infinity },
      },
      {
        selector: ".insta-circle",
        keyframes: { scale: [1, 1.12, 1] },
        options: { duration: 1.2, ease: "easeInOut", repeat: Infinity },
      },
      {
        selector: ".insta-dot",
        keyframes: { opacity: [1, 0.4, 1] },
        options: { duration: 0.8, ease: "easeInOut", repeat: Infinity },
      },
    ],
    stop: [
      { selector: ".insta-rect", keyframes: { rotate: 0 } },
      { selector: ".insta-circle", keyframes: { scale: 1 } },
      { selector: ".insta-dot", keyframes: { opacity: 1 } },
    ],
  },
})
