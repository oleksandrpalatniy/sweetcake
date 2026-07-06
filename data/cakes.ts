import { Cake } from "@/entities/cake/model";

export const cakes: Cake[] = [
  {
    id: "1",
    slug: "red-velvet",
    title: "Червоний оксамит",
    description: "Класичний торт із вершковим кремом.",
    pricePerKg: 850,
    image: "/cakes/red-velvet.jpg",
    isPopular: true,
  },
  {
    id: "2",
    slug: "napoleon",
    title: "Наполеон",
    description: "Домашній листковий торт.",
    pricePerKg: 780,
    image: "/cakes/napoleon.jpg",
    isPopular: true,
  },
  {
    id: "3",
    slug: "snickers",
    title: "Снікерс",
    description: "Шоколад, карамель і арахіс.",
    pricePerKg: 920,
    image: "/cakes/snickers.jpg",
    isPopular: true,
  },
];