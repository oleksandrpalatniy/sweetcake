"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { useCartStore } from "@/features/cart/model/cartStore";

export default function CheckoutDialog() {
  const router = useRouter();

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    [items]
  );

  const minDate = useMemo(() => {
    const date = new Date();

    date.setDate(date.getDate() + 2);

    return date.toISOString().split("T")[0];
  }, []);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: minDate,
    delivery: "Самовивіз",
    address: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit() {
    if (!form.name.trim()) {
      alert("Вкажіть ім'я");
      return;
    }

    if (!form.phone.trim()) {
      alert("Вкажіть номер телефону");
      return;
    }

    if (
      form.delivery === "Доставка" &&
      !form.address.trim()
    ) {
      alert("Вкажіть адресу доставки");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          customer: form,
          items,
          total,
        }),
      });

      if (!response.ok) {
        throw new Error();
      }

      clearCart();

      alert(
        "🎉 Дякуємо! Замовлення успішно відправлено."
      );

      router.push("/");
    } catch {
      alert(
        "Помилка відправки. Спробуйте ще раз."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Ім'я *
        </label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
          placeholder="Ваше ім'я"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Телефон *
        </label>

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
          placeholder="+380..."
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Бажана дата отримання *
        </label>

        <input
          type="date"
          name="date"
          min={minDate}
          value={form.date}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Спосіб отримання
        </label>

        <select
          name="delivery"
          value={form.delivery}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
        >
          <option value="Самовивіз">
            Самовивіз
          </option>

          <option value="Доставка">
            Доставка
          </option>
        </select>
      </div>

      {form.delivery === "Доставка" && (
        <div>
          <label className="mb-2 block text-sm font-medium">
            Адреса доставки
          </label>

          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
            placeholder="м. Коломия..."
          />
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Побажання до замовлення
        </label>

        <textarea
          rows={4}
          name="comment"
          value={form.comment}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 resize-none"
          placeholder="Наприклад: напис на торті..."
        />
      </div>

      <div className="rounded-xl bg-pink-50 p-5">
        <div className="flex items-center justify-between">

          <span className="font-medium">
            До сплати
          </span>

          <span className="text-2xl font-bold text-pink-600">
            {total} грн
          </span>

        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={loading || items.length === 0}
        className="h-12 w-full bg-pink-600 hover:bg-pink-700"
      >
        {loading
          ? "Відправляємо..."
          : "Підтвердити замовлення"}
      </Button>

    </div>
  );
}