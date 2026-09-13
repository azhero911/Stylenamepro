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
    default: 'NameStylePro — Stylish Name Generator: Free Fire & PUBG',
    template: '%s',
  },
  description:
    'Generate 1000+ stylish names for Free Fire, PUBG, Instagram and WhatsApp on NameStylePro. Fancy fonts, Unicode symbols, invisible name trick — free, no login.',
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
    title: 'NameStylePro — Stylish Name Generator: Free Fire & PUBG',
    description:
      'Generate 1000+ stylish names for Free Fire, PUBG, Instagram and WhatsApp on NameStylePro. Fancy fonts, Unicode symbols, invisible name trick — free, no login.',
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
    title: 'NameStylePro — Stylish Name Generator: Free Fire & PUBG',
    description:
      'Generate 1000+ stylish names for Free Fire, PUBG, Instagram and WhatsApp on NameStylePro. Fancy fonts, Unicode symbols, invisible name trick — free, no login.',
    images: ['/og-image.png'],
  },
  verification: {
    google: [
      'SlfwyzB-2CCD-w2QJozo4XGN8UTuGAWGHIhtfyd3DpA',
      'fdEST2_3poUSbKR_-HI2BRzWFRpFVICpOya5xIyK5cg',
    ],
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
        <meta
          name="google-site-verification"
          content="fdEST2_3poUSbKR_-HI2BRzWFRpFVICpOya5xIyK5cg"
        />
        {/* Google AdSense Verification & Auto Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3103070762949606"
          crossOrigin="anonymous"
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
