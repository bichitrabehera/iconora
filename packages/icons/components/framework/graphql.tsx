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
import { graphqlIconData } from "../../data/framework/graphql.data"

export const GraphqlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
        { selector: ".gq-diamond", keyframes: { scale: [1, 1.04, 1] }, options: { duration: 1.8, ease: "easeInOut", repeat: Infinity } }
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

        <g className="gq-diamond" style={{ transformOrigin: "12px 12px" }}>
        <path d="M4 8l8 -5l8 5v8l-8 5l-8 -5l0 -8" />
        <path d="M12 4l7.5 12h-15l7.5 -12" />
        <path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        <path d="M11 21a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        <path d="M3 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        <path d="M3 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        <path d="M19 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        <path d="M19 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        </g>
      </motion.svg>
    )
  },
)

GraphqlIcon.displayName = "GraphqlIcon"
