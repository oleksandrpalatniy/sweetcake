import Header from "@/widgets/Header";
import Hero from "@/widgets/Hero";
import Categories from "@/widgets/Categories";
import Catalog from "@/widgets/Catalog";
import Advantages from "@/widgets/Advantages";
import Reviews from "@/widgets/Reviews";
import CTA from "@/widgets/CTA";
import Footer from "@/widgets/Footer";
import HowToOrder from "@/widgets/HowToOrder";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
       <Categories />
      <Catalog />
      <HowToOrder />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}