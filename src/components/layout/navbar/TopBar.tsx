"use client";

import { Gift, Truck, Sparkles } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-black text-white">

      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-sm">

        <div className="flex items-center gap-2">
          <Gift size={15} />
          <span>Premium Gifting Experience</span>
        </div>

        <div className="flex items-center gap-2">
          <Truck size={15} />
          <span>Free Delivery Above ₹999</span>
        </div>

        <div className="flex items-center gap-2">
          <Sparkles size={15} />
          <span>Luxury Packaging Included</span>
        </div>

      </div>

    </div>
  );
}

