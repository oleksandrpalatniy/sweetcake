import { cakes } from "@/data/cakes";
import { CakeGrid } from "@/entities/cake";
import { Container } from "@/shared/ui/container";

export default function Catalog() {
  const popularCakes = cakes.filter((cake) => cake.isPopular);

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10">
          <h2 className="text-4xl font-bold tracking-tight">
            Популярні торти
          </h2>

          <p className="mt-3 text-muted-foreground">
            Найчастіше замовляють саме ці торти.
          </p>
        </div>

        <CakeGrid cakes={popularCakes} />
      </Container>
    </section>
  );
}