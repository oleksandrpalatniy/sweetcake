import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-lg text-amber-700">
            Торти на замовлення
          </p>

          <h2 className="mb-6 text-6xl font-extrabold leading-tight">
            Солодкі шедеври
            <br />
            для особливих подій
          </h2>

          <p className="mb-8 text-xl text-gray-600">
            Натуральні інгредієнти, авторські рецепти,
            доставка по місту та можливість створити
            власний дизайн торта.
          </p>

          <div className="flex gap-4">
            <Button>Замовити</Button>
            <Button variant="secondary">
              Каталог
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}