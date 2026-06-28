"use client"

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  useEffect,
} from "react"
import { motion, useAnimate } from "motion/react"
import type { AnimatedIconProps, AnimatedIconHandle, AnimationStep } from "./types"
import type { AnimationOptions } from "motion/react"

type IconConfig = {
  displayName: string
  render: () => React.ReactNode
  animations: {
    start: AnimationStep[]
    stop: AnimationStep[]
  }
}

export function createIcon(config: IconConfig) {
  const { displayName, render, animations } = config

  const Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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

      const start = useCallback(async () => {
        controls.current.forEach((c) => c.stop())
        controls.current = []

        for (const anim of animations.start) {
          const opts: AnimationOptions = {
            ...anim.options,
            ...(duration ? { duration } : {}),
            ...(!loop ? { repeat: 0 } : {}),
          }
          const ctrl = animate(
            anim.selector,
            anim.keyframes as Record<string, string | number | (string | number)[]>,
            opts,
          )
          controls.current.push(ctrl)
        }
      }, [animate, loop, duration])

      const stop = useCallback(async () => {
        controls.current.forEach((c) => c.stop())
        controls.current = []
        for (const anim of animations.stop) {
          animate(
            anim.selector,
            anim.keyframes as Record<string, string | number | (string | number)[]>,
            { duration: 0.3, ...anim.options } as AnimationOptions,
          )
        }
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
          onHoverStart={animateOnHover ? start : undefined}
          onHoverEnd={animateOnHover ? stop : undefined}
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
          {render()}
        </motion.svg>
      )
    },
  )

  Icon.displayName = displayName
  return Icon
}
