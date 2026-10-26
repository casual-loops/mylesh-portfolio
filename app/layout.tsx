import type { Metadata } from 'next';
import { Header, Footer } from '@/components/site-shell';
import { BackToTop } from '@/components/back-to-top';
import { site } from '@/content/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: '%s | Myles Hobdy' },
  description: site.description,
  alternates: { canonical: '/' },
  applicationName: 'Myles Hobdy Portfolio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: site.title,
    title: site.title,
    description: site.description,
    url: site.url,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Myles Hobdy engineering portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [{ url: '/images/Minimalist%20Golden%20Planet%20Orbit%20Icon.png', type: 'image/png', sizes: 'any' }],
    apple: '/images/Minimalist%20Golden%20Planet%20Orbit%20Icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
