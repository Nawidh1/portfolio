import { en } from "./en";
import { nl } from "./nl";
import type { Locale, ProjectTranslation, Translations } from "./types";
import { portfolioProjectsBase, type PortfolioProjectBase } from "@/lib/projects";

export type { Locale, Translations, ProjectTranslation };

const translations: Record<Locale, Translations> = { en, nl };

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export type LocalizedProject = PortfolioProjectBase & ProjectTranslation;

export function getLocalizedProjects(locale: Locale): LocalizedProject[] {
  const t = getTranslations(locale);
  return portfolioProjectsBase.map((base) => ({
    ...base,
    ...t.projects.projects[base.id],
  }));
}

export function getLocalizedProjectsByCategory(
  locale: Locale,
  category: PortfolioProjectBase["category"]
): LocalizedProject[] {
  return getLocalizedProjects(locale).filter((project) => project.category === category);
}

export function getLocalizedProject(id: string, locale: Locale): LocalizedProject | undefined {
  return getLocalizedProjects(locale).find((project) => project.id === id);
}

export const locales: Locale[] = ["en", "nl"];
export const defaultLocale: Locale = "en";
