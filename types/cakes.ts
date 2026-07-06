export type CakeCategory =
  | "Шоколадні"
  | "Класичні"
  | "Весільні"
  | "Дитячі"
  | "Мусові";

export interface Cake {
  id: string;
  slug: string;
  name: string;
  category: CakeCategory;
  description: string;
  pricePerKg: number;
  image: string;
  rating: number;
  isPopular: boolean;
}