import React from 'react';
import type { Metadata } from 'next';
import { Hash, ShieldCheck, Trophy, Sparkles, Key } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { THREE_LETTER_NAMES, THREE_LETTER_CATEGORIES } from '@/data/gaming-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['3-letter-gaming-names'];

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
  twitter: {
    card: 'summary_large_image',
    title: pageData.title,
    description: pageData.description,
  },
};

const FAQS = [
  {
    question: 'Why are 3-letter gamertags considered so rare and valuable?',
    answer:
      'In the English alphabet, there are only 17,576 possible 3-letter combinations (26 × 26 × 26). Because millions of players register on major gaming platforms over decades, authentic 3-letter names (called "OG tags") quickly become claimed, making them prestigious symbols of veteran status.',
  },
  {
    question: 'How can I find an available 3-letter gaming name today?',
    answer:
      'While dictionary 3-letter words are typically claimed, you can find available combinations by blending numbers (e.g. Z3X, V0X, R3D), using phonetic abbreviations (like TYX or VYN), or combining your initials with a high-impact gaming consonant.',
  },
  {
    question: 'Do 3-character names work on Free Fire and PUBG Mobile?',
    answer:
      'Yes. Both Free Fire (3–12 chars) and PUBG Mobile (3–16 chars) allow names starting at 3 characters in length. A 3-character tag looks incredibly clean and minimalist in mobile match lobbies.',
  },
];

export default function ThreeLetterGamingNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Gaming', href: '/gaming-name-generator' },
          { label: '3 Letter Gaming Names' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
          <Hash className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ultra-Rare 3-Character OG Gamertags</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          3 Letter Gaming Names — Rare OG Gamertags
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Three-letter gaming names (frequently called &ldquo;OG handles&rdquo; or trigrams) are among the most coveted digital assets in the gaming community. With only 17,576 possible three-letter permutations in the English alphabet, virtually every standard dictionary word (like FOX, ACE, or SKY) was claimed during the early launch days of Xbox Live, Steam, Discord, and PlayStation Network. Today, carrying a clean 3-character handle signals veteran status, minimalism, and elite competitive taste. However, platform username limits vary widely: while games like Steam and Discord allow 2 or 3-character IDs, other services enforce strict minimums. Our curated directory below features hundreds of aesthetic phonetic blends, esports trigrams, and leet combinations pre-checked to meet gaming platform minimums without paying exorbitant aftermarket broker fees.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">3-Character Gamertags Directory</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={THREE_LETTER_NAMES}
          categories={THREE_LETTER_CATEGORIES}
          columns={4}
          placeholder="Search 3-letter names (vex, nyx, z3x)..."
        />
      </section>

      {/* Unique Verified Section: Platform Length Requirements Table */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Rules • October 2026</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Platform Minimum & Maximum Length Rules
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Before setting your 3-character name, verify that your target gaming platform permits it:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Platform</th>
                <th className="px-4 py-3">Min Length</th>
                <th className="px-4 py-3">Max Length</th>
                <th className="px-4 py-3">3-Letter Allowed?</th>
                <th className="px-4 py-3">Source & Date Verified</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Steam (Community ID)</td>
                <td className="px-4 py-3">2 chars</td>
                <td className="px-4 py-3">32 chars</td>
                <td className="px-4 py-3 text-emerald-600 font-bold">Yes (Free to change)</td>
                <td className="px-4 py-3 text-xs text-slate-500">Valve Steam Support, Oct 2026</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Roblox (User & Display)</td>
                <td className="px-4 py-3">3 chars</td>
                <td className="px-4 py-3">20 chars</td>
                <td className="px-4 py-3 text-emerald-600 font-bold">Yes (Display free; Handle 1k R$)</td>
                <td className="px-4 py-3 text-xs text-slate-500">Roblox Help Center, Oct 2026</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Garena Free Fire / MAX</td>
                <td className="px-4 py-3">3 chars</td>
                <td className="px-4 py-3">12 chars</td>
                <td className="px-4 py-3 text-emerald-600 font-bold">Yes (Costs 390 Diamonds)</td>
                <td className="px-4 py-3 text-xs text-slate-500">Garena Support, Oct 2026</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">PUBG Mobile / BGMI</td>
                <td className="px-4 py-3">3 chars</td>
                <td className="px-4 py-3">16 chars</td>
                <td className="px-4 py-3 text-emerald-600 font-bold">Yes (1 Rename Card)</td>
                <td className="px-4 py-3 text-xs text-slate-500">KRAFTON FAQ, Oct 2026</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Discord (Display Name)</td>
                <td className="px-4 py-3">1 char</td>
                <td className="px-4 py-3">32 chars</td>
                <td className="px-4 py-3 text-emerald-600 font-bold">Yes (Free anytime)</td>
                <td className="px-4 py-3 text-xs text-slate-500">Discord Support, Oct 2026</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">PlayStation Network (PSN)</td>
                <td className="px-4 py-3">3 chars</td>
                <td className="px-4 py-3">16 chars</td>
                <td className="px-4 py-3 text-emerald-600 font-bold">Yes (1st change free)</td>
                <td className="px-4 py-3 text-xs text-slate-500">PlayStation Support, Oct 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Wrap Your 3-Letter Tag in Premium Fonts"
        description="Type any 3-letter combination into NameStylePro to generate bracketed tags, Japanese brackets, gothic lettering, and crown symbols."
        buttonText="Style 3-Letter Tag"
      />

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Secure a Unique 3-Character Gamertag
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Use these smart strategies to create available 3-character handles:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Key className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">1. Leet Substitutions</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Substitute vowels with matching numbers (e.g. <em>Z3X</em> for Zex, <em>V0X</em> for Vox, or <em>A1M</em> for Aim). They look futuristic and are frequently unclaimed.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">2. Phonetic Blends</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Combine rare letters like X, Y, Z, and K (such as <em>TYX</em>, <em>ZYN</em>, or <em>KRY</em>). These create sharp, futuristic brand names.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Trophy className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">3. Esports Team Trigrams</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Mimic professional 3-letter organization acronyms (like TSM, NRG, or PRX) to give your player profile an elite, sponsored appearance.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="3-letter-gaming-names" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
