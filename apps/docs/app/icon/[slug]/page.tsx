import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { IconPreview } from "@/components/icons/IconPreview";
import { IconTabs } from "@/components/icons/IconTabs";
import { getIconBySlug, icons } from "@/lib/icon-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const icon = getIconBySlug(slug);
  if (!icon) return { title: "Not Found" };
  return { title: `${icon.name} - Iconora` };
}

export default async function IconPage({ params }: Props) {
  const { slug } = await params;
  const icon = getIconBySlug(slug);
  if (!icon) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <IconPreview icon={icon} />
        <IconTabs icon={icon} />
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  for (const icon of icons) {
    if (typeof icon.slug !== "string") {
      console.error("Invalid icon:", icon);
    }
  }

  return icons.map((icon) => ({
    slug: icon.slug,
  }));
}
