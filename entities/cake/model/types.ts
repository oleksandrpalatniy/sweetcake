export type ProductCategory =
  | "cakes"
  | "pastries"
  | "desserts"
  | "croissants";

export interface Cake {
  id: number;
  slug: string;

  title: string;
  description: string;
  shortDescription?: string;

  category: ProductCategory;

  pricePerKg: number;

  image: string;
  images: string[];

  rating: number;

  isPopular: boolean;
  available: boolean;

  ingredients: string[];
  fillings: string[];
  storage: string;

  weights: number[];
}