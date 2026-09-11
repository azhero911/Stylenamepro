import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CopyToast } from '@/components/ui/CopyToast';
import { WebAppJsonLd } from '@/components/seo/JsonLd';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://namestylepro.online';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'NameStylePro — Free Stylish Name Generator for Free Fire, PUBG & Socials',
    template: '%s | NameStylePro',
  },
  description:
    'Generate 1000+ fancy font styles, symbols, and decorative nicknames for Free Fire, PUBG Mobile, BGMI, and Instagram with 1-tap copy.',
  keywords: [
    'stylish name generator',
    'free fire stylish name',
    'pubg stylish name',
    'fancy text generator',
    'nickname generator',
    'invisible name free fire',
    'stylish name copy paste',
  ],
  authors: [{ name: 'AZDeveloper' }],
  creator: 'AZDeveloper',
  publisher: 'NameStylePro',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://namestylepro.online',
    siteName: 'NameStylePro',
    title: 'NameStylePro — Free Stylish Name Generator (Free Fire, PUBG & Socials)',
    description:
      'Instantly convert any name into 1000+ fancy Unicode font styles, symbols, and gaming nicknames. 100% free and mobile-optimized.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NameStylePro - Stylish Name Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NameStylePro — Free Stylish Name Generator',
    description: '1000+ fancy font styles, symbols & gaming nicknames. 1-tap copy.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'SlfwyzB-2CCD-w2QJozo4XGN8UTuGAWGHIhtfyd3DpA',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#7C3AED',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="SlfwyzB-2CCD-w2QJozo4XGN8UTuGAWGHIhtfyd3DpA"
        />
        <WebAppJsonLd
          name="NameStylePro"
          description="Free stylish name generator for Free Fire, PUBG Mobile, BGMI, and social media profiles."
          url={siteUrl}
        />
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(err) {
                    console.log('SW registration failed:', err);
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-brand-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CopyToast />
      </body>
    </html>
  );
}
