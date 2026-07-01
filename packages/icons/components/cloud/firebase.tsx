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
import { firebaseIconData } from "../../data/cloud/firebase.data"

export const FirebaseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
        { selector: ".fb-flame", keyframes: { scale: [1, 1.03, 0.98, 1.02, 1] }, options: { duration: 2, ease: "easeInOut", repeat: Infinity } }
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

        <g className="fb-flame" style={{ transformOrigin: "12px 12px" }}>
        <path d="M4.53 17.05l6.15 -11.72h-.02c.38 -.74 1.28 -1.02 2.01 -.63c.26 .14 .48 .36 .62 .62l1.06 2.01" />
        <path d="M15.47 6.45c.58 -.59 1.53 -.59 2.11 -.01c.22 .22 .36 .5 .41 .81l1.5 9.11c.1 .62 -.2 1.24 -.76 1.54l-6.07 2.9c-.46 .25 -1.01 .26 -1.46 0l-6.02 -2.92c-.55 -.31 -.85 -.92 -.75 -1.54l1.96 -12.04c.12 -.82 .89 -1.38 1.7 -1.25c.46 .07 .87 .36 1.09 .77l1.24 1.76" />
        <path d="M4.57 17.18l10.93 -10.68" />
        </g>
      </motion.svg>
    )
  },
)

FirebaseIcon.displayName = "FirebaseIcon"
