
"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import Image from "next/image";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ArrowUpRight,
  ChevronRight,
  Phone,
} from "lucide-react";

import { services } from "@/data/services";

/* =========================================
   CONSTANTS
========================================= */

const PHONE_URL = "tel:+905334679437";
const WHATSAPP_NUMBER = "905334679437";

const SERVICE_EVENT = "marmara:service-change";

/* =========================================
   HELPERS
========================================= */

function getServiceIdFromUrl() {
  if (typeof window === "undefined") {
    return services[0]?.id ?? "";
  }

  let hash = "";

  try {
    hash = decodeURIComponent(
      window.location.hash.replace(/^#/, "")
    );
  } catch {
    hash = window.location.hash.replace(/^#/, "");
  }

  const matchingService = services.find(
    (service) => service.id === hash
  );

  return matchingService?.id ?? services[0]?.id ?? "";
}

function getWhatsAppUrl(serviceTitle) {
  const message = encodeURIComponent(
    `Merhaba, ${serviceTitle} hakkında bilgi ve teklif almak istiyorum.`
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

/* =========================================
   FIXED BACKGROUND
========================================= */

function ServicesBackground() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed inset-0 z-0
        overflow-hidden
      "
    >
      {/* BACKGROUND IMAGE */}

      <div
        className="
          absolute inset-0
          bg-[url('/images/hizmetler-bg.png')]
          bg-cover
          bg-center
          bg-no-repeat
        "
      />

      {/* LIGHT OVERLAY - 30% */}

      <div
        className="
          absolute inset-0
          bg-white/30
        "
      />

      {/* VERY SUBTLE GRADIENT */}

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/10
          via-transparent
          to-white/10
        "
      />
    </div>
  );
}

/* =========================================
   SERVICE NAVIGATION ITEM
========================================= */

function ServiceNavigationItem({
  service,
  index,
  active,
  onSelect,
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(service.id)}
      aria-current={active ? "true" : undefined}
      className={`
        group relative
        flex w-full min-w-0
        items-center justify-between
        gap-4
        border-b border-[#C9D8E6]/75
        py-[15px] pl-4 pr-2
        text-left
        transition-all duration-300
        focus-visible:outline-2
        focus-visible:outline-offset-[-2px]
        focus-visible:outline-[#079FE3]
        ${
          active
            ? "bg-white/85"
            : "hover:bg-white/60"
        }
      `}
    >
      {/* ACTIVE BLUE LINE */}

      <motion.span
        aria-hidden="true"
        initial={false}
        animate={{
          scaleY: active ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute bottom-0 left-0 top-0
          w-[3px]
          origin-center
          bg-[#079FE3]
        "
      />

      <div className="flex min-w-0 items-start gap-3">
        {/* NUMBER */}

        <span
          className={`
            mt-0.5 shrink-0
            text-[10px] font-bold
            tabular-nums
            ${
              active
                ? "text-[#079FE3]"
                : "text-[#7890A6]"
            }
          `}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* SERVICE TITLE */}

        <span
          className={`
            text-[13px] leading-[1.55]
            transition-colors duration-300
            sm:text-[14px]
            ${
              active
                ? "font-bold text-[#091421]"
                : "font-medium text-[#354C62] group-hover:text-[#091421]"
            }
          `}
        >
          {service.title}
        </span>
      </div>

      {/* ARROW */}

      <ChevronRight
        size={16}
        className={`
          shrink-0
          transition-all duration-300
          ${
            active
              ? "translate-x-0 text-[#079FE3]"
              : "-translate-x-1 text-[#7890A6] group-hover:translate-x-0 group-hover:text-[#079FE3]"
          }
        `}
      />
    </button>
  );
}

/* =========================================
   SERVICE IMAGE
========================================= */

function ServiceImage({
  service,
  hasError,
  onImageError,
}) {
  return (
    <div
      className="
        relative
        aspect-[16/10]
        w-full
        overflow-hidden
        bg-[#DCE8F1]
        sm:aspect-[16/9]
      "
    >
      {!hasError && service.image ? (
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 1023px) 100vw, 65vw"
          className="
            object-cover
            object-center
          "
          onError={() => onImageError(service.id)}
        />
      ) : (
        <div
          className="
            flex h-full w-full
            items-center justify-center
            bg-gradient-to-br
            from-[#142F48]
            to-[#091421]
            px-6 text-center
          "
        >
          <span
            className="
              font-[family-name:var(--font-manrope)]
              text-[clamp(20px,3vw,34px)]
              font-bold text-white/85
            "
          >
            {service.title}
          </span>
        </div>
      )}

      {/* IMAGE ACCENT */}

      <div
        aria-hidden="true"
        className="
          absolute bottom-0 left-0
          h-[5px] w-[110px]
          bg-[#079FE3]
        "
      />
    </div>
  );
}

/* =========================================
   SERVICE DETAILS
========================================= */

function ServiceDetails({
  service,
  activeIndex,
  total,
  imageErrors,
  onImageError,
}) {
  return (
    <article className="w-full min-w-0">
      {/* SERVICE IMAGE */}

      <ServiceImage
        service={service}
        hasError={Boolean(imageErrors[service.id])}
        onImageError={onImageError}
      />

      {/* CONTENT PANEL */}

      <div
        className="
          mt-0
          bg-white/75
          px-5 pb-8 pt-9
          backdrop-blur-[5px]
          sm:px-8 sm:pb-10 sm:pt-11
        "
      >
        {/* EYEBROW */}

        <div
          className="
            mb-5
            flex items-center justify-between
            gap-4
          "
        >
          <span
            className="
              text-[11px] font-bold
              uppercase tracking-[0.22em]
              text-[#079FE3]
            "
          >
            HİZMET DETAYLARI
          </span>

          <span
            className="
              text-[12px] font-semibold
              tabular-nums
              text-[#7890A6]
            "
          >
            {String(activeIndex + 1).padStart(2, "0")}
            {" / "}
            {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* TITLE */}

        <h2
          className="
            max-w-[780px]
            font-[family-name:var(--font-manrope)]
            text-[clamp(27px,3.3vw,47px)]
            font-extrabold
            leading-[1.16]
            tracking-[-0.045em]
            text-[#091421]
          "
        >
          {service.title}
        </h2>

        <div
          className="
            mt-7 h-px w-full
            bg-[#C8D7E4]/80
          "
        />

        {/* DESCRIPTION */}

        <div
          className="
            mt-7 space-y-5
            text-[14px] leading-[1.9]
            text-[#354C62]
            sm:text-[15px]
          "
        >
          {service.description && (
            <p>{service.description}</p>
          )}

          {service.details && (
            <p>{service.details}</p>
          )}
        </div>

        {/* CONTACT BUTTONS */}

        <div
          className="
            mt-10
            flex flex-wrap
            items-center gap-4
          "
        >
          <a
            href={getWhatsAppUrl(service.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex
              min-h-[50px]
              items-center justify-center
              gap-3
              bg-[#091421]
              px-6 py-3
              text-[12px] font-semibold
              text-white
              transition-all duration-300
              hover:bg-[#079FE3]
              sm:text-[13px]
            "
          >
            Bu Hizmet İçin Teklif Alın

            <ArrowUpRight
              size={17}
              className="
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>

          <a
            href={PHONE_URL}
            className="
              inline-flex
              min-h-[50px]
              items-center gap-2
              text-[13px] font-semibold
              text-[#091421]
              transition-colors
              hover:text-[#079FE3]
            "
          >
            <Phone size={16} />
            Hemen Arayın
          </a>
        </div>
      </div>
    </article>
  );
}

/* =========================================
   MAIN COMPONENT
========================================= */

export default function ServicesContent() {
  const shouldReduceMotion = useReducedMotion();

  const [activeId, setActiveId] = useState(
    services[0]?.id ?? ""
  );

  const [imageErrors, setImageErrors] = useState({});

  /* =========================================
     URL SYNCHRONIZATION
  ========================================= */

  const syncFromUrl = useCallback(() => {
    setActiveId(getServiceIdFromUrl());
  }, []);

  useEffect(() => {
    syncFromUrl();

    window.addEventListener(
      "hashchange",
      syncFromUrl
    );

    window.addEventListener(
      "popstate",
      syncFromUrl
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        syncFromUrl
      );

      window.removeEventListener(
        "popstate",
        syncFromUrl
      );
    };
  }, [syncFromUrl]);

  /* =========================================
     NAVBAR SERVICE SELECTION
  ========================================= */

  useEffect(() => {
    const handleServiceChange = (event) => {
      const id = event.detail?.id;

      if (!id) {
        setActiveId(services[0]?.id ?? "");
        return;
      }

      const matchingService = services.find(
        (service) => service.id === id
      );

      if (matchingService) {
        setActiveId(matchingService.id);
      }
    };

    window.addEventListener(
      SERVICE_EVENT,
      handleServiceChange
    );

    return () => {
      window.removeEventListener(
        SERVICE_EVENT,
        handleServiceChange
      );
    };
  }, []);

  /* =========================================
     SELECT SERVICE
  ========================================= */

  const selectService = useCallback((id) => {
    const matchingService = services.find(
      (service) => service.id === id
    );

    if (!matchingService) return;

    setActiveId(matchingService.id);

    const nextUrl =
      `/hizmetler#${matchingService.id}`;

    window.history.pushState(
      window.history.state,
      "",
      nextUrl
    );
  }, []);

  /* =========================================
     IMAGE ERROR HANDLING
  ========================================= */

  const handleImageError = useCallback((id) => {
    setImageErrors((previous) => ({
      ...previous,
      [id]: true,
    }));
  }, []);

  /* =========================================
     ACTIVE SERVICE
  ========================================= */

  const activeService =
    services.find(
      (service) => service.id === activeId
    ) ?? services[0];

  const activeIndex = services.findIndex(
    (service) => service.id === activeService?.id
  );

  if (!activeService) {
    return null;
  }

  return (
    <section
      id="hizmetler-icerik"
      className="
        relative isolate
        min-h-screen
        w-full min-w-0
        bg-transparent
        text-[#13263A]
      "
    >
      {/* =====================================
          FIXED BACKGROUND
      ===================================== */}

      <ServicesBackground />

      {/* =====================================
          PAGE CONTENT
      ===================================== */}

      <div
        className="
          relative z-10
          mx-auto
          w-full max-w-[1600px]
          px-5 pb-20 pt-[185px]
          sm:px-10 sm:pt-[195px]
          lg:px-16 lg:pb-28 lg:pt-[205px]
          xl:px-20
        "
      >
        {/* =====================================
            PAGE HEADING
        ===================================== */}

        <div className="mb-12 lg:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#079FE3]" />

            <span
              className="
                text-[10px] font-bold
                uppercase tracking-[0.25em]
                text-[#079FE3]
                sm:text-[11px]
              "
            >
              MARMARA TESİSAT
            </span>
          </div>

          <h1
            className="
              font-[family-name:var(--font-manrope)]
              text-[clamp(38px,5vw,72px)]
              font-extrabold
              leading-[1.08]
              tracking-[-0.055em]
              text-[#091421]
            "
          >
            Hizmetlerimiz
            <span className="text-[#079FE3]">
              .
            </span>
          </h1>

          <p
            className="
              mt-5 max-w-[650px]
              text-[14px] leading-7
              text-[#354C62]
              sm:text-[15px]
            "
          >
            Tesisat ihtiyaçlarınıza yönelik profesyonel
            uygulamalarımızı keşfedin. Detaylarını görmek
            istediğiniz hizmeti seçebilirsiniz.
          </p>
        </div>

        {/* =====================================
            TWO COLUMN LAYOUT
        ===================================== */}

        <div
          className="
            grid min-w-0
            grid-cols-1 gap-10
            lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.7fr)]
            lg:items-start
            lg:gap-12
            xl:gap-20
          "
        >
          {/* =====================================
              LEFT SERVICES NAVIGATION
          ===================================== */}

          <aside
            className="
              min-w-0
              lg:sticky
              lg:top-[165px]
            "
          >
            <div
              className="
                mb-6
                flex items-center justify-between
                gap-3
              "
            >
              <span
                className="
                  text-[11px] font-bold
                  uppercase tracking-[0.18em]
                  text-[#354C62]
                "
              >
                HİZMET ALANLARIMIZ
              </span>

              <span
                className="
                  text-[12px] font-semibold
                  tabular-nums
                  text-[#079FE3]
                "
              >
                {String(activeIndex + 1).padStart(2, "0")}

                <span className="mx-1.5 text-[#7890A6]">
                  /
                </span>

                {String(services.length).padStart(2, "0")}
              </span>
            </div>

            {/* TRANSLUCENT SERVICE LIST */}

            <nav
              aria-label="Hizmet seçimi"
              className="
                overflow-hidden
                border border-white/45
                bg-white/35
                backdrop-blur-[4px]
                shadow-[0_12px_35px_rgba(9,20,33,0.04)]
              "
            >
              {services.map((service, index) => (
                <ServiceNavigationItem
                  key={service.id}
                  service={service}
                  index={index}
                  active={
                    activeService.id === service.id
                  }
                  onSelect={selectService}
                />
              ))}
            </nav>
          </aside>

          {/* =====================================
              RIGHT SERVICE CONTENT
          ===================================== */}

          <div
            className="
              min-w-0
              lg:min-h-[680px]
            "
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={activeService.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={
                  shouldReduceMotion
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: -8,
                      }
                }
                transition={{
                  duration: shouldReduceMotion
                    ? 0
                    : 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full min-w-0"
              >
                <ServiceDetails
                  service={activeService}
                  activeIndex={activeIndex}
                  total={services.length}
                  imageErrors={imageErrors}
                  onImageError={handleImageError}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
