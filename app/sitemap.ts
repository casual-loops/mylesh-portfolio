import type { MetadataRoute } from 'next';
import { projects, site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['/', '/work', '/about', '/experience'];
  const projectPaths = projects.map(project => `/work/${project.slug}`);

  return [...staticPaths, ...projectPaths].map(path => ({
    url: new URL(path, site.url).toString(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : path === '/work' ? 0.8 : 0.6,
  }));
}
