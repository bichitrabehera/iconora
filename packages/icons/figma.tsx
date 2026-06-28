"use client"

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  useEffect,
} from "react"
import { motion, useAnimate } from "motion/react"
import type { AnimatedIconProps, AnimatedIconHandle } from "./types"
import type { AnimationOptions } from "motion/react"

export const FigmaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    {
      size = 24,
      color = "currentColor",
      strokeWidth = 2,
      animateOnHover = true,
      autoPlay = false,
      loop = true,
      duration,
      className = "",
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate()
    const controls = useRef<Array<ReturnType<typeof animate>>>([])
    const isHovering = useRef(false)

    type AnimDef = {
      selector: string
      keyframes: Record<string, number[]>
      options: { duration: number; ease: string; repeat: number }
    }

    const start = useCallback(async () => {
      controls.current.forEach((c) => c.stop())
      controls.current = []

      const anims: AnimDef[] = [
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
      ]

      for (const anim of anims) {
        const opts = {
          ...anim.options,
          ...(duration ? { duration } : {}),
          ...(!loop ? { repeat: 0 } : {}),
        } as AnimationOptions
        const ctrl = animate(
          anim.selector,
          anim.keyframes,
          opts,
        )
        controls.current.push(ctrl)
      }
    }, [animate, loop, duration])

    const stop = useCallback(async () => {
      controls.current.forEach((c) => c.stop())
      controls.current = []
      animate(".fg-tl", { rotate: 0 }, { duration: 0.3 })
      animate(".fg-tr", { rotate: 0 }, { duration: 0.3 })
      animate(".fg-b", { rotate: 0 }, { duration: 0.3 })
      animate(".fg-bl", { rotate: 0 }, { duration: 0.3 })
      animate(".fg-bl2", { rotate: 0 }, { duration: 0.3 })
    }, [animate])

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }))

    useEffect(() => {
      if (autoPlay) {
        start()
        return () => { stop() }
      }
    }, [autoPlay, start, stop])

    return (
      <motion.svg
        ref={scope}
        onHoverStart={animateOnHover ? () => { isHovering.current = true; start() } : undefined}
        onHoverEnd={animateOnHover ? () => { isHovering.current = false; stop() } : undefined}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
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
      </motion.svg>
    )
  },
)

FigmaIcon.displayName = "FigmaIcon"
