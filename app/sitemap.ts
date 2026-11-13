import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { 'pt-BR': `${SITE_URL}/pt`, en: `${SITE_URL}/en` };
  return [
    { url: `${SITE_URL}/pt`, alternates: { languages }, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/en`, alternates: { languages }, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
