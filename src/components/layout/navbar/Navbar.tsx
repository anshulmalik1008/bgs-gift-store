"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import DesktopNav from "./DesktopNav";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <>
      <TopBar />

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-2xl"
      >
        <div className="mx-auto flex h-20 max-w-[1450px] items-center justify-between px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.08 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-xl font-bold text-white shadow-lg"
            >
              B
            </motion.div>

            <div>
              <h2 className="text-2xl font-bold tracking-wide">
                BGS
              </h2>

              <p className="-mt-1 text-[11px] uppercase tracking-[4px] text-zinc-500">
                Premium Gifts
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <DesktopNav />

          {/* Search */}
          <SearchBar />

          {/* Icons */}
          <NavIcons />

        </div>
      </motion.header>
    </>
  );
}

