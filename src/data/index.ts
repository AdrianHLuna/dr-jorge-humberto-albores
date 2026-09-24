import { doctor } from "./doctor";
import { services } from "./services";
import { diseases } from "./diseases";
import { symptoms } from "./symptoms";

export { doctor, services, diseases, symptoms };

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getDiseaseBySlug(slug: string) {
  return diseases.find((d) => d.slug === slug);
}

export function getSymptomBySlug(slug: string) {
  return symptoms.find((s) => s.slug === slug);
}

export function getRelatedServicesForDisease(diseaseId: string) {
  return services.filter((s) => s.relatedConditions?.includes(diseaseId));
}

export function getRelatedSymptomsForDisease(symptomIds: string[] = []) {
  return symptoms.filter((s) => symptomIds.includes(s.id));
}

export function getRelatedDiseasesForSymptom(symptomId: string) {
  return diseases.filter((d) => d.relatedSymptoms?.includes(symptomId));
}

export function getRelatedDiseasesForService(diseaseIds: string[] = []) {
  return diseases.filter((d) => diseaseIds.includes(d.id));
}
