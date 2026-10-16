import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Ghost, CheckCircle2, HelpCircle } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';
import { InvisibleNameClient } from './InvisibleNameClient';

const pageData = SEO_REGISTRY['invisible-name'];

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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Method Verified: October 2026 (Free Fire OB45 Patch)</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Invisible Name for Free Fire — Blank Nickname Trick
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Having an invisible name in Garena Free Fire and Free Fire MAX makes you a phantom across every match. When you score an elimination, your nickname appears completely blank in the kill feed announcement, creating instant psychological confusion for opposing squads. If you try to press the spacebar on a regular keyboard, Free Fire blocks it immediately with an error saying <em>&quot;The nickname cannot be empty&quot;</em> or <em>&quot;Contains invalid characters.&quot;</em> The secret to making this trick work is using the Unicode Hangul Filler (<code>U+3164</code>). The Garena game engine recognizes this code point as an authentic alphanumeric character, but your phone&apos;s font library renders it with zero visible pixels. Our 1-tap copy tool below generates verified blank strings and randomized zero-width variants so you can bypass duplicate-name errors and claim an invisible handle without root or third-party mods.
        </p>
      </header>

      {/* Interactive Copy Suite */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Invisible Character Copy Suite</h2>
          <span className="text-xs text-slate-500">1-Tap Copy • Tested Oct 2026</span>
        </div>

        <InvisibleNameClient />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Prefer Visible Stylish Fonts & Badges?"
        description="If you decide you want a bold, visible nickname instead of a blank space, use our generator to style any word with wings, crowns, and custom symbols."
        buttonText="Browse Visible Stylish Names"
      />

      {/* Step-by-Step Tutorial & Troubleshooting */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-800">
            <Ghost className="w-3.5 h-3.5 text-slate-600" />
            <span>Tested & Working Method</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Set an Invisible Name in Free Fire (Step-by-Step)
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Follow these exact steps to apply the blank character string:
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-1 text-sm">
          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs">
              1
            </span>
            <h3 className="font-bold text-slate-900">Copy Blank Character</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Tap &ldquo;Copy Invisible Character&rdquo; on Method 2 (Single Filler) or Method 3 (Random Variant) above.
            </p>
          </li>

          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs">
              2
            </span>
            <h3 className="font-bold text-slate-900">Open Profile Editor</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Launch Free Fire, tap your user avatar banner in the top-left, and tap the yellow edit notebook next to your name.
            </p>
          </li>

          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs">
              3
            </span>
            <h3 className="font-bold text-slate-900">Paste Clipboard Text</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Long-press inside the nickname dialog field and select Paste. The box will look empty or reveal a subtle blinking cursor.
            </p>
          </li>

          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs">
              4
            </span>
            <h3 className="font-bold text-slate-900">Confirm with Card/Diamonds</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Confirm your name change using a Name Change Card or 390 Diamonds. If taken, generate a new variant in Method 3!
            </p>
          </li>
        </ol>

        {/* Troubleshooting Guide */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 text-xs sm:text-sm">
          <h3 className="font-bold text-slate-900 text-base">Troubleshooting: What if &quot;Nickname Already Exists&quot;?</h3>
          <p className="text-slate-600 leading-relaxed">
            Because thousands of players want an invisible name, the standalone single Hangul character (<code>U+3164</code>) is already taken on virtually every major Free Fire server (India, Pakistan, Brazil, Indonesia). To resolve this, our tool inserts invisible zero-width non-joiners (<code>U+200C</code>) and Braille blanks (<code>U+2800</code>) in unique combinations. To Free Fire&apos;s server database, this is an entirely fresh 5-to-8 character sequence; on your screen, it remains 100% transparent.
          </p>
        </div>

        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Account Safety Guarantee:</strong> Using Unicode characters like Hangul Filler does not violate Garena Terms of Service or trigger anti-cheat bans. It is a font rendering feature supported by Android and iOS, requiring zero APK modifications or hacks.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="invisible-name" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
