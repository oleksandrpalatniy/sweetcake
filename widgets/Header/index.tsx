"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/shared/ui/container";
import { Button } from "@/components/ui/button";

import { Menu, ShoppingCart } from "lucide-react";

import { useCartStore } from "@/features/cart/model/cartStore";

import CartDrawer from "@/features/cart/ui/CartDrawer";

export default function Header() {
  const pathname = usePathname();

  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce(
  (sum, item) => sum + item.quantity,0);

  const links = [
    { href: "/", label: "Головна" },
    { href: "/catalog", label: "Каталог" },
    { href: "/delivery", label: "Доставка" },
    { href: "/about", label: "Про нас" },
    { href: "/contacts", label: "Контакти" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <Container>
      <div className="flex h-20 items-center justify-between">
  <Link
    href="/"
    className="text-3xl font-extrabold tracking-tight text-pink-600"
  >
    SweetCake
  </Link>

  <nav className="hidden items-center gap-8 lg:flex">
    {links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`transition-colors ${
          pathname === link.href
            ? "font-semibold text-pink-600"
            : "text-gray-600 hover:text-pink-600"
        }`}
      >
        {link.label}
      </Link>
    ))}
  </nav>

  <div className="flex items-center gap-3">
  <CartDrawer>
  <Button
    variant="outline"
    size="icon"
    className="relative"
  >
    <ShoppingCart className="h-5 w-5" />

    {totalItems > 0 && (
      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-xs font-bold text-white">
        {totalItems}
      </span>
    )}
  </Button>
</CartDrawer>
    <Button
      variant="ghost"
      size="icon"
      className="lg:hidden"
    >
      <Menu className="h-6 w-6" />
    </Button>
  </div>
</div>
      </Container>
    </header>
  );
}