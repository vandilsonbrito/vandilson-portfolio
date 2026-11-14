import type { StaticImageData } from 'next/image';
import offImage from '@/public/projects/off-confeccoes.webp';
import trilhasImage from '@/public/projects/trilhas.webp';
import findAFriendImage from '@/public/projects/find-a-friend.webp';
import ecofoodImage from '@/public/projects/ecofood.webp';

export type ExperienceId = 'grm' | 'freelance';

export const experiences: { id: ExperienceId; bullets: string[]; tags: string[] }[] = [
  { id: 'grm', bullets: ['1', '2', '3'], tags: ['JavaScript', 'Node.js', 'Express', 'API REST'] },
  { id: 'freelance', bullets: ['1', '2'], tags: ['Next.js', 'TypeScript', 'Supabase', 'Firebase'] },
];

export type ProjectId = 'off' | 'trilhas' | 'findafriend' | 'ecofood';

export type FeaturedProject = {
  id: ProjectId;
  image: StaticImageData;
  stack: string[];
  liveUrl: string;
  liveLabel: 'store' | 'demo';
  codeUrl?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'off',
    image: offImage,
    stack: ['next.js', 'supabase', 'redis', 'vitest', 'sentry'],
    liveUrl: 'https://www.offconfeccoes.com.br',
    liveLabel: 'store',
  },
  {
    id: 'trilhas',
    image: trilhasImage,
    stack: ['react', 'typescript', 'react query', 'firebase'],
    liveUrl: 'https://trilhas-app-borderless-coding.vercel.app/trilhas',
    liveLabel: 'demo',
    codeUrl: 'https://github.com/ProgramadoresSemPatria/trilhas-app-a-base',
  },
  {
    id: 'findafriend',
    image: findAFriendImage,
    stack: ['fastify', 'postgresql', 'react', 'cypress'],
    liveUrl: 'https://find-a-friend-official.vercel.app',
    liveLabel: 'demo',
    codeUrl: 'https://github.com/vandilsonbrito/find-a-friend',
  },
  {
    id: 'ecofood',
    image: ecofoodImage,
    stack: ['django rest', 'postgresql', 'react', 'typescript'],
    liveUrl: 'https://a-base-vem-forte.vercel.app',
    liveLabel: 'demo',
    codeUrl: 'https://github.com/vandilsonbrito/ecofood',
  },
];

export type OtherProjectId = 'bestTravel' | 'covid' | 'healthClinic';

export const otherProjects: { id: OtherProjectId; url: string; stack: string }[] = [
  { id: 'bestTravel', url: 'https://best-travel-omega.vercel.app/', stack: 'next.js · typescript · zustand' },
  { id: 'covid', url: 'https://dasboard-covid-19.vercel.app/', stack: 'next.js · typescript · leaflet' },
  { id: 'healthClinic', url: 'https://health-clinic-by-vandilson.vercel.app/', stack: 'next.js · typescript · firebase' },
];

export type StackGroupId = 'frontend' | 'backend' | 'quality';

export const stackGroups: { id: StackGroupId; items: string[] }[] = [
  {
    id: 'frontend',
    items: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Zustand', 'React Query', 'a11y', 'SEO'],
  },
  {
    id: 'backend',
    items: ['Node.js', 'Express', 'Fastify', 'PostgreSQL', 'Prisma', 'Supabase', 'Redis', 'Webhooks'],
  },
  {
    id: 'quality',
    items: ['Vitest', 'Jest', 'Testing Library', 'Cypress', 'GitHub Actions', 'Docker', 'Vercel', 'Sentry'],
  },
];

export const heroStack = ['TS', 'React', 'Next', 'Node'];
