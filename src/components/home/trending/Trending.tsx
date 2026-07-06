"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import TrendingCard from "./TrendingCard";
import { trendingProducts } from "./TrendingData";

export default function Trending() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-[1550px] px-5">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <p className="uppercase tracking-[6px] font-semibold text-pink-600">
              Hot Collection
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Trending Gifts
            </h2>

          </div>

        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={4}
          autoplay={{
            delay: 3500,
          }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >

          {trendingProducts.map((item) => (

            <SwiperSlide key={item.id}>

              <TrendingCard {...item} />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}
