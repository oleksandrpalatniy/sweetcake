import { Cake } from "@/entities/cake";
import CakeCard from "./CakeCard";

interface CakeGridProps {
  cakes: Cake[];
}

export default function CakeGrid({ cakes }: CakeGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
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