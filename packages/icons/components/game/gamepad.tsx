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
import { gamepadIconData } from "../../data/game/gamepad.data"

export const GamepadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
      options: Partial<AnimationOptions>
    }

    const start = useCallback(async () => {
      controls.current.forEach((c) => c.stop())
      controls.current = []

      const anims: AnimDef[] = [
        {
          selector: ".gp-btn-l",
          keyframes: { y: [0, 1, 0] },
          options: { duration: 0.6, ease: "easeInOut", repeat: Infinity },
        },
        {
          selector: ".gp-btn-r",
          keyframes: { y: [0, 1, 0] },
          options: { duration: 0.6, ease: "easeInOut", repeat: Infinity, delay: 0.3 },
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
      animate(".gp-btn-l", { y: 0 }, { duration: 0.2 })
      animate(".gp-btn-r", { y: 0 }, { duration: 0.2 })
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
          d="M4 12a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2H10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
        />
        <motion.circle className="gp-btn-l" cx="8" cy="11" r="1" />
        <motion.circle className="gp-btn-r" cx="16" cy="11" r="1" />
      </motion.svg>
    )
  },
)

GamepadIcon.displayName = "GamepadIcon"
