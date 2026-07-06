"use client";

import OccasionCard from "./OccasionCard";
import { occasions } from "./occasionData";

export default function Occasion() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-[1550px] px-5">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-pink-600">
            Gifts For Every Moment
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Shop By Occasion
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-500">
            Find the perfect premium gift for every celebration and make every moment unforgettable.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4 xl:grid-cols-8">

          {occasions.map((item) => (
            <OccasionCard
              key={item.id}
              title={item.title}
              image={item.image}
              href={item.href}
              color={item.color}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
