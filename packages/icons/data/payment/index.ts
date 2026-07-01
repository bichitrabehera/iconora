import type { IconData } from "../../types"
import { auth0IconData } from "./auth0.data"
import { coinbaseIconData } from "./coinbase.data"
import { paypalIconData } from "./paypal.data"
import { stripeIconData } from "./stripe.data"

export type { IconData }

export {
  auth0IconData,
  coinbaseIconData,
  paypalIconData,
  stripeIconData,
}

export const paymentIcons: IconData[] = [
  auth0IconData,
  coinbaseIconData,
  paypalIconData,
  stripeIconData,
]
