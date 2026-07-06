"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroContentProps {
  title: string;
  subtitle: string;
  description: string;
  button: string;
  href: string;
  badge: string;
}

export default function HeroContent({
  title,
  subtitle,
  description,
  button,
  href,
  badge,
}: HeroContentProps) {
  return (
    <div className="absolute left-8 top-1/2 z-20 max-w-[650px] -translate-y-1/2 lg:left-16">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl"
      >
        <Sparkles size={18} className="text-yellow-300" />

        <span className="text-sm font-semibold uppercase tracking-[3px] text-white">
          {badge}
        </span>
      </motion.div>

      {/* Subtitle */}

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-lg font-semibold uppercase tracking-[8px] text-pink-300"
      >
        {subtitle}
      </motion.p>

      {/* Title */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-5 text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl"
      >
        {title}
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 max-w-xl text-base leading-8 text-white/90 md:text-lg"
      >
        {description}
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-10 flex flex-wrap gap-5"
      >
        <Link
          href={href}
          className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:scale-105"
        >
          {button}

          <ArrowRight
            size={20}
            className="transition group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="/collections"
          className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black"
        >
          Explore Collection
        </Link>
      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 flex flex-wrap gap-8"
      >
        <div>
          <h3 className="text-3xl font-black text-white">1M+</h3>
          <p className="text-sm text-white/80">Happy Customers</p>
        </div>

        <div>
          <h3 className="text-3xl font-black text-white">20K+</h3>
          <p className="text-sm text-white/80">Premium Gifts</p>
        </div>

        <div>
          <h3 className="text-3xl font-black text-white">4.9★</h3>
          <p className="text-sm text-white/80">Customer Rating</p>
        </div>
      </motion.div>

    </div>
  );
}
