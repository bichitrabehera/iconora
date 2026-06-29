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
import { instagramIconData } from "./instagram.data"

export const InstagramIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
      animate(".insta-rect", { rotate: 0 }, { duration: 0.3 })
      animate(".insta-circle", { scale: 1 }, { duration: 0.3 })
      animate(".insta-dot", { opacity: 1 }, { duration: 0.3 })
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
      </motion.svg>
    )
  },
)

InstagramIcon.displayName = "InstagramIcon"
