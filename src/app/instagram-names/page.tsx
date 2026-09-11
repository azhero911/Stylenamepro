import React from 'react';
import type { Metadata } from 'next';
import { InstagramToolClient } from './InstagramToolClient';
import { FaqJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Instagram Fonts & Stylish Bio Name Generator — Aesthetic Fonts',
  description:
    'Convert your name into aesthetic cursive, small caps, bold headers, and cute symbols for Instagram, TikTok, and WhatsApp bios.',
  keywords: [
    'instagram stylish name',
    'instagram font generator',
    'aesthetic fonts copy paste',
    'bio name for instagram',
  ],
};

const IG_FAQS = [
  {
    question: 'Will these fonts work on both iPhone and Android?',
    answer:
      'Yes! All our fonts use universal Unicode standards supported across iOS, Android, macOS, and Windows. They will appear identical to all your followers.',
  },
  {
    question: 'How do I add fancy fonts to my Instagram bio?',
    answer:
      'Generate and copy your styled text from below. Open Instagram > Edit Profile > tap the Name or Bio field, paste the text, and tap the checkmark to save.',
  },
];

export default function InstagramNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-8">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-pink-50 text-pink-700 border border-pink-200">
          📸 Clean Aesthetic Fonts for Instagram, TikTok & WhatsApp
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Instagram Fonts & Bio Name Generator
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          Create elegant cursive, small capitals, and aesthetic symbols for your bio and captions.
        </p>
      </div>

      <InstagramToolClient />

      <div className="pt-10 border-t border-slate-200 space-y-4">
        <h2 className="text-2xl font-black text-slate-900">Instagram Fonts FAQs</h2>
        <div className="space-y-3">
          {IG_FAQS.map((faq, i) => (
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
        <FaqJsonLd faqs={IG_FAQS} />
      </div>
    </div>
  );
}
