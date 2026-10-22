
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

/* =========================================
   CONTACT INFORMATION
========================================= */

const PHONE = "0533 467 94 37";
const PHONE_URL = "tel:+905334679437";

const ADDRESS =
  "Kocasinan Merkez Mahallesi, Şirin 3 Sokak, No: 24/C, Bahçelievler / İstanbul";

const MAP_QUERY = encodeURIComponent(ADDRESS);

const MAP_EMBED_URL =
  `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

const DIRECTIONS_URL =
  `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

const WHATSAPP_URL =
  "https://wa.me/905334679437?text=" +
  encodeURIComponent(
    "Merhaba, Marmara Tesisat hizmetleri hakkında bilgi ve teklif almak istiyorum."
  );

const INSTAGRAM_URL =
  "https://www.instagram.com/marmara.tesisat";

/* =========================================
   CONTACT LINKS
========================================= */

const contactItems = [
  {
    label: "TELEFON",
    title: PHONE,
    href: PHONE_URL,
    icon: Phone,
    external: false,
  },
  {
    label: "WHATSAPP",
    title: "WhatsApp ile İletişim",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "INSTAGRAM",
    title: "@marmara.tesisat",
    href: INSTAGRAM_URL,
    icon: FaInstagram,
    external: true,
  },
];

/* =========================================
   ANIMATION SETTINGS
========================================= */

function useRevealAnimation() {
  const reduceMotion = useReducedMotion();

  return {
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 14 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  };
}

/* =========================================
   CONTACT LINK ITEM
========================================= */

