import { Cake } from "@/types/cake";

export const cakes: Cake[] = [
  {
    id: 1,
    name: "Шоколадний Deluxe",
    slug: "chocolate-deluxe",
    description: "Шоколадний бісквіт, ганаш, бельгійський шоколад.",
    price: 850,
    weight: "1 кг",
    image: "/images/cakes/chocolate.jpg",
    category: "Шоколадні",
    popular: true,
  },
  {
    id: 2,
    name: "Red Velvet",
    slug: "red-velvet",
    description: "Червоний оксамит із кремом Cheese.",
    price: 920,
    weight: "1 кг",
    image: "/images/cakes/red-velvet.jpg",
    category: "Класичні",
    popular: true,
  },
  {
    id: 3,
    name: "Манго-Маракуя",
    slug: "mango",
    description: "Мусовий торт із манго.",
    price: 980,
    weight: "1 кг",
    image: "/images/cakes/mango.jpg",
    category: "Мусові",
    popular: true,
  },
  {
    id: 4,
    name: "Ягідний",
    slug: "berry",
    description: "Полуниця, малина, чорниця.",
    price: 870,
    weight: "1 кг",
    image: "/images/cakes/berry.jpg",
    category: "Ягідні",
    popular: true,
  }
];