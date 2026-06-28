import { Navbar } from "@/components/layout/Navbar"
import { HomeContent } from "@/components/HomeContent"
import { getRegistryCategories } from "@/lib/registry-categories"

export default function HomePage() {
  const categories = getRegistryCategories()

  return (
    <>
      <Navbar />
      <main>
        <HomeContent categories={categories} />
      </main>
    </>
  )
}
