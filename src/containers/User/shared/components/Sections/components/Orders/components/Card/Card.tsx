"use client";

import { UserOrder } from "@modules/order/domain";
import clsx from "clsx";
import { Date, InfoCard, Name, Products } from "./components";

interface Props {
  order: UserOrder;
  handleOpen(): void;
}

export default function Card({ order, handleOpen }: Props) {
  const CLASS = clsx(
    "flex flex-col",
    "px-7 py-5",
    "border-[2px] border-gray-200",
    "rounded",
    "cursor-pointer",
    "transition-all duration-200",

    "hover:border-blue-500 hover:shadow-input"
  );

  return (
    <article className={CLASS} onClick={handleOpen}>
      <section className="mb-3">
        <Name name={order.name} />
        <Date date={order.dateStr} />
      </section>

      <Products products={order.products} />

      <section className="flex justify-end gap-x-6">
        <InfoCard
          title="Productos"
          content={`${order.products.length} Productos`}
        />
        <InfoCard title="Precio total" content={order.amountStr} />
      </section>
    </article>
  );
}
