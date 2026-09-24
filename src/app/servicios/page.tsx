import React from "react";
import type { Metadata } from "next";
import { services } from "@/data/services";
import { EntityCard } from "@/components/EntityCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Procedimientos y Cirugías Gineco-Mastológicas en Tuxtla",
  description:
    "Catálogo completo de servicios médicos, biopsias de mama, histeroscopia de consultorio y cirugías por el Dr. Jorge Humberto Albores Mejía en Tuxtla Gutiérrez, Chiapas.",
};

export default function ServiciosPage() {
  return (
    <div className="bg-[#FDFBFC] min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Procedimientos y Cirugías" }]} isDark={false} />

        {/* Encabezado compacto y natural per AGENTS.md */}
        <div className="mt-4 mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
            Atención Especializada & Cirugía de Mínima Invasión
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
            Procedimientos y Servicios Clínicos
          </h1>
          <p className="text-sm sm:text-base text-[#616060] mt-2.5 leading-relaxed">
            Consulte las fichas técnicas, indicaciones, tiempos de recuperación y costos de los procedimientos diagnósticos y quirúrgicos realizados por el Dr. Jorge Humberto Albores Mejía en Tuxtla Gutiérrez.
          </p>
        </div>

        {/* Grid de Servicios con CardImageHeader */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <EntityCard
              key={service.id}
              type="service"
              slug={service.slug}
              name={service.name}
              description={service.description}
              category={service.category}
              price={service.priceRange}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
