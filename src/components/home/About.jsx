
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  MoveUpRight,
} from "lucide-react";

/* =========================================
   ANIMATION SETTINGS
========================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const highlights = [
  "Doğru Tespit",
  "Titiz İşçilik",
  "Kalıcı Çözümler",
];

/* =========================================
   ABOUT SECTION
========================================= */

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = {
    initial: prefersReducedMotion ? false : "hidden",
    whileInView: "visible",
    viewport: {
      once: true,
      amount: 0.15,
    },
  };

  return (
    <section
      id="hakkimizda"
      aria-labelledby="about-heading"
      className="
        relative
        w-full min-w-0
        scroll-mt-[85px]
        overflow-x-clip
        bg-transparent
        text-[#13263A]
        lg:scroll-mt-[100px]
      "
    >
      {/* =====================================
          SUBTLE READABILITY GRADIENT
      ===================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-0
          bg-gradient-to-r
          from-white/65
          via-white/35
          to-white/10
        "
      />

      {/* SUBTLE BLUE GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-0 top-0
          h-[450px] w-[450px]
          max-w-full
          rounded-full
          bg-[#079FE3]/[0.035]
          blur-[110px]
        "
      />

      {/* =====================================
          SECTION CONTAINER
      ===================================== */}

      <div
        className="
          relative z-10
          mx-auto w-full
          max-w-[1600px]
          px-6 py-20
          sm:px-10 sm:py-24
          lg:px-16 lg:py-28
          xl:px-20
        "
      >
        {/* TOP SECTION LABEL */}

        <motion.div
          {...motionProps}
          variants={reveal}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-10 flex
            items-center gap-4
            lg:mb-14
          "
        >
          <span className="h-px w-10 bg-[#079FE3]" />

          <span
            className="
              text-[11px]
              font-bold uppercase
              tracking-[0.28em]
              text-[#079FE3]
            "
          >
            Marmara Tesisat Hakkında
          </span>
        </motion.div>

        {/* =====================================
            MAIN GRID
        ===================================== */}

        <div
          className="
            grid min-w-0
            items-center gap-14
            lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
            lg:gap-16
            xl:gap-24
          "
        >
          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <motion.div
            {...motionProps}
            variants={reveal}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-w-0"
          >
            {/* HEADING */}

            <h2
              id="about-heading"
              className="
                max-w-[760px]
                font-[family-name:var(--font-manrope)]
                text-[clamp(36px,4.6vw,72px)]
                font-semibold
                leading-[1.12]
                tracking-[-0.06em]
                text-[#13263A]
              "
            >
              İşimizin
              <br />
              Temelinde
              <br />

              <span className="text-[#079FE3]">
                Güven Var.
              </span>
            </h2>

            {/* INTRO */}

            <p
              className="
                mt-8 max-w-[670px]
                text-[15px]
                font-medium
                leading-[1.95]
                text-[#344A60]
                sm:text-[16px]
              "
            >
              Marmara Tesisat olarak İstanbul
              genelinde su tesisatı, arıza tespiti,
              bakım ve onarım alanlarında
              profesyonel hizmet sunuyoruz.
              Deneyim, teknik bilgi ve modern
              uygulama yöntemlerini bir araya
              getirerek yaşam alanlarının tesisat
              ihtiyaçlarına güvenilir, hızlı ve
              kalıcı çözümler üretmeyi hedefliyoruz.
            </p>

            {/* DESCRIPTION */}

            <div
              className="
                mt-6 flex max-w-[670px]
                flex-col gap-5
                text-[14px]
                leading-[1.95]
                text-[#526A7F]
                sm:text-[15px]
              "
            >
              <p>
                Evlerden iş yerlerine,
                apartmanlardan sitelere ve
                ticari yapılara kadar farklı
                ölçeklerdeki mekanların tesisat
                sorunlarına titizlikle yaklaşıyoruz.
                Her uygulamada sorunun kaynağını
                doğru belirlemeye, gereksiz
                müdahalelerden kaçınmaya ve
                ihtiyaca en uygun çözümü sunmaya
                önem veriyoruz.
              </p>

              <p>
                Su kaçağı tespiti, tıkanıklık açma,
                gider ve kanalizasyon onarımı,
                temiz su tesisatı, kalorifer
                tesisatı, tadilat ve tamirat gibi
                birçok alanda modern ekipmanlardan
                ve güncel uygulama tekniklerinden
                yararlanıyoruz.
              </p>

              <p>
                Uygun koşullarda kırma ve dökme
                işlemlerini en aza indirerek,
                zaman ve maliyet açısından
                verimli sonuçlar elde etmeye
                odaklanıyoruz.
              </p>
            </div>

            {/* STATEMENT */}

            <div
              className="
                mt-9 max-w-[670px]
                border-l-[3px]
                border-[#079FE3]
                pl-5
                sm:pl-7
              "
            >
              <p
                className="
                  font-[family-name:var(--font-manrope)]
                  text-[15px]
                  font-semibold
                  leading-[1.8]
                  text-[#13263A]
                  sm:text-[17px]
                "
              >
                Kaliteli hizmet yalnızca bir
                arızayı gidermek değil;
                güvenilir işçilik, açık iletişim
                ve uzun ömürlü çözümlerle
                müşteri memnuniyetini sağlamaktır.
              </p>
            </div>

            {/* CTA */}

            <div className="mt-10">
              <Link
                href="/#iletisim"
                className="
                  group inline-flex
                  min-h-[54px]
                  items-center
                  justify-between
                  gap-10
                  bg-[#13263A]
                  px-6
                  text-[12px]
                  font-semibold
                  tracking-[0.04em]
                  text-white
                  transition-all duration-300
                  hover:bg-[#079FE3]
                  hover:shadow-[0_12px_30px_rgba(7,159,227,0.15)]
                "
              >
                Bizimle İletişime Geçin

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </motion.div>

          {/* =====================================
              RIGHT IMAGE
          ===================================== */}

          <motion.div
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    x: 35,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative min-w-0
              lg:self-stretch
            "
          >
            {/* IMAGE FRAME */}

            <div
              className="
                relative
                h-[420px]
                w-full
                overflow-hidden
                bg-[#DDE7EE]
                sm:h-[560px]
                lg:h-full
                lg:min-h-[680px]
              "
            >
              <Image
                src="/images/marmara-about.jpg"
                alt="Marmara Tesisat profesyonel tesisat bakım ve onarım uygulaması"
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-1000
                  hover:scale-[1.035]
                "
              />

              {/* IMAGE GRADIENT */}

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#091421]/65
                  via-transparent
                  to-transparent
                "
              />

              {/* IMAGE BOTTOM LABEL */}

              <div
                className="
                  absolute bottom-0 left-0 right-0
                  p-7
                  sm:p-9
                "
              >
                <span
                  className="
                    mb-3 block
                    text-[10px]
                    font-bold uppercase
                    tracking-[0.3em]
                    text-[#7AD8FF]
                  "
                >
                  Marmara Tesisat
                </span>

                <p
                  className="
                    max-w-[350px]
                    font-[family-name:var(--font-manrope)]
                    text-[24px]
                    font-semibold
                    leading-[1.2]
                    tracking-[-0.04em]
                    text-white
                    sm:text-[30px]
                  "
                >
                  Sağlam Altyapı.
                  <br />
                  Güvenilir Çözümler.
                </p>
              </div>
            </div>

            {/* CORNER ACCENT */}

            <div
              aria-hidden="true"
              className="
                absolute -bottom-3 -left-3
                h-24 w-24
                border-b-[3px]
                border-l-[3px]
                border-[#079FE3]
                sm:-bottom-4 sm:-left-4
              "
            />

            {/* TOP RIGHT DECORATION */}

            <div
              aria-hidden="true"
              className="
                absolute -right-3 -top-3
                hidden h-20 w-20
                border-r-[3px]
                border-t-[3px]
                border-[#079FE3]/40
                sm:block
              "
            />
          </motion.div>
        </div>

        {/* =====================================
            BOTTOM HIGHLIGHTS
        ===================================== */}

        <motion.div
          {...motionProps}
          variants={reveal}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-20
            border-t border-[#C9D9E6]/70
            pt-8
            lg:mt-28
          "
        >
          <div
            className="
              flex flex-wrap
              items-center
              justify-between
              gap-x-8 gap-y-6
            "
          >
            <div
              className="
                flex flex-wrap
                items-center
                gap-x-8 gap-y-5
              "
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-3
                  "
                >
                  <span
                    className="
                      flex h-7 w-7
                      items-center justify-center
                      rounded-full
                      bg-[#079FE3]/10
                      text-[#079FE3]
                    "
                  >
                    <Check
                      size={15}
                      strokeWidth={2}
                    />
                  </span>

                  <span
                    className="
                      text-[12px]
                      font-semibold
                      tracking-[0.02em]
                      text-[#344A60]
                      sm:text-[13px]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/hizmetler"
              className="
                group inline-flex
                items-center gap-2
                text-[11px]
                font-bold uppercase
                tracking-[0.15em]
                text-[#079FE3]
                transition-colors
                hover:text-[#13263A]
              "
            >
              Hizmetlerimiz

              <MoveUpRight
                size={16}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
