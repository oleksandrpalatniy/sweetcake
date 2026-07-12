import Image from "next/image";
import { notFound } from "next/navigation";

import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

import Rating from "@/components/ui/Rating";
import { Button } from "@/components/ui/button";

import { cakes } from "@/entities/cake/model";

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
          {/* Фото */}
          <div className="relative aspect-square overflow-hidden rounded-3xl border bg-white shadow-sm">
            <Image
              src={cake.image}
              alt={cake.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Інформація */}
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

            <div className="mt-10">
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                Ціна
              </p>

              <p className="mt-2 text-4xl font-bold text-pink-600">
                від {cake.pricePerKg} грн/кг
              </p>
            </div>

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

            <Button className="mt-10 h-12 w-full sm:w-fit px-10">
              Замовити
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}