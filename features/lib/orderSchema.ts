import { z } from "zod";

export const orderSchema = z.object({
  name: z
    .string()
    .min(2, "Введіть ім'я"),

  phone: z
    .string()
    .min(10, "Введіть номер телефону"),

  date: z.string().optional(),

  weight: z.string().optional(),

  comment: z.string().optional(),
});

export type OrderFormData = z.infer<typeof orderSchema>;