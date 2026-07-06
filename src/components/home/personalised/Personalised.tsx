"use client";

import { personalisedProducts } from "./personalisedData";
import PersonalisedCard from "./PersonalisedCard";

export default function Personalised() {
  return (
    <section className="bg-[#faf8f5] py-24">

      <div className="mx-auto max-w-[1550px] px-5">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[6px] text-fuchsia-600">
            Made For You
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Personalised Gifts
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-500">
            Turn your memories into unforgettable gifts with our personalised collection.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {personalisedProducts.map((item) => (

            <PersonalisedCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              href={item.href}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

