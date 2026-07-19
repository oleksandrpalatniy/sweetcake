"use client";

import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCartStore } from "../model/cartStore";

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function CartDrawer({ children }: Props) {
  const [open, setOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer"
      >
        {children}
      </div>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
          />

          <aside className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300">

            <div className="flex items-center justify-between border-b px-6 py-5">

              <div className="flex items-center gap-3">
                <ShoppingCart className="h-6 w-6 text-pink-600" />

                <div>
                  <h2 className="text-xl font-bold">
                    Кошик
                  </h2>

                  <p className="text-sm text-gray-500">
                    {items.length} товарів
                  </p>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
              >
                <X />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">

              {items.length === 0 ? (
                <div className="mt-20 flex flex-col items-center justify-center">

                  <ShoppingCart
                    className="mb-4 text-gray-300"
                    size={60}
                  />

                  <h3 className="text-lg font-semibold">
                    Кошик порожній
                  </h3>

                  <p className="mt-2 text-center text-gray-500">
                    Додайте смаколики,
                    щоб оформити замовлення.
                  </p>

                  <Button
                    className="mt-8"
                    onClick={() => setOpen(false)}
                  >
                    Перейти до каталогу
                  </Button>

                </div>
              ) : (
                <div className="space-y-4">

                  {items.map((item) => (
                    <CartItem
                      key={`${item.id}-${item.weight}`}
                      item={item}
                    />
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t bg-white p-5 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
                <CartSummary />

                <Link
  href="/checkout"
  onClick={() => setOpen(false)}
>
  <Button className="mt-4 h-12 w-full bg-pink-600 hover:bg-pink-700">
    Оформити замовлення
  </Button>
</Link>
              </div>
            )}

          </aside>
        </>
      )}
    </>
  );
}
