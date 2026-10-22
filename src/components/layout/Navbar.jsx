
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import {
  ArrowUpRight,
  Phone,
  Camera,
  MessageCircle,
} from "lucide-react";

import ServiceTicker from "./ServiceTicker";

/* =========================================
   CONSTANTS
========================================= */

const navigation = [
  {
    label: "Ana Sayfa",
    href: "/#anasayfa",
    id: "anasayfa",
  },
  {
    label: "Hakkımızda",
    href: "/#hakkimizda",
    id: "hakkimizda",
  },
  {
    label: "Hizmetlerimiz",
    href: "/#hizmetler",
    id: "hizmetler",
  },
  {
    label: "Çalışmalarımız",
    href: "/#calismalar",
    id: "calismalar",
  },
  {
    label: "İletişim",
    href: "/#iletisim",
    id: "iletisim",
  },
];

const PHONE_NUMBER = "0533 467 94 37";
const PHONE_URL = "tel:+905334679437";
const WHATSAPP_URL = "https://wa.me/905334679437";

const INSTAGRAM_URL =
  "https://www.instagram.com/marmara.tesisat";

/* =========================================
   CONTACT ACTIONS
========================================= */

function ContactActions() {
  return (
    <div className="marmara-contact">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişim"
        title="WhatsApp"
        className="marmara-contact-button marmara-whatsapp"
      >
        <MessageCircle
          size={21}
          strokeWidth={2.3}
          aria-hidden="true"
        />
      </a>

      <a
        href={PHONE_URL}
        aria-label={`${PHONE_NUMBER} numarasını ara`}
        className="marmara-phone-number"
      >
        {PHONE_NUMBER}
      </a>

      <a
        href={PHONE_URL}
        aria-label="Hemen ara"
        title="Hemen Ara"
        className="marmara-contact-button marmara-call"
      >
        <Phone
          size={21}
          strokeWidth={2.3}
          aria-hidden="true"
        />
      </a>
    </div>
  );
}

/* =========================================
   BRAND LOGO
========================================= */

