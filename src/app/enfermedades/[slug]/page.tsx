import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  AlertCircle,
  Calendar,
  Phone,
  MessageCircle,
  Activity,
  ArrowRight,
  ChevronRight,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import {
  diseases,
  getDiseaseBySlug,
  getRelatedServicesForDisease,
  getRelatedSymptomsForDisease,
  doctor,
} from "@/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardImageHeader } from "@/components/CardImageHeader";
import {
  MedicalConditionStructuredData,
  FAQStructuredData,
} from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const disease = getDiseaseBySlug(slug);
  if (!disease) return { title: "Padecimiento no encontrado" };

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
  };
}

export default async function EnfermedadDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const disease = getDiseaseBySlug(slug);

  if (!disease) {
    notFound();
  }

  const relatedServices = getRelatedServicesForDisease(disease.id);
  const relatedSymptoms = getRelatedSymptomsForDisease(disease.relatedSymptoms);

  return (
    <>
      <MedicalConditionStructuredData condition={disease} />
      <FAQStructuredData faqs={disease.faqs} />

      <div className="bg-[#FDFBFC] min-h-screen py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Padecimientos", href: "/enfermedades" },
              { label: disease.name },
            ]}
            isDark={false}
          />

          {/* Encabezado */}
          <div className="mt-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F7E8E8] text-[#653A57] mb-2 border border-[#E8B7B7]/40">
              <ShieldCheck className="w-3.5 h-3.5 text-[#653A57]" />
              <span>Especialidad: {disease.category.toUpperCase()}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1D26] font-heading tracking-tight leading-tight">
              {disease.name}
            </h1>
            {disease.technicalName && (
              <p className="text-xs sm:text-sm font-mono text-[#818080] mt-1">
                Término clínico: {disease.technicalName}
              </p>
            )}
            <p className="mt-2.5 text-base sm:text-lg text-[#616060] max-w-3xl leading-relaxed">
              {disease.description}
            </p>
          </div>

          {/* Medical Dashboard: Layout 8/4 split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Columna Principal (8 columnas) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Imagen / Visual de Cabecera */}
              <div className="rounded-3xl overflow-hidden shadow-sm border border-[#EFE8EC]">
                <CardImageHeader
                  src={disease.image}
                  alt={disease.name}
                  category={disease.category}
                  aspectRatio="wide"
                />
              </div>

              {/* Cuadro Clínico y Síntomas */}
              <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading">
                  Manifestaciones y Cuadro Clínico
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {disease.symptoms.map((symptom, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#FDFBFC] border border-[#EFE8EC]"
                    >
                      <AlertCircle className="w-4 h-4 text-[#653A57] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#2B1D26] leading-relaxed">
                        {symptom}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Causas y Factores de Riesgo */}
              <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading mb-3">
                    Causas y Origen Médico
                  </h2>
                  <ul className="space-y-2 text-sm text-[#616060]">
                    {disease.causes.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#653A57] mt-2 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <h3 className="text-base font-bold text-[#2B1D26] font-heading mb-3">
                    Factores de Riesgo
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {disease.riskFactors.map((rf, i) => (
                      <div
                        key={i}
                        className="px-3.5 py-2.5 rounded-xl bg-neutral-50 text-xs text-[#2B1D26] border border-neutral-100"
                      >
                        {rf}
                      </div>
                    ))}
                  </div>
                </div>

                {disease.mexicoStats && (
                  <div className="p-4 rounded-2xl bg-[#FAF4F7] border border-[#E8B7B7]/40">
                    <span className="text-xs font-bold text-[#653A57] block mb-1">
                      Contexto Epidemiológico en México:
                    </span>
                    <p className="text-xs text-[#616060] leading-relaxed">
                      {disease.mexicoStats}
                    </p>
                  </div>
                )}
              </section>

              {/* Abordajes y Tratamientos Clínicos (Sin marcas de fármacos) */}
              <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
                    Abordaje Terapéutico Especializado
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading mt-1">
                    Tratamientos Clínicos e Intervenciones
                  </h2>
                </div>
                <div className="space-y-3 pt-2">
                  {disease.treatments.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-[#FDFBFC] border border-[#EFE8EC]"
                    >
                      <span className="flex h-6 w-6 rounded-full bg-[#653A57] text-white font-bold text-xs items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-[#2B1D26] font-medium leading-relaxed">
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Servicios y Procedimientos Relacionados */}
              {relatedServices.length > 0 && (
                <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading mb-4">
                    Procedimientos Disponibles para esta Condición
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedServices.map((svc) => (
                      <Link
                        key={svc.id}
                        href={`/servicios/${svc.slug}`}
                        className="flex items-center justify-between p-4 rounded-2xl bg-[#FDFBFC] hover:bg-[#F7E8E8]/40 border border-[#EFE8EC] hover:border-[#E8B7B7] transition-all group"
                      >
                        <div>
                          <span className="text-sm font-semibold text-[#2B1D26] group-hover:text-[#653A57] block">
                            {svc.name}
                          </span>
                          <span className="text-xs text-[#818080]">{svc.priceRange}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#653A57] transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Síntomas Asociados */}
              {relatedSymptoms.length > 0 && (
                <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading mb-4">
                    Síntomas y Motivos de Consulta Vinculados
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedSymptoms.map((sym) => (
                      <Link
                        key={sym.id}
                        href={`/sintomas/${sym.slug}`}
                        className="flex items-center justify-between p-4 rounded-2xl bg-[#FDFBFC] hover:bg-neutral-100 border border-[#EFE8EC] transition-all group"
                      >
                        <span className="text-xs sm:text-sm font-semibold text-[#2B1D26] group-hover:text-[#653A57]">
                          {sym.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#653A57]" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Preguntas Frecuentes */}
              <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading mb-4">
                  Preguntas Frecuentes
                </h2>
                <div className="space-y-3">
                  {disease.faqs.map((faq, i) => (
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
            </div>

            {/* Dock Lateral Flotante de Citas (4 columnas) */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EFE8EC] shadow-lg">
                <div className="pb-5 border-b border-[#EFE8EC]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
                    Atención Médica Presencial
                  </span>
                  <h3 className="text-xl font-bold text-[#2B1D26] font-heading mt-1">
                    Dr. Jorge Humberto Albores M.
                  </h3>
                  <p className="text-xs text-[#818080] mt-0.5">
                    Ginecólogo, Mastólogo y Cirujano Endoscopista
                  </p>
                </div>

                <div className="py-5 space-y-3 text-xs text-[#616060] border-b border-[#EFE8EC]">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Costo de Consulta:</span>
                    <span className="font-bold text-[#653A57] text-sm">
                      {disease.category === "mastologia" ? "$1,000 MXN" : "$800 MXN"}
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
                    href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20agendar%20una%20consulta%20para%20valoraci%C3%B3n%20de:%20${encodeURIComponent(
                      disease.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#653A57] hover:bg-[#4C2C41] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E8B7B7]" />
                    <span>Agendar Consulta por WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${doctor.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-[#2B1D26] font-semibold text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Llamar al Consultorio</span>
                  </a>
                </div>

                <div className="mt-5 p-3 rounded-2xl bg-red-50/70 border border-red-200 text-center">
                  <span className="text-[10px] font-bold text-red-700 block uppercase">
                    ¿Presentas síntomas agudos o alarma?
                  </span>
                  <a
                    href={`tel:${doctor.emergencyPhone}`}
                    className="text-xs font-bold text-red-700 hover:underline block mt-0.5"
                  >
                    Línea Urgencias: 961 249 6398
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
