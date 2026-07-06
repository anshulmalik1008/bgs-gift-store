import Link from "next/link";
import { MenuColumn } from "./types";

interface Props {
  column: MenuColumn;
}

export default function MegaMenuColumn({ column }: Props) {
  return (
    <div>

      <h3 className="font-bold text-zinc-900 mb-5">

        {column.heading}

      </h3>

      <div className="space-y-4">

        {column.items.map((item) => (

          <Link
            key={item.title}
            href={item.href}
            className="block text-sm text-zinc-500 transition hover:text-violet-600"
          >
            {item.title}
          </Link>

        ))}

      </div>

    </div>
  );
}

