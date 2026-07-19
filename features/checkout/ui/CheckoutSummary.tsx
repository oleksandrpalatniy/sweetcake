"use client";

import { useMemo } from "react";

import { useCartStore } from "@/features/cart/model/cartStore";

export default function CheckoutSummary() {
  const items = useCartStore((state) => state.items);

  const total = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    [items]
  );

  if (items.length === 0) {
    return (
      <>
        <h2 className="text-2xl font-bold">
          Ваше замовлення
        </h2>

        <p className="mt-6 text-gray-500">
          Кошик порожній.
        </p>
      </>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold">
        Ваше замовлення
      </h2>

      <div className="mt-6 space-y-5">

        {items.map((item) => (
          <div
            key={`${item.id}-${item.weight}`}
            className="border-b pb-4"
          >
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {item.weight} кг × {item.quantity}
            </p>

            <p className="mt-2 font-bold text-pink-600">
              {item.price * item.quantity} грн
            </p>
          </div>
        ))}

      </div>

      <div className="mt-8 border-t pt-6">

        <div className="flex items-center justify-between text-lg font-semibold">
          <span>Разом</span>

          <span className="text-2xl text-pink-600">
            {total} грн
          </span>
        </div>

      </div>
    </>
  );
}