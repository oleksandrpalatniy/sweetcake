"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "../model/cartStore";

import type { Cake } from "@/entities/cake/model";

interface Props {
  cake: Cake;
  weight: number;
}

export default function AddToCartButton({
  cake,
  weight,
}: Props) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem({
      id: cake.id,
      slug: cake.slug,
      title: cake.title,
      image: cake.image,

      price: cake.pricePerKg * weight,

      quantity: 1,
      weight,
    });
  };

  return (
    <Button
      onClick={handleAdd}
      className="mt-10 h-12 w-full sm:w-fit px-10"
    >
      🛒 Додати в кошик
    </Button>
  );
}