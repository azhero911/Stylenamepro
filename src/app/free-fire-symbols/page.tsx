import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Swords, Layers, HelpCircle, Sparkles } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { FF_SYMBOLS_LIST, FF_SYMBOLS_CATEGORIES } from '@/data/free-fire-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['free-fire-symbols'];

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
    question: 'How do I copy and paste symbols into Free Fire?',
    answer:
      'Click the "Copy" button on any symbol card above. Open Garena Free Fire or Free Fire MAX, tap your user avatar to open your Profile, tap the edit icon next to your nickname, and paste the symbol directly into the nickname text box.',
  },
  {
    question: 'Why does a symbol appear as a box or question mark in Free Fire?',
    answer:
      'If a symbol displays as an empty rectangle (called a "tofu box") or question mark, your phone operating system or the current game build does not have that specific Unicode glyph in its default font family. All symbols listed on this page are chosen for maximum compatibility across Android, iOS, and Free Fire.',
  },
  {
    question: 'Do symbols count toward the 12-character limit in Free Fire?',
    answer:
      'Yes. In Free Fire, every letter, number, space, and symbol counts toward the customary 12-character nickname limit. Furthermore, certain multi-byte Unicode characters (such as complex Japanese Kanji or dual-character flairs) can take up two character slots. Keep your core nickname short when combining multiple symbols.',
  },
  {
    question: 'What is the most popular Free Fire crown symbol?',
    answer:
      'The small capital crown symbol 亗 is by far the most iconic symbol used in Free Fire nicknames, often placed on both sides of a player tag (e.g. 亗LEGEND亗) to indicate elite or boss status.',
  },
];

export default function FreeFireSymbolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Free Fire', href: '/free-fire-names' },
          { label: 'Free Fire Symbols' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
          <Swords className="w-3.5 h-3.5 text-indigo-600" />
          <span>Copy-Paste Gaming Symbols for Free Fire & FF MAX</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Free Fire Symbols
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Copy individual wings, crowns, sniper rifles, crosses, and Japanese kanji symbols for your Free Fire
          profile. One-tap copy ready and tested for compatibility in Free Fire and Free Fire MAX.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Gaming Symbols Directory</h2>
          <span className="text-xs text-slate-500">1-Tap Copy to Clipboard</span>
        </div>

        <CopyCardGrid
          items={FF_SYMBOLS_LIST}
          categories={FF_SYMBOLS_CATEGORIES}
          showCharCount={false}
          columns={4}
          placeholder="Search symbols (crown, wings, sniper)..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Want to Auto-Generate Names with These Symbols?"
        description="Try NameStylePro's live generator! Type your nickname and let the tool automatically wrap it with crowns, wings, brackets, and fancy fonts."
        buttonText="Try Symbol Generator"
      />

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Build a Stylish Free Fire Name Using Symbols
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Combine symbols strategically so your nickname remains legible, balanced, and within game limits:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">1. Symmetrical Brackets</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Enclosing your name in brackets like 『VIPER』 or ꧁KILLER꧂ creates a professional, framed badge
              look that instantly catches the eye in team lobbies.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">2. Avoid Symbol Overcrowding</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Using too many different symbols at once makes a tag hard to read in the fast-scrolling kill feed.
              Stick to 1 or 2 high-impact symbols.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">3. Check Length Before Confirming</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Each symbol adds to your 12-character limit. If a name fails to save in Free Fire, remove one of the
              decorations or shorten the letters.
            </p>
          </div>
        </div>

        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Device Compatibility Notice:</strong> Most modern Android and iOS
            smartphones render Unicode symbols cleanly. If a friend sees an empty box, their device font lacks that
            specific glyph. Using classic symbols like ★, 亗, and 『 』 gives the broadest compatibility.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="free-fire-symbols" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
