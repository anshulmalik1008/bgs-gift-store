"use client";

import Image from "next/image";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  hover: string;
  price: number;
  oldPrice: number;
  badge: string;
  rating: number;
}

export default function TrendingCard(props: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[30px] bg-white shadow-xl"
    >
      <div className="relative h-[360px] overflow-hidden">

        <Image
          src={props.image}
          alt={props.title}
          fill
          className="object-cover transition duration-700 group-hover:opacity-0"
        />

        <Image
          src={props.hover}
          alt={props.title}
          fill
          className="object-cover opacity-0 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
        />

        <span className="absolute left-5 top-5 rounded-full bg-red-500 px-4 py-2 text-xs font-bold text-white">
          {props.badge}
        </span>

        <div className="absolute right-5 top-5 flex flex-col gap-3 opacity-0 transition group-hover:opacity-100">

          <button className="rounded-full bg-white p-3 shadow-lg">
            <Heart size={18} />
          </button>

          <button className="rounded-full bg-white p-3 shadow-lg">
            <Eye size={18} />
          </button>

          <button className="rounded-full bg-black p-3 text-white shadow-lg">
            <ShoppingBag size={18} />
          </button>

        </div>

      </div>

      <div className="p-6">

        <div className="mb-3 flex items-center gap-2">

          <Star
            size={18}
            fill="#FFD54A"
            className="text-yellow-400"
          />

          <span>{props.rating}</span>

        </div>

        <h3 className="text-xl font-bold">
          {props.title}
        </h3>

        <div className="mt-4 flex items-center gap-3">

          <span className="text-2xl font-black">
            ₹{props.price}
          </span>

          <span className="text-zinc-400 line-through">
            ₹{props.oldPrice}
          </span>

        </div>

        <button className="mt-6 w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 font-bold text-white transition hover:scale-[1.02]">
          Add To Cart
        </button>

      </div>

    </motion.div>
  );
}

