"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  href: string;
}

export default function BudgetCard({
  title,
  subtitle,
  icon,
  color,
  href,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      <Link href={href}>

        <div
          className={`group rounded-[30px] bg-gradient-to-r ${color} p-8 shadow-lg transition-all duration-300 hover:shadow-2xl`}
        >

          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-lg">
            {icon}
          </div>

          <h3 className="text-2xl font-black text-zinc-800">
            {title}
          </h3>

          <p className="mt-2 text-zinc-600">
            {subtitle}
          </p>

          <div className="mt-8 flex items-center gap-2 font-semibold text-violet-700 transition-all group-hover:gap-4">
            View Products
            <ArrowRight size={18} />
          </div>

        </div>

      </Link>
    </motion.div>
  );
}
