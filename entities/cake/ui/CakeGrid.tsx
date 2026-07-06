import CakeCard from "./CakeCard";
import { Cake } from "@/data/cakes";

interface CakeGridProps {
  cakes: Cake[];
}

export default function CakeGrid({ cakes }: CakeGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {cakes.map((cake) => (
        <CakeCard
          key={cake.id}
          title={cake.title}
          description={cake.description}
          price={cake.pricePerKg}
          image={cake.image}
        />
      ))}
    </div>
  );
}