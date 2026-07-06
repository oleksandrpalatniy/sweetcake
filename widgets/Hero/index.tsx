import { Button } from "@/components/ui/button";
import { Container } from "@/shared/ui/container";

export default function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold tracking-tight">
            Торти ручної роботи
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Натуральні інгредієнти, авторський дизайн та доставка по Україні.
          </p>

          <div className="mt-8 flex gap-4">
            <Button size="lg">
              Замовити
            </Button>

            <Button variant="outline" size="lg">
              Каталог
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}