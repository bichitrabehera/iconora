"use client"

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  useEffect,
} from "react"
import { motion, useAnimate } from "motion/react"
import type { AnimatedIconProps, AnimatedIconHandle } from "../../types"
import type { AnimationOptions } from "motion/react"
import { discordIconData } from "../../data/social/discord.data"

export const DiscordIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
          selector: ".dc-head",
          keyframes: { y: [0, -1.5, 0] },
          options: { duration: 1.3, ease: "easeInOut", repeat: Infinity },
        },
        {
          selector: ".dc-eyes",
          keyframes: { scale: [1, 0.1, 1] },
          options: { duration: 0.5, ease: "easeInOut", repeat: Infinity },
        },
      ]

      for (const anim of anims) {
        const opts = {
          ...anim.options,
          ...(duration ? { duration } : {}),
          ...(!loop ? { repeat: 0 } : {}),
        } as AnimationOptions
        const ctrl = animate(anim.selector, anim.keyframes, opts)
        controls.current.push(ctrl)
      }
    }, [animate, loop, duration])

    const stop = useCallback(async () => {
      controls.current.forEach((c) => c.stop())
      controls.current = []
      animate(".dc-head", { y: 0 }, { duration: 0.25 })
      animate(".dc-eyes", { scale: 1 }, { duration: 0.25 })
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
        onHoverStart={
          animateOnHover
            ? () => {
                isHovering.current = true
                start()
              }
            : undefined
        }
        onHoverEnd={
          animateOnHover
            ? () => {
                isHovering.current = false
                stop()
              }
            : undefined
        }
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
        <motion.g
          className="dc-head"
          style={{ transformOrigin: "12px 12px" }}
        >
          <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
          <path d="M7 16.5c3.5 1 6.5 1 10 0" />
        </motion.g>
        <motion.g
          className="dc-eyes"
          style={{ transformOrigin: "12px 12px" }}
        >
          <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        </motion.g>
      </motion.svg>
    )
  },
)

DiscordIcon.displayName = "DiscordIcon"

