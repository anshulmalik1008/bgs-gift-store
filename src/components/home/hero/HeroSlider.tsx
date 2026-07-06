"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import { heroSlides } from "./heroData";

export default function HeroSlider() {

  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (

    <>

      <div className="relative">

        <Swiper

          modules={[Autoplay, Navigation, Pagination]}

          slidesPerView={1}

          loop

          speed={900}

          onSwiper={setSwiper}

          onSlideChange={(swiper) => {

            setActiveIndex(swiper.realIndex);

          }}

          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}

          pagination={{
            clickable: true,
          }}

          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}

          className="rounded-[40px]"

        >

          {heroSlides.map((slide) => (

            <SwiperSlide key={slide.id}>

              <div className="relative h-[650px] overflow-hidden rounded-[40px]">

                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20`}
                />

                <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-pink-500/20 blur-[120px]" />

                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

                <HeroContent

                  title={slide.title}

                  subtitle={slide.subtitle}

                  description={slide.description}

                  button={slide.button}

                  href={slide.href}

                  badge={slide.badge}

                />

                {/* Premium Membership Card */}

                <motion.div

                  initial={{
                    opacity:0,
                    x:60
                  }}

                  animate={{
                    opacity:1,
                    x:0
                  }}

                  transition={{
                    delay:.8
                  }}

                  className="absolute right-10 top-10 hidden w-[320px] rounded-[32px] border border-white/20 bg-white/10 p-7 backdrop-blur-2xl xl:block"

                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs uppercase tracking-[3px] text-pink-200">

                        Premium Club

                      </p>

                      <h3 className="mt-2 text-3xl font-black text-white">

                        Gold Rewards

                      </h3>

                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl">

                      👑

                    </div>

                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-white/10 p-5">

                      <h4 className="text-4xl font-black text-white">

                        50%

                      </h4>

                      <p className="mt-2 text-sm text-white/80">

                        Discount

                      </p>

                    </div>

                    <div className="rounded-2xl bg-white/10 p-5">

                      <h4 className="text-4xl font-black text-white">

                        FREE

                      </h4>

                      <p className="mt-2 text-sm text-white/80">

                        Wrapping

                      </p>

                    </div>

                  </div>

                </motion.div>

                                {/* Rating Card */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1,
                  }}
                  className="absolute bottom-10 left-10 hidden items-center gap-5 rounded-3xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-xl lg:flex"
                >
                  <div className="text-5xl">
                    ⭐
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">
                      4.9 Rating
                    </h4>

                    <p className="text-white/80">
                      1,00,000+ Happy Customers
                    </p>
                  </div>
                </motion.div>

                {/* Delivery Card */}

                <motion.div
                  initial={{
                    scale: .5,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.2,
                  }}
                  className="absolute bottom-12 right-10 hidden rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-4 shadow-2xl xl:flex"
                >
                  <div className="flex items-center gap-4">

                    <span className="text-3xl">

                      🚚

                    </span>

                    <div>

                      <p className="text-sm text-white/80">

                        Free Delivery

                      </p>

                      <h3 className="font-bold text-white">

                        Above ₹999

                      </h3>

                    </div>

                  </div>

                </motion.div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        {/* Navigation */}

        <button
          className="hero-prev absolute left-6 top-1/2 z-40 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-white hover:text-black lg:flex"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          className="hero-next absolute right-6 top-1/2 z-40 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-white hover:text-black lg:flex"
        >
          <ChevronRight size={28} />
        </button>

        {/* Progress */}

        <div className="absolute bottom-0 left-0 z-30 h-1 w-full bg-white/10">

          <motion.div
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full bg-gradient-to-r from-pink-500 via-violet-500 to-fuchsia-500"
          />

        </div>

      </div>

      {/* Bottom Thumbnails */}

      <div className="mt-8 flex justify-center">

        <div className="flex gap-5 overflow-x-auto pb-2">

          {heroSlides.map((slide, index) => (

            <button

              key={slide.id}

              onClick={() => swiper?.slideToLoop(index)}

              className={`overflow-hidden rounded-3xl border-2 transition-all duration-300

              ${
                activeIndex === index
                  ? "scale-105 border-pink-500 shadow-2xl"
                  : "border-transparent opacity-70 hover:opacity-100"
              }

              `}
            >

              <Image

                src={slide.image}

                alt={slide.title}

                width={180}

                height={110}

                className="h-24 w-40 object-cover transition duration-500 hover:scale-110"

              />

            </button>

          ))}

        </div>

      </div>

    </>

  );

}
