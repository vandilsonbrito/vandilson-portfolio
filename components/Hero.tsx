import { useTranslations } from 'next-intl';
import { heroStack } from '@/data/content';
import type { Locale } from '@/i18n/routing';
import { cvHref } from '@/lib/site';
import { buttonGhost, buttonPrimary, Container } from './ui';

export function Hero({ locale }: { locale: Locale }) {
  const t = useTranslations('Hero');

  return (
    <section id="top" aria-labelledby="top-title">
      <Container className="flex flex-wrap items-center gap-14 py-24 md:py-32">
        <div className="min-w-0 flex-[999_1_560px]">
          <h1
            id="top-title"
            className="font-display text-[clamp(2.5rem,5.6vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
          >
            {t.rich('title', { name: (chunks) => <span className="text-accent">{chunks}</span> })}
          </h1>
          <p className="mt-7 max-w-[620px] text-lg leading-relaxed text-fg-soft md:text-[19px]">{t('subtitle')}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className={buttonPrimary}>
              {t('ctaProjects')}
            </a>
            <a href={cvHref(locale)} download className={buttonGhost}>
              {t('ctaCv')}
            </a>
          </div>
        </div>
        <ProfileCard />
      </Container>
    </section>
  );
}

function ProfileCard() {
  const t = useTranslations('Hero.card');
  const rows: { key: string; value: React.ReactNode }[] = [
    { key: t('role'), value: `"${t('roleValue')}"` },
    { key: t('freelance'), value: `"${t('freelanceValue')}"` },
    { key: t('location'), value: `"${t('locationValue')}"` },
    { key: t('stack'), value: `[${heroStack.map((item) => `"${item}"`).join(', ')}]` },
    { key: t('status'), value: <span className="text-accent">&quot;{t('statusValue')}&quot;</span> },
  ];

  return (
    <div className="min-w-0 flex-[1_1_420px] overflow-hidden rounded-2xl border border-line bg-surface font-mono text-sm">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3.5 text-[13px] text-muted">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-line-strong" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-line-strong" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-line-strong" />
        <span className="ml-2">{t('file')}</span>
      </div>
      <dl className="space-y-1 px-5 py-5 leading-loose">
        {rows.map((row) => (
          <div key={row.key} className="flex flex-wrap gap-x-2">
            <dt className="text-muted">{row.key}:</dt>
            <dd className="text-fg">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
