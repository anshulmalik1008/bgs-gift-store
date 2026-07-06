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
}

export default function PersonalisedCard({
  title,
  subtitle,
  image,
  href,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: .3 }}
      className="group"
    >
      <Link href={href}>

        <div className="overflow-hidden rounded-[35px] bg-white shadow-xl">

          <div className="relative h-[320px]">

            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

          </div>

          <div className="p-7">

            <p className="uppercase tracking-[4px] text-xs text-violet-600">

              {subtitle}

            </p>

            <h3 className="mt-3 text-2xl font-bold">

              {title}

            </h3>

            <div className="mt-6 inline-flex items-center gap-3 font-semibold">

              Personalise Now

              <ArrowRight size={18} />

            </div>

          </div>

        </div>

      </Link>

    </motion.div>
  );
}
