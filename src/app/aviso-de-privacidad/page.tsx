import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: "Aviso de Privacidad y Protección de Datos",
  description:
    "Aviso de privacidad integral y protección de datos clínicos del consultorio del Dr. Jorge Humberto Albores Mejía.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FDFBFC] min-h-screen py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Aviso de Privacidad" }]} isDark={false} />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
            Cumplimiento Normativo Sanitario
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
            Aviso de Privacidad Integral
          </h1>
          <p className="text-xs text-[#818080] mt-1">Última actualización: Septiembre 2026</p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#EFE8EC] shadow-sm space-y-6 text-sm text-[#616060] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#2B1D26] font-heading">
              1. Identidad y Domicilio del Responsable
            </h2>
            <p>
              El <strong>Dr. Jorge Humberto Albores Mejía</strong>, con domicilio profesional en Calle 23 Poniente Sur #710, Colonia Santa Elena, C.P. 29060, Tuxtla Gutiérrez, Chiapas, es responsable del uso, tratamiento y salvaguarda de sus datos personales y sensibles recabados durante la atención médica.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#2B1D26] font-heading">
              2. Datos Personales y Datos Clínicos Sensibles
            </h2>
            <p>
              Para los fines del expediente clínico conforme a la norma oficial mexicana <strong>NOM-004-SSA3-2012</strong>, se recaban datos de identificación (nombre, fecha de nacimiento, teléfonos, correo electrónico) y datos de salud sensibles (historial gineco-obstétrico, resultados de mastografías, ultrasonidos, biopsias, patología y notas quirúrgicas).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#2B1D26] font-heading">
              3. Finalidad del Tratamiento
            </h2>
            <p>
              Los datos personales son tratados con el propósito exclusivo de: prestación de servicios de diagnóstico y tratamiento ginecológico y de mastología; integración del expediente clínico obligatorio; emisión de recetas y constancias médicas; contacto para seguimiento posoperatorio; y facturación fiscal.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#2B1D26] font-heading">
              4. Transferencia de Información
            </h2>
            <p>
              Sus datos no son transferidos ni divulgados a terceros, salvo a laboratorios de patología clínica debidamente acreditados para análisis de muestras o en cumplimiento de mandatos expresos de la autoridad sanitaria competente.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#2B1D26] font-heading">
              5. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
            </h2>
            <p>
              Usted tiene derecho en todo momento a ejercer sus derechos ARCO respecto a sus datos personales mediante solicitud formal por escrito en el consultorio o a través del correo oficial: <strong>{doctor.email}</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
