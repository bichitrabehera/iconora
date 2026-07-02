"use client";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { motion, useReducedMotion } from "motion/react";

export const brandModeAtom = atomWithStorage("brand-mode", false);

export function BrandColorsToggle() {
  const [on, setOn] = useAtom(brandModeAtom);
  const reduced = useReducedMotion();

  return (
    <button
      onClick={() => setOn(!on)}
      className="group flex cursor-pointer items-center gap-3 text-xs focus-visible:ring-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      aria-label={`Brand colors: ${on ? "on" : "off"}`}
      role="switch"
      aria-checked={on}
    >
      <motion.div
        layout={!reduced}
        className={`relative inline-flex h-5 w-9 items-center rounded-full border transition-colors duration-200 ${
          on
            ? "border-blue-500 bg-blue-600/20"
            : "border-border bg-transparent"
        }`}
      >
        <motion.div
          layout={!reduced}
          animate={{ x: on ? 18 : 3 }}
          transition={
            reduced
              ? { duration: 0 }
              : { type: "spring", stiffness: 500, damping: 30 }
          }
          className={`h-3.5 w-3.5 rounded-full shadow-sm ${
            on ? "bg-blue-500" : "bg-muted-foreground"
          }`}
        />
      </motion.div>
      <span
        className={`transition-colors duration-200 ${
          on ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Brand Colors
      </span>
    </button>
  );
}
