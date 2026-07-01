import { Navbar } from "@/components/layout/Navbar";
import { HomeContent } from "@/components/HomeContent";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeContent />
      </main>
      <Footer />
    </>
  );
}
