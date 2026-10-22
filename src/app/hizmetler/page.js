import ServicesContent from "@/components/services/ServicesContent";

export const metadata = {
  title: "Hizmetlerimiz | Marmara Tesisat",
  description:
    "Marmara Tesisat karot delme, termal kamera, tıkanıklık açma, yerden ısıtma, petek temizliği ve profesyonel tesisat hizmetleri.",
};

export default function ServicesPage() {
  return (
    <main className="w-full min-w-0">
      <ServicesContent />
    </main>
  );
}
