import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { cvHref } from '@/lib/site';
import { buttonPrimary } from './ui';

const sections = ['experience', 'projects', 'stack', 'about', 'contact'] as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = useTranslations('Nav');
  const otherLocale: Locale = locale === 'pt' ? 'en' : 'pt';

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        {t('skip')}
      </a>
      <nav aria-label={t('label')} className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-3">
        <a href="#top" className="font-mono text-[15px] font-medium">
          <span className="text-accent">~/</span>vandilson
        </a>
        <div className="flex items-center gap-6 text-sm">
          <ul className="hidden items-center gap-6 md:flex">
            {sections.map((section) => (
              <li key={section}>
                <a href={`#${section}`} className="text-muted transition-colors hover:text-fg">
                  {t(section)}
                </a>
              </li>
            ))}
          </ul>
          <div
            role="group"
            aria-label={t('language')}
            className="flex items-center rounded-md border border-line font-mono text-[13px]"
          >
            <span aria-current="true" className="px-2.5 py-1.5 text-fg">
              {locale.toUpperCase()}
            </span>
            <span aria-hidden="true" className="text-line-strong">
              |
            </span>
            <Link
              href="/"
              locale={otherLocale}
              aria-label={t('switchTo')}
              className="inline-flex min-h-9 items-center px-2.5 py-1.5 text-muted transition-colors hover:text-fg"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>
          <a href={cvHref(locale)} download className={`${buttonPrimary} px-4 py-2 text-sm`}>
            {t('cv')}
          </a>
        </div>
      </nav>
    </header>
  );
}
