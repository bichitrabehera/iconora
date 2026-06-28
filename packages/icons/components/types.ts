import type { AnimationOptions } from "motion/react"

export type AnimatedIconProps = {
  size?: number
  color?: string
  strokeWidth?: number
  animateOnHover?: boolean
  autoPlay?: boolean
  loop?: boolean
  duration?: number
  className?: string
}

export type AnimationStep = {
  selector: string
  keyframes: Record<string, string | number | Array<string | number>>
  options?: AnimationOptions
}

export type AnimatedIconHandle = {
  startAnimation: () => void
  stopAnimation: () => void
}
