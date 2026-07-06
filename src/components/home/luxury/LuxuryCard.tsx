"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  color: string;
}

export default function LuxuryCard({
  title,
  subtitle,
  image,
  href,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group"
    >
      <Link href={href}>
        <div className="relative h-[420px] overflow-hidden rounded-[40px]">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-70`} />

          <div className="absolute bottom-0 left-0 w-full p-10">

            <p className="uppercase tracking-[4px] text-sm text-white/80">
              {subtitle}
            </p>

            <h2 className="mt-4 text-4xl font-black text-white">
              {title}
            </h2>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition group-hover:gap-5">
              Shop Now
              <ArrowRight size={20} />
            </div>

          </div>

        </div>
      </Link>
    </motion.div>
  );
}
