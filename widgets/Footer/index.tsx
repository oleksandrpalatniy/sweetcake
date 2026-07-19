import Link from "next/link";

import { Container } from "@/shared/ui/container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-gray-50">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold">SweetCake</h2>
            <p className="mt-3 text-sm text-gray-600">
              Авторські торти на замовлення.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">
              Навігація
            </h3>

            <ul className="space-y-2 text-sm">
              <li><Link href="/">Головна</Link></li>
              <li><Link href="/catalog">Каталог</Link></li>
              <li><Link href="/delivery">Доставка</Link></li>
              <li><Link href="/about">Про нас</Link></li>
              <li><Link href="/contacts">Контакти</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">
              Контакти
            </h3>

            <ul className="space-y-2 text-sm">
              <li>📞 +38 (0__) ___ __ __</li>
              <li>✉️ info@sweetcake.ua</li>
              <li>📍 Івано-Франківськ</li>
            </ul>
          </div>
        </div>

        <div className="border-t py-6 text-center text-sm text-gray-500">
          © 2026 SweetCake. Всі права захищені.
        </div>
      </Container>
    </footer>
  );
}