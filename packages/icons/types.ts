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

export type AnimatedIconHandle = {
  startAnimation: () => void
  stopAnimation: () => void
}
