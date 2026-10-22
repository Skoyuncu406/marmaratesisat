import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

/* =========================================
   SEO METADATA
========================================= */

export const metadata = {
  title: "Marmara Tesisat | Profesyonel Tesisat Hizmetleri",

  description:
    "Marmara Tesisat, İstanbul Bahçelievler'de su tesisatı, tıkanıklık açma, petek temizliği, yerden ısıtma, termal kamera ve profesyonel tesisat çözümleri sunar.",

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================
   HOME PAGE
========================================= */

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="
        relative
        w-full min-w-0
        overflow-x-clip
        bg-[#F7F9FC]
      "
    >
      {/* =====================================
          HERO SECTION
          MEVCUT TASARIM KORUNUR
      ===================================== */}

      <Hero />

      {/* =====================================
          SHARED BACKGROUND
          ABOUT + CONTACT
      ===================================== */}

      <div
        className="
          relative isolate
          w-full min-w-0
          bg-[#F7F9FC]
        "
      >
        {/* FIXED BACKGROUND IMAGE */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0 z-0
            bg-[url('/images/marmara-sections-bg.png')]
            bg-cover
            bg-center
            bg-no-repeat
            bg-fixed
          "
        />

        {/* LIGHT READABILITY OVERLAY */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0 z-0
            bg-white/20
          "
        />

        {/* PAGE CONTENT */}

        <div className="relative z-10 w-full min-w-0">
          {/* ABOUT SECTION */}

          <About />

          {/* CONTACT SECTION */}

          <Contact />
        </div>
      </div>
    </main>
  );
}
