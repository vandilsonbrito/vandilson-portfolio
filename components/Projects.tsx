import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { featuredProjects, otherProjects } from '@/data/content';
import { Container, ExternalLink, Section, SectionHeading, textLink } from './ui';

export function Projects() {
  const t = useTranslations('Projects');

  return (
    <Section id="projects">
      <Container className="py-24">
        <SectionHeading id="projects" title={t('title')} />
        <ul className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => {
            const name = t(`items.${project.id}.name`);
            return (
              <li key={project.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
                  <Image
                    src={project.image}
                    alt={t('imageAlt', { name })}
                    sizes="(min-width: 1180px) 554px, (min-width: 768px) 50vw, 100vw"
                    placeholder="blur"
                    className="aspect-video w-full border-b border-line object-cover object-top"
                  />
                  <div className="flex grow flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-[22px] font-semibold">{name}</h3>
                      <span className="font-mono text-xs text-accent">{t(`items.${project.id}.badge`)}</span>
                    </div>
                    <p className="text-[15px] text-fg-soft">{t(`items.${project.id}.description`)}</p>
                    <p className="font-mono text-xs text-muted">{project.stack.join(' · ')}</p>
                    <p className="mt-auto flex gap-5 pt-2 text-[15px]">
                      <ExternalLink href={project.liveUrl} className={textLink}>
                        {t(project.liveLabel)} <span aria-hidden="true">↗</span>
                      </ExternalLink>
                      {project.codeUrl ? (
                        <ExternalLink href={project.codeUrl} className={textLink}>
                          {t('code')} <span aria-hidden="true">↗</span>
                        </ExternalLink>
                      ) : (
                        <span className="text-muted">{t('privateCode')}</span>
                      )}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <h3 className="mb-4 mt-16 font-mono text-[13px] font-medium text-muted">{t('others')}</h3>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4">
          {otherProjects.map((project) => (
            <li key={project.id}>
              <ExternalLink
                href={project.url}
                className="flex h-full flex-col gap-1 rounded-xl border border-line px-5 py-4 transition-colors hover:border-line-strong hover:bg-surface"
              >
                <span className="font-semibold">
                  {t(`otherItems.${project.id}`)} <span aria-hidden="true">↗</span>
                </span>
                <span className="font-mono text-xs text-muted">{project.stack}</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
