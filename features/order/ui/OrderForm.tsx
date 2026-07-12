"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import type { Cake } from "@/entities/cake";
import {
  orderSchema,
  type OrderFormData,
} from "@/features/lib/orderSchema";

import { submitOrder } from "../api/submitOrder";

interface Props {
  cake: Cake;
}

export default function OrderForm({ cake }: Props) {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  async function onSubmit(data: OrderFormData) {
    await submitOrder({
      ...data,
      cake: cake.title,
    });

    reset();
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="space-y-4 py-6 text-center">
        <div className="text-5xl">🎂</div>

        <h3 className="text-xl font-bold">
          Дякуємо!
        </h3>

        <p className="text-muted-foreground">
          Ваше замовлення успішно відправлено.
          Ми зв&apos;яжемося з вами найближчим часом.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
        Ім&apos;я
        </label>

        <Input
          {...register("name")}
          placeholder="Ваше ім'я"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Телефон *
        </label>

        <Input
          {...register("phone")}
          placeholder="+380..."
        />

        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Дата отримання
        </label>

        <Input
          type="date"
          {...register("date")}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Вага
        </label>

        <select
          {...register("weight")}
          className="h-10 w-full rounded-lg border border-input bg-transparent px-3"
        >
          <option value="">
            Оберіть вагу
          </option>

          {cake.weights.map((weight) => (
            <option
              key={weight}
              value={weight}
            >
              {weight} кг
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Коментар
        </label>

        <Textarea
          {...register("comment")}
          placeholder="Побажання до замовлення..."
        />
      </div>

      <Button
        type="submit"
        className="w-full h-11"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Відправка..."
          : "Замовити"}
      </Button>
    </form>
  );
}