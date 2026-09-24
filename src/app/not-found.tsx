import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search, Stethoscope } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FDFBFC] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F7E8E8] text-[#653A57] border border-[#E8B7B7]/50 shadow-sm">
          <Stethoscope className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
            Error 404 • Página No Encontrada
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2B1D26] font-heading mt-1">
            Contenido Clínico No Disponible
          </h1>
          <p className="mt-2 text-sm text-[#616060] leading-relaxed">
            La página que buscas no existe o ha sido reubicada. Puedes explorar nuestros servicios médicos o volver a la página de inicio.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-[#653A57] hover:bg-[#4C2C41] text-white font-semibold text-xs transition-all shadow-sm"
          >
            <Home className="w-4 h-4 text-[#E8B7B7]" />
            <span>Ir al Inicio</span>
          </Link>
          <Link
            href="/servicios"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-white hover:bg-neutral-50 text-[#2B1D26] font-semibold text-xs border border-[#EFE8EC] transition-colors"
          >
            <span>Ver Procedimientos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
