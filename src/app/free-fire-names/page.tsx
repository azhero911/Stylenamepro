import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FreeFireToolClient } from './FreeFireToolClient';
import { FaqJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Free Fire Stylish Name ★彡©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ彡★ 😈 2026',
  description:
    'Get 1000+ Free Fire stylish names ★彡©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ彡★ for boys & girls 😈 Attitude, boss nicknames & guild badges 🔥 Fits 12 chars FF limit!',
  keywords: [
    'free fire stylish name',
    'ff name style',
    'free fire nickname generator',
    'stylish name for free fire pakistan',
    'ff stylish name copy paste',
  ],
};

const FF_FAQS = [
  {
    question: 'What is the maximum name length in Free Fire?',
    answer:
      'Garena Free Fire allows up to 12 characters (letters, numbers, and Unicode symbols). Our generator automatically warns you if your styled name exceeds 12 characters.',
  },
  {
    question: 'How do I add symbols like 亗 and ꧁༺ to my Free Fire name?',
    answer:
      'Browse the Free Fire designs generated below and tap "Copy". In Free Fire, go to Profile > Edit Nickname and paste the text.',
  },
  {
    question: 'How can I change my Free Fire name for free?',
    answer:
      'You can redeem a Name Change Card from the Guild Store using 39 diamonds + 200 guild tokens, or wait for regional top-up events that reward free name change cards.',
  },
];

export default function FreeFireNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-8">
      {/* Top SEO Hero */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
          🎮 Optimized for Free Fire & Free Fire MAX (12-Char Limit)
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Free Fire Stylish Name Generator
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          Generate boss nicknames, clan tags, and symbols for Free Fire with instant 1-tap copy.
        </p>
        <p className="text-sm text-slate-500 max-w-xl mx-auto">
          If you want anime-themed names for your Free Fire profile, visit our{' '}
          <Link
            href="https://namestylepro.online/anime-names"
            className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
          >
            anime name generator
          </Link>{' '}
          page for Naruto and Demon Slayer inspired styles.
        </p>
      </div>

      {/* Interactive Tool Client */}
      <FreeFireToolClient />

      {/* FAQ Section */}
      <div className="pt-10 border-t border-slate-200 space-y-4">
        <h2 className="text-2xl font-black text-slate-900">Free Fire Nickname FAQs</h2>
        <div className="space-y-3">
          {FF_FAQS.map((faq, i) => (
            <details key={i} className="bg-white rounded-2xl border border-slate-200 p-5 cursor-pointer">
              <summary className="font-bold text-slate-900 text-base md:text-lg list-none flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="text-brand-600 text-xl">+</span>
              </summary>
              <p className="mt-3 text-slate-600 text-sm md:text-base border-t border-slate-100 pt-3">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
        <FaqJsonLd faqs={FF_FAQS} />
      </div>
    </div>
  );
}
