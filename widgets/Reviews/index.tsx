import { Container } from "@/shared/ui/container";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Олена",
    text: "Замовляли весільний торт. Він був не тільки неймовірно красивим, а й дуже смачним. Гості були у захваті!",
  },
  {
    name: "Ігор",
    text: "Замовлення виконали точно вчасно. Дизайн повністю відповідав ескізу. Обов'язково звернемося ще.",
  },
  {
    name: "Марія",
    text: "Дитячий торт перевершив усі очікування. Свіжий, ніжний та дуже гарно оформлений.",
  },
];

export default function Reviews() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Відгуки клієнтів
          </h2>

          <p className="mt-4 text-muted-foreground">
            Найкраща оцінка нашої роботи — задоволені клієнти.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-current"
                  />
                ))}
              </div>

              <p className="mb-6 leading-7 text-muted-foreground">
                "{review.text}"
              </p>

              <p className="font-semibold">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}