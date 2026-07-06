"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navLinks } from "./navData";

export default function DesktopNav() {
  return (
    <nav className="hidden xl:flex items-center gap-8">

      {navLinks.map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ y: -2 }}
          className="group relative"
        >
          <Link
            href={item.href}
            className="flex items-center gap-1 text-[15px] font-medium text-zinc-800 transition-colors duration-300 hover:text-violet-600"
          >
            {item.title}
            <ChevronDown
              size={16}
              className="transition-transform duration-300 group-hover:rotate-180"
            />
          </Link>

          {/* Animated underline */}
          <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-violet-600 transition-all duration-300 group-hover:w-full" />

          {/* Mega Menu */}
          <div className="invisible absolute left-0 top-12 z-50 w-[700px] rounded-3xl border border-zinc-200 bg-white p-8 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="mb-4 font-semibold">Popular</h3>
                <ul className="space-y-3 text-sm text-zinc-600">
                  <li><Link href="#">Luxury Gifts</Link></li>
                  <li><Link href="#">Gift Hampers</Link></li>
                  <li><Link href="#">Photo Frames</Link></li>
                  <li><Link href="#">Perfumes</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold">Occasions</h3>
                <ul className="space-y-3 text-sm text-zinc-600">
                  <li><Link href="#">Birthday</Link></li>
                  <li><Link href="#">Wedding</Link></li>
                  <li><Link href="#">Anniversary</Link></li>
                  <li><Link href="#">Congratulations</Link></li>
                </ul>
              </div>

              <div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1512909006721-3d6018887383?w=600"
                    alt="Gift Collection"
                    className="h-56 w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

    </nav>
  );
}
