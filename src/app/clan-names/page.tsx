import React from 'react';
import type { Metadata } from 'next';
import { ClanToolClient } from './ClanToolClient';
import { FaqJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Clan & Guild Name Generator — Esports Squad Names (2026)',
  description:
    'Generate powerful clan names and guild tags for Free Fire, PUBG, and Call of Duty. Includes squad emblems and Latin prefixes with 1-tap copy.',
  keywords: [
    'clan name generator',
    'free fire guild name generator',
    'pubg squad names',
    'cool clan names 2026',
  ],
};

const CLAN_FAQS = [
  {
    question: 'How do I pick a memorable clan name?',
    answer:
      'Great esports clan names typically use 1 or 2 powerful words (e.g. Immortals, Shadow Vipers, Apex) combined with clean squad tags like [PRO], 『SQUAD』, or 亗.',
  },
  {
    question: 'What is the character limit for Free Fire Guilds?',
    answer:
      'Free Fire guild names must be between 3 and 12 characters long. Make sure your chosen squad name fits within the limit.',
  },
];

export default function ClanNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-8">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-amber-50 text-amber-800 border border-amber-200">
          ⚔️ Esports Squad & Guild Name Generator
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Clan & Guild Name Generator
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          Create intimidating clan titles and squad badges for competitive mobile tournaments.
        </p>
      </div>

      <ClanToolClient />

      <div className="pt-10 border-t border-slate-200 space-y-4">
        <h2 className="text-2xl font-black text-slate-900">Clan & Guild FAQs</h2>
        <div className="space-y-3">
          {CLAN_FAQS.map((faq, i) => (
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
        <FaqJsonLd faqs={CLAN_FAQS} />
      </div>
    </div>
  );
}
