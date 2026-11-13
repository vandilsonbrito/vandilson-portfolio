import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale === 'en' ? 'en' : 'pt', namespace: 'Metadata' });
  const role = t('title').split(' · ')[1];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#0b0d10',
          color: '#e7eaee',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, color: '#9aa4b2' }}>
          <span style={{ color: '#08bfa9' }}>~/</span>vandilson
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>Vandilson Brito</div>
          <div style={{ fontSize: 52, color: '#08bfa9', marginTop: 12 }}>{role}</div>
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#b8c0cc' }}>TypeScript · React · Next.js · Node.js</div>
      </div>
    ),
    size,
  );
}
