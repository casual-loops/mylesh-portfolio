import type { Metadata } from 'next';
import { site } from '@/content/site';

type PageSEO = {
  title: string;
  description: string;
  path: string;
};

/** Full page metadata because Next.js replaces nested metadata objects, rather than deep-merging them. */
export function pageMetadata({ title, description, path }: PageSEO): Metadata {
  const canonical = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Myles Hobdy | Portfolio',
      title: `${title} | Myles Hobdy`,
      description,
      url: canonical,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Myles Hobdy engineering portfolio' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Myles Hobdy`,
      description,
      images: ['/opengraph-image'],
    },
  };
}
