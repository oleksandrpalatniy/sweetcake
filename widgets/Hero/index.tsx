import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/shared/ui/container";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white py-28">
      <Container>
      <div className="grid items-center gap-16 lg:grid-cols-2">
      <div className="max-w-xl">
  <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-7xl">
  Торти,
  <span className="block text-pink-600">
    які запам&apos;ятовуються
  </span>
</h1>

    <p className="mt-8 max-w-lg text-xl leading-9 text-gray-600">
  Натуральні інгредієнти, ручна робота та авторський дизайн.
  Створюємо десерти, які стають головною окрасою будь-якого свята.
</p>

<div className="mt-12 flex flex-wrap gap-4">
      <Link href="/catalog">
        <Button size="lg">
          Каталог тортів
        </Button>
      </Link>

      <Link href="/contacts">
        <Button
          variant="outline"
          size="lg"
        >
          Зв&apos;язатися
        </Button>
      </Link>
    </div>

    <div className="mt-14 grid grid-cols-3 gap-4">
    <div className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
  <p className="text-3xl font-bold text-pink-600">
    500+
  </p>

  <p className="mt-2 text-sm leading-6 text-gray-500">
    виконаних замовлень
  </p>
</div>

<div className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
  <p className="text-3xl font-bold text-pink-600">
    5★
  </p>

  <p className="mt-2 text-sm leading-6 text-gray-500">
    середній рейтинг
  </p>
</div>

<div className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
  <p className="text-3xl font-bold text-pink-600">
    100%
  </p>

  <p className="mt-2 text-sm leading-6 text-gray-500">
    ручна робота
  </p>
</div>
    </div>
  </div>

  <div className="relative hidden lg:block">
    <div className="absolute inset-0 rounded-full bg-pink-200 blur-3xl opacity-40" />

    <div className="relative mx-auto h-[520px] w-[520px]">
  <Image
    src="/cakes/red-velvet.jpg"
    alt="Торт SweetCake"
    fill
    priority
    className="rounded-3xl object-cover shadow-2xl"
  />
</div>
  </div>
</div>
      </Container>
    </section>
  );
}