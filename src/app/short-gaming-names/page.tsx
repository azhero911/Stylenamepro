import React from 'react';
import type { Metadata } from 'next';
import { Layers, ShieldCheck, Zap, Minimize2, CheckCircle2 } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { SHORT_GAMING_NAMES, SHORT_GAMING_CATEGORIES } from '@/data/gaming-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['short-gaming-names'];

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
    question: 'Why are short gaming names so popular among competitive players?',
    answer:
      'Short names between 4 and 6 letters are concise, punchy, and instantly legible in fast-moving kill feeds. They also leave plenty of character space for official esports team tags (e.g. 『FNC』Kuro).',
  },
  {
    question: 'Are short names guaranteed to fit all game character limits?',
    answer:
      'Yes. Because almost all modern games allow at least 10 to 16 characters for player nicknames, names with 4 to 6 letters fit easily on every major platform including Steam, PlayStation Network, Xbox, Free Fire, and PUBG.',
  },
  {
    question: 'How do I pick a good 4-letter gamer tag?',
    answer:
      'Focus on words with sharp consonant sounds (like Kuro, Vexx, Rift, or Zolt). These phonetic combinations sound energetic and are easy for squadmates to call out during intense matches.',
  },
];

export default function ShortGamingNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Gaming', href: '/gaming-name-generator' },
          { label: 'Short Gaming Names' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
          <Minimize2 className="w-3.5 h-3.5 text-blue-600" />
          <span>Minimalist 4 to 6 Letter Gamertags</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Short Gaming Names
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Clean, punchy, and minimalist gaming names with 4, 5, and 6 letters. Perfect for clean leaderboards,
          esports rosters, and clutter-free gamer profiles across PC and mobile.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Short Gamertags Directory</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={SHORT_GAMING_NAMES}
          categories={SHORT_GAMING_CATEGORIES}
          placeholder="Search short names (kuro, vexx, apex)..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Add Stylish Fonts to Your Short Gamertag"
        description="Type any 4-letter or 5-letter name into NameStylePro to wrap it with bold small caps, wings, aesthetic spaces, and live character counters."
        buttonText="Style Short Gamertag"
      />

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Why Minimalist Names Dominate Modern Esports
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Professional esports players overwhelmingly choose concise gamertags:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900">Clean Tournament Overlays</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Broadcast UI overlays have limited pixel widths. Short tags like <em>Vex</em> or <em>Apex</em> fit without truncation or awkward line breaks.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900">Rapid Voice Comm Calls</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              During clutch 1v1 moments, single-syllable tags allow instant tactical communication between teammates without delay.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900">Room for Squad Prefixes</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Short base names allow you to easily prepend clan and sponsor initials (like <em>[PRO]Kuro</em>) without hitting game limits.
            </p>
          </div>
        </div>

        <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-blue-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Zero Overflow Risk:</strong> Short names fit comfortably within every
            gaming platform\'s limit, including Steam, Xbox, PlayStation, Free Fire, and PUBG.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="short-gaming-names" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
