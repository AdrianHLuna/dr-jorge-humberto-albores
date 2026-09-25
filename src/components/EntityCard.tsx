import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldAlert, AlertCircle, Stethoscope, Activity, HeartPulse } from "lucide-react";
import { CardImageHeader } from "./CardImageHeader";

interface EntityCardProps {
  type: "service" | "disease" | "symptom";
  slug: string;
  name: string;
  description: string;
  category?: string;
  price?: string;
  urgency?: "baja" | "moderada" | "alta" | "urgencia_inmediata";
  image?: string;
}

export function EntityCard({
  type,
  slug,
  name,
  description,
  category = "mastologia",
  price,
  urgency,
  image,
}: EntityCardProps) {
  const getHref = () => {
    switch (type) {
      case "service":
        return `/servicios/${slug}`;
      case "disease":
        return `/enfermedades/${slug}`;
      case "symptom":
        return `/sintomas/${slug}`;
    }
  };

  const getButtonText = () => {
    switch (type) {
      case "service":
        return "Ver Ficha del Procedimiento";
      case "disease":
        return "Ver Guía Médica";
      case "symptom":
        return "Ver Orientación Médica";
    }
  };

  const getBadgeCategory = () => {
    switch (category) {
      case "mastologia":
      case "mama":
        return "Mastología";
      case "obstetricia":
      case "embarazo":
        return "Obstetricia";
      case "checkup":
        return "Check-up";
      default:
        return "Ginecología";
    }
  };

  const getCategoryIcon = () => {
    switch (category) {
      case "mastologia":
      case "mama":
        return Stethoscope;
      case "obstetricia":
      case "embarazo":
        return HeartPulse;
      default:
        return Activity;
    }
  };

  const CategoryIcon = getCategoryIcon();

  return (
    <article className="group flex flex-col justify-between h-full bg-white rounded-2xl border border-[#EFE8EC] overflow-hidden shadow-[0_4px_16px_rgba(101,58,87,0.04)] hover:shadow-[0_16px_36px_rgba(101,58,87,0.12)] transition-all duration-300 hover:-translate-y-1">
      <div>
        {/* Encabezado con imagen para servicios/enfermedades con foto, o franja temática para síntomas */}
        {image ? (
          <CardImageHeader
            src={image}
            alt={name}
            category={category as any}
            badgeText={getBadgeCategory()}
          />
        ) : (
          <div className="relative p-5 pb-4 bg-gradient-to-r from-[#FAF4F7] via-[#FDFBFC] to-[#F7E8E8]/40 border-b border-[#EFE8EC]">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#653A57] border border-[#E8B7B7]/40 shadow-xs">
                <CategoryIcon className="w-3.5 h-3.5 text-[#653A57]" />
                {getBadgeCategory()}
              </span>

              {urgency && (
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                    urgency === "urgencia_inmediata"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : urgency === "alta"
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                  }`}
                >
                  {urgency === "urgencia_inmediata" ? (
                    <ShieldAlert className="w-3 h-3 text-red-600" />
                  ) : (
                    <AlertCircle className="w-3 h-3" />
                  )}
                  Prioridad: {urgency.replace("_", " ")}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Contenido textual de la tarjeta */}
        <div className="p-6">
          {price && (
            <div className="mb-2.5 inline-block">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F7E8E8] text-[#653A57] border border-[#E8B7B7]/40">
                {price}
              </span>
            </div>
          )}

          {image && urgency && (
            <div className="mb-2.5 inline-block">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  urgency === "urgencia_inmediata"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : urgency === "alta"
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-neutral-100 text-neutral-700"
                }`}
              >
                {urgency === "urgencia_inmediata" ? (
                  <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                ) : (
                  <AlertCircle className="w-3.5 h-3.5" />
                )}
                Prioridad: {urgency.replace("_", " ")}
              </span>
            </div>
          )}

          <h3 className="text-lg sm:text-xl font-bold text-[#2B1D26] group-hover:text-[#653A57] transition-colors line-clamp-2 leading-snug font-heading">
            {name}
          </h3>

          <p className="mt-2.5 text-sm text-[#616060] line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Botón institucional */}
      <div className="px-6 pb-6 pt-2">
        <Link
          href={getHref()}
          className="w-full flex items-center justify-between py-4 px-6 rounded-2xl bg-neutral-50 hover:bg-[#653A57] text-[#653A57] hover:text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 border border-[#EFE8EC] hover:border-[#653A57] group/btn"
        >
          <span>{getButtonText()}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
