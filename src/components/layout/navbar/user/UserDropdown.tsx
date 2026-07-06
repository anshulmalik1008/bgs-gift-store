"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import ProfileCard from "./ProfileCard";
import MenuItem from "./MenuItems";
import { dropdownItems } from "./dropdownData";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}

      <button className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-violet-500 hover:shadow-lg">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 font-bold text-white">
          A
        </div>

        <div className="hidden text-left lg:block">
          <p className="text-sm font-semibold">
            My Account
          </p>

          <p className="text-xs text-zinc-500">
            Login / Signup
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />

      </button>

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 15,
            }}
            transition={{
              duration: .25,
            }}
            className="absolute right-0 top-16 z-50 w-[360px] overflow-hidden rounded-[30px] border border-zinc-200 bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,.15)]"
          >
            <ProfileCard />

            <div className="mt-6 space-y-2">
                              {dropdownItems.map((item) => (

                <MenuItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  icon={item.icon}
                  danger={item.danger}
                />

              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-zinc-100 p-5">

              <p className="text-xs uppercase tracking-[5px] text-zinc-500">
                Premium Benefits
              </p>

              <h3 className="mt-2 text-lg font-bold">
                Become BGS Gold Member
              </h3>

              <p className="mt-2 text-sm text-zinc-600">
                Enjoy free delivery, priority support,
                exclusive discounts and premium gift wrapping.
              </p>

              <button className="mt-5 w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold text-white transition hover:scale-[1.02]">
                Upgrade Now
              </button>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}
           