function BrandLogo({ mobile = false, onClick }) {
  return (
    <Link
      href="/#anasayfa"
      onClick={onClick}
      aria-label="Marmara Tesisat Ana Sayfa"
      className="
        group flex w-fit shrink-0
        items-center gap-2
      "
    >
      <div
        className={
          mobile
            ? "marmara-brand-glow relative h-[64px] w-[64px] shrink-0 sm:h-[74px] sm:w-[74px]"
            : "marmara-brand-glow relative h-[76px] w-[82px] shrink-0 xl:h-[88px] xl:w-[96px]"
        }
      >
        <Image
          src="/images/marmara-mark.png"
          alt="Marmara Tesisat"
          fill
          sizes={mobile ? "82px" : "106px"}
          priority
          className="
            object-contain
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {!mobile && (
        <div className="flex flex-col">
          <span
            className="
              font-[family-name:var(--font-manrope)]
              text-[14px] font-extrabold
              leading-none tracking-[0.05em]
              text-white
              xl:text-[17px]
            "
          >
            MARMARA
          </span>

          <span
            className="
              mt-1.5 text-[10px]
              font-semibold tracking-[0.32em]
              text-[#25B7F5]
            "
          >
            TESİSAT
          </span>
        </div>
      )}
    </Link>
  );
}

/* =========================================
   PREMIUM HAMBURGER BUTTON
========================================= */

function MenuToggle({ open, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
      aria-expanded={open}
      aria-controls="marmara-mobile-menu"
      className="
        group relative z-10
        flex h-[44px] w-[44px]
        shrink-0 flex-col
        items-center justify-center
        justify-self-end
        gap-[7px]
        rounded-full
        border border-white/15
        bg-white/[0.045]
        text-white
        backdrop-blur-sm
        transition-[border-color,background-color,box-shadow]
        duration-300
        hover:border-[#25B7F5]/60
        hover:bg-[#25B7F5]/10
        hover:shadow-[0_0_22px_rgba(37,183,245,0.12)]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#25B7F5]
        sm:h-[48px] sm:w-[48px]
      "
    >
      <motion.span
        aria-hidden="true"
        initial={false}
        animate={
          open
            ? {
                rotate: 45,
                y: 4.5,
                width: 21,
              }
            : {
                rotate: 0,
                y: 0,
                width: 21,
              }
        }
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          block h-[1.5px]
          origin-center rounded-full
          bg-white
        "
      />

      <motion.span
        aria-hidden="true"
        initial={false}
        animate={
          open
            ? {
                rotate: -45,
                y: -4.5,
                width: 21,
              }
            : {
                rotate: 0,
                y: 0,
                width: 15,
              }
        }
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          block h-[1.5px]
          origin-center self-center
          rounded-full bg-[#25B7F5]
        "
      />
    </button>
  );
}

/* =========================================
   NAVBAR
========================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState("anasayfa");

  /* =========================================
     SCROLL SHADOW ONLY
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     CLOSE ON ROUTE CHANGE
  ========================================= */

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* =========================================
     ACTIVE SECTION
  ========================================= */

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-160px 0px -45% 0px",
        threshold: [0, 0.2, 0.5, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  /* =========================================
     MOBILE MENU BEHAVIOR
  ========================================= */

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (item) =>
    pathname === "/" &&
    activeSection === item.id;

  return (
    <>
      {/* =====================================
          FIXED HEADER + SERVICE TICKER
      ===================================== */}

      <header
        className={`
          fixed inset-x-0 top-0 z-50
          w-full
          border-b border-white/10
          bg-[#091421]
          transition-shadow duration-500
          ${
            scrolled
              ? "shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
              : ""
          }
        `}
      >
        {/* SERVICE TICKER - ALWAYS VISIBLE */}

        <div className="relative w-full overflow-hidden">
          <ServiceTicker />
        </div>

        {/* =====================================
            NAVBAR CONTAINER
        ===================================== */}

        <div
          className="
            relative mx-auto
            h-[84px] w-full
            max-w-[1600px]
            px-3
            sm:px-5
            lg:h-[100px]
            lg:px-6
            xl:px-10
          "
        >
          {/* =================================
              MOBILE NAVBAR
          ================================= */}

          <div
            className="
              grid h-full w-full
              grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
              items-center
              lg:hidden
            "
          >
            {/* LOGO */}

            <div className="min-w-0 justify-self-start">
              <BrandLogo
                mobile
                onClick={closeMenu}
              />
            </div>

            {/* CONTACT ACTIONS */}

            <div
              className="
                relative z-10
                flex items-center justify-center
                justify-self-center
              "
            >
              <ContactActions />
            </div>

            {/* MOBILE MENU TOGGLE */}

            <MenuToggle
              open={menuOpen}
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
            />
          </div>

          {/* =================================
              DESKTOP NAVBAR
          ================================= */}

          <div
            className="
              hidden h-full w-full
              items-center
              lg:grid
              lg:grid-cols-[auto_minmax(0,1fr)_auto]
              lg:gap-4
              xl:gap-7
            "
          >
            {/* LOGO */}

            <BrandLogo />

            {/* NAVIGATION */}

            <nav
              aria-label="Ana navigasyon"
              className="
                flex min-w-0
                items-center justify-center
                gap-3
                xl:gap-5
                2xl:gap-8
              "
            >
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={
                    isActive(item)
                      ? "location"
                      : undefined
                  }
                  className={`
                    group relative
                    whitespace-nowrap py-3
                    text-[11px] font-medium
                    transition-colors duration-300
                    xl:text-[12px]
                    2xl:text-[13px]
                    ${
                      isActive(item)
                        ? "text-white"
                        : "text-white/65 hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`
                      absolute bottom-1 left-0
                      h-px bg-[#25B7F5]
                      transition-all duration-300
                      ${
                        isActive(item)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              ))}
            </nav>

            {/* CONTACT ACTIONS */}

            <div
              className="
                flex shrink-0
                items-center justify-end
              "
            >
              <ContactActions />
            </div>
          </div>
        </div>
      </header>

      {/* =====================================
          MOBILE MENU PANEL
      ===================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="marmara-mobile-menu"
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil navigasyon"
            initial={{
              opacity: 0,
              y: -14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed inset-0 z-40
              flex h-dvh w-full
              flex-col
              overflow-x-hidden
              overflow-y-auto
              bg-[#091421]
              px-6 pb-8
              pt-[155px]
              text-white
              sm:px-10
              lg:hidden
            "
          >
            {/* NAVIGATION LINKS */}

            <nav
              aria-label="Mobil navigasyon"
              className="
                mx-auto flex
                w-full max-w-[600px]
                flex-col
              "
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.055,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-white/10"
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      group flex items-center
                      justify-between gap-4
                      py-5
                    "
                  >
                    <span
                      className={`
                        font-[family-name:var(--font-manrope)]
                        text-[clamp(21px,5vw,30px)]
                        font-semibold tracking-tight
                        transition-colors duration-300
                        ${
                          isActive(item)
                            ? "text-[#25B7F5]"
                            : "text-white group-hover:text-[#25B7F5]"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.4}
                      className="
                        shrink-0 text-white/40
                        transition-all duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#25B7F5]
                      "
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* MOBILE MENU FOOTER */}

            <div
              className="
                mx-auto mt-auto
                flex w-full max-w-[600px]
                items-center justify-between
                gap-4
                border-t border-white/10
                pt-6
              "
            >
              <div className="flex flex-col gap-2">
                <span
                  className="
                    text-[10px] font-semibold
                    uppercase tracking-[0.24em]
                    text-[#25B7F5]
                  "
                >
                  Marmara Tesisat
                </span>

                <span
                  className="
                    text-[11px] text-white/45
                  "
                >
                  © 2026 Tüm Hakları Saklıdır.
                </span>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Marmara Tesisat Instagram"
                title="Instagram"
                className="
                  flex h-11 w-11
                  shrink-0
                  items-center justify-center
                  rounded-full
                  border border-white/15
                  text-white/70
                  transition-all duration-300
                  hover:border-[#25B7F5]/60
                  hover:bg-[#25B7F5]/10
                  hover:text-[#25B7F5]
                "
              >
                <Camera
                  size={19}
                  strokeWidth={1.7}
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
