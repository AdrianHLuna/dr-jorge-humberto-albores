import React from "react";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  CreditCard,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contacto, Ubicación y Citas en Tuxtla Gutiérrez",
  description:
    "Ubicación del consultorio del Dr. Jorge Humberto Albores Mejía en Colonia Santa Elena, Tuxtla Gutiérrez, Chiapas. Teléfonos, WhatsApp y mapa interactivo.",
};

export default function ContactoPage() {
  return (
    <div className="bg-[#FDFBFC] min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Ubicación & Citas" }]} isDark={false} />

        {/* Encabezado compacto */}
        <div className="mt-4 mb-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
            Consultorio Quirúrgico de Alta Especialidad
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
            Ubicación, Horarios y Citas
          </h1>
          <p className="text-sm sm:text-base text-[#616060] mt-2.5 leading-relaxed">
            Consulte las vías de acceso, horarios de atención presencial y canales de comunicación directa para programar su valoración ginecológica o de mastología en Tuxtla Gutiérrez.
          </p>
        </div>

        {/* Lienzo de Mapa Interactivo Full-Width con Dock Flotante Superpuesto per AGENTS.md */}
        <div className="relative rounded-3xl overflow-hidden border border-[#EFE8EC] shadow-xl mb-12 h-[520px] sm:h-[580px]">
          {/* Iframe de Google Maps siempre visible */}
          <iframe
            src={doctor.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Dr. Jorge Humberto Albores Mejía"
            className="w-full h-full grayscale-[0.2] contrast-[1.05]"
          />

          {/* Dock Flotante Superpuesto */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-md w-full p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-2xl pointer-events-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#F7E8E8] text-[#653A57] font-semibold text-[11px]">
                Consultorio Médico
              </span>
              <span className="text-neutral-400 text-xs">•</span>
              <span className="text-xs text-[#818080]">Tuxtla Gutiérrez</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#2B1D26] font-heading leading-snug">
              Dr. Jorge Humberto Albores M.
            </h3>

            <div className="mt-3.5 space-y-2.5 text-xs text-[#616060]">
              <p className="flex items-start gap-2 text-[#2B1D26] font-medium">
                <MapPin className="w-4 h-4 text-[#653A57] shrink-0 mt-0.5" />
                <span>{doctor.address}</span>
              </p>
              <p className="text-neutral-500 pl-6 text-[11px]">
                {doctor.references}. {doctor.neighborhood}, C.P. {doctor.postalCode}.
              </p>
              <p className="flex items-center gap-2 pl-0.5">
                <Clock className="w-3.5 h-3.5 text-[#653A57] shrink-0" />
                <span>{doctor.schedule}</span>
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-2.5">
              <a
                href={doctor.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-[#2B1D26] font-semibold text-xs transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#653A57]" />
                <span>Abrir en Maps</span>
              </a>

              <a
                href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20una%20cita%20en%20consultorio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#653A57] hover:bg-[#4C2C41] text-white font-semibold text-xs shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#E8B7B7]" />
                <span>Agendar Cita</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Columnas Informativas Inferiores per AGENTS.md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Columna 1: Teléfonos y Urgencias */}
          <div className="p-7 rounded-3xl bg-white border border-[#EFE8EC] shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-[#653A57] font-bold text-base font-heading">
              <Phone className="w-5 h-5 text-[#653A57]" />
              <h3>Teléfonos de Atención</h3>
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-2xl bg-[#FDFBFC] border border-[#EFE8EC]">
                <span className="text-[11px] text-[#818080] block">Conmutador y WhatsApp de Citas</span>
                <a
                  href={`tel:${doctor.phone}`}
                  className="font-bold text-[#2B1D26] hover:text-[#653A57] text-sm sm:text-base mt-0.5 block"
                >
                  961 188 8525 / 961 188 8502
                </a>
              </div>

              <div className="p-3 rounded-2xl bg-red-50 border border-red-200">
                <span className="text-[11px] font-bold text-red-700 block uppercase">
                  Línea de Urgencias Obstétricas 24/7
                </span>
                <a
                  href={`tel:${doctor.emergencyPhone}`}
                  className="font-extrabold text-red-800 hover:underline text-sm sm:text-base mt-0.5 block"
                >
                  961 249 6398
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Tarifas y Métodos de Pago */}
          <div className="p-7 rounded-3xl bg-white border border-[#EFE8EC] shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-[#653A57] font-bold text-base font-heading">
              <CreditCard className="w-5 h-5 text-[#653A57]" />
              <h3>Costos y Métodos de Pago</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#2B1D26]">
              <li className="flex justify-between py-1.5 border-b border-neutral-100">
                <span>Consulta Ginecológica:</span>
                <span className="font-bold text-[#653A57]">$800 / $700 sub</span>
              </li>
              <li className="flex justify-between py-1.5 border-b border-neutral-100">
                <span>Control Prenatal con USG:</span>
                <span className="font-bold text-[#653A57]">$800 / $700 sub</span>
              </li>
              <li className="flex justify-between py-1.5 border-b border-neutral-100">
                <span>Consulta Mastología:</span>
                <span className="font-bold text-[#653A57]">$1,000 / $800 sub</span>
              </li>
              <li className="pt-2 text-xs text-[#616060]">
                <strong>Métodos aceptados:</strong> {doctor.paymentMethods.join(" y ")}. Se expide factura médica para reembolso de seguros de gastos médicos mayores.
              </li>
            </ul>
          </div>

          {/* Columna 3: Información de Llegada y Referencias */}
          <div className="p-7 rounded-3xl bg-white border border-[#EFE8EC] shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-[#653A57] font-bold text-base font-heading">
              <Navigation className="w-5 h-5 text-[#653A57]" />
              <h3>Referencias y Llegada</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#616060] leading-relaxed">
              El consultorio se encuentra ubicado estratégicamente en <strong>Colonia Santa Elena</strong>, con acceso ágil desde <strong>Periférico Sur Poniente</strong> o <strong>Avenida 5 Sur Poniente</strong>, con facilidades de estacionamiento seguro en las inmediaciones.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF4F7] border border-[#E8B7B7]/40 text-xs text-[#653A57]">
              <strong>Tip de llegada:</strong> A espaldas de la zona médica poniente de Tuxtla Gutiérrez, con fácil acceso vehicular.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
