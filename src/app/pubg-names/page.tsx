import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Target, Crosshair, ChevronRight, HelpCircle, Flame } from 'lucide-react';
import { PubgToolClient } from './PubgToolClient';
import { FaqJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'PUBG Stylish Names — Copy & Paste BGMI Nicknames',
  description:
    '500+ PUBG and BGMI stylish names under the 16-char limit. OP tags, clan symbols, and step-by-step rename guide for PUBG Mobile.',
  alternates: {
    canonical: 'https://namestylepro.online/pubg-names',
  },
  openGraph: {
    title: 'PUBG Stylish Names — Copy & Paste BGMI Nicknames',
    description:
      '500+ PUBG and BGMI stylish names under the 16-char limit. OP tags, clan symbols, and step-by-step rename guide for PUBG Mobile.',
    url: 'https://namestylepro.online/pubg-names',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PUBG Stylish Names — Copy & Paste BGMI Nicknames',
    description:
      '500+ PUBG and BGMI stylish names under the 16-char limit. OP tags, clan symbols, and step-by-step rename guide for PUBG Mobile.',
  },
};

const PUBG_PRESETS = [
  { name: 'OP・S N I P E R', tag: '14/16 chars' },
  { name: '亗 V E N O M 亗', tag: '13/16 chars' },
  { name: '么 D A R K 々', tag: '11/16 chars' },
  { name: '『MR』G H O S T', tag: '13/16 chars' },
  { name: '━╤デ╦︻ A W M ︻', tag: '15/16 chars' },
  { name: '• VIP • M A F I A', tag: '15/16 chars' },
  { name: '༺LeGeNd༻', tag: '10/16 chars' },
  { name: 'ɪᴍ ᴛᴏxɪᴄ', tag: '8/16 chars' },
  { name: '★彡[B E A S T]彡★', tag: '15/16 chars' },
  { name: '父 S H A D O W 父', tag: '15/16 chars' },
  { name: '々 H U N T E R 々', tag: '15/16 chars' },
  { name: '꧁☬K N I G H T☬꧂', tag: '15/16 chars' },
];

const PUBG_FAQS = [
  {
    question: 'What is the character limit for PUBG Mobile and BGMI?',
    answer:
      'PUBG Mobile and Battlegrounds Mobile India (BGMI) enforce a 16-character limit for player nicknames. This is larger than Free Fire\'s 12-character constraint, allowing room for clan prefixes (like OP・) and Japanese symbols (like 么 and 々).',
  },
  {
    question: 'How do I change my name in PUBG Mobile without spending UC?',
    answer:
      'You can earn a free Rename Card by completing Progress Mission Level 10. Returning player events (Returner Missions) also frequently award a free 30-day Rename Card upon completing basic log-in tasks.',
  },
  {
    question: 'How do I add OP・ and clan symbols to my PUBG name?',
    answer:
      'Type your desired tag into our live generator above. Choose a style with OP prefixes or clan brackets, tap the copy button, open PUBG Mobile > Inventory > Rename Card, paste the copied text into the dialog, and tap OK.',
  },
  {
    question: 'Do these stylish PUBG names work on iOS and Android?',
    answer:
      'Yes. All fonts generated on NameStylePro use standard Unicode Mathematical Alphanumeric Characters and universal symbols that display cleanly across iOS, Android, and official emulators without displaying broken tofu boxes.',
  },
];

