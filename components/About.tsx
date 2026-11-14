import Image from 'next/image';
import { useTranslations } from 'next-intl';
import profileImage from '@/public/profile.webp';
import { Container, Section } from './ui';

export function About() {
  const t = useTranslations('About');

  return (
    <Section id="about">
      <Container className="flex flex-wrap items-center gap-12 py-24">
        <Image
          src={profileImage}
          alt={t('photoAlt')}
          sizes="240px"
          placeholder="blur"
          className="size-60 flex-none rounded-2xl border border-line object-cover"
        />
        <div className="min-w-0 flex-[1_1_420px]">
          <h2 id="about-title" className="mb-5 font-display text-4xl font-semibold tracking-tight">
            {t('title')}
          </h2>
          <p className="mb-3.5 max-w-[680px] text-[17px] text-fg-soft">{t('p1')}</p>
          <p className="mb-5 max-w-[680px] text-[17px] text-fg-soft">{t('p2')}</p>
          <p className="font-mono text-[13px] text-muted">{t('languages')}</p>
        </div>
      </Container>
    </Section>
  );
}
