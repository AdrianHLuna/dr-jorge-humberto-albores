import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShieldAlert,
  AlertTriangle,
  Calendar,
  Phone,
  MessageCircle,
  Activity,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { symptoms, getSymptomBySlug, getRelatedDiseasesForSymptom, doctor } from "@/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardImageHeader } from "@/components/CardImageHeader";
import { FAQStructuredData } from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const symptom = getSymptomBySlug(slug);
  if (!symptom) return { title: "Síntoma no encontrado" };

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
  };
}

export default async function SintomaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const symptom = getSymptomBySlug(slug);

  if (!symptom) {
    notFound();
  }

  const relatedDiseases = getRelatedDiseasesForSymptom(symptom.id);

  return (
    <>
      {symptom.faqs && <FAQStructuredData faqs={symptom.faqs} />}

      <div className="bg-[#FDFBFC] min-h-screen py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Guía de Síntomas", href: "/sintomas" },
              { label: symptom.name },
            ]}
            isDark={false}
          />

          {/* Encabezado */}
          <div className="mt-4 mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  symptom.urgencyLevel === "urgencia_inmediata"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : symptom.urgencyLevel === "alta"
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-[#F7E8E8] text-[#653A57] border border-[#E8B7B7]/40"
                }`}
              >
                {symptom.urgencyLevel === "urgencia_inmediata" ? (
                  <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                ) : (
                  <AlertTriangle className="w-3.5 h-3.5" />
                )}
                Nivel de Prioridad: {symptom.urgencyLevel.replace("_", " ").toUpperCase()}
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-700">
                Área: {symptom.category.toUpperCase()}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1D26] font-heading tracking-tight leading-tight">
              {symptom.name}
            </h1>

            {symptom.colloquialNames && (
              <p className="text-xs sm:text-sm text-[#818080] mt-1">
                Conocido comúnmente como: {symptom.colloquialNames.join(" • ")}
              </p>
            )}

            <p className="mt-2.5 text-base sm:text-lg text-[#616060] max-w-3xl leading-relaxed">
              {symptom.description}
            </p>
          </div>

          {/* Medical Dashboard: Layout 8/4 split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Columna Principal (8 columnas) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Imagen / Visual de Cabecera */}
              <div className="rounded-3xl overflow-hidden shadow-sm border border-[#EFE8EC]">
                <CardImageHeader
                  src={symptom.image}
                  alt={symptom.name}
                  category={symptom.category}
                  aspectRatio="wide"
                />
              </div>

              {/* Señales de Alarma Críticas */}
              <section className="bg-red-50/50 p-6 sm:p-8 rounded-3xl border border-red-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-red-700 font-bold text-lg sm:text-xl font-heading">
                  <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
                  <h2>Señales de Alarma que Exigen Valoración Inmediata</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {symptom.alarmSigns.map((sign, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-red-100 shadow-xs"
                    >
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#2B1D26] leading-relaxed">
                        {sign}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Por qué consultar al especialista */}
              <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading">
                  ¿Por qué es Fundamental la Valoración con un Especialista?
                </h2>
                <p className="text-sm sm:text-base text-[#616060] leading-relaxed">
                  {symptom.whyConsult}
                </p>
              </section>

              {/* Posibles Causas Médicas */}
              <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading">
                  Causas Frecuentes Relacionadas
                </h2>
                <ul className="space-y-2.5">
                  {symptom.causes.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#2B1D26]">
                      <CheckCircle2 className="w-4 h-4 text-[#653A57] shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Padecimientos Relacionados */}
              {relatedDiseases.length > 0 && (
                <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading mb-4">
                    Padecimientos Asociados a este Síntoma
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedDiseases.map((dis) => (
                      <Link
                        key={dis.id}
                        href={`/enfermedades/${dis.slug}`}
                        className="flex items-center justify-between p-4 rounded-2xl bg-[#FDFBFC] hover:bg-[#F7E8E8]/40 border border-[#EFE8EC] hover:border-[#E8B7B7] transition-all group"
                      >
                        <span className="text-sm font-semibold text-[#2B1D26] group-hover:text-[#653A57]">
                          {dis.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#653A57] transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Preguntas Frecuentes */}
              {symptom.faqs && symptom.faqs.length > 0 && (
                <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading mb-4">
                    Preguntas Frecuentes
                  </h2>
                  <div className="space-y-3">
                    {symptom.faqs.map((faq, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-[#FDFBFC] border border-[#EFE8EC]">
                        <h4 className="font-bold text-[#2B1D26] text-sm sm:text-base">
                          {faq.question}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm text-[#616060] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Dock Lateral Flotante (4 columnas) */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EFE8EC] shadow-lg">
                <div className="pb-5 border-b border-[#EFE8EC]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
                    Orientación Clínica Inmediata
                  </span>
                  <h3 className="text-xl font-bold text-[#2B1D26] font-heading mt-1">
                    Agenda tu Revisión Médica
                  </h3>
                  <p className="text-xs text-[#818080] mt-0.5">
                    Con el Dr. Jorge Humberto Albores Mejía
                  </p>
                </div>

                <div className="py-5 space-y-3 text-xs text-[#616060] border-b border-[#EFE8EC]">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Costo de Consulta:</span>
                    <span className="font-bold text-[#653A57] text-sm">
                      {symptom.category === "mama" ? "$1,000 MXN" : "$800 MXN"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Ubicación:</span>
                    <span className="font-semibold text-[#2B1D26]">Santa Elena, Tuxtla Gtz.</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Horarios:</span>
                    <span className="font-semibold text-[#2B1D26]">L-V 8:30-12:00 | Sáb 9:00-15:00</span>
                  </div>
                </div>

                <div className="pt-5 space-y-3">
                  <a
                    href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20presento%20el%20s%C3%ADntoma:%20${encodeURIComponent(
                      symptom.name
                    )}%20y%20deseo%20agendar%20una%20consulta.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#653A57] hover:bg-[#4C2C41] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E8B7B7]" />
                    <span>Consultar por WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${doctor.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-[#2B1D26] font-semibold text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Llamar al 961 188 8525</span>
                  </a>
                </div>

                {/* Si es de alta urgencia o urgencia inmediata */}
                {(symptom.urgencyLevel === "alta" ||
                  symptom.urgencyLevel === "urgencia_inmediata") && (
                  <div className="mt-5 p-4 rounded-2xl bg-red-600 text-white text-center shadow-md">
                    <span className="text-[10px] font-bold uppercase tracking-wider block opacity-90">
                      Línea Directa de Urgencias 24/7
                    </span>
                    <a
                      href={`tel:${doctor.emergencyPhone}`}
                      className="text-sm font-extrabold hover:underline block mt-0.5 tracking-wide"
                    >
                      961 249 6398
                    </a>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