export default function PubgNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-semibold">
        <Link href="/" className="hover:text-brand-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">PUBG Names</span>
      </nav>

      {/* Hero Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-amber-50 text-amber-800 border border-amber-200">
          <Target className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Optimized for PUBG Mobile & BGMI (16-Char Limit)</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          PUBG & BGMI Stylish Name Generator
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Dominating the battlegrounds of PUBG Mobile and Battlegrounds Mobile India (BGMI) requires more than just clean recoil control and positioning. Your player name is the headline of every squad wipe and long-range sniper elimination in the kill feed. While many gamers use default plain text, high-tier Conqueror and Ace Dominator players often adopt stylized alphanumeric fonts with Japanese clan suffixes like 么 and 々, tactical sniper emblems (━╤デ╦︻), or the iconic OP・ prefix. Unlike Free Fire which limits nicknames to 12 characters, PUBG Mobile and BGMI support up to 16 characters. This extra space gives you significantly more creative freedom to combine clan tags, small capitals, and aesthetic symbols without clipping your gamertag. Our live generator below instantly formats your handle into hundreds of verified PUBG layouts, pre-screened to ensure flawless rendering across iOS and Android devices without missing glyph boxes.
        </p>

        <p className="text-xs sm:text-sm text-slate-500">
          Looking for anime-themed styles like Naruto, Gojo, or Kakashi? Visit our dedicated{' '}
          <Link href="/anime-names" className="text-brand-600 font-semibold underline underline-offset-2">
            Anime Name Generator
          </Link>.
        </p>
      </section>

      {/* Interactive Tool Client */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900">Live PUBG Name Generator</h2>
          <p className="text-xs sm:text-sm text-slate-500">Type any name to generate instant PUBG & BGMI formatted styles</p>
        </div>
        <PubgToolClient />
      </section>

      {/* Trending Conqueror Presets */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Trending PUBG & BGMI Conqueror Presets</h2>
          <span className="text-xs text-slate-500">≤16 Characters</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {PUBG_PRESETS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 hover:border-brand-300 transition-all shadow-xs"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-slate-900 font-mono text-sm">{item.name}</span>
                <span className="block text-[10px] text-slate-400">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Unique Verified Section: Rules & Rename Cards */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Verified Rules • October 2026</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            PUBG Mobile & BGMI Nickname Rules & Requirements
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Official nickname parameters for global PUBG Mobile and Battlegrounds Mobile India:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">16-Character Length Limit</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              PUBG Mobile allows up to 16 characters in a player handle. Spaces count as 1 character. If you use multi-byte Japanese characters (such as 么 or 々), they are counted as single characters by the KRAFTON game engine.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Rename Card Cost & Free Method</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Changing your handle requires 1 <strong>Rename Card</strong> (costs 180 UC in the in-game Shop &gt; Treasures). However, all new players receive a free Rename Card upon reaching Level 10 in Progress Missions (source: KRAFTON FAQ, verified Oct 2026).
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Popular Esports Formatting</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Competitive players typically structure their name with three elements: a 2-4 letter clan prefix (e.g. <code>SOUL・</code>, <code>GODL・</code>), followed by a small caps or bold handle (<code>JONATHAN</code>), and an optional suffix (<code>么</code>).
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Daily Rename Frequency</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You can only change your PUBG Mobile or BGMI nickname once per day, provided you possess a valid Rename Card in your inventory.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          How to Change Your Name in PUBG Mobile (Step-by-Step)
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs">
              1
            </span>
            <h3 className="font-bold text-slate-900">Copy Desired Name</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Generate and copy your desired PUBG name from the tool above.
            </p>
          </li>

          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs">
              2
            </span>
            <h3 className="font-bold text-slate-900">Open Inventory</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Launch PUBG Mobile or BGMI, tap Inventory, and open the crate icon on the bottom right.
            </p>
          </li>

          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs">
              3
            </span>
            <h3 className="font-bold text-slate-900">Select Rename Card</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Locate the &ldquo;Rename Card&rdquo; (ID icon) in your inventory and tap &ldquo;Use&rdquo;.
            </p>
          </li>

          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs">
              4
            </span>
            <h3 className="font-bold text-slate-900">Paste and Confirm</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Paste your clipboard string into the input box and tap &ldquo;OK&rdquo; to complete the rename.
            </p>
          </li>
        </ol>
      </section>

      {/* Cross-linking Hubs */}
      <section className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-bold text-slate-900 text-base">Also Play Free Fire or Need Clan Names?</h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Explore our Free Fire hub (12-char limit) and multi-gaming esports squad name generators.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/free-fire-names"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
          >
            Free Fire Names
          </Link>
          <Link
            href="/free-fire-clan-names"
            className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-colors"
          >
            Clan & Guild Names
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <div className="pt-6 border-t border-slate-200 space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-brand-600" />
          <h2 className="text-2xl font-black text-slate-900">PUBG Nickname FAQs</h2>
        </div>
        <div className="space-y-3">
          {PUBG_FAQS.map((faq, i) => (
            <details key={i} className="bg-white rounded-2xl border border-slate-200 p-5 cursor-pointer">
              <summary className="font-bold text-slate-900 text-base md:text-lg list-none flex justify-between items-center select-none">
                <span>{faq.question}</span>
                <span className="text-brand-600 text-xl font-bold">+</span>
              </summary>
              <p className="mt-3 text-slate-600 text-sm md:text-base border-t border-slate-100 pt-3 leading-relaxed">
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
