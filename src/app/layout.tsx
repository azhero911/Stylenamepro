import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CopyToast } from '@/components/ui/CopyToast';
import { WebAppJsonLd, OrganizationJsonLd } from '@/components/seo/JsonLd';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://namestylepro.online';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Stylish Name Generator #1 ↳ 😍 ©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ 🔥 Free',
    template: '%s',
  },
  description:
    'Generate 10000+ 𝓬𝓸𝓸𝓵, 𝒻𝒶𝓃𝒸𝓎 & stylish names 😍 for Free Fire, PUBG, Instagram & WhatsApp ✅ ©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ in 1 click 🔥 No login needed',
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '1024x1024', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://namestylepro.online',
    siteName: 'NameStylePro',
    title: 'Stylish Name Generator #1 ↳ 😍 ©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ 🔥 Free',
    description:
      'Generate 10000+ 𝓬𝓸𝓸𝓵, 𝒻𝒶𝓃𝒸𝓎 & stylish names 😍 for Free Fire, PUBG, Instagram & WhatsApp ✅ ©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ in 1 click 🔥 No login needed',
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
    title: 'Stylish Name Generator #1 ↳ 😍 ©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ 🔥 Free',
    description:
      'Generate 10000+ 𝓬𝓸𝓸𝓵, 𝒻𝒶𝓃𝒸𝓎 & stylish names 😍 for Free Fire, PUBG, Instagram & WhatsApp ✅ ©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ in 1 click 🔥 No login needed',
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
        {/* Explicit Favicon Links for Googlebot-Image & Google Favicon Compliance */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <WebAppJsonLd
          name="NameStylePro"
          description="Free stylish name generator for Free Fire, PUBG Mobile, BGMI, and social media profiles."
          url={siteUrl}
        />
        <OrganizationJsonLd
          name="NameStylePro"
          url={siteUrl}
          logo={`${siteUrl}/logo.png`}
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
