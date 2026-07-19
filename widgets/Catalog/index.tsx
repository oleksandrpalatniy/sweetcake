import { cakes } from "@/entities/cake/model";
import { CakeGrid } from "@/entities/cake";
import { Container } from "@/shared/ui/container";
import { Button } from "@/components/ui/button";

import CategoryTabs from "@/entities/cake/ui/CategoryTabs";

export default function Catalog() {
  const popularCakes = cakes.filter((cake) => cake.isPopular);

  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        {/* <CategoryTabs active="cakes" onChange={() => {}}/> */}
        <div className="max-w-2xl">
  <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-semibold text-pink-600">
    SweetCake
  </span>

  <h2 className="mt-5 text-5xl font-bold tracking-tight">
    Наші торти
  </h2>

  <p className="mt-5 text-lg leading-8 text-gray-600">
    Кожен торт створюється вручну із натуральних інгредієнтів.
    Ми поєднуємо сучасний дизайн, бездоганний смак і турботу про кожну деталь,
    щоб зробити ваше свято особливим.
  </p>
</div>
        </div>

        <CakeGrid cakes={popularCakes} />
      </Container>
    </section>
  );
}