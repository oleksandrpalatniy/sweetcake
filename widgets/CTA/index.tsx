import { Button } from "@/components/ui/button";
import { Container } from "@/shared/ui/container";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-pink-600 to-rose-500 px-8 py-16 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold">
            Готові замовити торт своєї мрії?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-pink-100">
            Розкажіть нам про вашу ідею, а ми створимо унікальний десерт,
            який стане окрасою свята.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
            >
              Замовити торт
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-pink-600"
            >
              Зв'язатися
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}