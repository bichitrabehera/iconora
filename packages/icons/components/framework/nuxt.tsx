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
import { nuxtIconData } from "../../data/framework/nuxt.data"

export const NuxtIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
        { selector: ".nx-wave", keyframes: { y: [0, -1.5, 0] }, options: { duration: 1.4, ease: "easeInOut", repeat: Infinity } }
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

        <g className="nx-wave" style={{ transformOrigin: "12px 12px" }}>
        <path d="M12.146 8.583l-1.3 -2.09a1.046 1.046 0 0 0 -1.786 .017l-5.91 9.908a1.046 1.046 0 0 0 .897 1.582h3.913" />
        <path d="M20.043 18c.743 0 1.201 -.843 .82 -1.505l-4.044 -7.013a.936 .936 0 0 0 -1.638 0l-4.043 7.013c-.382 .662 .076 1.505 .819 1.505h8.086" />
        </g>
      </motion.svg>
    )
  },
)

NuxtIcon.displayName = "NuxtIcon"
