import { Container } from "@/shared/ui/container";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <Container>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SweetCake
        </p>
      </Container>
    </footer>
  );
}