"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  href: string;
  icon: React.ReactNode;
  danger?: boolean;
}

export default function MenuItem({
  title,
  href,
  icon,
  danger,
}: Props) {
  return (
    <motion.div whileHover={{ x: 6 }}>
      <Link
        href={href}
        className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          danger
            ? "text-red-500 hover:bg-red-50"
            : "text-zinc-700 hover:bg-zinc-100"
        }`}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
      </Link>
    </motion.div>
  );
}

