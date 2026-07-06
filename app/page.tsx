import Header from "@/widgets/Header";
import Hero from "@/widgets/Hero";
import Footer from "@/widgets/Footer";

import { CakeSection } from "@/components/cake";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <CakeSection />
      <Footer />
    </>
  );
}