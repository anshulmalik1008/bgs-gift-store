"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  ShoppingBag,
  User,
  Gift,
} from "lucide-react";

const categories = [
  {
    title: "Birthday",
    items: ["Flowers", "Cakes", "Gift Hampers", "Personalised"],
  },
  {
    title: "Anniversary",
    items: ["Luxury Gifts", "Perfumes", "Jewellery", "Plants"],
  },
  {
    title: "Occasions",
    items: ["Wedding", "Baby Shower", "Congratulations", "Festival"],
  },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {/* Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="xl:hidden"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>

        {open && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: .6 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />

            {/* Drawer */}

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
              }}
              className="fixed left-0 top-0 z-50 h-screen w-[340px] overflow-y-auto bg-white"
            >

              {/* Header */}

              <div className="flex items-center justify-between border-b p-6">

                <div>

                  <h2 className="text-2xl font-bold">
                    BGS
                  </h2>

                  <p className="text-sm text-zinc-500">
                    Premium Gifts
                  </p>

                </div>

                <button onClick={() => setOpen(false)}>

                  <X />

                </button>

              </div>

              {/* User Card */}

              <div className="m-5 rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-5 text-white">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-violet-600">

                    <User />

                  </div>

                  <div>

                    <h3 className="font-semibold">

                      Welcome

                    </h3>

                    <p className="text-sm text-white/80">

                      Login / Signup

                    </p>

                  </div>

                </div>

              </div>

              {/* Categories */}

              <div className="px-5">

  {categories.map((category, index) => (

    <div
      key={category.title}
      className="border-b border-zinc-200 py-2"
    >

      <button
        onClick={() =>
          setActive(active === index ? null : index)
        }
        className="flex w-full items-center justify-between py-3"
      >

        <span className="font-medium text-zinc-800">
          {category.title}
        </span>

        <ChevronDown
          size={18}
          className={`transition ${
            active === index ? "rotate-180" : ""
          }`}
        />

      </button>

      <AnimatePresence>

        {active === index && (

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >

            <div className="space-y-2 pb-4">

              {category.items.map((item) => (

                <Link
                  key={item}
                  href="#"
                  className="block rounded-xl px-3 py-2 text-sm text-zinc-600 transition hover:bg-violet-50 hover:text-violet-600"
                >
                  {item}
                </Link>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  ))}

</div>

{/* Quick Links */}

<div className="mt-6 px-5">

  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-zinc-500">
    Quick Access
  </h4>

  <div className="space-y-3">

    <Link
      href="/wishlist"
      className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-zinc-100"
    >
      <Heart className="text-pink-500" size={20} />
      <span>Wishlist</span>
    </Link>

    <Link
      href="/cart"
      className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-zinc-100"
    >
      <ShoppingBag className="text-violet-600" size={20} />
      <span>Shopping Cart</span>
    </Link>

    <Link
      href="/orders"
      className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-zinc-100"
    >
      <Gift className="text-amber-500" size={20} />
      <span>My Orders</span>
    </Link>

  </div>

</div>

{/* Premium Card */}

<div className="m-5 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-black p-6 text-white">

  <p className="text-xs uppercase tracking-[5px] text-zinc-400">
    BGS GOLD
  </p>

  <h3 className="mt-2 text-2xl font-bold">
    Premium Membership
  </h3>

  <p className="mt-3 text-sm leading-6 text-zinc-300">
    Free delivery, exclusive discounts,
    luxury packaging and priority support.
  </p>

  <button className="mt-5 w-full rounded-full bg-white py-3 font-semibold text-black transition hover:scale-[1.02]">
    Join Now
  </button>

</div>
{/* Footer */}

<div className="mt-8 border-t border-zinc-200 p-5">

  <div className="grid grid-cols-2 gap-3">

    <Link
      href="/about"
      className="rounded-xl bg-zinc-100 p-3 text-center text-sm font-medium transition hover:bg-violet-100 hover:text-violet-600"
    >
      About Us
    </Link>

    <Link
      href="/contact"
      className="rounded-xl bg-zinc-100 p-3 text-center text-sm font-medium transition hover:bg-violet-100 hover:text-violet-600"
    >
      Contact
    </Link>

    <Link
      href="/privacy"
      className="rounded-xl bg-zinc-100 p-3 text-center text-sm font-medium transition hover:bg-violet-100 hover:text-violet-600"
    >
      Privacy
    </Link>

    <Link
      href="/terms"
      className="rounded-xl bg-zinc-100 p-3 text-center text-sm font-medium transition hover:bg-violet-100 hover:text-violet-600"
    >
      Terms
    </Link>

  </div>

  {/* Social Icons */}

  <div className="mt-8 flex items-center justify-center gap-4">

    {["📘", "📷", "▶️", "💼"].map((icon, index) => (

      <motion.button
        key={index}
        whileHover={{
          scale: 1.15,
          y: -4,
        }}
        whileTap={{
          scale: .95,
        }}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-xl shadow-sm transition hover:border-violet-500 hover:shadow-lg"
      >
        {icon}
      </motion.button>

    ))}

  </div>

  {/* App Download */}

  <div className="mt-8 space-y-3">

    <button className="w-full rounded-2xl bg-black py-3 text-white transition hover:bg-zinc-800">
      Download on App Store
    </button>

    <button className="w-full rounded-2xl bg-violet-600 py-3 text-white transition hover:bg-violet-700">
      Get it on Google Play
    </button>

  </div>

  {/* Copyright */}

  <div className="mt-8 border-t border-zinc-200 pt-5 text-center">

    <p className="text-xs text-zinc-500">
      © 2026 BGS Premium Gifts
    </p>

    <p className="mt-1 text-xs text-zinc-400">
      Crafted with ❤️ using Next.js & TypeScript
    </p>

  </div>

</div>

            </motion.div>

          </>
        )}

      </AnimatePresence>

    </>

  );

}


