"use client"

import {
  InstagramIcon,
  GitHubIcon,
  TwitterIcon,
  YouTubeIcon,
  LinkedInIcon,
  DiscordIcon,
  FigmaIcon,
} from "@iconora/icons"
import type { AnimatedIconProps } from "@iconora/icons"

const components: Record<string, React.ComponentType<AnimatedIconProps>> = {
  instagram: InstagramIcon,
  github: GitHubIcon,
  twitter: TwitterIcon,
  youtube: YouTubeIcon,
  linkedin: LinkedInIcon,
  discord: DiscordIcon,
  figma: FigmaIcon,
}

export function AnimatedIcon({
  slug,
  size = 24,
  ...props
}: { slug: string } & Partial<AnimatedIconProps>) {
  const Component = components[slug]
  if (!Component) return null
  return <Component size={size} {...props} />
}
