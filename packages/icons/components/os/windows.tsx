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
import { windowsIconData } from "../../data/os/windows.data"

export const WindowsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
        { selector: ".wn-pane", keyframes: { scale: [1, 1.03, 1] }, options: { duration: 1.5, ease: "easeInOut", repeat: Infinity } }
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

        <g className="wn-pane" style={{ transformOrigin: "12px 12px" }}>
        <path d="M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9l0 .1" />
        <path d="M12 5l0 14" />
        <path d="M4 12l16 0" />
        </g>
      </motion.svg>
    )
  },
)

WindowsIcon.displayName = "WindowsIcon"
