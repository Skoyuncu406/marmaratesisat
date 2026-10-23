
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import {
  ArrowUpRight,
  ChevronDown,
  Phone,
  Camera,
  MessageCircle,
} from "lucide-react";

import ServiceTicker from "./ServiceTicker";
import { services, getServiceHref } from "@/data/services";

const SERVICE_EVENT = "marmara:service-change";

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
   SERVICE NAVIGATION EVENT
========================================= */

function notifyServiceChange(id) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent(SERVICE_EVENT, {
      detail: { id },
    })
  );
}

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
   MENU TOGGLE
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
            ? { rotate: 45, y: 4.5, width: 21 }
            : { rotate: 0, y: 0, width: 21 }
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
            ? { rotate: -45, y: -4.5, width: 21 }
            : { rotate: 0, y: 0, width: 15 }
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
   DESKTOP SERVICES DROPDOWN
========================================= */

function DesktopServicesDropdown({ active }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () =>
      document.removeEventListener(
        "keydown",
        handleEscape
      );
  }, []);

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget
          )
        ) {
          setOpen(false);
        }
      }}
    >
      <div className="group flex items-center gap-1">
        <Link
          href="/hizmetler"
          onClick={() => {
            setOpen(false);
            notifyServiceChange(null);
          }}
          className={`
            relative whitespace-nowrap py-3
            text-[11px] font-medium
            transition-colors duration-300
            xl:text-[12px]
            2xl:text-[13px]
            ${
              active
                ? "text-white"
                : "text-white/65 hover:text-white"
            }
          `}
        >
          Hizmetlerimiz

          <span
            className={`
              absolute bottom-1 left-0
              h-px bg-[#25B7F5]
              transition-all duration-300
              ${
                active
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }
            `}
          />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Hizmetler alt menüsünü aç"
          aria-expanded={open}
          aria-controls="desktop-services-dropdown"
          className="
            flex h-8 w-6
            items-center justify-center
            text-white/70
            hover:text-[#25B7F5]
            focus-visible:outline-2
            focus-visible:outline-[#25B7F5]
          "
        >
          <ChevronDown
            size={15}
            className={`
              transition-transform duration-300
              ${open ? "rotate-180" : ""}
            `}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="desktop-services-dropdown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute left-1/2 top-full
              z-[70] w-[350px]
              -translate-x-1/2
              overflow-hidden rounded-b-xl
              border border-white/10
              bg-[#0D1C2C]
              shadow-[0_24px_65px_rgba(0,0,0,0.35)]
              xl:w-[390px]
            "
          >
            <div className="border-b border-white/10 px-5 py-4">
              <span
                className="
                  text-[10px] font-semibold
                  uppercase tracking-[0.2em]
                  text-[#25B7F5]
                "
              >
                MARMARA TESİSAT
              </span>

              <p className="mt-1 text-[14px] font-semibold text-white">
                Hizmetlerimiz
              </p>
            </div>

            <div
              className="
                max-h-[min(65vh,520px)]
                overflow-y-auto
                overscroll-contain py-2
              "
            >
              <Link
                href="/hizmetler"
                onClick={() => {
                  setOpen(false);
                  notifyServiceChange(null);
                }}
                className="
                  group flex items-center
                  justify-between gap-3
                  border-b border-white/10
                  px-5 py-3
                  text-[12px] font-semibold
                  text-[#25B7F5]
                  transition-colors
                  hover:bg-white/[0.06]
                "
              >
                Tüm Hizmetler

                <ArrowUpRight size={16} />
              </Link>

              {services.map((service) => (
                <Link
                  key={service.id}
                  href={getServiceHref(service.id)}
                  onClick={() => {
                    setOpen(false);
                    notifyServiceChange(service.id);
                  }}
                  className="
                    group flex items-center
                    justify-between gap-3
                    px-5 py-3
                    text-[12px] leading-relaxed
                    text-white/75
                    transition-all duration-200
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  <span className="min-w-0">
                    {service.title}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="
                      shrink-0 text-white/30
                      transition-all duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#25B7F5]
                    "
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================
   NAVBAR
========================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);
  const [activeSection, setActiveSection] =
    useState("anasayfa");

  /* SCROLL SHADOW */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ROUTE CHANGE */

  useEffect(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

 
  /* =========================================
     NAVBAR HEIGHT AND SCROLL SPY
  ========================================= */

  const navigationLockRef = useRef(null);

  useEffect(() => {
    const header = document.getElementById("marmara-fixed-header");
    if (!header) return;

    const updateHeight = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--marmara-header-height", `${height}px`);
      document.documentElement.style.scrollPaddingTop = `${height}px`;
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
      document.documentElement.style.removeProperty("--marmara-header-height");
      document.documentElement.style.removeProperty("scroll-padding-top");
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    let frameId = null;

    const updateActiveSection = () => {
      if (navigationLockRef.current !== null) return;

      const header = document.getElementById("marmara-fixed-header");
      const headerHeight = header?.getBoundingClientRect().height ?? 100;
      const checkpoint = headerHeight + 3;
      const about = document.getElementById("hakkimizda");
      const contact = document.getElementById("iletisim");

      let current = "anasayfa";
      if (about && about.getBoundingClientRect().top <= checkpoint) {
        current = "hakkimizda";
      }
      if (contact && contact.getBoundingClientRect().top <= checkpoint) {
        current = "iletisim";
      }
      setActiveSection((previous) => previous === current ? previous : current);
    };

    const onScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateActiveSection();
      });
    };

    const onHistoryChange = () => {
      const id = window.location.hash.slice(1);
      if (navigation.some((item) => item.id === id)) {
        setActiveSection(id);
      } else {
        onScroll();
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onHistoryChange);
    window.addEventListener("popstate", onHistoryChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHistoryChange);
      window.removeEventListener("popstate", onHistoryChange);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  /* =========================================
     SECTION NAVIGATION
  ========================================= */

  const handleSectionNavigation = (event, id) => {
    if (pathname !== "/") {
      closeMenu();
      return;
    }

    const target = document.getElementById(id);
    if (!target && id !== "anasayfa") return;

    event.preventDefault();
    closeMenu();

    const header = document.getElementById("marmara-fixed-header");
    const headerHeight = header?.getBoundingClientRect().height ?? 100;
    const targetTop = target
      ? window.scrollY + target.getBoundingClientRect().top
      : 0;
    const destination = id === "anasayfa"
      ? 0
      : Math.max(0, targetTop - headerHeight);

    setActiveSection(id);
    window.history.pushState(null, "", `/#${id}`);

    // Keep the chosen link highlighted during smooth scrolling.
    navigationLockRef.current = id;
    window.scrollTo({ top: destination, behavior: "smooth" });

    // Unlock when scrolling reaches the target (or user interrupts it).
    const startedAt = performance.now();
    const checkArrival = () => {
      if (navigationLockRef.current !== id) return;
      if (Math.abs(window.scrollY - destination) < 2 ||
          performance.now() - startedAt > 1800) {
        navigationLockRef.current = null;
        return;
      }
      window.requestAnimationFrame(checkArrival);
    };
    window.requestAnimationFrame(checkArrival);
  };

  /* MOBILE MENU */

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

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const isActive = (item) =>
    pathname === "/" &&
    activeSection === item.id;

  const servicesActive = pathname === "/hizmetler";

  const renderDesktopLink = (item) => (
    <Link
      key={item.id}
      href={item.href}
      onClick={(event) => handleSectionNavigation(event, item.id)}
      aria-current={
        isActive(item) ? "location" : undefined
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
  );

  const renderMobileLink = (item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.055,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-b border-white/10"
    >
      <Link
        href={item.href}
        onClick={(event) => handleSectionNavigation(event, item.id)}
        className="
          group flex items-center
          justify-between gap-4 py-5
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
  );

  return (
    <>
      {/* =====================================
          FIXED HEADER
      ===================================== */}

      <header
       id="marmara-fixed-header"
        className={`
          fixed inset-x-0 top-0 z-50
          w-full border-b border-white/10
          bg-[#091421]
          transition-shadow duration-500
          ${
            scrolled
              ? "shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
              : ""
          }
        `}
      >
        {/* SERVICE TICKER */}

        <div className="relative w-full overflow-hidden">
          <ServiceTicker />
        </div>

        {/* NAVBAR CONTAINER */}

        <div
          className="
            relative mx-auto
            h-[84px] w-full
            max-w-[1600px]
            px-3 sm:px-5
            lg:h-[100px] lg:px-6
            xl:px-10
          "
        >
          {/* MOBILE NAVBAR */}

          <div
            className="
              grid h-full w-full
              grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
              items-center lg:hidden
            "
          >
            <div className="min-w-0 justify-self-start">
              <BrandLogo
                mobile
                onClick={(event) => handleSectionNavigation(event, "anasayfa")}
              />
            </div>

            <div
              className="
                relative z-10
                flex items-center justify-center
                justify-self-center
              "
            >
              <ContactActions />
            </div>

            <MenuToggle
              open={menuOpen}
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
            />
          </div>

          {/* DESKTOP NAVBAR */}

          <div
            className="
              hidden h-full w-full
              items-center
              lg:grid
              lg:grid-cols-[auto_minmax(0,1fr)_auto]
              lg:gap-4 xl:gap-7
            "
          >
            <BrandLogo onClick={(event) => handleSectionNavigation(event, "anasayfa")} />

            <nav
              aria-label="Ana navigasyon"
              className="
                flex min-w-0
                items-center justify-center
                gap-3 xl:gap-5 2xl:gap-8
              "
            >
              {navigation
                .slice(0, 2)
                .map(renderDesktopLink)}

              <DesktopServicesDropdown
                active={servicesActive}
              />

              {navigation
                .slice(2)
                .map(renderDesktopLink)}
            </nav>

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
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed inset-0 z-40
              flex h-dvh w-full flex-col
              overflow-x-hidden
              overflow-y-auto
              bg-[#091421]
              px-6 pb-8 pt-[155px]
              text-white sm:px-10
              lg:hidden
            "
          >
            <nav
              aria-label="Mobil navigasyon"
              className="
                mx-auto flex
                w-full max-w-[600px]
                flex-col
              "
            >
              {navigation
                .slice(0, 2)
                .map(renderMobileLink)}

              {/* MOBILE SERVICES ACCORDION */}

              <div className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen(
                      (prev) => !prev
                    )
                  }
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-list"
                  className="
                    flex w-full items-center
                    justify-between gap-4 py-5
                    text-left
                  "
                >
                  <span
                    className={`
                      font-[family-name:var(--font-manrope)]
                      text-[clamp(21px,5vw,30px)]
                      font-semibold tracking-tight
                      ${
                        servicesActive ||
                        mobileServicesOpen
                          ? "text-[#25B7F5]"
                          : "text-white"
                      }
                    `}
                  >
                    Hizmetlerimiz
                  </span>

                  <ChevronDown
                    size={22}
                    className={`
                      shrink-0 text-[#25B7F5]
                      transition-transform duration-300
                      ${
                        mobileServicesOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      id="mobile-services-list"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                          mb-4 border-l
                          border-[#25B7F5]/35
                          pl-4
                        "
                      >
                        <Link
                          href="/hizmetler"
                          onClick={() => {
                            closeMenu();
                            notifyServiceChange(null);
                          }}
                          className="
                            flex items-center
                            justify-between gap-3
                            py-3 text-[14px]
                            font-semibold
                            text-[#25B7F5]
                          "
                        >
                          Tüm Hizmetler
                          <ArrowUpRight size={16} />
                        </Link>

                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={getServiceHref(
                              service.id
                            )}
                            onClick={() => {
                              closeMenu();
                              notifyServiceChange(
                                service.id
                              );
                            }}
                            className="
                              flex items-center
                              justify-between gap-3
                              border-t border-white/[0.06]
                              py-3 text-[13px]
                              leading-relaxed
                              text-white/75
                              transition-colors
                              hover:text-[#25B7F5]
                            "
                          >
                            <span>
                              {service.title}
                            </span>

                            <ArrowUpRight
                              size={14}
                              className="
                                shrink-0
                                text-white/35
                              "
                            />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navigation
                .slice(2)
                .map((item, index) =>
                  renderMobileLink(item, index + 3)
                )}
            </nav>

            {/* MOBILE FOOTER */}

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

                <span className="text-[11px] text-white/45">
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
                  shrink-0 items-center
                  justify-center rounded-full
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
