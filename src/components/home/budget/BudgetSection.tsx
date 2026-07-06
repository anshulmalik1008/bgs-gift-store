"use client";

import BudgetCard from "./BudgetCard";
import { budgetItems } from "./budgetData";

export default function BudgetSection() {
  return (
    <section className="bg-[#fafafa] py-24">

      <div className="mx-auto max-w-[1550px] px-5">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[6px] text-violet-600">
            Shop Smart
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Shop By Budget
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-500">
            Discover premium gifts that perfectly match your budget.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {budgetItems.map((item) => (
            <BudgetCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              color={item.color}
              href={item.href}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
