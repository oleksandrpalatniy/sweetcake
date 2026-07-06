import { Container } from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { Section } from "@/shared/ui/section";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Heading
            title="Торти ручної роботи"
            description="Натуральні інгредієнти, авторський дизайн та доставка по Україні."
          />
        </div>
      </Container>
    </Section>
  );
}