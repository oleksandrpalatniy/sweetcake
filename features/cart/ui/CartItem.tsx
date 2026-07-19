"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

import { useCartStore } from "../model/cartStore";

interface Props {
  item: {
    id: number;
    title: string;
    image: string;
    weight: number;
    price: number;
    quantity: number;
  };
}

export default function CartItem({ item }: Props) {
  const removeItem = useCartStore((state) => state.removeItem);
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );
  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  return (
    <div className="flex gap-4 rounded-2xl border bg-white p-4 shadow-sm">
      <Image
        src={item.image}
        alt={item.title}
        width={90}
        height={90}
        className="rounded-xl object-cover"
      />

      <div className="flex flex-1 flex-col">
        <h3 className="font-semibold text-gray-900">
          {item.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Вага: {item.weight} кг
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-pink-600">
            {item.price} грн
          </span>

          <button
            onClick={() => removeItem(item.id, item.weight)}
            className="text-gray-400 transition hover:text-red-500"
          >
            <Trash2 size={18} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center overflow-hidden rounded-lg border">

            <button
              onClick={() =>
                decreaseQuantity(item.id, item.weight)
              }
              className="flex h-9 w-9 items-center justify-center hover:bg-gray-100"
            >
              <Minus size={16} />
            </button>

            <span className="flex h-9 min-w-[42px] items-center justify-center font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                increaseQuantity(item.id, item.weight)
              }
              className="flex h-9 w-9 items-center justify-center hover:bg-gray-100"
            >
              <Plus size={16} />
            </button>

          </div>

          <span className="font-semibold">
            {item.price * item.quantity} грн
          </span>
        </div>
      </div>
    </div>
  );
}