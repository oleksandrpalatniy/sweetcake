import type { OrderFormData } from "../lib/orderSchema";

interface SubmitOrderData extends OrderFormData {
  cake: string;
}

export async function submitOrder(data: SubmitOrderData) {
  console.log("🎂 Нове замовлення");

  console.table(data);

  return {
    success: true,
  };
}