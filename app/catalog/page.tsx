import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import Catalog from "@/widgets/Catalog";

export default function CatalogPage() {
  return (
    <>
      <Header />

      <main className="py-10">
        <Catalog />
      </main>

      <Footer />
    </>
  );
}