
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

import { services } from "@/data/services";

/* =========================================
   CONSTANTS
========================================= */

const PHONE = "0533 467 94 37";
const PHONE_URL = "tel:+905334679437";

const WHATSAPP_URL =
  "https://wa.me/905334679437?text=" +
  encodeURIComponent(
    "Merhaba, Marmara Tesisat hizmetleri hakkında bilgi almak istiyorum."
  );

const INSTAGRAM_URL =
  "https://www.instagram.com/marmara.tesisat";

const ADDRESS =
  "Kocasinan Merkez Mahallesi, Şirin 3 Sokak, No: 24/C, Bahçelievler / İstanbul";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(ADDRESS);

const YEAR = new Date().getFullYear();

/* =========================================
   FOOTER SECTION TITLE
========================================= */

function FooterTitle({ children }) {
  return (
    <h3
      className="
        mb-6 flex items-center gap-3
        text-[11px] font-bold
        uppercase tracking-[0.19em]
        text-white
      "
    >
      <span className="h-px w-5 bg-[#25B7F5]" />
      {children}
    </h3>
  );
}

/* =========================================
   FOOTER LINKS
========================================= */

function FooterLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        group inline-flex max-w-full
        items-start gap-2
        text-[13px] leading-6
        text-[#A7B9C9]
        transition-colors duration-300
        hover:text-[#25B7F5]
      "
    >
      <span className="min-w-0">{children}</span>

      <ArrowUpRight
        size={13}
        className="
          mt-1 shrink-0
          opacity-0
          transition-all duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:opacity-100
        "
      />
    </Link>
  );
}

/* =========================================
   MAIN FOOTER
========================================= */

