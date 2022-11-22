import {
  Bars3Icon,
  CalendarIcon,
  HomeIcon,
  MegaphoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"
import { iNavigationItem } from "types"

export const adminRoutes: iNavigationItem[][] = [
  [
    { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
    { name: "Orders", href: "/orders", icon: CalendarIcon },
    { name: "Products", href: "/products", icon: CalendarIcon },
    { name: "Customers", href: "/customers", icon: UserGroupIcon },
  ],
  [
    {
      name: "Sellers Management",
      href: "/sellers",
      icon: UserGroupIcon,
    },
    {
      name: "Manage Influencers",
      href: "/influencers",
      icon: UserGroupIcon,
    },
  ],
  [{ name: "Announcements", href: "#", icon: MegaphoneIcon }],
]

export const sellerRoutes: iNavigationItem[][] = [
  [
    { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
    { name: "Orders", href: "/orders", icon: CalendarIcon },
    { name: "Products", href: "/products", icon: CalendarIcon },
    { name: "Locations", href: "/locations", icon: UserGroupIcon },
    { name: "Customers", href: "/customers", icon: UserGroupIcon },
  ],
  [{ name: "Announcements", href: "#", icon: MegaphoneIcon }],
]
