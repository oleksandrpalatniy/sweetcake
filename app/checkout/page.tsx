import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import CheckoutSummary from "@/features/checkout/ui/CheckoutSummary";

import CheckoutDialog from "@/features/checkout/ui/CheckoutDialog";

export default function CheckoutPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-12">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Оформлення замовлення
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            Заповніть контактні дані,
            і ми зв'яжемося з вами
            для підтвердження замовлення.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">

          <div className="rounded-2xl border bg-white p-8 shadow-sm">

            <CheckoutDialog />

          </div>

        <div className="rounded-2xl border bg-pink-50 p-8 sticky top-24 h-fit">
            <CheckoutSummary />
        </div>
      </div>
    </main>

      <Footer />
    </>
  );
}