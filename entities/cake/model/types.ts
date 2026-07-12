export interface Cake {
  id: number;
  slug: string;

  title: string;
  shortDescription: string;
  description: string;

  category: string;

  pricePerKg: number;

  image: string;
  images: string[];

  rating: number;

  isPopular: boolean;
  available: boolean;

  weights: [2, 3, 5];
}