import { Container } from "@/shared/ui/container";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            SweetCake
          </h1>

          <nav className="hidden gap-8 md:flex">
            <a href="#">Каталог</a>
            <a href="#">Про нас</a>
            <a href="#">Контакти</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}