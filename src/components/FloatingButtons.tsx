"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { doctor } from "@/data/doctor";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Botón flotante Llamada */}
      <a
        href={`tel:${doctor.phone}`}
        className="group flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 rounded-full bg-white text-[#653A57] shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-[#E8B7B7]/40 hover:bg-[#FDFBFC] transition-all duration-300 hover:scale-105"
        title="Llamar al consultorio"
        aria-label="Llamar por teléfono"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F7E8E8] text-[#653A57]">
          <Phone className="w-3.5 h-3.5" />
        </span>
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          961 188 8525
        </span>
      </a>

      {/* Botón flotante WhatsApp con halo palpitante */}
      <a
        href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20una%20consulta%20m%C3%A9dica.`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full bg-[#653A57] text-white shadow-[0_8px_25px_rgba(101,58,87,0.38)] hover:bg-[#4C2C41] transition-all duration-300 hover:scale-105"
        aria-label="Agendar cita por WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#E8B7B7] opacity-40 animate-ping -z-10" />

        <MessageCircle className="w-5 h-5 text-[#E8B7B7]" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          Agendar Cita
        </span>
      </a>
    </div>
  );
}
