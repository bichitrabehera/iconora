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
import { linkedInIconData } from "./linkedin.data"

export const LinkedInIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
      animate(".li-in", { scale: 1 }, { duration: 0.3 })
      animate(".li-in2", { scale: 1 }, { duration: 0.3 })
      animate(".li-dot", { scale: 1 }, { duration: 0.3 })
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
      </motion.svg>
    )
  },
)

LinkedInIcon.displayName = "LinkedInIcon"
