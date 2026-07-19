import type { OrderFormData } from "@/features/lib/orderSchema";

interface SubmitOrderData extends OrderFormData {
  cake: string;
}

export async function submitOrder(data: SubmitOrderData) {
  const response = await fetch("/api/telegram", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Помилка відправки замовлення");
  }

  return response.json();
}