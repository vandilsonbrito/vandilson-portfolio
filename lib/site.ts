import type { Locale } from '@/i18n/routing';

export const SITE_URL = 'https://vandilson-portfolio.vercel.app';

export const EMAIL = 'vandilson25@outlook.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/vandilson-brito-desenvolvedor-fullstack/';
export const GITHUB_URL = 'https://github.com/vandilsonbrito';

const CV_FILES: Record<Locale, string> = {
  pt: '/cv/curriculo-vandilson-brito.pdf',
  en: '/cv/vandilson-brito-resume.pdf',
};

export function cvHref(locale: Locale) {
  return CV_FILES[locale];
}
