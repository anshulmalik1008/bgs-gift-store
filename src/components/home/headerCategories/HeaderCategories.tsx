"use client";

import { motion } from "framer-motion";

import CategoryItem from "./CategoriesItem";
import { headerCategories } from "./CategoryData";
export default function HeaderCategories() {
  return (
    <section className="bg-white py-6">

      <div className="mx-auto max-w-[1550px] px-5">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .5,
          }}
          className="overflow-x-auto rounded-[30px] border border-pink-200 bg-white shadow-sm"
        >

          <div className="flex min-w-max items-center">

            {headerCategories.map((item) => (

              <CategoryItem
                key={item.id}
                title={item.title}
                image={item.image}
                href={item.href}
              />

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}
