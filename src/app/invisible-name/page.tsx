import React from 'react';
import type { Metadata } from 'next';
import { InvisibleToolClient } from './InvisibleToolClient';
import { FaqJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Invisible Name Generator for Free Fire & PUBG — Blank Name Copy Paste (2026)',
  description:
    'Generate 100% working invisible / blank names for Free Fire, PUBG Mobile, BGMI, and WhatsApp. Uses Hangul Filler (U+3164) and Braille blanks with 1-tap copy.',
  keywords: [
    'invisible name free fire',
    'free fire blank name copy paste',
    'blank name pubg',
    'u+3164 copy paste',
    'empty name generator free fire',
  ],
};

const INVISIBLE_FAQS = [
  {
    question: 'How do I make my name invisible in Free Fire?',
    answer:
      'Copy Method 1 (Hangul Filler + ZWNJ) using the copy button below. Open Free Fire, navigate to Profile > Edit Nickname, paste the copied character string, and save. Your name will be completely invisible during gameplay.',
  },
  {
    question: 'What should I do if the game says "Name already exists"?',
    answer:
      'Because many players use blank names, standard single Hangul Fillers may already be taken on your server. Click our "Generate New Variant" button to append unique zero-width separators that make your blank string unique.',
  },
  {
    question: 'Can I get banned for using an invisible name in Free Fire or PUBG?',
    answer:
      'No. Unicode characters like Hangul Filler and Braille blanks are legitimate standard Unicode symbols supported natively by Android and iOS. They do not alter game files or violate terms of service.',
  },
];

export default function InvisibleNamePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-8">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
          👻 100% Working Unicode Blank Suite (2026 Patch-Proof)
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Invisible Blank Name Generator
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          Copy verified invisible characters for Free Fire, PUBG, and WhatsApp. Disappear from the kill feed!
        </p>
      </div>

      <InvisibleToolClient />

      <div className="pt-10 border-t border-slate-200 space-y-4">
        <h2 className="text-2xl font-black text-slate-900">Invisible Name FAQs</h2>
        <div className="space-y-3">
          {INVISIBLE_FAQS.map((faq, i) => (
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
        <FaqJsonLd faqs={INVISIBLE_FAQS} />
      </div>
    </div>
  );
}
