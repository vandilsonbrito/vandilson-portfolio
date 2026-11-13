import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { About } from '@/components/About';
import { Contact, Footer } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { SiteHeader } from '@/components/SiteHeader';
import { Stack } from '@/components/Stack';
import { routing } from '@/i18n/routing';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="content">
        <Hero locale={locale} />
        <Experience />
        <Projects />
        <Stack />
        <About />
        <Contact locale={locale} />
      </main>
      <Footer />
    </>
  );
}
