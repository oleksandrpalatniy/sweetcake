import { Container } from "@/shared/ui/container";

const steps = [
  {
    number: "01",
    title: "Оберіть торт",
    text: "Перегляньте каталог та виберіть дизайн, який вам подобається.",
  },
  {
    number: "02",
    title: "Залиште заявку",
    text: "Заповніть форму або зв'яжіться з нами у Telegram.",
  },
  {
    number: "03",
    title: "Підтвердження",
    text: "Уточнюємо деталі, вагу, начинку та дату отримання.",
  },
  {
    number: "04",
    title: "Отримайте торт",
    text: "У визначений день заберіть або отримайте доставку.",
  },
];

export default function HowToOrder() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-bold">
          Як замовити
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 text-4xl font-bold text-pink-600">
                {step.number}
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}