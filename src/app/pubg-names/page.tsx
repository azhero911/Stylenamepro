import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PubgToolClient } from './PubgToolClient';
import { FaqJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'PUBG & BGMI Stylish Name Generator — 500+ Cool Conqueror Nicknames',
  description:
    'Generate stylish names for PUBG Mobile and BGMI with clan tags, OP symbols, and sniper designs. Up to 16 characters with 1-tap copy.',
  keywords: [
    'pubg stylish name',
    'bgmi name style',
    'pubg mobile nickname generator',
    'stylish name for pubg pakistan',
    'bgmi name generator',
  ],
};

const PUBG_FAQS = [
  {
    question: 'What is the character limit for PUBG Mobile and BGMI?',
    answer:
      'PUBG Mobile and BGMI allow up to 16 characters for your player nickname. This allows more creative space for clan tags and symbols compared to other battle royale games.',
  },
  {
    question: 'How do I add OP and clan tags to my PUBG name?',
    answer:
      'Use the tool below to generate names with OP・ prefixes, 么 suffixes, and Japanese brackets. Tap copy, open PUBG Mobile > Inventory > Rename Card, and paste.',
  },
];

export default function PubgNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-8">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-amber-50 text-amber-800 border border-amber-200">
          🎯 Optimized for PUBG Mobile & BGMI (16-Char Limit)
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          PUBG & BGMI Stylish Name Generator
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          Craft conqueror-tier nicknames with OP tags, sniper emblems, and clan symbols.
        </p>
        <p className="text-sm text-slate-500 max-w-xl mx-auto">
          Anime fans can find dark gothic and cursive styles inspired by Naruto, Attack on Titan, and Tokyo Ghoul on our{' '}
          <Link
            href="https://namestylepro.online/anime-names"
            className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
          >
            anime name generator
          </Link>{' '}
          page.
        </p>
      </div>

      <PubgToolClient />

      <div className="pt-10 border-t border-slate-200 space-y-4">
        <h2 className="text-2xl font-black text-slate-900">PUBG Nickname FAQs</h2>
        <div className="space-y-3">
          {PUBG_FAQS.map((faq, i) => (
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
        <FaqJsonLd faqs={PUBG_FAQS} />
      </div>
    </div>
  );
}
