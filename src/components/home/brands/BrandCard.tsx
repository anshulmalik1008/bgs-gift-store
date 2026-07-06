"use client";

import Image from "next/image";

interface Props {
  name: string;
  logo: string;
}

export default function BrandCard({
  name,
  logo,
}: Props) {
  return (
    <div className="flex h-28 items-center justify-center rounded-3xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <Image
        src={logo}
        alt={name}
        width={150}
        height={60}
        className="h-10 w-auto object-contain"
      />

    </div>
  );
}
