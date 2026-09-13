import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Flame, Trophy, Crosshair, Sparkles } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { FF_BOYS_NAMES, FF_BOYS_CATEGORIES } from '@/data/free-fire-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['free-fire-names-for-boys'];

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
    question: 'What makes a great Free Fire name for boys?',
    answer:
      'A great boy nickname in Free Fire combines a strong, punchy keyword (such as King, Shadow, Killer, Viper, or Ghost) with balanced decorative symbols like 亗, ꧁༺, or ⚡. Keeping it easy to read in the kill feed ensures other players remember your tag.',
  },
  {
    question: 'How do I fit a long boy name within the 12-character limit?',
    answer:
      'Free Fire customarily allows up to 12 characters. If your chosen name exceeds this length, try abbreviating common words (e.g., "K I N G" instead of "THE KING"), using single-symbol brackets like 『 』 instead of heavy decorative wings, or generating shorter variations using our generator.',
  },
  {
    question: 'Can I combine multiple symbols like crowns and wings in my name?',
    answer:
      'Yes, as long as the total length remains within the game\'s current limit. Many players pair the 亗 crown symbol with side brackets or crosshairs for an aggressive look.',
  },
  {
    question: 'Are attitude names suitable for tournament squads?',
    answer:
      'For competitive esports tournaments, clean and easily pronounced tags (such as TITAN, VIPER, or GHOST) are preferred by commentators. You can add your official squad abbreviation as a prefix.',
  },
];

export default function FreeFireBoysPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Free Fire', href: '/free-fire-names' },
          { label: 'Free Fire Names for Boys' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
          <Flame className="w-3.5 h-3.5 text-blue-600 fill-blue-500" />
          <span>Curated Boy Nicknames for Free Fire & FF MAX</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Free Fire Names for Boys
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Explore top-rated Free Fire names for boys. Find boss handles, killer tags, stealth shadow names,
          and tournament titles ready to copy and paste into your Free Fire profile.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Boy Gamer Tags & Nicknames</h2>
          <span className="text-xs text-slate-500">1-Tap Copy to Clipboard</span>
        </div>

        <CopyCardGrid
          items={FF_BOYS_NAMES}
          categories={FF_BOYS_CATEGORIES}
          charLimitWarning={12}
          placeholder="Search boy names (boss, killer, viper)..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Want a Custom Boy Nickname with Your Own Name?"
        description="Type your real name or favorite gaming tag into our generator to instantly preview hundreds of masculine fonts, bold styles, and wings."
        buttonText="Generate Boy Nicknames"
      />

      {/* Practical Tips */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Choose the Best Free Fire Name for Boys
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Keep these practical guidelines in mind when picking or designing your handle:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Crosshair className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Focus on Readability</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              When you eliminate an opponent, your name flashes on the kill feed. Simple, high-contrast
              spelling ensures your rivals and teammates instantly recognize you.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Trophy className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Mind the Customary Limit</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Free Fire customarily maintains a 12-character nickname limit. Multi-byte Unicode symbols can
              occasionally consume additional character space depending on the game patch.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Add Symmetrical Accents</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Matching symbols on both sides (such as ⚡NAME⚡ or 亗NAME亗) provide a balanced, professional
              look that stands out in guild rosters.
            </p>
          </div>
        </div>

        <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-blue-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Compatibility Notice:</strong> All names in this collection are tested
            against common Unicode rendering standards. Game patch updates may alter character boundaries or
            symbol displays, so verify your tag in the profile preview before spending Diamonds.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="free-fire-names-for-boys" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
