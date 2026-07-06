"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import FeaturedCategoryCard from "./FeaturedCategoryCard";
import { featuredCategories } from "./categoryData";

export default function FeaturedCategories() {

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (

    <section className="py-12 bg-[#fff8f5]">

      <div className="mx-auto max-w-[1550px] px-5">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-4xl font-black">

              Premium Collections

            </h2>

            <p className="mt-2 text-zinc-500">

              Handpicked Luxury Categories

            </p>

          </div>

          <div className="flex gap-3">

            <button
              onClick={scrollLeft}
              className="flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow transition hover:shadow-lg"
            >

              <ChevronLeft />

            </button>

            <button
              onClick={scrollRight}
              className="flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow transition hover:shadow-lg"
            >

              <ChevronRight />

            </button>

          </div>

        </div>

        <motion.div

          ref={sliderRef}

          className="flex gap-8 overflow-x-auto scroll-smooth pb-4"

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.5
          }}

        >

          {featuredCategories.map((item)=>(

            <div
              key={item.id}
              className="flex-shrink-0"
            >

              <FeaturedCategoryCard

                title={item.title}

                image={item.image}

                href={item.href}

                badge={item.badge}

              />

            </div>

          ))}

        </motion.div>

      </div>

    </section>

  );

}
