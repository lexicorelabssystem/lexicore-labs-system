import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '@data/site';

export const GET: APIRoute = async () => {
  const projects = await getCollection('projects');
  const activeProjects = projects.filter((p) => p.data.status !== 'archived');

  const staticRoutes = [
    '',
    '/work',
    '/capabilities',
    '/process',
    '/infrastructure',
    '/contact',
  ];

  const pages = [
    ...staticRoutes.map((route) => ({
      url: new URL(route, SITE.url).toString(),
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? '1.0' : '0.7',
    })),
    ...activeProjects.map((project) => ({
      url: new URL(`/work/${project.data.slug}`, SITE.url).toString(),
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly' as const,
      priority: '0.6',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
