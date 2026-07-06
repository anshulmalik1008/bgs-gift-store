"use client";

import LuxuryCard from "./LuxuryCard";
import { luxuryCollections } from "./luxuryData";

export default function LuxuryCollection() {
  return (
    <section className="bg-[#faf8f5] py-24">

      <div className="mx-auto max-w-[1550px] px-5">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[6px] text-violet-600">
            Exclusive Gifts
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Luxury Collections
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-zinc-500">
            Curated premium gifts designed to make every celebration unforgettable.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {luxuryCollections.map((item) => (
            <LuxuryCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
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
