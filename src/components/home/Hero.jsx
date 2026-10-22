
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ArrowUpRight,
  ShieldCheck,
  Wrench,
} from "lucide-react";

/* =========================================
   HERO SLIDER SETTINGS
========================================= */

const SLIDE_DURATION = 4000;
const FADE_DURATION = 1.3;

const slides = [
  {
    id: 1,
    image: "/images/marmara-hero-1.jpg",
    alt: "Marmara Tesisat profesyonel tesisat onarımı",
    position: "center center",
  },
  {
    id: 2,
    image: "/images/marmara-hero-2.jpg",
    alt: "Marmara Tesisat kanalizasyon onarımı",
    position: "center center",
  },
  {
    id: 3,
    image: "/images/marmara-hero-3.jpg",
    alt: "Marmara Tesisat su kaçağı tamiri",
    position: "center center",
  },
];

/* =========================================
   CONTENT ANIMATION
========================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/* =========================================
   HERO
========================================= */

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prefersReducedMotion = useReducedMotion();

  /* =========================================
     INFINITE AUTO SLIDER
  ========================================= */

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        (current + 1) % slides.length
      );
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(interval);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="anasayfa"
      aria-label="Marmara Tesisat ana sayfa"
      className="
        relative isolate
        flex h-[100svh]
        min-h-[540px]
        w-full min-w-0
        overflow-hidden
        bg-[#091421]
        text-white
      "
    >
      {/* =====================================
          BACKGROUND IMAGES
      ===================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-0
          overflow-hidden
        "
      >
        {slides.map((slide, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
              }}
              transition={{
                duration: prefersReducedMotion
                  ? 0
                  : FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
              style={{
                zIndex: isActive ? 2 : 1,
              }}
            >
              <motion.div
                initial={false}
                animate={{
                  scale:
                    isActive && !prefersReducedMotion
                      ? 1.055
                      : 1,
                }}
                transition={{
                  duration: SLIDE_DURATION / 1000,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    objectPosition: slide.position,
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* =====================================
          DARK OVERLAY
      ===================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[3]
          bg-[linear-gradient(90deg,rgba(5,15,27,0.97)_0%,rgba(5,15,27,0.87)_36%,rgba(5,15,27,0.45)_75%,rgba(5,15,27,0.25)_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[3]
          bg-[linear-gradient(180deg,rgba(5,15,27,0.20)_0%,transparent_35%,rgba(5,15,27,0.65)_100%)]
        "
      />

      {/* BLUE ACCENT */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-0 top-0 z-[4]
          h-full w-[3px]
          bg-[#079FE3]/70
          shadow-[0_0_22px_rgba(7,159,227,0.35)]
        "
      />

      {/* =====================================
          HERO CONTENT
      ===================================== */}

      <div
        className="
          relative z-10
          mx-auto flex h-full w-full
          max-w-[1600px]
          min-w-0
          flex-col justify-center
          px-6
          pt-[145px] pb-7
          sm:px-10
          sm:pt-[150px]
          lg:px-16
          lg:pt-[135px]
          lg:pb-8
          xl:px-20
        "
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.12,
          }}
          className="
            w-full max-w-[850px]
          "
        >
          {/* EYEBROW */}

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.6,
            }}
            className="
              mb-5 flex
              items-center gap-4
              sm:mb-6
            "
          >
            <span
              className="
                h-px w-9
                bg-[#25B7F5]
              "
            />

            <span
              className="
                text-[10px]
                font-bold uppercase
                tracking-[0.3em]
                text-[#68CFFF]
                sm:text-xs
              "
            >
              Marmara Tesisat
            </span>
          </motion.div>

          {/* MAIN HEADING */}

          <motion.h1
            variants={fadeUp}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-[family-name:var(--font-manrope)]
              text-[clamp(36px,5.8vw,82px)]
              font-semibold
              leading-[1.07]
              tracking-[-0.065em]
              text-white
            "
          >
            Sağlam Altyapı.
            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#25B7F5]
                via-[#7AD8FF]
                to-[#25B7F5]
                bg-clip-text
                text-transparent
              "
            >
              Güvenilir Çözümler.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            variants={fadeUp}
            transition={{
              duration: 0.75,
            }}
            className="
              mt-5 max-w-[580px]
              text-[13px]
              leading-[1.8]
              text-white/75
              sm:mt-6
              sm:text-[15px]
              lg:text-[16px]
            "
          >
            Su tesisatından kalorifer sistemlerine,
            tadilat ve tamirat uygulamalarından
            profesyonel proje çözümlerine kadar
            yaşam alanlarınız için güvenilir
            hizmet sunuyoruz.
          </motion.p>

          {/* CTA BUTTONS */}

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.75,
            }}
            className="
              mt-7 flex
              flex-wrap items-center
              gap-3
              sm:mt-9 sm:gap-4
            "
          >
            <Link
              href="/#hizmetler"
              className="
                group inline-flex
                min-h-[48px]
                items-center justify-between
                gap-6
                bg-[#079FE3]
                px-5
                text-[11px]
                font-semibold
                tracking-[0.03em]
                text-white
                transition-all duration-300
                hover:bg-[#087FBA]
                hover:shadow-[0_12px_35px_rgba(7,159,227,0.25)]
                sm:min-h-[54px]
                sm:gap-9 sm:px-6
                sm:text-[12px]
              "
            >
              Hizmetlerimizi Keşfedin

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="
                  shrink-0
                  transition-transform duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              href="/#iletisim"
              className="
                group inline-flex
                min-h-[48px]
                items-center justify-between
                gap-6
                border border-white/30
                bg-white/[0.05]
                px-5
                text-[11px]
                font-semibold
                tracking-[0.03em]
                text-white
                backdrop-blur-sm
                transition-all duration-300
                hover:border-[#25B7F5]/70
                hover:bg-white/[0.10]
                sm:min-h-[54px]
                sm:gap-9 sm:px-6
                sm:text-[12px]
              "
            >
              Teklif Alın

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="
                  shrink-0
                  text-[#25B7F5]
                  transition-transform duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>

          {/* TRUST FEATURES */}

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.75,
            }}
            className="
              mt-8 flex
              flex-wrap items-center
              gap-x-7 gap-y-3
              border-t border-white/15
              pt-5
              sm:mt-10
              sm:gap-x-9
            "
          >
            <div className="flex items-center gap-3">
              <ShieldCheck
                size={21}
                strokeWidth={1.5}
                className="
                  shrink-0
                  text-[#25B7F5]
                "
              />

              <span
                className="
                  text-[11px]
                  font-medium
                  text-white/75
                "
              >
                Güvenilir Hizmet
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Wrench
                size={20}
                strokeWidth={1.5}
                className="
                  shrink-0
                  text-[#25B7F5]
                "
              />

              <span
                className="
                  text-[11px]
                  font-medium
                  text-white/75
                "
              >
                Profesyonel Uygulama
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
