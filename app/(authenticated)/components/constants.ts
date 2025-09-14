import { Home, User, Wallet } from "lucide-react"
import { ROUTES } from "@/constants/routes"

export const NAV_ITEMS = [
  {
    title: "Dashboard",
    url: ROUTES.Dashboard(),
    icon: Home,
  },
  {
    title: "Accounts",
    url: ROUTES.Accounts(),
    icon: Wallet,
  },
  {
    title: "Profile",
    url: ROUTES.Profile(),
    icon: User,
  },
]
