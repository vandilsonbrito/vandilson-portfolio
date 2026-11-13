# Vandilson Brito · Portfólio

Site pessoal onde apresento minha experiência, projetos e stack como desenvolvedor full stack. Disponível em português e inglês.

**Demo:** [vandilson-portfolio.vercel.app](https://vandilson-portfolio.vercel.app/)

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, páginas estáticas geradas no build)
- React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [next-intl 4](https://next-intl.dev/) para internacionalização (PT/EN)
- `next/og` para a imagem de prévia ao compartilhar o link
- Deploy na Vercel

## Estrutura

```
app/[locale]/        layout, página, imagem de prévia (Open Graph)
app/sitemap.ts       sitemap com as versões PT e EN
components/          seções da página (Hero, Experiência, Projetos, Stack, Sobre, Contato)
data/content.ts      dados dos projetos, experiências e stack (links, imagens, tecnologias)
messages/            textos em pt.json e en.json
i18n/                configuração de idiomas do next-intl
proxy.ts             redireciona / para o idioma padrão (/pt)
public/cv/           currículo em PDF (PT e EN)
public/projects/     prints dos projetos
```

## Rodando localmente

```sh
npm install
npm run dev
```

Outros comandos: `npm run build`, `npm run lint` e `npm run typecheck`.

## Atualizando o conteúdo

- **Textos:** `messages/pt.json` e `messages/en.json` (sempre os dois).
- **Projetos, links e tecnologias:** `data/content.ts`.
- **Currículo:** substitua os PDFs em `public/cv/` mantendo os nomes dos arquivos.
