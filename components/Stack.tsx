import { useTranslations } from 'next-intl';
import { stackGroups } from '@/data/content';
import { Container, Section, SectionHeading } from './ui';

export function Stack() {
  const t = useTranslations('Stack');

  return (
    <Section id="stack">
      <Container className="py-24">
        <SectionHeading id="stack" number="03" title={t('title')} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
          {stackGroups.map((group) => (
            <div key={group.id} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="mb-4 text-[15px] font-semibold">{t(group.id)}</h3>
              <ul className="flex flex-wrap gap-2 font-mono text-[13px] text-fg-soft">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md bg-surface-2 px-2.5 py-1.5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
