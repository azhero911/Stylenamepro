import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Zap, Skull, Flame, AlertTriangle } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { FF_ATTITUDE_NAMES, FF_ATTITUDE_CATEGORIES } from '@/data/free-fire-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['free-fire-attitude-names'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: {
    canonical: pageData.canonical,
  },
  openGraph: {
    title: pageData.title,
    description: pageData.description,
    url: pageData.canonical,
    type: 'website',
  },
};

const FAQS = [
  {
    question: 'What defines an "attitude" name in Free Fire?',
    answer:
      'An attitude name is a bold, aggressive, or high-ego gamer tag that signals confidence, intimidation, and competitive ruthlessness. Common themes include outlaw figures (Villain, Outcast), dominance (King, Savage), and dark aesthetics (Toxic, Reaper, No Mercy).',
  },
  {
    question: 'Which symbols work best for attitude and savage names?',
    answer:
      'Fierce symbols like the Free Fire crown 亗, lightning bolt ⚡, skull & crossbones ☠, and Tibetan cross ༒ are frequently used to punctuate attitude nicknames.',
  },
  {
    question: 'Can attitude nicknames violate Free Fire community guidelines?',
    answer:
      'Names with competitive attitude (such as Savage, Villain, or BadBoy) are completely fine. However, avoid profanity, hate speech, or offensive slurs, as Garena\'s automated filters can force a name reset.',
  },
  {
    question: 'How do I balance an attitude name within the 12-character limit?',
    answer:
      'Keep your base word between 5 and 7 letters (like V I P E R or T O X I C) so that you have enough remaining character allowance to add side symbols like 亗 or ⚡ on both ends.',
  },
];

export default function FreeFireAttitudeNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Free Fire', href: '/free-fire-names' },
          { label: 'Free Fire Attitude Names' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-rose-50 text-rose-800 border border-rose-200">
          <Zap className="w-3.5 h-3.5 text-rose-600 fill-rose-500" />
          <span>Savage, Boss & High-Ego FF Nicknames</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Free Fire Attitude Names
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Dominate the kill feed with aggressive, villain, and savage attitude names for Free Fire.
          Curated with menacing symbols and tested for the customary 12-character profile limit.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Attitude & Savage Nicknames</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={FF_ATTITUDE_NAMES}
          categories={FF_ATTITUDE_CATEGORIES}
          charLimitWarning={12}
          placeholder="Search attitude names (toxic, savage, villain)..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Generate Your Own Savage Attitude Tag"
        description="Type any name into our generator to instantly preview dark fonts, Gothic letters, crossed swords, and fierce attitude borders."
        buttonText="Create Attitude Names"
      />

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Build an Intimidating Attitude Nickname
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Crafting a memorable attitude identity comes down to three key design elements:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <Skull className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">1. High-Impact Identity</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Select keywords with weight and attitude — such as VILLAIN, TOXIC, RUTHLESS, or OUTLAW. These
              words command attention whenever your name appears in the lobby.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <Flame className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">2. Menacing Symmetrical Accents</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Flanking your name with matching symbols (like ☠︎NAME☠︎ or 亗NAME亗) gives your tag an authoritative,
              unshakable visual balance.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">3. Respect the 12-Char Limit</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Attitude names lose their punch if truncated. Keep your total character count under the customary
              12-character limit so every symbol renders fully.
            </p>
          </div>
        </div>

        <div className="bg-rose-50/80 border border-rose-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-rose-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Play Fair Reminder:</strong> Competitive attitude names are celebrated
            in Free Fire esports, but ensure your handle follows fair play rules. Keep it fiercely competitive
            without crossing into abusive language.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="free-fire-attitude-names" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
