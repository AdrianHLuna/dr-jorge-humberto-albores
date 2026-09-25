"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ShieldCheck, Stethoscope } from "lucide-react";

interface DoctorPortraitProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  frame?: boolean;
}

/**
 * Retrato oficial del Dr. Jorge Humberto Albores Mejía
 * Con visual clinical fallback de alta especialidad en mastología y ginecología.
 */
export default function DoctorPortrait({
  src,
  alt,
  className = "",
  priority = false,
  frame = false,
}: DoctorPortraitProps) {
  const [failed, setFailed] = useState(false);

  const content = failed ? (
    <div
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br from-[#4C2C41] via-[#653A57] to-[#1A1318] flex flex-col items-center justify-center p-8 text-center text-white ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Patrón de círculos concéntricos sutiles */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full border border-[#E8B7B7]/40" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-[#E8B7B7]/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full border border-white/10" />
      </div>

      {/* Emblema oficial central */}
      <div className="relative mb-6 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl bg-white/10 p-4 shadow-2xl backdrop-blur-md border border-white/20">
        <div className="relative h-full w-full flex items-center justify-center">
          <Image
            src="/emblem-white.png"
            alt="Emblema Dr. Albores"
            width={70}
            height={70}
            className="object-contain drop-shadow-md"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E8B7B7] text-[#4C2C41] shadow-md border-2 border-[#653A57]">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>

      {/* Identidad institucional */}
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8B7B7]/30 bg-white/10 px-3.5 py-1 text-xs font-medium tracking-wide text-[#E8B7B7] backdrop-blur-xs mb-3">
        <Award className="h-3.5 w-3.5" aria-hidden="true" />
        Alta Especialidad FUCAM / UNAM & UAEH
      </span>

      <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
        {alt}
      </h3>
      <p className="max-w-xs text-xs sm:text-sm text-neutral-300 font-sans">
        Ginecología, Obstetricia & Cirugía Oncológica de la Mama
      </p>
      <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#E8B7B7]/80 font-mono">
        <span>Céd. Esp. 15060290</span>
        <span>•</span>
        <span>Tuxtla Gutiérrez</span>
      </div>
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      fill
      className={`absolute inset-0 object-cover ${frame ? "" : className}`}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority={priority}
      onError={() => setFailed(true)}
    />
  );

  if (frame) {
    return (
      <div className={`p-2 bg-white rounded-3xl border border-[#EFE8EC] shadow-xl overflow-hidden ${className}`}>
        <div className="relative h-full w-full overflow-hidden rounded-2xl">{content}</div>
      </div>
    );
  }

  return content;
}
