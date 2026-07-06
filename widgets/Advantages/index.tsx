import { Container } from "@/shared/ui/container";
import {
  Cake,
  Palette,
  Truck,
  HeartHandshake,
} from "lucide-react";

const advantages = [
  {
    icon: Cake,
    title: "Натуральні інгредієнти",
    description: "Використовуємо тільки якісні та свіжі продукти.",
  },
  {
    icon: Palette,
    title: "Індивідуальний дизайн",
    description: "Створюємо торти за вашим ескізом або побажаннями.",
  },
  {
    icon: Truck,
    title: "Доставка",
    description: "Обережно доставимо торт у зручний для вас час.",
  },
  {
    icon: HeartHandshake,
    title: "1000+ задоволених клієнтів",
    description: "Нас рекомендують друзям і повертаються знову.",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Чому обирають SweetCake
          </h2>

          <p className="mt-4 text-muted-foreground">
            Ми створюємо не просто десерти, а частину ваших свят.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="mb-6 h-10 w-10 text-pink-600" />

                <h3 className="mb-3 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}