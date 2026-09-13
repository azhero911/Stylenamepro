import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Ghost, CheckCircle2, HelpCircle } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';
import { InvisibleNameClient } from './InvisibleNameClient';

const pageData = SEO_REGISTRY['free-fire-invisible-name'];

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
    question: 'How does the Free Fire invisible name trick work?',
    answer:
      'The invisible nickname uses special Unicode characters like Hangul Filler (U+3164) and Zero-Width Non-Joiners (U+200C). To the game engine and database, these are valid, non-whitespace character codes; however, standard mobile font systems render them as completely empty space. When applied, your name appears blank in the lobby, friend list, and match kill feed.',
  },
  {
    question: 'Can I get banned for using an invisible name in Free Fire?',
    answer:
      'No. Using standard Unicode symbols does not modify game files, memory, or network packets. Hangul Filler is a legitimate character within the universal Unicode specification supported by iOS and Android.',
  },
  {
    question: 'Why does Free Fire say "Nickname already exists"?',
    answer:
      'Garena Free Fire requires all player nicknames to be unique. Because many players use the standard single Hangul Filler, that exact combination is already taken on many servers. Our Method 3 appends invisible zero-width separators that make your string unique to the game database while remaining completely invisible on screen.',
  },
  {
    question: 'Does the invisible name work in Free Fire MAX?',
    answer:
      'Yes, Free Fire and Free Fire MAX share the same player account database and font rendering engine, so names created with Hangul Filler display identically in both game versions.',
  },
];

export default function FreeFireInvisibleNamePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Free Fire', href: '/free-fire-names' },
          { label: 'Free Fire Invisible Name' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
          <Ghost className="w-3.5 h-3.5 text-slate-600" />
          <span>Hangul Filler U+3164 Blank Nickname Method</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Free Fire Invisible Name
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Copy verified invisible characters for Free Fire and Free Fire MAX. Make your name blank in the
          match lobby, friend lists, and kill feed using standard Unicode Hangul Fillers.
        </p>
      </header>

      {/* Interactive Copy Suite */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Invisible Character Copy Suite</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <InvisibleNameClient />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Prefer Visible Stylish Fonts & Badges?"
        description="If you decide you want a bold, visible nickname instead of a blank space, use our generator to style any word with wings, crowns, and custom symbols."
        buttonText="Browse Visible Stylish Names"
      />

      {/* Step-by-Step Tutorial */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Set an Invisible Name in Free Fire
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Follow these exact steps to apply the blank character string:
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-1 text-sm">
          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-xs">
              1
            </span>
            <h3 className="font-bold text-slate-900">Copy Blank Character</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Click &ldquo;Copy Invisible Character&rdquo; on Method 2 or Method 3 above.
            </p>
          </li>

          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-xs">
              2
            </span>
            <h3 className="font-bold text-slate-900">Open Profile Editor</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Launch Free Fire, tap your avatar banner (top-left), and tap the edit icon beside your nickname.
            </p>
          </li>

          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-xs">
              3
            </span>
            <h3 className="font-bold text-slate-900">Paste Clipboard Content</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Long-press the nickname field and tap Paste. The box will appear empty or show cursor spacing.
            </p>
          </li>

          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-xs">
              4
            </span>
            <h3 className="font-bold text-slate-900">Confirm & Save</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Confirm with 390 Diamonds or a Name Change Card. If taken, try generating a New Variant above.
            </p>
          </li>
        </ol>

        <div className="bg-slate-100 border border-slate-300 rounded-2xl p-4 flex items-start gap-3 text-xs text-slate-800 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Compatibility Note:</strong> Character rendering and database validation
            rules can change across different Free Fire patches or regional servers. While Hangul Filler U+3164 is
            currently widely recognized, always test pasting in the game dialog before purchasing Diamonds.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="free-fire-invisible-name" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
