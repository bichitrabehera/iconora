import type { IconData } from "../../types"
import { awsIconData } from "./aws.data"
import { azureIconData } from "./azure.data"
import { cloudflareIconData } from "./cloudflare.data"
import { firebaseIconData } from "./firebase.data"
import { mongodbIconData } from "./mongodb.data"
import { planetscaleIconData } from "./planetscale.data"
import { supabaseIconData } from "./supabase.data"
import { vercelIconData } from "./vercel.data"

export type { IconData }

export {
  awsIconData,
  azureIconData,
  cloudflareIconData,
  firebaseIconData,
  mongodbIconData,
  planetscaleIconData,
  supabaseIconData,
  vercelIconData,
}

export const cloudIcons: IconData[] = [
  awsIconData,
  azureIconData,
  cloudflareIconData,
  firebaseIconData,
  mongodbIconData,
  planetscaleIconData,
  supabaseIconData,
  vercelIconData,
]
