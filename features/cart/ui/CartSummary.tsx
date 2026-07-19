"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "../model/cartStore";

export default function CartSummary() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const count = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-pink-50 p-4">
        <div className="flex justify-between">
          <span>Товарів</span>
          <span className="font-semibold">{count}</span>
        </div>

        <div className="mt-3 flex justify-between text-lg font-bold">
          <span>Разом</span>
          <span className="text-pink-600">
            {total} грн
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={clearCart}
      >
        Очистити кошик
      </Button>
    </div>
  );
}