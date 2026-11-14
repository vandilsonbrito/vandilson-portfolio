import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Todas as rotas, exceto API, arquivos internos do Next/Vercel e arquivos com extensão (ex.: .pdf, .webp)
  matcher: '/((?!api|_next|_vercel|apple-icon|.*\\..*).*)',
};
