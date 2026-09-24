import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  HelpCircle,
  Activity,
  ArrowRight,
  ChevronRight,
  Info,
} from "lucide-react";
import { services, getServiceBySlug, getRelatedDiseasesForService, doctor } from "@/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardImageHeader } from "@/components/CardImageHeader";
import {
  MedicalProcedureStructuredData,
  FAQStructuredData,
} from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Procedimiento no encontrado" };

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServicioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedDiseases = getRelatedDiseasesForService(service.relatedConditions);

  return (
    <>
      <MedicalProcedureStructuredData service={service} />
      {service.faqs && <FAQStructuredData faqs={service.faqs} />}

      <div className="bg-[#FDFBFC] min-h-screen py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Procedimientos", href: "/servicios" },
              { label: service.name },
            ]}
            isDark={false}
          />

          {/* Encabezado Principal */}
          <div className="mt-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F7E8E8] text-[#653A57] mb-2 border border-[#E8B7B7]/40">
              <ShieldCheck className="w-3.5 h-3.5 text-[#653A57]" />
              <span>Modalidad: {service.type.toUpperCase()}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1D26] font-heading tracking-tight leading-tight">
              {service.name}
            </h1>
            <p className="mt-2.5 text-base sm:text-lg text-[#616060] max-w-3xl leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Medical Dashboard: Layout 8/4 split per AGENTS.md */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Columna Principal (8 columnas) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Imagen / Visual de Cabecera */}
              <div className="rounded-3xl overflow-hidden shadow-sm border border-[#EFE8EC]">
                <CardImageHeader
                  src={service.image}
                  alt={service.name}
                  category={service.category}
                  aspectRatio="wide"
                />
              </div>

              {/* Dossier: Descripción Quirúrgica o Clínica */}
              <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading">
                  Descripción y Enfoque del Procedimiento
                </h2>
                <p className="text-sm sm:text-base text-[#616060] leading-relaxed">
                  {service.longDescription}
                </p>

                {/* Especificaciones Técnicas */}
                {service.technicalSpecs && (
                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#653A57] mb-4">
                      Especificaciones Clínicas
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(service.technicalSpecs).map(([key, val]) => (
                        <div
                          key={key}
                          className="p-3.5 rounded-2xl bg-[#FDFBFC] border border-[#EFE8EC]"
                        >
                          <span className="text-xs text-[#818080] block">{key}</span>
                          <span className="text-sm font-semibold text-[#2B1D26]">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* Beneficios Clínicos */}
              <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading mb-6">
                  Beneficios y Ventajas para la Paciente
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FDFBFC] border border-[#EFE8EC]">
                      <CheckCircle2 className="w-5 h-5 text-[#653A57] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#2B1D26] leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recomendaciones y Cuidados */}
              <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading mb-4">
                  Recomendaciones y Preparación
                </h2>
                <ul className="space-y-3">
                  {service.postOpRecommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#616060]">
                      <span className="flex h-5 w-5 rounded-full bg-[#F7E8E8] text-[#653A57] font-bold text-xs items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Padecimientos Relacionados */}
              {relatedDiseases.length > 0 && (
                <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading mb-4">
                    Padecimientos Atendidos con este Procedimiento
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
              {service.faqs && service.faqs.length > 0 && (
                <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8EC] shadow-sm space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2B1D26] font-heading mb-4">
                    Preguntas Frecuentes sobre el Procedimiento
                  </h2>
                  <div className="space-y-3">
                    {service.faqs.map((faq, i) => (
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

            {/* Dock Lateral Flotante de Agendamiento (4 columnas) */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EFE8EC] shadow-lg">
                <div className="pb-5 border-b border-[#EFE8EC]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#653A57]">
                    Honorarios Médicos
                  </span>
                  <div className="mt-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#653A57] font-heading block">
                      {service.priceRange || `$${doctor.consultationPrice} MXN`}
                    </span>
                    <span className="text-xs text-[#818080]">
                      {service.type === "hospitalario"
                        ? "Presupuesto quirúrgico hospitalario personalizado"
                        : "Procedimiento de consultorio"}
                    </span>
                  </div>
                </div>

                <div className="py-5 space-y-3 text-xs text-[#616060] border-b border-[#EFE8EC]">
                  {service.duration && (
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Duración estimada:</span>
                      <span className="font-semibold text-[#2B1D26]">{service.duration}</span>
                    </div>
                  )}
                  {service.anesthesiaType && (
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Anestesia:</span>
                      <span className="font-semibold text-[#2B1D26]">{service.anesthesiaType}</span>
                    </div>
                  )}
                  {service.recoveryTime && (
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Recuperación:</span>
                      <span className="font-semibold text-[#2B1D26]">{service.recoveryTime}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Especialista:</span>
                    <span className="font-semibold text-[#2B1D26]">Dr. Jorge Albores</span>
                  </div>
                </div>

                {/* Botones de Acción */}
                <div className="pt-5 space-y-3">
                  <a
                    href={`https://wa.me/${doctor.whatsapp.replace("+", "")}?text=Hola%20Dr.%20Jorge%20Albores,%20deseo%20informaci%C3%B3n%20y%20agendar%20cita%20para:%20${encodeURIComponent(
                      service.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#653A57] hover:bg-[#4C2C41] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E8B7B7]" />
                    <span>Agendar este Procedimiento</span>
                  </a>

                  <a
                    href={`tel:${doctor.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-[#2B1D26] font-semibold text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Llamar al Consultorio</span>
                  </a>
                </div>

                <div className="mt-5 p-3 rounded-2xl bg-[#F7E8E8]/40 border border-[#E8B7B7]/40 text-center">
                  <p className="text-[11px] text-[#653A57] font-medium leading-relaxed">
                    Consultorio en Calle 23 Poniente Sur #710, Santa Elena, Tuxtla Gutiérrez, Chiapas.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
