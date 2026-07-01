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
import { dockerIconData } from "../../data/tech/docker.data"

export const DockerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
          selector: ".dk-stack",
          keyframes: { y: [0, -1.5, 0] },
          options: { duration: 1.8, ease: "easeInOut", repeat: Infinity },
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
      animate(".dk-stack", { y: 0 }, { duration: 0.25 })
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
        <motion.g className="dk-stack" style={{ transformOrigin: "12px 12px" }}>
          <path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46" />
          <path d="M5 10h3v3h-3l0 -3" />
          <path d="M8 10h3v3h-3l0 -3" />
          <path d="M11 10h3v3h-3l0 -3" />
          <path d="M8 7h3v3h-3l0 -3" />
          <path d="M11 7h3v3h-3l0 -3" />
          <path d="M11 4h3v3h-3l0 -3" />
          <path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" />
          <path d="M10 16l0 .01" />
        </motion.g>
      </motion.svg>
    )
  },
)

DockerIcon.displayName = "DockerIcon"
