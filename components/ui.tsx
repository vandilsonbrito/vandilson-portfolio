import { useTranslations } from 'next-intl';

export function Container({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-6 ${className}`}>{children}</div>;
}

export function Section({ id, className = '', children }: { id: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`border-t border-line ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <h2 id={`${id}-title`} className="mb-12 font-display text-4xl font-semibold tracking-tight">
      {title}
    </h2>
  );
}

export function ExternalLink({
  href,
  className = '',
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const t = useTranslations('Projects');
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> {t('newTab')}</span>
    </a>
  );
}

export const buttonPrimary =
  'inline-flex min-h-11 items-center rounded-lg bg-accent px-5 py-3 font-semibold text-accent-ink transition-colors hover:bg-accent-hover';
export const buttonGhost =
  'inline-flex min-h-11 items-center rounded-lg border border-line-strong px-5 py-3 font-medium text-fg transition-colors hover:border-muted';
export const textLink = 'font-medium text-accent transition-colors hover:text-accent-hover';
