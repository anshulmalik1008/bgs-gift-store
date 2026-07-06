"use client";

import { Search } from "lucide-react";

export default function SearchBar() {

    return (

        <div className="hidden lg:flex items-center w-[430px] h-12 rounded-full bg-zinc-100 border border-zinc-200 px-5 transition-all duration-300 hover:border-violet-500">

            <Search size={18} />

            <input
                type="text"
                placeholder="Search gifts, flowers, cakes..."
                className="ml-3 w-full bg-transparent outline-none text-sm"
            />

        </div>

    );

}

