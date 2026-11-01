import type { APIRoute } from 'astro';
import { languages, getLocalizedPath, type Lang } from '../i18n/ui';

const SITE_URL = 'https://mkvtomp4.github.io';
const slugs = [''];

export const GET: APIRoute = () => {
  const locales = Object.keys(languages) as Lang[];
  const now = new Date().toISOString();

  const urlEntries = slugs
    .flatMap((slug) =>
      locales.map((locale) => {
        const loc = `${SITE_URL}${getLocalizedPath(locale, slug)}`;
        const alternates = locales
          .map(
            (altLocale) =>
              `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${SITE_URL}${getLocalizedPath(altLocale, slug)}" />`
          )
          .join('\n');
        const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${getLocalizedPath('en', slug)}" />`;

        return `  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${locale === 'en' && slug === '' ? '1.0' : '0.9'}</priority>
${alternates}
${xDefault}
  </url>`;
      })
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
