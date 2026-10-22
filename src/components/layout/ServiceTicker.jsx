
"use client";

import Link from "next/link";
import {
  Droplet,
  GitBranch,
  Thermometer,
  Wrench,
  Ruler,
} from "lucide-react";

const services = [
  {
    title: "SU TESİSATI",
    href: "/hizmetler/su-tesisati",
    icon: Droplet,
  },
  {
    title: "KAT TESİSATI",
    href: "/hizmetler/kat-tesisati",
    icon: GitBranch,
  },
  {
    title: "KALORİFER TESİSATI",
    href: "/hizmetler/kalorifer-tesisati",
    icon: Thermometer,
  },
  {
    title: "TADİLAT & TAMİRAT",
    href: "/hizmetler/tadilat-tamirat",
    icon: Wrench,
  },
  {
    title: "PROJE UYGULAMA",
    href: "/hizmetler/proje-uygulama",
    icon: Ruler,
  },
];

function ServiceGroup({ duplicate = false }) {
  return (
    <div
      aria-hidden={duplicate ? "true" : undefined}
      className="flex w-max shrink-0 items-center"
    >
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <Link
            key={service.href}
            href={service.href}
            tabIndex={duplicate ? -1 : undefined}
            className="
              group flex h-[48px] shrink-0
              items-center gap-3 px-9
              text-white transition-colors
              duration-300 hover:text-[#091421]
              sm:px-12
            "
          >
            <Icon
              size={19}
              strokeWidth={1.7}
              className="shrink-0"
            />

            <span
              className="
                whitespace-nowrap text-[10px]
                font-semibold tracking-[0.15em]
                sm:text-[11px]
              "
            >
              {service.title}
            </span>

            <span
              aria-hidden="true"
              className="ml-5 h-4 w-px bg-white/35"
            />
          </Link>
        );
      })}
    </div>
  );
}

export default function ServiceTicker() {
  return (
    <div
      aria-label="Marmara Tesisat hizmetleri"
      className="
        marmara-service-ticker
        relative w-full overflow-hidden
        border-b border-white/15
        bg-[#087FC0]
      "
    >
      <div className="marmara-service-track flex w-max">
        <ServiceGroup />
        <ServiceGroup duplicate />
      </div>
    </div>
  );
}
