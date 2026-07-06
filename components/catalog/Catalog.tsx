import CakeCard from "./CakeCard";
import { cakes } from "@/data/cakes";

export default function Catalog() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="mb-10 text-center text-4xl font-bold">
        Наші торти
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cakes.map((cake) => (
          <CakeCard
            key={cake.id}
            cake={cake}
          />
        ))}
      </div>

    </section>
  );
}