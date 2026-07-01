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
import { redditIconData } from "../../data/social/reddit.data"

export const RedditIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
          selector: ".rd-head",
          keyframes: { rotate: [0, -3, 1, 3, -1, 0] },
          options: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
        },
        {
          selector: ".rd-antenna",
          keyframes: { rotate: [0, -10, 3, 10, -3, 0] },
          options: { duration: 0.9, ease: "easeInOut", repeat: Infinity },
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
      animate(".rd-head", { rotate: 0 }, { duration: 0.25 })
      animate(".rd-antenna", { rotate: 0 }, { duration: 0.25 })
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
        <motion.g
          className="rd-head"
          style={{ transformOrigin: "12px 12px" }}
        >
          <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
          <path d="M8.5 13a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
          <path d="M14.5 13a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
          <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
        </motion.g>
        <motion.g
          className="rd-antenna"
          style={{ transformOrigin: "12px 5px" }}
        >
          <path d="M12 8l1 -5l6 1" />
          <path d="M18 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </motion.g>
      </motion.svg>
    )
  },
)

RedditIcon.displayName = "RedditIcon"