export default function Footer() {
  const pathname = usePathname();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (event, id) => {
    if (pathname !== "/") return;

    const target = document.getElementById(id);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `/#${id}`);
  };

  const navigationLinks = [
    {
      label: "Ana Sayfa",
      href: "/",
    },
    {
      label: "Hakkımızda",
      href: "/#hakkimizda",
      id: "hakkimizda",
    },
    {
      label: "Hizmetlerimiz",
      href: "/hizmetler",
    },
    {
      label: "İletişim",
      href: "/#iletisim",
      id: "iletisim",
    },
  ];

  return (
    <footer
      className="
        relative isolate
        w-full min-w-0
        overflow-x-clip
        border-t border-white/10
        bg-[#07111D]
        text-white
      "
    >
      {/* TOP ACCENT */}

      <div
        aria-hidden="true"
        className="
          absolute left-0 top-0
          h-px w-full
          bg-gradient-to-r
          from-transparent
          via-[#25B7F5]/40
          to-transparent
        "
      />

      {/* MAIN CONTAINER */}

      <div
        className="
          mx-auto w-full
          max-w-[1600px]
          px-5
          sm:px-10
          lg:px-16
          xl:px-20
        "
      >
        {/* FOOTER CONTENT */}

        <div
          className="
            grid min-w-0
            grid-cols-1
            gap-x-10 gap-y-12
            py-14
            sm:grid-cols-2
            sm:py-16
            lg:grid-cols-12
            lg:gap-x-8
            lg:py-20
            xl:gap-x-12
          "
        >
          {/* =====================================
              BRAND
          ===================================== */}

          <div
            className="
              min-w-0
              sm:col-span-2
              lg:col-span-4
            "
          >
            <Link
              href="/"
              aria-label="Marmara Tesisat Ana Sayfa"
              className="inline-flex items-center"
            >
              <Image
                src="/images/marmara-mark.png"
                alt="Marmara Tesisat"
                width={76}
                height={76}
                className="
                  h-[70px] w-[70px]
                  object-contain
                  sm:h-[76px] sm:w-[76px]
                "
              />

              <div className="ml-3">
                <span
                  className="
                    block
                    font-[family-name:var(--font-manrope)]
                    text-[22px] font-extrabold
                    leading-tight
                    tracking-[-0.05em]
                    text-white
                  "
                >
                  MARMARA
                </span>

                <span
                  className="
                    block text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.34em]
                    text-[#25B7F5]
                  "
                >
                  TESİSAT
                </span>
              </div>
            </Link>

            <p
              className="
                mt-6 max-w-[360px]
                text-[13px]
                leading-7
                text-[#A7B9C9]
              "
            >
              Su tesisatı, arıza tespiti,
              tıkanıklık açma, ısıtma
              sistemleri ve profesyonel
              tesisat uygulamalarında
              güvenilir çözümler sunuyoruz.
            </p>

            {/* SOCIAL LINKS */}

            <div className="mt-7 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Marmara Tesisat Instagram"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  border border-white/15
                  text-[#A7B9C9]
                  transition-all duration-300
                  hover:border-[#25B7F5]
                  hover:bg-[#25B7F5]/10
                  hover:text-[#25B7F5]
                "
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Marmara Tesisat WhatsApp"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  border border-white/15
                  text-[#A7B9C9]
                  transition-all duration-300
                  hover:border-[#25B7F5]
                  hover:bg-[#25B7F5]/10
                  hover:text-[#25B7F5]
                "
              >
                <MessageCircle size={19} />
              </a>

              <a
                href={PHONE_URL}
                aria-label="Marmara Tesisat Telefon"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  border border-white/15
                  text-[#A7B9C9]
                  transition-all duration-300
                  hover:border-[#25B7F5]
                  hover:bg-[#25B7F5]/10
                  hover:text-[#25B7F5]
                "
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* =====================================
              QUICK LINKS
          ===================================== */}

          <div
            className="
              min-w-0
              lg:col-span-2
            "
          >
            <FooterTitle>
              Hızlı Bağlantılar
            </FooterTitle>

            <nav
              aria-label="Footer hızlı bağlantılar"
              className="flex flex-col items-start gap-3"
            >
              {navigationLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  href={item.href}
                  onClick={
                    item.id
                      ? (event) =>
                          scrollToSection(
                            event,
                            item.id
                          )
                      : undefined
                  }
                >
                  {item.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* =====================================
              SERVICES
          ===================================== */}

          <div
            className="
              min-w-0
              lg:col-span-3
            "
          >
            <FooterTitle>
              Hizmetlerimiz
            </FooterTitle>

            <nav
              aria-label="Footer hizmet bağlantıları"
              className="flex flex-col items-start gap-2.5"
            >
              {services.map((service) => (
                <FooterLink
                  key={service.id}
                  href={`/hizmetler#${service.id}`}
                >
                  {service.title}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* =====================================
              CONTACT
          ===================================== */}

          <div
            className="
              min-w-0
              lg:col-span-3
            "
          >
            <FooterTitle>
              İletişim
            </FooterTitle>

            <div className="flex flex-col gap-6">
              {/* PHONE */}

              <a
                href={PHONE_URL}
                className="
                  group flex items-start gap-3
                "
              >
                <Phone
                  size={18}
                  className="
                    mt-1 shrink-0
                    text-[#25B7F5]
                  "
                />

                <div className="min-w-0">
                  <span
                    className="
                      block text-[10px]
                      font-bold uppercase
                      tracking-[0.15em]
                      text-white/40
                    "
                  >
                    TELEFON
                  </span>

                  <span
                    className="
                      mt-1 block
                      text-[14px]
                      font-semibold
                      text-white
                      transition-colors
                      group-hover:text-[#25B7F5]
                    "
                  >
                    {PHONE}
                  </span>
                </div>
              </a>

              {/* ADDRESS */}

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-start gap-3
                "
              >
                <MapPin
                  size={18}
                  className="
                    mt-1 shrink-0
                    text-[#25B7F5]
                  "
                />

                <div className="min-w-0">
                  <span
                    className="
                      block text-[10px]
                      font-bold uppercase
                      tracking-[0.15em]
                      text-white/40
                    "
                  >
                    ADRES
                  </span>

                  <span
                    className="
                      mt-1 block
                      text-[13px]
                      leading-6
                      text-[#A7B9C9]
                      transition-colors
                      group-hover:text-[#25B7F5]
                    "
                  >
                    {ADDRESS}
                  </span>
                </div>
              </a>

              {/* WHATSAPP */}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex
                  min-h-[44px]
                  items-center justify-between
                  gap-3
                  border border-[#25B7F5]/50
                  px-4 py-3
                  text-[12px]
                  font-bold
                  text-[#25B7F5]
                  transition-all duration-300
                  hover:border-[#25B7F5]
                  hover:bg-[#25B7F5]
                  hover:text-[#07111D]
                "
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={17} />
                  WhatsApp ile İletişim
                </span>

                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================
            FOOTER BOTTOM
        ===================================== */}

        <div
          className="
            flex flex-col
            items-start justify-between
            gap-4
            border-t border-white/10
            py-6
            sm:flex-row
            sm:items-center
          "
        >
          <p
            className="
              text-[11px]
              leading-6
              text-white/40
            "
          >
            © {YEAR} Marmara Tesisat.
            Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-5">
            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.12em]
                text-white/35
              "
            >
              Profesyonel Tesisat Çözümleri
            </span>

            <button
              type="button"
              onClick={handleBackToTop}
              aria-label="Sayfanın başına dön"
              title="Yukarı çık"
              className={`
                flex h-10 w-10
                shrink-0
                items-center justify-center
                border border-white/20
                text-white
                transition-all duration-300
                hover:border-[#25B7F5]
                hover:bg-[#25B7F5]
                hover:text-[#07111D]
                ${
                  showBackToTop
                    ? "opacity-100"
                    : "opacity-70"
                }
              `}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
