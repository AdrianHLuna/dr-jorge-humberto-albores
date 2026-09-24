"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Activity, ShieldCheck } from "lucide-react";

interface CardImageHeaderProps {
  src?: string;
  alt: string;
  category?: "mastologia" | "ginecologia" | "obstetricia" | "checkup" | "mama" | "ginecologico" | "embarazo";
  aspectRatio?: "video" | "wide";
  badgeText?: string;
}

export function CardImageHeader({
  src,
  alt,
  category = "mastologia",
  aspectRatio = "video",
  badgeText,
}: CardImageHeaderProps) {
  const [imageError, setImageError] = useState(false);
  const showFallback = !src || imageError;

  const aspectClass = aspectRatio === "wide" ? "aspect-[16/10]" : "aspect-video";

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden rounded-t-2xl bg-neutral-100`}>
      {!showFallback ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="image-fallback-mastologia relative flex h-full w-full flex-col items-center justify-center p-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#653A57]/10 via-transparent to-[#E8B7B7]/25 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 shadow-sm border border-[#E8B7B7]/40 mb-2">
              <Image
                src="/emblem.png"
                alt="Dr. Jorge Albores Emblema"
                width={28}
                height={28}
                className="opacity-90 object-contain"
              />
            </div>
            <span className="text-xs font-semibold tracking-wide uppercase text-[#653A57]">
              {category === "mastologia" || category === "mama"
                ? "Mastología Oncológica"
                : category === "obstetricia" || category === "embarazo"
                ? "Obstetricia & Alto Riesgo"
                : category === "checkup"
                ? "Protocolo Preventivo"
                : "Ginecología Quirúrgica"}
            </span>
            <span className="text-[11px] text-[#616060] font-medium mt-0.5">
              Dr. Jorge Humberto Albores M.
            </span>
          </div>
        </div>
      )}

      {badgeText && (
        <div className="absolute top-3 right-3 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/95 text-[#653A57] shadow-sm backdrop-blur-md border border-[#E8B7B7]/30">
            <ShieldCheck className="w-3.5 h-3.5 text-[#653A57]" />
            {badgeText}
          </span>
        </div>
      )}
    </div>
  );
}
