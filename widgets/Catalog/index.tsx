import { cakes } from "@/data/cakes";
import { CakeGrid } from "@/entities/cake";
import { Container } from "@/shared/ui/container";
import { Button } from "@/components/ui/button";

export default function Catalog() {
  const popularCakes = cakes.filter((cake) => cake.isPopular);

  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
              SweetCake
            </p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight">
              Популярні торти
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Найчастіше замовляють саме ці торти. Кожен виготовляється вручну
              тільки зі свіжих натуральних інгредієнтів.
            </p>
          </div>

          <Button variant="outline">
            Переглянути всі
          </Button>
        </div>

        <CakeGrid cakes={popularCakes} />
      </Container>
    </section>
  );
}