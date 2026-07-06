import {
  Package,
  Heart,
  User,
  MapPin,
  Bell,
  CreditCard,
  LogOut,
  Settings,
} from "lucide-react";

export const dropdownItems = [
  {
    title: "My Profile",
    href: "/profile",
    icon: <User size={18} />,
  },

  {
    title: "My Orders",
    href: "/orders",
    icon: <Package size={18} />,
  },

  {
    title: "Wishlist",
    href: "/wishlist",
    icon: <Heart size={18} />,
  },

  {
    title: "Saved Address",
    href: "/address",
    icon: <MapPin size={18} />,
  },

  {
    title: "Notifications",
    href: "/notifications",
    icon: <Bell size={18} />,
  },

  {
    title: "Payment Methods",
    href: "/payments",
    icon: <CreditCard size={18} />,
  },

  {
    title: "Settings",
    href: "/settings",
    icon: <Settings size={18} />,
  },

  {
    title: "Logout",
    href: "/logout",
    icon: <LogOut size={18} />,
    danger: true,
  },
];