function ContactItem({ item }) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="
        group flex w-full min-w-0
        items-center gap-4
        border-b border-[#C8D9E7]/80
        py-4
        transition-colors duration-300
        hover:border-[#079FE3]/60
      "
    >
      {/* ICON */}

      <div
        className="
          flex h-10 w-10 shrink-0
          items-center justify-center
          border border-[#079FE3]/35
          bg-white/40
          text-[#079FE3]
          transition-all duration-300
          group-hover:border-[#079FE3]
          group-hover:bg-[#079FE3]/10
        "
      >
        <Icon size={19} />
      </div>

      {/* TEXT */}

      <div className="min-w-0 flex-1">
        <span
          className="
            text-[9px] font-bold
            uppercase tracking-[0.18em]
            text-[#079FE3]
          "
        >
          {item.label}
        </span>

        <h3
          className="
            mt-1 break-words
            font-[family-name:var(--font-manrope)]
            text-[16px] font-semibold
            tracking-tight text-[#13263A]
            transition-colors duration-300
            group-hover:text-[#079FE3]
            sm:text-[18px]
          "
        >
          {item.title}
        </h3>
      </div>

      <ArrowUpRight
        size={17}
        className="
          shrink-0 text-[#64788A]
          transition-all duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:text-[#079FE3]
        "
      />
    </a>
  );
}

/* =========================================
   LEFT CONTACT INFORMATION
========================================= */

function ContactInformation() {
  return (
    <div className="w-full min-w-0">
      <div className="border-t border-[#C8D9E7]/80">
        {contactItems.map((item) => (
          <ContactItem key={item.label} item={item} />
        ))}
      </div>

      <p
        className="
          mt-5 max-w-[450px]
          border-l-2 border-[#079FE3]
          pl-4
          text-[12px] leading-6
          text-[#526A7F]
        "
      >
        Tesisat ihtiyaçlarınız için telefon
        veya WhatsApp üzerinden bizimle
        iletişime geçebilirsiniz.
      </p>
    </div>
  );
}

/* =========================================
   RIGHT MAP & ADDRESS
========================================= */

function ContactMap() {
  return (
    <div className="flex w-full min-w-0 flex-col">
      {/* ADDRESS */}

      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <MapPin
            size={16}
            className="shrink-0 text-[#079FE3]"
          />

          <span
            className="
              text-[10px] font-bold
              uppercase tracking-[0.2em]
              text-[#079FE3]
            "
          >
            ADRES & KONUM
          </span>
        </div>

        <address
          className="
            max-w-[600px]
            text-[12px] not-italic
            leading-6
            text-[#344A60]
            sm:text-[13px]
          "
        >
          {ADDRESS}
        </address>
      </div>

      {/* GOOGLE MAPS */}

      <div
        className="
          relative w-full min-w-0
          overflow-hidden
          border border-[#C8D9E7]
          bg-[#E5EDF4]
        "
      >
        <iframe
          title="Marmara Tesisat Google Maps Konumu"
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="
            block h-[220px] w-full
            border-0
            sm:h-[250px]
            lg:h-[min(34vh,310px)]
          "
        />
      </div>

      {/* DIRECTIONS BUTTON */}

      <a
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group mt-3 inline-flex
          min-h-[44px] w-full
          items-center justify-between
          gap-4
          border border-[#079FE3]
          bg-white/35
          px-5 py-2.5
          text-[12px] font-bold
          text-[#067DB5]
          transition-all duration-300
          hover:bg-[#079FE3]
          hover:text-white
        "
      >
        <span className="flex items-center gap-3">
          <Navigation size={16} />
          Yol Tarifi Al
        </span>

        <ArrowUpRight
          size={17}
          className="
            transition-transform duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </a>
    </div>
  );
}

/* =========================================
   MAIN CONTACT SECTION
========================================= */

export default function Contact() {
  const reveal = useRevealAnimation();

  return (
    <section
      id="iletisim"
      aria-labelledby="contact-heading"
      className="
        relative
        flex w-full min-w-0
        scroll-mt-[84px]
        flex-col
        overflow-x-clip
        bg-transparent
        text-[#13263A]
        lg:min-h-[calc(100svh-100px)]
        lg:scroll-mt-[100px]
      "
    >
      {/* SUBTLE READABILITY OVERLAY */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-0
          bg-gradient-to-r
          from-white/55
          via-white/30
          to-white/15
        "
      />

      {/* BACKGROUND GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute -right-24 top-0
            h-[340px] w-[340px]
            rounded-full
            bg-[#079FE3]/[0.035]
            blur-[100px]
          "
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          relative z-10
          mx-auto flex w-full
          max-w-[1600px]
          flex-1 flex-col
          justify-center
          px-5 py-10
          sm:px-10 sm:py-12
          lg:px-16 lg:py-7
          xl:px-20
        "
      >
        {/* HEADING */}

        <motion.div
          {...reveal}
          className="mb-7 max-w-[780px] lg:mb-8"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#079FE3]" />

            <span
              className="
                text-[10px] font-bold
                uppercase tracking-[0.22em]
                text-[#079FE3]
              "
            >
              MARMARA TESİSAT / İLETİŞİM
            </span>
          </div>

          <h2
            id="contact-heading"
            className="
              font-[family-name:var(--font-manrope)]
              text-[clamp(32px,4vw,54px)]
              font-extrabold
              leading-[1.08]
              tracking-[-0.05em]
              text-[#13263A]
            "
          >
            Bizimle İletişime Geçin
            <span className="text-[#079FE3]">.</span>
          </h2>

          <p
            className="
              mt-3 max-w-[650px]
              text-[13px] leading-6
              text-[#526A7F]
              sm:text-[14px]
            "
          >
            Tesisat ihtiyaçlarınız için bizimle
            iletişime geçin. Size uygun çözümleri
            birlikte değerlendirelim.
          </p>
        </motion.div>

        {/* TWO COLUMNS */}

        <motion.div
          {...reveal}
          className="
            grid w-full min-w-0
            grid-cols-1 gap-8
            lg:grid-cols-2
            lg:items-start
            lg:gap-12
            xl:gap-16
          "
        >
          <ContactInformation />

          <ContactMap />
        </motion.div>

        {/* BOTTOM SIGNATURE */}

        <div
          className="
            mt-8 flex flex-wrap
            items-center justify-between
            gap-3
            border-t border-[#C8D9E7]/80
            pt-4
          "
        >
          <div className="flex items-center gap-2">
            <MapPin
              size={14}
              className="shrink-0 text-[#079FE3]"
            />

            <span className="text-[11px] text-[#526A7F]">
              Marmara Tesisat · Bahçelievler / İstanbul
            </span>
          </div>

          <span
            className="
              text-[10px]
              uppercase tracking-[0.12em]
              text-[#64788A]
            "
          >
            Profesyonel Tesisat Çözümleri
          </span>
        </div>
      </div>
    </section>
  );
}
