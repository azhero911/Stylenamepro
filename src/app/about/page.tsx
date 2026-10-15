import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About NameStylePro — Free Stylish Name Generator',
  description:
    'NameStylePro is a free Unicode font and stylish name tool built for gamers and social media users. No login, no ads, no data collected.',
  alternates: {
    canonical: 'https://namestylepro.online/about',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16 space-y-10 text-slate-700">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          About NameStylePro
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          NameStylePro is a free online tool that converts any name or word into
          Unicode font styles — bold, cursive, Gothic, Fraktur, small capitals, and more.
          The output copies directly into Free Fire, PUBG Mobile, Roblox, Instagram, and
          WhatsApp without any special app or game mod.
        </p>
      </div>

      {/* What it does */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">How it works</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Unicode defines thousands of characters beyond the standard alphabet.
          Blocks like Mathematical Alphanumeric Symbols (U+1D400 – U+1D7FF) contain
          letters that look like bold, italic, script, or double-struck fonts.
          NameStylePro maps each letter you type to its equivalent in those blocks
          and displays the result instantly. No fonts are installed. Nothing is sent
          to a server.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          The character-limit counters (FF: 12, PUBG: 16) count Unicode code points,
          which is how games count them. If the counter says a name fits, it fits.
        </p>
      </div>

      {/* Privacy */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Privacy</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          NameStylePro does not send your names or any input to a server.
          All processing happens in your browser using JavaScript.
          The Favourites feature stores your saved names in your browser's{' '}
          <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">localStorage</code>.
          Clearing your browser data removes them. No account, no email, no tracking cookies.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          The site loads Google AdSense scripts for advertising. Google's privacy
          policy applies to those scripts. See our{' '}
          <Link href="/privacy-policy" className="text-brand-600 hover:underline font-medium">
            Privacy Policy
          </Link>{' '}
          for full details.
        </p>
      </div>

      {/* Creator */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Creator</h2>
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-black text-xl shrink-0 select-none">
            AZ
          </div>
          <div className="space-y-1 text-sm sm:text-base">
            <h3 className="font-bold text-slate-900 text-base">AZDeveloper</h3>
            <p className="text-slate-600">Pakistan — Web developer and esports tools builder.</p>
            <p className="text-slate-600">
              Built NameStylePro in September 2026 using Next.js and Tailwind CSS
              because existing name tools were ad-heavy, slow, or only covered Free Fire.
              The goal was a single tool that works across games and social platforms,
              loads fast on mobile, and does not require an account.
            </p>
            <p className="text-slate-500 text-xs pt-1">
              Contact:{' '}
              <a
                href="mailto:contact@namestylepro.online"
                className="text-brand-600 hover:underline"
              >
                contact@namestylepro.online
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">Built with</h2>
        <ul className="text-sm sm:text-base space-y-1.5 text-slate-600 list-disc list-inside">
          <li>Next.js 14 App Router — server-side rendering for fast initial load</li>
          <li>TypeScript — type-safe font mapping tables</li>
          <li>Tailwind CSS — responsive layout</li>
          <li>Deployed on Vercel</li>
          <li>Unicode Mathematical Alphanumeric Symbols for font conversion</li>
        </ul>
      </div>

      <p className="text-sm text-slate-500 text-center">
        Questions or corrections?{' '}
        <Link href="/contact" className="text-brand-600 hover:underline">
          Use the contact form
        </Link>
        .
      </p>
    </div>
  );
}
