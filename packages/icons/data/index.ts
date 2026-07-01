import type { IconData } from "../types"
import { socialIcons } from "./social"
import { techIcons } from "./tech"
import { aiIcons } from "./ai"
import { cloudIcons } from "./cloud"
import { devtoolsIcons } from "./devtools"
import { frameworkIcons } from "./framework"
import { mediaIcons } from "./media"
import { osIcons } from "./os"
import { paymentIcons } from "./payment"

export type { IconData }

export {
  openaiIconData,
} from "./ai"

export {
  discordIconData,
  figmaIconData,
  githubIconData,
  instagramIconData,
  linkedInIconData,
  pinterestIconData,
  redditIconData,
  snapchatIconData,
  telegramIconData,
  tikTokIconData,
  twitterIconData,
  whatsAppIconData,
  youTubeIconData,
} from "./social"

export {
  reactIconData,
  nextjsIconData,
  typeScriptIconData,
  nodejsIconData,
  tailwindIconData,
  vueIconData,
  svelteIconData,
  dockerIconData,
  gitIconData,
  pythonIconData,
} from "./tech"

export {
  awsIconData,
  azureIconData,
  cloudflareIconData,
  firebaseIconData,
  mongodbIconData,
  planetscaleIconData,
  supabaseIconData,
  vercelIconData,
} from "./cloud"

export {
  cypressIconData,
  denoIconData,
  framerIconData,
  gitlabIconData,
  npmIconData,
  pnpmIconData,
  storybookIconData,
  threejsIconData,
  viteIconData,
  vscodeIconData,
} from "./devtools"

export {
  angularIconData,
  astroIconData,
  bootstrapIconData,
  css3IconData,
  flutterIconData,
  graphqlIconData,
  html5IconData,
  javascriptIconData,
  kotlinIconData,
  nuxtIconData,
  phpIconData,
  prismaIconData,
  reduxIconData,
  rustIconData,
  sassIconData,
  solidjsIconData,
  swiftIconData,
} from "./framework"

export {
  behanceIconData,
  dribbbleIconData,
  mediumIconData,
  notionIconData,
  revolutIconData,
  slackIconData,
  spotifyIconData,
  steamIconData,
  twitchIconData,
} from "./media"

export {
  androidIconData,
  appleIconData,
  ubuntuIconData,
  windowsIconData,
} from "./os"

export {
  auth0IconData,
  coinbaseIconData,
  paypalIconData,
  stripeIconData,
} from "./payment"

export const icons: IconData[] = [
  ...socialIcons,
  ...techIcons,
  ...aiIcons,
  ...cloudIcons,
  ...devtoolsIcons,
  ...frameworkIcons,
  ...mediaIcons,
  ...osIcons,
  ...paymentIcons,
]
