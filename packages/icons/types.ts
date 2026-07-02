export type AnimatedIconProps = {
  size?: number
  color?: string
  strokeWidth?: number
  animateOnHover?: boolean
  autoPlay?: boolean
  loop?: boolean
  duration?: number
  className?: string
  brandColor?: string | boolean
}

export type AnimatedIconHandle = {
  startAnimation: () => void
  stopAnimation: () => void
}

export type IconData = {
  name: string
  slug: string
  category: string
  tags: string[]
  svg: string
}
