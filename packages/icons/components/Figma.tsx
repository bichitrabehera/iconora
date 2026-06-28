"use client"

import { motion } from "motion/react"
import { createIcon } from "./createIcon"

export const FigmaIcon = createIcon({
  displayName: "FigmaIcon",
  render: () => (
    <>
      <motion.path
        className="fg-tl"
        d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5"
        style={{ originX: "8.5px", originY: "5.5px" }}
      />
      <motion.path
        className="fg-tr"
        d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2"
        style={{ originX: "15.5px", originY: "5.5px" }}
      />
      <motion.path
        className="fg-b"
        d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0"
        style={{ originX: "15.5px", originY: "12.5px" }}
      />
      <motion.path
        className="fg-bl2"
        d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0"
        style={{ originX: "8.5px", originY: "19.5px" }}
      />
      <motion.path
        className="fg-bl"
        d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"
        style={{ originX: "8.5px", originY: "12.5px" }}
      />
    </>
  ),
  animations: {
    start: [
      {
        selector: ".fg-tl",
        keyframes: { rotate: [0, -10, 0] },
        options: { duration: 1, ease: "easeInOut", repeat: Infinity },
      },
      {
        selector: ".fg-tr",
        keyframes: { rotate: [0, 10, 0] },
        options: { duration: 1, ease: "easeInOut", repeat: Infinity },
      },
      {
        selector: ".fg-b",
        keyframes: { rotate: [0, 10, 0] },
        options: { duration: 1, ease: "easeInOut", repeat: Infinity },
      },
      {
        selector: ".fg-bl",
        keyframes: { rotate: [0, -10, 0] },
        options: { duration: 1, ease: "easeInOut", repeat: Infinity },
      },
      {
        selector: ".fg-bl2",
        keyframes: { rotate: [0, -10, 0] },
        options: { duration: 1, ease: "easeInOut", repeat: Infinity },
      },
    ],
    stop: [
      { selector: ".fg-tl", keyframes: { rotate: 0 } },
      { selector: ".fg-tr", keyframes: { rotate: 0 } },
      { selector: ".fg-b", keyframes: { rotate: 0 } },
      { selector: ".fg-bl", keyframes: { rotate: 0 } },
      { selector: ".fg-bl2", keyframes: { rotate: 0 } },
    ],
  },
})
