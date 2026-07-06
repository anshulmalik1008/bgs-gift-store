import { MenuCategory } from "./types";

export const menuData: MenuCategory[] = [
  {
    title: "Birthday",
    href: "/birthday",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=700",

    columns: [
      {
        heading: "Popular",
        items: [
          { title: "Luxury Gifts", href: "#" },
          { title: "Flowers", href: "#" },
          { title: "Cakes", href: "#" },
          { title: "Gift Hampers", href: "#" },
        ],
      },

      {
        heading: "Personalized",
        items: [
          { title: "Photo Frame", href: "#" },
          { title: "Mugs", href: "#" },
          { title: "LED Lamp", href: "#" },
          { title: "Cushions", href: "#" },
        ],
      },

      {
        heading: "Premium",
        items: [
          { title: "Perfumes", href: "#" },
          { title: "Watch", href: "#" },
          { title: "Wallet", href: "#" },
          { title: "Gift Box", href: "#" },
        ],
      },
    ],
  },
];

