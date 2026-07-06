"use client";

import { products } from "./ProductData";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  return (
    <section className="bg-[#faf8f5] py-24">

      <div className="mx-auto max-w-[1550px] px-5">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <p className="font-semibold uppercase tracking-[6px] text-violet-600">
              Most Loved
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Best Sellers
            </h2>

            <p className="mt-4 max-w-xl text-zinc-500">
              Discover our most popular premium gifts loved by thousands of happy customers.
            </p>

          </div>

          <button className="rounded-full border border-zinc-300 px-8 py-4 font-semibold transition hover:bg-black hover:text-white">
            View All
          </button>

        </div>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              hoverImage={product.hoverImage}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={product.rating}
              reviews={product.reviews}
              badge={product.badge}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

