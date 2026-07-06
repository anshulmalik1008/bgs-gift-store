"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  href: string;
}

export default function CategoryItem({
  title,
  image,
  href,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Link
        href={href}
        className="group flex flex-col items-center justify-center gap-3 border-r border-pink-200 px-6 py-4 last:border-none"
      >
        <div className="relative h-16 w-16 overflow-hidden rounded-full bg-pink-50 transition group-hover:bg-pink-100">

          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-3 transition duration-300 group-hover:scale-110"
          />

        </div>

        <span className="text-center text-[15px] font-medium text-zinc-700 group-hover:text-pink-600">
          {title}
        </span>
      </Link>
    </motion.div>
  );
}

