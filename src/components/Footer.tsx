import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { doctor } from "@/data/doctor";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1318] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent White Logo per AGENTS.md rule */}
        <div className="flex flex-col items-center justify-center pb-12 border-b border-white/10">
          <div className="relative w-full max-w-[420px] sm:max-w-[520px] h-28 sm:h-36 mb-4">
            <Image
              src="/logo-white.png"
              alt="Dr. Jorge Humberto Albores Mejía - Ginecólogo y Mastólogo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-center text-sm text-neutral-300 max-w-2xl font-light">
            Ginecología Integral, Obstetricia de Alto Riesgo, Alta Especialidad en Cirugía Oncológica de la Mama (FUCAM / UNAM) y Cirugía Endoscópica Ginecológica (UAEH).
          </p>
        </div>

        {/* 4 Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10 text-sm">
          {/* Col 1: Cédulas y Autorizaciones */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#E8B7B7] font-semibold text-base">
              <ShieldCheck className="w-5 h-5 text-[#E8B7B7]" />
              <span>Cédulas Profesionales</span>
            </div>
            <ul className="space-y-2.5 text-neutral-300 text-xs sm:text-sm">
              <li>
                <span className="text-neutral-400 block text-xs">Médico Cirujano (UNACH):</span>
                <span className="font-mono text-white font-medium">Céd. Prof. 11537087</span>
              </li>
              <li>
                <span className="text-neutral-400 block text-xs">Ginecología y Obstetricia (UNACH):</span>
                <span className="font-mono text-white font-medium">Céd. Esp. 15060290</span>
              </li>
              <li>
                <span className="text-neutral-400 block text-xs">Cirugía Oncológica de la Mama (FUCAM / UNAM):</span>
                <span className="font-mono text-white font-medium">Reg. 16705</span>
              </li>
              <li>
                <span className="text-neutral-400 block text-xs">Cirugía Endoscópica Ginecológica (UAEH):</span>
                <span className="font-mono text-white font-medium">Folio 2025/40202</span>
              </li>
              <li className="pt-2 text-xs text-neutral-400 border-t border-white/10">
                {doctor.cofepris}
              </li>
            </ul>
          </div>

          {/* Col 2: Ubicación y Horarios */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#E8B7B7] font-semibold text-base">
              <MapPin className="w-5 h-5 text-[#E8B7B7]" />
              <span>Consultorio y Horarios</span>
            </div>
            <div className="space-y-3 text-neutral-300 text-xs sm:text-sm">
              <p>
                <strong className="text-white block font-medium">Dirección:</strong>
                {doctor.address}
                <span className="block text-neutral-400 text-xs mt-0.5">
                  ({doctor.references})
                </span>
                <span className="block text-neutral-400 text-xs">
                  {doctor.neighborhood}, C.P. {doctor.postalCode}, {doctor.city}, {doctor.state}.
                </span>
              </p>
              <div className="pt-2 border-t border-white/10">
                <span className="text-neutral-400 block text-xs flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#E8B7B7]" />
                  Horario de Consulta:
                </span>
                <p className="text-white font-medium text-xs sm:text-sm">
                  {doctor.schedule}
                </p>
              </div>
            </div>
          </div>

          {/* Col 3: Enlaces Rápidos */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#E8B7B7] font-semibold text-base">
              <Award className="w-5 h-5 text-[#E8B7B7]" />
              <span>Navegación Médica</span>
            </div>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link href="/servicios" className="hover:text-[#E8B7B7] transition-colors">
                  Procedimientos Quirúrgicos
                </Link>
              </li>
              <li>
                <Link href="/enfermedades" className="hover:text-[#E8B7B7] transition-colors">
                  Padecimientos & Patologías
                </Link>
              </li>
              <li>
                <Link href="/sintomas" className="hover:text-[#E8B7B7] transition-colors">
                  Guía de Síntomas de Alarma
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#E8B7B7] transition-colors">
                  Ubicación & Citas Presenciales
                </Link>
              </li>
              <li>
                <Link href="/aviso-de-privacidad" className="hover:text-[#E8B7B7] transition-colors">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  Índice para Modelos IA (/llms.txt)
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Líneas de Contacto */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#E8B7B7] font-semibold text-base">
              <Phone className="w-5 h-5 text-[#E8B7B7]" />
              <span>Contacto y Urgencias</span>
            </div>
            <div className="space-y-3">
              <a
                href={`tel:${doctor.phone}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white text-xs sm:text-sm font-medium border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#E8B7B7]" />
                <div>
                  <span className="text-[10px] text-neutral-400 block">Conmutador Citas</span>
                  <span>961 188 8525 / 961 188 8502</span>
                </div>
              </a>
              <a
                href={`tel:${doctor.emergencyPhone}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-red-950/40 hover:bg-red-900/50 transition-colors text-red-200 text-xs sm:text-sm font-medium border border-red-500/30"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                <div>
                  <span className="text-[10px] text-red-300 block font-semibold uppercase">
                    Línea Urgencias 24/7
                  </span>
                  <span>{doctor.emergencyPhone}</span>
                </div>
              </a>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20una%20consulta.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#653A57] hover:bg-[#7d486d] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#E8B7B7]" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p className="text-center md:text-left">
            © {currentYear} Dr. Jorge Humberto Albores Mejía. Todos los derechos reservados.
          </p>
          <p className="text-center md:text-right max-w-xl text-[11px] text-neutral-300 leading-relaxed">
            La información médica contenida en este sitio web tiene propósitos exclusivamente educativos e informativos y no sustituye la valoración clínica presencial ni el diagnóstico formal emitido por un médico especialista certificado. En apego a la normatividad sanitaria mexicana.
          </p>
        </div>
      </div>
    </footer>
  );
}
