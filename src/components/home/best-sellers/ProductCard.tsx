"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {

Heart,

ShoppingCart,

Eye,

Star,

} from "lucide-react";

interface Props{

title:string;

image:string;

hoverImage:string;

price:number;

oldPrice:number;

rating:number;

reviews:number;

badge:string;

}

export default function ProductCard({

title,

image,

hoverImage,

price,

oldPrice,

rating,

reviews,

badge,

}:Props){

return(

<motion.div

whileHover={{y:-10}}

className="group overflow-hidden rounded-[30px] border bg-white shadow-lg transition"

>

<div className="relative h-[340px] overflow-hidden">

<Image

src={image}

alt={title}

fill

className="object-cover transition duration-700 group-hover:opacity-0"

/>

<Image

src={hoverImage}

alt={title}

fill

className="object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-110"

/>

<div className="absolute left-5 top-5 rounded-full bg-black px-4 py-2 text-xs font-bold text-white">

{badge}

</div>

<button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg">

<Heart size={18}/>

</button>

<div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3 opacity-0 transition duration-500 group-hover:opacity-100">

<button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">

<Eye size={20}/>

</button>

<button className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-xl">

<ShoppingCart size={20}/>

</button>

</div>

</div>

<div className="p-6">

<div className="flex items-center gap-2">

<Star fill="#FFD700" className="text-yellow-400" size={18}/>

<span className="font-semibold">

{rating}

</span>

<span className="text-zinc-500">

({reviews})

</span>

</div>

<h3 className="mt-3 text-xl font-bold">

{title}

</h3>

<div className="mt-4 flex items-center gap-4">

<p className="text-2xl font-black">

₹{price}

</p>

<p className="text-zinc-400 line-through">

₹{oldPrice}

</p>

</div>

        <div className="mt-6 flex flex-wrap gap-2">

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            🚚 Free Delivery
          </span>

          <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
            🎁 Gift Wrapped
          </span>

        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          className="mt-6 w-full rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 py-4 font-bold text-white shadow-lg transition"
        >
          Add To Cart
        </motion.button>

      </div>

    </motion.div>

  );

}
