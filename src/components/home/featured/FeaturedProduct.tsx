"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import FeaturedCard from "./FeaturedCard";
import { featuredProducts } from "./FeaturedData";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-[1550px] px-5">

        <div className="mb-14 flex items-center justify-between">

          <div>

            <p className="font-semibold uppercase tracking-[6px] text-violet-600">
              BGS Collection
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Featured Corporate Gifts
            </h2>

          </div>

          <button className="rounded-full border px-6 py-3 font-semibold hover:bg-black hover:text-white transition">
            View All →
          </button>

        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={25}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {featuredProducts.map((item) => (
            <SwiperSlide key={item.id}>
              <FeaturedCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}
