import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';
import { cvHref, EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/lib/site';
import { buttonGhost, buttonPrimary, Container, ExternalLink, Section, textLink } from './ui';

export function Contact({ locale }: { locale: Locale }) {
  const t = useTranslations('Contact');

  return (
    <Section id="contact">
      <Container className="pb-12 pt-24">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-[18px] border border-line bg-surface p-[clamp(1.75rem,5vw,4rem)]">
          <div className="min-w-0 flex-[1_1_420px]">
            <p aria-hidden="true" className="font-mono text-[13px] text-accent">
              05
            </p>
            <h2
              id="contact-title"
              className="mb-3 mt-2 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.03em]"
            >
              {t('title')}
            </h2>
            <a href={`mailto:${EMAIL}`} className={`${textLink} break-all text-xl`}>
              {EMAIL}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <ExternalLink href={LINKEDIN_URL} className={buttonGhost}>
              LinkedIn <span aria-hidden="true">&nbsp;↗</span>
            </ExternalLink>
            <ExternalLink href={GITHUB_URL} className={buttonGhost}>
              GitHub <span aria-hidden="true">&nbsp;↗</span>
            </ExternalLink>
            <a href={cvHref(locale)} download className={buttonPrimary}>
              {t('cv')}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer>
      <Container className="flex flex-wrap justify-between gap-2 pb-12 font-mono text-[13px] text-muted">
        <span>{t('rights', { year: new Date().getFullYear() })}</span>
        <span>{t('built')}</span>
      </Container>
    </footer>
  );
}
