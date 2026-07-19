import { notFound } from "next/navigation";

import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

import Rating from "@/components/ui/Rating";

import { cakes } from "@/entities/cake/model";

import CakeGallery from "@/entities/cake/ui/CakeGallery";
import WeightSelector from "@/features/cart/ui/WeightSelector";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CakePage({ params }: Props) {
  const { slug } = await params;

  const cake = cakes.find((item) => item.slug === slug);

  if (!cake) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <CakeGallery
            images={cake.images}
            title={cake.title}
          />

          <div className="flex flex-col justify-center">
            <nav className="mb-6 text-sm text-muted-foreground">
              Головна / Каталог / {cake.title}
            </nav>

            <h1 className="text-4xl font-bold">
              {cake.title}
            </h1>

            <div className="mt-3">
              <Rating value={cake.rating} />
            </div>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {cake.description}
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">
                Начинки
              </h2>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground">
                {cake.fillings.map((filling) => (
                  <li key={filling}>{filling}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">
                Склад
              </h2>

              <ul className="mt-3 list-disc pl-5 text-muted-foreground">
                {cake.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl bg-gray-50 p-4">
              <h2 className="font-semibold">
                Зберігання
              </h2>

              <p className="mt-2 text-muted-foreground">
                {cake.storage}
              </p>
            </div>

            <WeightSelector cake={cake} />

            <div className="mt-6 flex items-center gap-3">
              <div
                className={`h-3 w-3 rounded-full ${
                  cake.available ? "bg-green-500" : "bg-red-500"
                }`}
              />

              <span className="text-sm">
                {cake.available
                  ? "Доступний до замовлення"
                  : "Тимчасово недоступний"}
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}