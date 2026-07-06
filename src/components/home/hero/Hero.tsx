"use client";

import HeroSlider from "./HeroSlider";
import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <section className="bg-[#faf8f5] py-10">

      <div className="mx-auto max-w-[1550px] px-5">

        <div className="grid grid-cols-12 gap-6">

          {/* Left Hero Slider */}

          <div className="col-span-12 xl:col-span-9">

            <HeroSlider />

          </div>

          {/* Right Premium Cards */}

          <div className="col-span-12 xl:col-span-3">

            <HeroCards />

          </div>

        </div>

      </div>

    </section>
  );
}

