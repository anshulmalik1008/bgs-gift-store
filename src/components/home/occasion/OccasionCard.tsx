"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  href: string;
  color: string;
}

export default function OccasionCard({
  title,
  image,
  href,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group"
    >
      <Link href={href}>

        <div className="relative h-44 w-44 overflow-hidden rounded-full shadow-2xl">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className={`absolute inset-0 bg-gradient-to-b ${color} opacity-40`} />

          <div className="absolute inset-0 bg-black/20" />

        </div>

        <h3 className="mt-5 text-center text-lg font-bold">
          {title}
        </h3>

      </Link>
    </motion.div>
  );
}
