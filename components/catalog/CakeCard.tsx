import Image from "next/image";
import Link from "next/link";
import { Cake } from "@/types/cakes";

interface CakeCardProps {
  cake: Cake;
}

export default function CakeCard({ cake }: CakeCardProps) {
  return (
    <Link
      href={`/catalog/${cake.slug}`}
      className="group block overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative h-64 w-full overflow-hidden bg-amber-100">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-amber-700">
          {cake.name}
        </h3>

        <p className="mb-4 line-clamp-2 text-gray-600">
          {cake.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-700">
            {cake.pricePerKg} грн/кг
          </span>

          <span>⭐ {cake.rating}</span>
        </div>
      </div>
    </Link>
  );
}