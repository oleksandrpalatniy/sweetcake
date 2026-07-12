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
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={cake.image}
          alt={cake.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

{cake.isPopular && (
  <span className="absolute left-4 top-4 rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white">
    Популярний
  </span>
)}
      </div>

      <div className="flex h-[220px] flex-col p-6">
      <h3 className="text-xl font-bold">
        {cake.title}
      </h3>

<div className="mt-2">
  <Rating value={cake.rating} />
</div>

        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
          {cake.description}
        </p>

        <div className="mt-5">
          <p className="mb-4 text-2xl font-bold">
            від {cake.pricePerKg} грн/кг
          </p>
          <Link href={`/catalog/${cake.slug}`} className="block">
  <Button className="w-full">
    Детальніше
  </Button>
</Link>
        </div>
      </div>
    </article>
  );
}