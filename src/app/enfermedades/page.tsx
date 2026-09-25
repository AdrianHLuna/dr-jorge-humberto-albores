import React from "react";
import type { Metadata } from "next";
import { diseases } from "@/data/diseases";
import { EntityCard } from "@/components/EntityCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Padecimientos Ginecológicos, Obstétricos y Mamarios en Tuxtla",
  description:
    "Guía médica de enfermedades mamarias, cáncer de mama, miomas, endometriosis, VPH y complicaciones obstétricas por el Dr. Jorge Humberto Albores Mejía en Chiapas.",
};

export default function EnfermedadesPage() {
  return (
    <div className="bg-[#FDFBFC] min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Padecimientos Médicos" }]} isDark={false} />

        {/* Encabezado compacto y natural */}
        <div className="mt-4 mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
            Dossier Clínico & Orientación Oportuna
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
            Padecimientos y Patologías Frecuentes
          </h1>
          <p className="text-sm sm:text-base text-[#616060] mt-2.5 leading-relaxed">
            Información médica validada sobre condiciones benignas y oncológicas de la mama, trastornos ginecológicos del ciclo y útero, y complicaciones del embarazo de alto riesgo.
          </p>
        </div>

        {/* Grid de 10 Padecimientos con CardImageHeader */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diseases.map((disease) => (
            <EntityCard
              key={disease.id}
              type="disease"
              slug={disease.slug}
              name={disease.name}
              description={disease.description}
              category={disease.category}
              image={disease.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
