"use client"

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  useEffect,
  useState,
} from "react"
import { motion, useAnimate } from "motion/react"
import type { AnimatedIconProps, AnimatedIconHandle } from "../types"
import type { AnimationOptions } from "motion/react"
import { getBrandColor } from "../brand-colors"

export type AnimationDef = {
  selector: string
  keyframes: Record<string, number[]>
  options: { duration: number; ease: string; repeat: number; delay?: number }
}

export function createIcon(
  slug: string,
  renderSvg: () => React.ReactElement,
  anims: AnimationDef[],
): React.ForwardRefExoticComponent<AnimatedIconProps & React.RefAttributes<AnimatedIconHandle>> {
  const IconComponent = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
        brandColor,
      },
      ref,
    ) => {
      const [scope, animate] = useAnimate()
      const controls = useRef<Array<ReturnType<typeof animate>>>([])
      const isHovering = useRef(false)
      const [showBrand, setShowBrand] = useState(false)

      const hasBrand = brandColor !== undefined && brandColor !== false
      const brandValue = typeof brandColor === "string" ? brandColor : (hasBrand ? getBrandColor(slug) : undefined)
      const effectiveColor = showBrand && brandValue ? brandValue : color

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
      }, [])

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
          onHoverStart={
            hasBrand
              ? () => { setShowBrand(true); if (animateOnHover) { isHovering.current = true; start() } }
              : animateOnHover ? () => { isHovering.current = true; start() } : undefined
          }
          onHoverEnd={
            hasBrand
              ? () => { setShowBrand(false); if (animateOnHover) { isHovering.current = false; stop() } }
              : animateOnHover ? () => { isHovering.current = false; stop() } : undefined
          }
          onClick={hasBrand ? () => setShowBrand((p) => !p) : undefined}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={effectiveColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ transition: "stroke 0.2s ease", ...(className ? {} : {}) }}
        >
          {renderSvg()}
        </motion.svg>
      )
    },
  )

  IconComponent.displayName = `${slug.charAt(0).toUpperCase() + slug.slice(1)}Icon`
  return IconComponent
}
