import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Rating from "@/components/ui/Rating";
import { Cake } from "@/entities/cake";

interface CakeCardProps {
  cake: Cake;
}

export default function CakeCard({
  cake,
}: CakeCardProps) {
  return (
    <Link
  href={`/catalog/${cake.slug}`}
  className="group block overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={cake.image}
          alt={cake.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />

{cake.isPopular && (
  <span className="absolute left-4 top-4 rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white">
    Популярний
  </span>
)}
      </div>

      <div className="flex min-h-[240px] flex-col p-7">
      <h3 className="text-2xl font-bold leading-tight text-gray-900">
        {cake.title}
      </h3>

<div className="mt-2">
  <Rating value={cake.rating} />
</div>

        <p className="mt-4 flex-1 text-base leading-7 text-gray-600">
          {cake.description}
        </p>

        <div className="mt-5">
  <p className="mb-4 text-2xl font-bold">
    від {cake.pricePerKg} грн/кг
  </p>

  <Button className="mt-auto h-12 w-full rounded-xl text-base font-semibold">
    Детальніше
  </Button>
</div>
      </div>
    </Link>
  );
}