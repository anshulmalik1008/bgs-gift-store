"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  href: string;
  badge?: string;
}

export default function FeaturedCategoryCard({
  title,
  image,
  href,
  badge,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: .25,
      }}
    >
      <Link
        href={href}
        className="group flex flex-col items-center"
      >
        <div className="relative h-40 w-40 overflow-hidden rounded-full bg-[#FFF8F4] shadow-md transition duration-300 group-hover:shadow-xl">

          {badge && (
            <span className="absolute right-3 top-3 z-10 rounded-full bg-violet-600 px-2 py-1 text-[10px] font-bold text-white">
              {badge}
            </span>
          )}

          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-5 transition duration-500 group-hover:scale-110"
          />

        </div>

        <h3 className="mt-5 text-lg font-semibold text-zinc-800">
          {title}
        </h3>

      </Link>
    </motion.div>
  );
}

