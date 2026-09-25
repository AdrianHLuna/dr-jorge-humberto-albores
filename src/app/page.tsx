import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  Phone,
  MessageCircle,
  Activity,
  HeartPulse,
  Stethoscope,
  Microscope,
  Baby,
  ChevronRight,
  AlertTriangle,
  HelpCircle,
  Star,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { diseases } from "@/data/diseases";
import { symptoms } from "@/data/symptoms";
import { EntityCard } from "@/components/EntityCard";
import DoctorPortrait from "@/components/DoctorPortrait";
import { FAQStructuredData } from "@/components/StructuredData";

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredDiseases = diseases.slice(0, 6);
  const prioritySymptoms = symptoms.slice(0, 6);

  const homeFaqs = [
    {
      question: "¿Qué diferencia la consulta de un ginecólogo con alta especialidad en mastología?",
      answer:
        "El Dr. Jorge Humberto Albores Mejía cuenta con formación formal en el Instituto de Enfermedades de la Mama (FUCAM / UNAM). Esto le permite evaluar glándulas mamarias con el más alto rigor oncológico, interpretar mastografías y ultrasonidos con precisión experta, y realizar biopsias core o cirugías oncoplásticas conservadoras que cuidan tanto la salud como la estética de la mujer.",
    },
    {
      question: "¿Cuáles son los costos de consulta y paquetes en Tuxtla Gutiérrez?",
      answer:
        "La consulta ginecológica y de control prenatal tienen un costo de $800 MXN en primera vez ($700 MXN subsecuente). La consulta especializada de mastología es de $1,000 MXN ($800 subsecuente). Asimismo, se ofrecen paquetes Check-up preventivos desde $1,500 MXN que integran consulta, Papanicolaou, colposcopia y ultrasonido en una sola cita.",
    },
    {
      question: "¿Dónde se ubica el consultorio y en qué hospitales opera el doctor?",
      answer:
        "El consultorio se encuentra en Calle 23 Poniente Sur #710, Colonia Santa Elena (entre Av. 5 Sur Pte y Periférico Sur Pte), en Tuxtla Gutiérrez, Chiapas. Para procedimientos hospitalarios y nacimientos, el Dr. Albores atiende en los mejores hospitales privados de Tuxtla que cuentan con terapia intensiva y quirófanos certificados.",
    },
    {
      question: "¿Se atienden urgencias fuera de los horarios habituales?",
      answer:
        "Sí. Para urgencias obstétricas (contracciones antes de tiempo, sangrado en el embarazo, pérdida de líquido) o dolor ginecológico agudo, el doctor dispone de la línea de urgencias directas 961 249 6398 activa las 24 horas.",
    },
  ];

  return (
    <>
      <FAQStructuredData faqs={homeFaqs} />

      {/* ─── 1. HERO FOLD (100vh / min-h-screen) ────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF4F7] via-[#FDFBFC] to-white pt-24 pb-16 lg:py-0">
        {/* Elementos ambientales abstractos de fondo */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#E8B7B7]/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 rounded-full bg-[#DFDEEB]/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Columna Izquierda: Información Principal */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge de Altas Especialidades */}
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7E8E8] border border-[#E8B7B7]/50 text-[#653A57] text-xs font-semibold shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#653A57] animate-pulse" />
                <span>Alta Especialidad FUCAM / UNAM & UAEH</span>
                <span className="text-neutral-400">•</span>
                <span>Tuxtla Gutiérrez</span>
              </div>

              {/* Título Principal de Alto Impacto */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#2B1D26] tracking-tight leading-[1.12] font-heading">
                Salud Femenina, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#653A57] via-[#854570] to-[#4C2C41]">
                  Mastología Oncológica
                </span>{" "}
                <br className="hidden sm:inline" />
                y Cirugía de Mínima Invasión.
              </h1>

              {/* Subtítulo Clínico */}
              <p className="text-base sm:text-lg text-[#616060] max-w-2xl font-normal leading-relaxed">
                Atención médica especializada con el <strong>Dr. Jorge Humberto Albores Mejía</strong>. Prevención y tratamiento de cáncer de mama, biopsias guiadas por ultrasonido, histeroscopia de consultorio, laparoscopia y control obstétrico de alto riesgo con calidez y máxima precisión.
              </p>

              {/* Grid de Credenciales Oficiales en Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#EFE8EC] shadow-sm">
                  <div className="p-2 rounded-xl bg-[#F7E8E8] text-[#653A57] shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2B1D26] block">Cirugía Oncológica de Mama</span>
                    <span className="text-[11px] text-[#818080]">FUCAM - UNAM (Reg. 16705)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#EFE8EC] shadow-sm">
                  <div className="p-2 rounded-xl bg-[#DFDEEB] text-[#653A57] shrink-0 mt-0.5">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2B1D26] block">Cirugía Endoscópica Ginecológica</span>
                    <span className="text-[11px] text-[#818080]">UAEH (Folio 2025/40202)</span>
                  </div>
                </div>
              </div>

              {/* Botones de Acción Primaria */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20una%20consulta%20m%C3%A9dica.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#653A57] hover:bg-[#4C2C41] text-white font-semibold text-sm shadow-[0_8px_25px_rgba(101,58,87,0.3)] transition-all hover:shadow-[0_12px_32px_rgba(101,58,87,0.4)]"
                >
                  <MessageCircle className="w-4 h-4 text-[#E8B7B7]" />
                  <span>Agendar Consulta por WhatsApp</span>
                </a>

                <Link
                  href="/servicios"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-neutral-50 text-[#653A57] font-semibold text-sm border border-[#EFE8EC] shadow-sm transition-colors"
                >
                  <span>Ver Procedimientos y Precios</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Micro-aviso de urgencias y disponibilidad */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#616060]">
                <span className="flex items-center gap-1.5 font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Consultas abiertas en Tuxtla Gutiérrez
                </span>
                <span className="flex items-center gap-1 text-neutral-500">
                  <Clock className="w-3.5 h-3.5 text-[#653A57]" />
                  L-V 8:30 a 12:00 | Sáb 9:00 a 15:00
                </span>
              </div>
            </div>

            {/* Columna Derecha: Retrato Oficial del Doctor (Espacio Exclusivo) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-[3/4] rounded-brand-asym overflow-hidden bg-white shadow-[0_25px_60px_rgba(101,58,87,0.18)] border-4 border-white">
                <DoctorPortrait
                  src={doctor.photo}
                  alt={`${doctor.title} ${doctor.name}`}
                  priority
                />

                {/* Placa Flotante de Experiencia y Trayectoria */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-[#E8B7B7]/40 flex items-center justify-around text-center">
                  <div>
                    <span className="block text-xl font-bold text-[#653A57] font-heading">+5,000</span>
                    <span className="text-[10px] text-[#616060] font-medium">Pacientes</span>
                  </div>
                  <div className="w-px h-8 bg-neutral-200" />
                  <div>
                    <span className="block text-xl font-bold text-[#653A57] font-heading">+1,000</span>
                    <span className="text-[10px] text-[#616060] font-medium">Cirugías</span>
                  </div>
                  <div className="w-px h-8 bg-neutral-200" />
                  <div>
                    <span className="block text-xl font-bold text-[#653A57] font-heading">+6 Años</span>
                    <span className="text-[10px] text-[#616060] font-medium">Experiencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. TRAYECTORIA Y SOBRE EL MÉDICO (PORTRAIT FRAME) ──────── */}
      <section className="py-20 bg-white border-y border-[#EFE8EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Marco de Imagen Asimétrico per AGENTS.md */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-brand-asym overflow-hidden bg-white shadow-[0_20px_45px_rgba(101,58,87,0.14)] border-4 border-white">
                <DoctorPortrait
                  src={doctor.aboutPhoto ?? doctor.photo}
                  alt={`${doctor.title} ${doctor.name}`}
                  frame
                />
              </div>
            </div>

            {/* Texto y Biografía Profesional */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
                  Semblanza Profesional & Rigor Clínico
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
                  Compromiso con la Salud de la Mujer y la Detección Temprana
                </h2>
              </div>

              <p className="text-base text-[#616060] leading-relaxed">
                {doctor.bio}
              </p>

              <blockquote className="p-4 rounded-2xl bg-[#F7E8E8]/40 border-l-4 border-[#653A57] text-sm text-[#2B1D26] italic leading-relaxed">
                &ldquo;{doctor.philosophy}&rdquo;
              </blockquote>

              {/* Hitos de Formación */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#653A57] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#616060]">
                    <strong className="text-[#2B1D26]">Alta Especialidad en FUCAM / UNAM:</strong> Manejo integral de patología mamaria benigna y maligna, biopsias de corte core y técnicas oncoplásticas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#653A57] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#616060]">
                    <strong className="text-[#2B1D26]">Alta Especialidad en UAEH:</strong> Cirugía endoscópica ginecológica avanzada (histeroscopia de consultorio y laparoscopia pélvica).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#653A57] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#616060]">
                    <strong className="text-[#2B1D26]">Especialidad en UNACH:</strong> Ginecología y Obstetricia con certificación ante el Consejo Mexicano de la especialidad.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#653A57] text-white font-semibold text-xs sm:text-sm hover:bg-[#4C2C41] transition-colors shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-[#E8B7B7]" />
                  <span>Conocer Ubicación en Santa Elena</span>
                </Link>
                <a
                  href={`tel:${doctor.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-100 text-[#2B1D26] font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar al 961 188 8525</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. CONSULTAS DE ESPECIALIDAD & TARIFAS TRANSPARENTES ──── */}
      <section className="py-20 bg-white border-b border-[#EFE8EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
              Atención Médica Presencial
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
              Tarifas Transparentes de Consulta
            </h2>
            <p className="text-sm sm:text-base text-[#616060] mt-3">
              Honorarios médicos claros y definidos para tu tranquilidad desde la primera cita en Tuxtla Gutiérrez.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Consulta Ginecológica */}
            <div className="p-7 rounded-3xl bg-[#FDFBFC] border border-[#EFE8EC] hover:border-[#E8B7B7] transition-all hover:shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#653A57] block mb-1">
                  Ginecología General
                </span>
                <h3 className="text-2xl font-bold text-[#2B1D26] font-heading">
                  Consulta Ginecológica
                </h3>
                <p className="text-xs sm:text-sm text-[#616060] mt-2 leading-relaxed">
                  Exploración ginecológica minuciosa, revisión mamaria clínica preventiva y asesoría integral en salud femenina.
                </p>
                <div className="my-6 pt-5 border-t border-neutral-100">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#653A57] font-heading">$800</span>
                  <span className="text-xs text-neutral-500 ml-1">MXN (1ra vez)</span>
                  <p className="text-xs text-[#818080] mt-1">$700 MXN en consultas subsecuentes</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20una%20Consulta%20Ginecol%C3%B3gica.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white hover:bg-[#653A57] text-[#653A57] hover:text-white font-semibold text-xs transition-colors border border-[#EFE8EC] hover:border-[#653A57]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Agendar Consulta Ginecológica</span>
              </a>
            </div>

            {/* Control Prenatal */}
            <div className="p-7 rounded-3xl bg-[#FDFBFC] border border-[#EFE8EC] hover:border-[#E8B7B7] transition-all hover:shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#653A57] block mb-1">
                  Obstetricia & Alto Riesgo
                </span>
                <h3 className="text-2xl font-bold text-[#2B1D26] font-heading">
                  Control Prenatal
                </h3>
                <p className="text-xs sm:text-sm text-[#616060] mt-2 leading-relaxed">
                  Monitoreo ecográfico del crecimiento y bienestar fetal en consultorio, signos vitales y tamizaje de preeclampsia.
                </p>
                <div className="my-6 pt-5 border-t border-neutral-100">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#653A57] font-heading">$800</span>
                  <span className="text-xs text-neutral-500 ml-1">MXN (1ra vez)</span>
                  <p className="text-xs text-[#818080] mt-1">$700 MXN en consultas subsecuentes</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20Control%20Prenatal.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white hover:bg-[#653A57] text-[#653A57] hover:text-white font-semibold text-xs transition-colors border border-[#EFE8EC] hover:border-[#653A57]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Agendar Control Prenatal</span>
              </a>
            </div>

            {/* Consulta de Mastología */}
            <div className="p-7 rounded-3xl bg-white border-2 border-[#653A57] shadow-xl flex flex-col justify-between relative -translate-y-1">
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#653A57] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                FUCAM / UNAM
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#653A57] block mb-1">
                  Alta Especialidad
                </span>
                <h3 className="text-2xl font-bold text-[#2B1D26] font-heading">
                  Consulta de Mastología
                </h3>
                <p className="text-xs sm:text-sm text-[#616060] mt-2 leading-relaxed">
                  Evaluación experta de nódulos mamarios, dolor, secreción por pezón, correlación BI-RADS y prevención de cáncer.
                </p>
                <div className="my-6 pt-5 border-t border-neutral-100">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#653A57] font-heading">$1,000</span>
                  <span className="text-xs text-neutral-500 ml-1">MXN (1ra vez)</span>
                  <p className="text-xs text-[#818080] mt-1">$800 MXN en consultas subsecuentes</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20Consulta%20de%20Mastolog%C3%ADa.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#653A57] hover:bg-[#4C2C41] text-white font-semibold text-xs shadow-md transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#E8B7B7]" />
                <span>Agendar Consulta de Mastología</span>
              </a>
            </div>
          </div>

          <p className="text-center text-xs text-[#818080] mt-8">
            Pago en efectivo y transferencia bancaria directa. No convenios directos con aseguradoras (se expide comprobante fiscal e informe médico para reembolso).
          </p>
        </div>
      </section>

      {/* ─── 4. PAQUETES CHECK-UP GINECOLÓGICO Y MASTOLÓGICO ──────── */}
      <section className="py-20 bg-[#FAF4F7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
              Prevención Total en una Sola Cita
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
              Paquetes de Check-up Clínico
            </h2>
            <p className="text-sm sm:text-base text-[#616060] mt-3">
              Estudios diagnósticos combinados a tarifas preferenciales para cuidar tu bienestar íntimo y mamario con entrega oportuna de resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paquete 1: Básico */}
            <div className="flex flex-col justify-between p-7 rounded-3xl bg-white border border-[#EFE8EC] shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-700">
                  Esencial Preventivo
                </span>
                <h3 className="text-2xl font-bold text-[#2B1D26] font-heading mt-3">
                  Check-up Básico
                </h3>
                <div className="my-4">
                  <span className="text-4xl font-extrabold text-[#653A57] font-heading">$1,500</span>
                  <span className="text-xs text-neutral-500 ml-1">MXN</span>
                </div>
                <p className="text-xs text-[#616060] mb-6">
                  Ideal para la revisión anual ginecológica y tamizaje cervical básico.
                </p>

                <ul className="space-y-3 text-xs text-[#2B1D26] border-t border-neutral-100 pt-5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Consulta Ginecológica completa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Exploración física mamaria</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Toma de Papanicolaou</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Interpretación de resultados</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20el%20Check-up%20B%C3%A1sico%20de%20$1,500.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-neutral-100 hover:bg-[#653A57] text-[#2B1D26] hover:text-white font-semibold text-xs transition-colors"
                >
                  <span>Agendar Check-up Básico</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Paquete 2: Completo (Destacado) */}
            <div className="relative flex flex-col justify-between p-7 rounded-3xl bg-white border-2 border-[#653A57] shadow-xl hover:shadow-2xl transition-all -translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#653A57] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                Más Solicitado
              </div>

              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F7E8E8] text-[#653A57]">
                  Protección Cervical & VPH
                </span>
                <h3 className="text-2xl font-bold text-[#2B1D26] font-heading mt-3">
                  Check-up Completo
                </h3>
                <div className="my-4">
                  <span className="text-4xl font-extrabold text-[#653A57] font-heading">$2,000</span>
                  <span className="text-xs text-neutral-500 ml-1">MXN</span>
                </div>
                <p className="text-xs text-[#616060] mb-6">
                  Escrutinio minucioso con microscopio colposcópico para detección certera de VPH.
                </p>

                <ul className="space-y-3 text-xs text-[#2B1D26] border-t border-neutral-100 pt-5">
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Consulta Ginecológica y exploración mamaria</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Colposcopia de alta resolución</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Estudio de Papanicolaou</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Explicación en monitor para la paciente</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20el%20Check-up%20Completo%20de%20$2,000.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#653A57] hover:bg-[#4C2C41] text-white font-semibold text-xs shadow-md transition-all"
                >
                  <span>Agendar Check-up Completo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Paquete 3: Integral */}
            <div className="flex flex-col justify-between p-7 rounded-3xl bg-white border border-[#EFE8EC] shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#DFDEEB] text-[#653A57]">
                  Evaluación 360° Total
                </span>
                <h3 className="text-2xl font-bold text-[#2B1D26] font-heading mt-3">
                  Check-up Integral
                </h3>
                <div className="my-4">
                  <span className="text-4xl font-extrabold text-[#653A57] font-heading">$2,200</span>
                  <span className="text-xs text-neutral-500 ml-1">MXN</span>
                </div>
                <p className="text-xs text-[#616060] mb-6">
                  La máxima cobertura con ultrasonido de consultorio incluido.
                </p>

                <ul className="space-y-3 text-xs text-[#2B1D26] border-t border-neutral-100 pt-5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Consulta Gineco-Mastológica especializada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Colposcopia de alta definición</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Papanicolaou</span>
                  </li>
                  <li className="flex items-center gap-2 font-semibold text-[#653A57]">
                    <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0" />
                    <span>Ultrasonido pélvico o mamario incluido</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20el%20Check-up%20Integral%20de%20$2,200.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-neutral-100 hover:bg-[#653A57] text-[#2B1D26] hover:text-white font-semibold text-xs transition-colors"
                >
                  <span>Agendar Check-up Integral</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. PROCEDIMIENTOS Y SERVICIOS DESTACADOS ──────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
                Diagnóstico & Cirugía Avanzada
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
                Servicios y Procedimientos Médicos
              </h2>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#653A57] hover:text-[#4C2C41] transition-colors"
            >
              <span>Ver los 11 procedimientos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
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
      </section>

      {/* ─── 5. PADECIMIENTOS FRECUENTES (DISEASES HUB) ────────────── */}
      <section className="py-20 bg-[#FDFBFC] border-t border-[#EFE8EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
                Orientación Médica Especializada
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
                Padecimientos y Afecciones Frecuentes
              </h2>
            </div>
            <Link
              href="/enfermedades"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#653A57] hover:text-[#4C2C41] transition-colors"
            >
              <span>Ver catálogo completo (10 patologías)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDiseases.map((disease) => (
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
      </section>

      {/* ─── 6. GUÍA DE SÍNTOMAS Y CRITERIOS DE ALARMA ─────────────── */}
      <section className="py-20 bg-white border-t border-[#EFE8EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
                Señales de Alerta & Autoevaluación
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
                Síntomas y Motivos de Consulta
              </h2>
            </div>
            <Link
              href="/sintomas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#653A57] hover:text-[#4C2C41] transition-colors"
            >
              <span>Ver todos los síntomas (10 guías)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prioritySymptoms.map((symptom) => (
              <EntityCard
                key={symptom.id}
                type="symptom"
                slug={symptom.slug}
                name={symptom.name}
                description={symptom.description}
                category={symptom.category}
                urgency={symptom.urgencyLevel}
                image={symptom.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. TESTIMONIOS REALES DE PACIENTES ────────────────────── */}
      <section className="py-20 bg-[#FAF4F7]/40 border-t border-[#EFE8EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
              Experiencias Clínicas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
              Testimonios de Pacientes
            </h2>
            <p className="text-sm text-[#616060] mt-2">
              La confianza, calidez y tranquilidad de mujeres atendidas por el Dr. Jorge Albores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctor.testimonials?.map((t) => (
              <div
                key={t.id}
                className="p-7 rounded-3xl bg-white border border-[#EFE8EC] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[#2B1D26] italic leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#2B1D26] block">{t.patientName}</span>
                    <span className="text-[11px] text-[#818080]">{t.serviceName}</span>
                  </div>
                  <span className="text-[10px] text-neutral-400">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. PREGUNTAS FRECUENTES (FAQ) ─────────────────────────── */}
      <section className="py-20 bg-white border-t border-[#EFE8EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
              Resolución de Dudas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1D26] font-heading tracking-tight mt-1">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <details
                key={index}
                className="group p-6 rounded-2xl bg-[#FDFBFC] border border-[#EFE8EC] [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-[#2B1D26] text-base group-hover:text-[#653A57] transition-colors">
                  <span>{faq.question}</span>
                  <ChevronRight className="w-5 h-5 text-[#653A57] transition-transform duration-300 group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <p className="mt-4 text-sm text-[#616060] leading-relaxed border-t border-neutral-100 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. BANNER INFORMATIVO FINAL & AGENDA ───────────────────── */}
      <section className="py-16 bg-gradient-to-r from-[#653A57] via-[#522c45] to-[#4C2C41] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8B7B7]">
                Atención Médica en Tuxtla Gutiérrez
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                ¿Deseas agendar tu consulta o tienes una sospecha mamaria?
              </h2>
              <p className="text-sm text-neutral-300 max-w-xl">
                Recibe atención experta con calidez humana. Consultas de primera vez desde $800 MXN.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20una%20consulta.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white hover:bg-neutral-100 text-[#653A57] font-semibold text-xs sm:text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#653A57]" />
                <span>Agendar por WhatsApp</span>
              </a>

              <a
                href={`tel:${doctor.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#1A1318]/50 hover:bg-[#1A1318] text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-[#E8B7B7]" />
                <span>Llamar al Consultorio</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
