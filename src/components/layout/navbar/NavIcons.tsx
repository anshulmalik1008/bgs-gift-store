"use client";

import { Heart, ShoppingCart, } from "lucide-react";
import UserDropdown from "./user/UserDropdown";
export default function NavIcons() {

    return (

        <div className="flex items-center gap-6">

            <button className="relative">

                <Heart />

                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    2
                </span>

            </button>

            <button className="relative">

                <ShoppingCart />

                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-xs text-white">
                    1
                </span>

            </button>

          

                <UserDropdown />


           

        </div>

    );

}


