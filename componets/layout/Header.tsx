import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-amber-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-bold text-amber-700">
          SweetCake
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="hover:text-amber-600">Головна</a>
          <a href="#catalog" className="hover:text-amber-600">Каталог</a>
          <a href="#delivery" className="hover:text-amber-600">Доставка</a>
          <a href="#contacts" className="hover:text-amber-600">Контакти</a>
        </nav>

        <Button>
          Замовити
        </Button>
      </div>
    </header>
  );
}