import React from "react";
import { DoctorProfile, MedicalCondition, MedicalService, FAQItem } from "@/types/schema";

interface PhysicianStructuredDataProps {
  doctor: DoctorProfile;
}

export function PhysicianStructuredData({ doctor }: PhysicianStructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Physician", "MedicalBusiness"],
    name: doctor.name,
    description: doctor.bio,
    telephone: doctor.phone,
    email: doctor.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      postalCode: doctor.postalCode,
      addressCountry: "MX",
    },
    geo: doctor.geo
      ? {
          "@type": "GeoCoordinates",
          latitude: doctor.geo.latitude,
          longitude: doctor.geo.longitude,
        }
      : undefined,
    url: "https://drjorgealbores.com",
    image: `https://drjorgealbores.com${doctor.photo}`,
    priceRange: `$$ - Consulta desde $${doctor.consultationPrice} MXN`,
    medicalSpecialty: [
      "ObstetricsAndGynecology",
      "SurgicalOncology",
      "Mastology",
      "MinimallyInvasiveGynecologicSurgery",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ConditionStructuredDataProps {
  condition: MedicalCondition;
}

export function MedicalConditionStructuredData({ condition }: ConditionStructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.name,
    alternateName: condition.technicalName,
    description: condition.description,
    signOrSymptom: condition.symptoms.map((s) => ({
      "@type": "MedicalSignOrSymptom",
      name: s,
    })),
    possibleTreatment: condition.treatments.map((t) => ({
      "@type": "MedicalTherapy",
      name: t,
    })),
    riskFactor: condition.riskFactors.map((r) => ({
      "@type": "MedicalRiskFactor",
      name: r,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceStructuredDataProps {
  service: MedicalService;
}

export function MedicalProcedureStructuredData({ service }: ServiceStructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.description,
    procedureType: service.type,
    howPerformed: service.longDescription,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
}

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
