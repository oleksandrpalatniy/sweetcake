import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/shared/ui/container";

import { cakes } from "@/entities/cake";
import CakeGrid from "@/entities/cake/ui/CakeGrid";

export default function PopularCakes() {
  const popular = cakes.filter((cake) => cake.isPopular);

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Популярні торти
            </h2>

            <p className="mt-2 text-muted-foreground">
              Найчастіше замовляють наші клієнти.
            </p>
          </div>

          <Link href="/catalog">
            <Button variant="outline">
              Весь каталог
            </Button>
          </Link>
        </div>

        <CakeGrid cakes={popular} />
      </Container>
    </section>
  );
}