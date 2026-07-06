import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cake } from "@/types/cakes";

interface CakeCardProps {
  cake: Cake;
}

export default function CakeCard({ cake }: CakeCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-xl">
      <div className="relative h-64 w-full bg-amber-100">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold">{cake.name}</h3>

        <p className="mb-4 text-gray-600">
          {cake.description}
        </p>

        <div className="mb-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-700">
            {cake.price} грн/кг
          </span>

          <span>⭐ {cake.rating}</span>
        </div>

        <Link href={`/cakes/${cake.slug}`}>
          <Button className="w-full">
            Детальніше
          </Button>
        </Link>
      </div>
    </div>
  );
}