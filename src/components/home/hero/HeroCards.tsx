"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Crown,
  Gift,
  Truck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HeroCards() {
  return (
    <div className="flex h-full flex-col gap-6">

      {/* Card 1 */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: .3,
        }}
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-violet-700 via-fuchsia-600 to-pink-500 p-7 text-white shadow-2xl"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-center justify-between">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">

              <Crown size={28} />

            </div>

            <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold tracking-[2px]">

              GOLD

            </span>

          </div>

          <h3 className="mt-8 text-3xl font-black">

            Become Gold Member

          </h3>

          <p className="mt-4 text-sm leading-7 text-white/90">

            Unlock premium gifts, exclusive prices,
            priority support and free gift wrapping.

          </p>

          <Link
            href="/membership"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Join Now

            <ArrowRight size={18} />

          </Link>

        </div>

      </motion.div>

      {/* Card 2 */}

      <motion.div
        whileHover={{
          y: -8,
        }}
        className="rounded-[32px] border border-zinc-200 bg-white p-7 shadow-xl"
      >

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-100">

            <Gift className="text-pink-600" />

          </div>

          <div>

            <p className="text-sm text-zinc-500">

              Today's Offer

            </p>

            <h3 className="text-2xl font-black">

              Flat 50% OFF

            </h3>

          </div>

        </div>

        <div className="mt-8 rounded-2xl bg-zinc-100 p-5">

          <div className="flex items-center gap-3">

            <Sparkles className="text-violet-600" />

            <span className="font-semibold">

              Premium Gift Hampers

            </span>

          </div>

        </div>

        <Link
          href="/offers"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-600"
        >
          Explore Offers

          <ArrowRight size={18} />

        </Link>

      </motion.div>

      {/* Card 3 */}

      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        className="rounded-[32px] bg-gradient-to-r from-orange-500 to-rose-500 p-7 text-white shadow-xl"
      >

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">

            <Truck size={28} />

          </div>

          <div>

            <h3 className="text-2xl font-black">

              Free Delivery

            </h3>

            <p className="text-white/80">

              Above ₹999

            </p>

          </div>

        </div>

      </motion.div>

    </div>
  );
}
