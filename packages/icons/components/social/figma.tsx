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
import { figmaIconData } from "../../data/social/figma.data"

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
          selector: ".fg-top",
          keyframes: { rotate: [0, -4, 1, 4, -1, 0] },
          options: { duration: 1.6, ease: "easeInOut", repeat: Infinity },
        },
        {
          selector: ".fg-bottom",
          keyframes: { rotate: [0, 3, -1, -3, 1, 0] },
          options: { duration: 1.6, ease: "easeInOut", repeat: Infinity },
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
      animate(".fg-top", { rotate: 0 }, { duration: 0.25 })
      animate(".fg-bottom", { rotate: 0 }, { duration: 0.25 })
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
          className="fg-top"
          style={{ transformOrigin: "12px 9px" }}
        >
          <path d="M6 6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3" />
        </motion.g>
        <motion.g
          className="fg-bottom"
          style={{ transformOrigin: "12px 15px" }}
        >
          <path d="M12 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
        </motion.g>
      </motion.svg>
    )
  },
)

FigmaIcon.displayName = "FigmaIcon"

