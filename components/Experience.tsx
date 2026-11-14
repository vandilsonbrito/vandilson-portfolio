import { useTranslations } from 'next-intl';
import { experiences } from '@/data/content';
import { Container, Section, SectionHeading } from './ui';

export function Experience() {
  const t = useTranslations('Experience');

  return (
    <Section id="experience">
      <Container className="py-24">
        <SectionHeading id="experience" title={t('title')} />
        <ol className="ml-1.5 flex flex-col gap-12 border-l border-line-strong">
          {experiences.map((job) => (
            <li key={job.id} className="relative pl-9">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1.5 size-[13px] rounded-full border-[3px] border-bg bg-accent"
              />
              <p className="font-mono text-[13px] text-muted">{t(`${job.id}.period`)}</p>
              <h3 className="mt-1.5 font-display text-[22px] font-semibold">
                {t(`${job.id}.role`)} <span className="font-medium text-muted">@ {t(`${job.id}.company`)}</span>
              </h3>
              <ul className="mt-4 flex max-w-[820px] list-disc flex-col gap-2 pl-[18px] text-fg-soft">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>
                    {t.rich(`${job.id}.bullets.${bullet}`, {
                      b: (chunks) => <strong className="font-semibold text-fg">{chunks}</strong>,
                    })}
                  </li>
                ))}
              </ul>
              <ul aria-label={t('techLabel')} className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                {job.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-line-strong px-3 py-1 text-fg-soft">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
