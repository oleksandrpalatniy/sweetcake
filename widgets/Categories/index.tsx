import { Container } from "@/shared/ui/container";

const categories = [
  {
    icon: "🎂",
    title: "Весільні",
    description: "Елегантні торти для особливого дня",
  },
  {
    icon: "🎉",
    title: "Святкові",
    description: "На день народження та інші свята",
  },
  {
    icon: "🧸",
    title: "Дитячі",
    description: "Яскраві торти для найменших",
  },
  {
    icon: "🧁",
    title: "Капкейки",
    description: "Ідеальні для святкового столу",
  },
];

export default function Categories() {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">
            Оберіть категорію
          </h2>

          <p className="mt-3 text-muted-foreground">
            Знайдіть торт саме для вашої події.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="cursor-pointer rounded-2xl border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-5xl">
                {category.icon}
              </div>

              <h3 className="font-semibold">
                {category.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}