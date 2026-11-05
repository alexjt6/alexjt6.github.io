import { es, type Translations } from './es';
import { en } from './en';

// Idiomas disponibles y su nombre visible (se usa en el selector de idioma)
export const languages = {
  es: 'Español',
  en: 'English',
};

export type Lang = keyof typeof languages;

export const translations: Record<Lang, Translations> = { es, en };

/**
 * Devuelve el idioma actual y sus textos.
 * Uso en un componente: `const { lang, t } = getI18n(Astro.currentLocale);`
 */
export function getI18n(locale: string | undefined) {
  // Si Astro no detecta idioma, usamos el de por defecto (español)
  const lang: Lang = locale === 'en' ? 'en' : 'es';
  return { lang, t: translations[lang] };
}
