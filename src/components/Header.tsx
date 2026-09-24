"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Menu,
  X,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { doctor } from "@/data/doctor";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#EFE8EC] shadow-[0_2px_12px_rgba(101,58,87,0.04)]">
      {/* Top microbar institucional */}
      <div className="hidden lg:block bg-[#1A1318] text-white py-1.5 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-[#E8B7B7]" />
              {doctor.address}, {doctor.city}, Chiapas
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-[#E8B7B7]" />
              {doctor.schedule}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${doctor.emergencyPhone}`}
              className="flex items-center gap-1.5 text-red-300 hover:text-red-200 font-semibold transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              Línea Urgencias: 961 249 6398
            </a>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E8B7B7]" />
              Céd. Esp: {doctor.cedulaEspecialidad} ({doctor.cedulaEspecialidadInstitucion})
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/emblem.png"
                alt="Dr. Jorge Humberto Albores Mejía"
                fill
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#2B1D26] font-heading">
                  Dr. Jorge <span className="font-light text-[#653A57]">Albores M.</span>
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#653A57] uppercase">
                Ginecólogo • Mastólogo Quirúrgico
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <Link
              href="/"
              className="transition-colors hover:text-[#653A57] py-2 relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#653A57] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/servicios"
              className="transition-colors hover:text-[#653A57] py-2 relative group"
            >
              Procedimientos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#653A57] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/enfermedades"
              className="transition-colors hover:text-[#653A57] py-2 relative group"
            >
              Padecimientos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#653A57] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/sintomas"
              className="transition-colors hover:text-[#653A57] py-2 relative group"
            >
              Síntomas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#653A57] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/contacto"
              className="transition-colors hover:text-[#653A57] py-2 relative group"
            >
              Ubicación & Citas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#653A57] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Action Call & WhatsApp */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${doctor.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#653A57] bg-[#F7E8E8]/70 hover:bg-[#F7E8E8] transition-colors border border-[#E8B7B7]/40"
              title="Llamar al consultorio"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>961 188 8525</span>
            </a>
            <a
              href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20una%20consulta%20m%C3%A9dica.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#653A57] hover:bg-[#4C2C41] shadow-[0_4px_14px_rgba(101,58,87,0.25)] transition-all hover:shadow-[0_6px_20px_rgba(101,58,87,0.35)]"
            >
              <MessageCircle className="w-4 h-4 text-[#E8B7B7]" />
              <span>Agendar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20una%20consulta.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#653A57] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#E8B7B7]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-neutral-700 hover:text-[#653A57] hover:bg-neutral-100 transition-colors"
              aria-label="Menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EFE8EC] bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2 text-base font-medium text-neutral-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F7E8E8]/50 hover:text-[#653A57] transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F7E8E8]/50 hover:text-[#653A57] transition-colors"
            >
              Procedimientos y Cirugías
            </Link>
            <Link
              href="/enfermedades"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F7E8E8]/50 hover:text-[#653A57] transition-colors"
            >
              Padecimientos Clínicos
            </Link>
            <Link
              href="/sintomas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F7E8E8]/50 hover:text-[#653A57] transition-colors"
            >
              Guía de Síntomas
            </Link>
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F7E8E8]/50 hover:text-[#653A57] transition-colors"
            >
              Ubicación & Citas
            </Link>
          </nav>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2.5">
            <a
              href={`tel:${doctor.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-[#653A57] bg-[#F7E8E8] border border-[#E8B7B7]/40"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar: 961 188 8525</span>
            </a>
            <a
              href={`tel:${doctor.emergencyPhone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-red-700 bg-red-50 border border-red-200"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Urgencias Obstétricas: 961 249 6398
            </a>
            <a
              href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20una%20consulta.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-[#653A57]"
            >
              <MessageCircle className="w-4 h-4 text-[#E8B7B7]" />
              <span>Enviar WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
