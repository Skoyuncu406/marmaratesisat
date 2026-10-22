import { Manrope, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Marmara Tesisat | Profesyonel Tesisat Hizmetleri",
    template: "%s | Marmara Tesisat",
  },
  description:
    "Marmara Tesisat, İstanbul Bahçelievler'de su tesisatı, kat tesisatı, kalorifer tesisatı, tadilat, tamirat ve proje uygulama hizmetleri sunar.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${manrope.variable} ${dmSans.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
