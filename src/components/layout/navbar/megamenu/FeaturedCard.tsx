import Image from "next/image";

interface Props {
  image: string;
}

export default function FeaturedCard({ image }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl">

      <Image
        src={image}
        alt=""
        width={600}
        height={500}
        className="h-[280px] w-full object-cover duration-500 hover:scale-110"
      />

    </div>
  );
}

