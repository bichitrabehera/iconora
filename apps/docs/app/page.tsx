import { Navbar } from "@/components/layout/Navbar";
import { HomeContent } from "@/components/HomeContent";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeContent />
      </main>
    </>
  );
}
