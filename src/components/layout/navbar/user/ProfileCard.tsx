"use client";

import { Crown } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 p-6 text-white">

      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex items-center gap-4">

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="avatar"
          className="h-16 w-16 rounded-full border-4 border-white object-cover"
        />

        <div>

          <h2 className="text-lg font-bold">
            Anshul Malik
          </h2>

          <p className="text-sm text-white/80">
            Premium Member
          </p>

        </div>

      </div>

      <div className="mt-5 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-xl">

        <Crown size={16} />

        Gold Rewards Member

      </div>

    </div>
  );
}

