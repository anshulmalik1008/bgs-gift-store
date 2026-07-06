"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import BrandCard from "./BrandCard";
import { brands } from "./brandData";

export default function Brands() {
  return (
    <section className="bg-white py-16">

      <div className="mx-auto max-w-[1550px] px-5">

        <div className="mb-10 text-center">

          <p className="uppercase tracking-[6px] text-violet-600 font-semibold">
            Trusted By
          </p>

          <h2 className="mt-4 text-5xl font-black">
            India's Leading Brands
          </h2>

          <p className="mt-4 text-zinc-500">
            10,000+ Companies Trust BGS Premium Gifts
          </p>

        </div>

        <Swiper
          modules={[Autoplay]}
          loop
          spaceBetween={24}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
            1400: {
              slidesPerView: 6,
            },
          }}
        >

          {brands.map((brand) => (

            <SwiperSlide key={brand.id}>

              <BrandCard
                name={brand.name}
                logo={brand.logo}
              />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

