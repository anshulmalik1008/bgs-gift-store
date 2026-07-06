"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";

interface Props {
  title: string;
}

export default function CategoryCard({ title }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-xl transition"
    >
      <Gift className="mb-4 text-violet-600" />

      <h2 className="font-semibold">

        {title}

      </h2>

    </motion.div>
  );
}

