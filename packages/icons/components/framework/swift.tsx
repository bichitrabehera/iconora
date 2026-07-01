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
import { swiftIconData } from "../../data/framework/swift.data"

export const SwiftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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

    const anims: AnimDef[] = [
        { selector: ".sf-bird", keyframes: { y: [0, -1.5, 0] }, options: { duration: 1.6, ease: "easeInOut", repeat: Infinity } }
      ]

    const start = useCallback(async () => {
      controls.current.forEach((c) => c.stop())
      controls.current = []

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
      for (const anim of anims) {
        const reset: Record<string, number> = {}
        for (const [key, vals] of Object.entries(anim.keyframes)) {
          reset[key] = vals[0]
        }
        animate(anim.selector, reset, { duration: 0.25 })
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

        <g className="sf-bird" style={{ transformOrigin: "12px 12px" }}>
        <path d="M20.547 15.828c1.33 -4.126 -1.384 -9.521 -6.047 -12.828c-.135 -.096 2.39 6.704 1.308 9.124c-2.153 -1.454 -4.756 -3.494 -7.808 -6.124l-.5 2l-3.5 -1c4.36 4.748 7.213 7.695 8.56 8.841c-4.658 2.089 -10.65 -.978 -10.56 -.841c1.016 1.545 6 6 11 6c2 0 3.788 -.502 4.742 -1.389c.005 -.005 .432 -.446 1.378 -.17c.504 .148 1.463 .667 2.88 1.559v-1.507c0 -1.377 -.515 -2.67 -1.453 -3.665" />
        </g>
      </motion.svg>
    )
  },
)

SwiftIcon.displayName = "SwiftIcon"
