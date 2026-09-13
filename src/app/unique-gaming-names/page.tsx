import React from 'react';
import type { Metadata } from 'next';
import { Sparkles, ShieldCheck, Compass, BookOpen, Globe } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { UNIQUE_GAMING_NAMES, UNIQUE_GAMING_CATEGORIES } from '@/data/gaming-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['unique-gaming-names'];

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
    question: 'How do I find a gaming name that isn’t already taken?',
    answer:
      'To discover unregistered gamertags, draw inspiration from classical mythology, Latin roots, astronomical terms, or combine two uncommon words. Single-word names with clean Latin stems (like Bellator or Invictus) are especially distinctive.',
  },
  {
    question: 'Why are one-word gamer tags so sought after?',
    answer:
      'Single-word handles (often referred to as "OG names") project confidence, seniority, and elite status. Because they lack prefixes, numbers, or filler symbols, they look exceptionally clean across tournament streams and profile leaderboards.',
  },
  {
    question: 'Can I stylize unique names with Unicode fonts on NameStylePro?',
    answer:
      'Yes. Once you pick a unique base name from this page, enter it into the NameStylePro generator to preview it in small caps, cursive, gothic, or bracketed styles.',
  },
];

export default function UniqueGamingNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Gaming', href: '/gaming-name-generator' },
          { label: 'Unique Gaming Names' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>Rare, Unused & Non-Cliché Gamertag Ideas</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Unique Gaming Names
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Stand out from the crowd with rare, distinctive gaming names. Explore single-word originals,
          classical Latin roots, mythic references, and celestial handles ready to copy.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Rare & Unique Gamertags</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={UNIQUE_GAMING_NAMES}
          categories={UNIQUE_GAMING_CATEGORIES}
          placeholder="Search unique names (elysian, corvinus, aether)..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Transform Your Unique Name into 1,000+ Font Styles"
        description="Found a rare word? Paste it into NameStylePro to generate small caps, gothic scripts, aesthetic spacing, and live character counts."
        buttonText="Style Your Unique Name"
      />

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Create a Truly Unique Gamertag
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Avoid common gaming clichés by using these creative naming methods:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Explore Latin Stems</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Classical roots like <em>Fortis</em> (brave), <em>Bellator</em> (warrior), or <em>Invictus</em> (unconquered) possess inherent gravitas and are rarely saturated.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Globe className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Celestial Nomenclature</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Astronomical concepts like <em>Borealis</em>, <em>Equinox</em>, or <em>Penumbra</em> feel grand and poetic while looking sharp on stream overlays.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Resist Cliché Numbers</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Instead of appending random digits (like 1234), try an elegant letter doubling (such as <em>Vexx</em> or <em>Nyxx</em>) if an exact word is taken.
            </p>
          </div>
        </div>

        <div className="bg-indigo-50/80 border border-indigo-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-indigo-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Originality Tip:</strong> Authentic unique tags give you strong personal branding that can grow into a YouTube, Twitch, or Kick channel without rebranding conflicts.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="unique-gaming-names" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
