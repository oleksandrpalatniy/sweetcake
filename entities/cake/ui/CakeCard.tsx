import { Button } from "@/components/ui/button";

interface CakeCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function CakeCard({
  title,
  description,
  price,
  image,
}: CakeCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover"
      />

      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold">
            {price} грн
          </span>

          <Button>Замовити</Button>
        </div>
      </div>
    </div>
  );
}