"use client";

import { useState } from "react";

import type { Cake } from "@/entities/cake/model";

import AddToCartButton from "./AddToCartButton";

interface Props {
  cake: Cake;
}

export default function WeightSelector({ cake }: Props) {
  const [weight, setWeight] = useState(cake.weights[0]);

  return (
    <>
      <div className="mt-8">
        <p className="mb-3 text-sm font-semibold uppercase text-gray-500">
          Вага
        </p>

        <div className="flex gap-3">
          {cake.weights.map((w) => (
            <button
              key={w}
              onClick={() => setWeight(w)}
              className={`rounded-xl border px-5 py-2 transition ${
                weight === w
                  ? "border-pink-600 bg-pink-600 text-white"
                  : "hover:border-pink-400"
              }`}
            >
              {w} кг
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-4xl font-bold text-pink-600">
          {cake.pricePerKg * weight} грн
        </p>
      </div>

      <AddToCartButton
        cake={cake}
        weight={weight}
      />
    </>
  );
}