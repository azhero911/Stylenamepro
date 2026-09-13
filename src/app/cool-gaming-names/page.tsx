import React from 'react';
import type { Metadata } from 'next';
import { Flame, ShieldCheck, Cpu, Eye, Sword, Sparkles } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { COOL_GAMING_NAMES, COOL_GAMING_CATEGORIES } from '@/data/gaming-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['cool-gaming-names'];

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
    question: 'What makes a gaming name "cool" versus tacky?',
    answer:
      'Cool gaming names usually feature clean alphanumeric phrasing, cohesive themes (such as cyberpunk or stealth), and balanced capitalization. Avoiding excessive numbers (like "xX_sniper999_Xx") keeps a name timeless and professional.',
  },
  {
    question: 'Can I use these cool names on Xbox, PlayStation, and Steam?',
    answer:
      'Yes. All names in this collection are constructed with standard Latin letters and clean punctuation (such as underscores), making them fully compatible across Steam, Xbox Network, PlayStation Network, Discord, and mobile titles.',
  },
  {
    question: 'What if my favorite cool name is already registered?',
    answer:
      'If your preferred handle is taken, try minor variations: replace "o" with "0" or "e" with "3", add a short prefix (like "The" or "Sir"), or use our generator to preview distinctive Unicode font styles.',
  },
];

export default function CoolGamingNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Gaming', href: '/gaming-name-generator' },
          { label: 'Cool Gaming Names' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-orange-50 text-orange-800 border border-orange-200">
          <Flame className="w-3.5 h-3.5 text-orange-600 fill-orange-500" />
          <span>Top-Tier Gamertags & Alphanumeric Handles</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Cool Gaming Names
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Discover hundreds of cool gaming names and gamertags for PC, console, and mobile.
          Clean, alphanumeric, and ready to copy for Steam, Xbox, PSN, Discord, and competitive games.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Cool Gamertags Directory</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={COOL_GAMING_NAMES}
          categories={COOL_GAMING_CATEGORIES}
          placeholder="Search cool names (cipher, phantom, storm)..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Customize Your Cool Gamertag with Fancy Fonts"
        description="Type your favorite gaming name into NameStylePro to generate 1,000+ fancy font styles, aesthetic cursive, brackets, and character counters."
        buttonText="Style Your Gamertag"
      />

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Popular Themes for Cool Gamer Tags
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Find the personality that best reflects your gaming style:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Cyber & Futuristic</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Inspired by technological lore and sci-fi tropes. Names like <em>Cipher_Zero</em>, <em>Quantum_Leap</em>, and <em>Glitch_Matrix</em> bring high-tech flair.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
              <Eye className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Stealth & Phantom</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Ideal for assassins, snipers, and flanking specialists. Words like <em>Phantom</em>, <em>Shadow</em>, and <em>Obsidian</em> project mysterious power.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
              <Sword className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Combat & Elemental</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Dynamic and forceful tags featuring natural phenomena like <em>Storm_Breaker</em>, <em>Frost_Bite</em>, and <em>Solar_Flare</em>.
            </p>
          </div>
        </div>

        <div className="bg-orange-50/80 border border-orange-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-orange-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Cross-Platform Friendly:</strong> Clean alphanumeric gamertags without
            multi-byte glyphs provide maximum compatibility across PC, Xbox, PlayStation, and mobile launchers.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="cool-gaming-names" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
