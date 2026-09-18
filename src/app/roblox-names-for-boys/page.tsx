import React from 'react';
import type { Metadata } from 'next';
import { Gamepad2, ShieldCheck, Flame, Swords, Sparkles } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { ROBLOX_BOYS_NAMES, ROBLOX_BOYS_CATEGORIES } from '@/data/roblox-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['roblox-names-for-boys'];

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
    question: 'What makes a great Roblox username for boys?',
    answer:
      'The best Roblox usernames for boys balance memorability, clean aesthetics, and game identity. Competitive PvP players in games like Da Hood, Arsenal, and Bedwars favor punchy tags (e.g. "vortex_fn", "silent_tap"), while roleplayers and studio developers prefer clean one-word handles or chill lowercase aesthetics ("solaris", "velvet_boy").',
  },
  {
    question: 'How do I create a sweat/tryhard Roblox name for Da Hood and Bedwars?',
    answer:
      'PvP sweat tags often feature short action stems, single trailing underscores, or minimalist acronyms like "_rx", "_dev", or "fn". Avoid long numbers (like "johnny12847") which look like default auto-generated accounts.',
  },
  {
    question: 'Can I use special symbols in my boy username on Roblox?',
    answer:
      'Official Roblox account handles (@usernames) only allow standard alphanumeric characters (a-z, 0-9) and single non-consecutive underscores. However, if you want spaced letters or aesthetic typography, you can set those in your free in-game Display Name (e.g., "V O R T E X").',
  },
  {
    question: 'What should I do if my preferred Roblox boy name is taken?',
    answer:
      'Try adding classic Roblox prefixes like "itz", "ii_", or "not", or adding subtle suffixes like "_dev", "_x", or "_hq". You can also test repeating the final letter, such as "zenithh" or "astralx".',
  },
];

export default function RobloxNamesForBoysPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Roblox', href: '/roblox-name-generator' },
          { label: 'Roblox Names for Boys' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
          <Swords className="w-3.5 h-3.5 text-blue-600" />
          <span>Curated Boy Gamertags & Display Tags for Roblox</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Roblox Names for Boys
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Explore top-rated Roblox names for boys. Find Da Hood sweat tags, chill aesthetic lowercase handles,
          dark grunge tags, and clean one-word usernames ready to copy in 1 tap.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Boy Roblox Names Collection</h2>
          <span className="text-xs text-slate-500">1-Tap Copy • 3-20 Chars</span>
        </div>

        <CopyCardGrid
          items={ROBLOX_BOYS_NAMES}
          categories={ROBLOX_BOYS_CATEGORIES}
          placeholder="Search boy Roblox names..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Want to Generate Custom Roblox Names With Your Nickname?"
        description="Try our interactive Roblox name generator! Type any word to instantly produce dozens of aesthetic lowercase, Da Hood sweat, and clean spaced display variants."
        buttonText="Try Interactive Roblox Generator"
      />

      {/* Educational Guide for Boys */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Boy Roblox Naming Archetypes for 2026
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Pick a style archetype that matches your favorite Roblox experiences:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-500" />
              1. The PvP Sweat / Tryhard
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Tailored for competitive titles like Da Hood, Arsenal, and Bedwars. These usernames focus on velocity, fatal aim, and concise handles like <em>vortex_fn</em>, <em>pulse_god</em>, and <em>silent_tap</em>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              2. Chill Aesthetic & Minimalist
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Designed for hangouts, showcase games, and fashion spaces. These utilize soft lowercase styling, celestial references, or quiet nature terms such as <em>solaris_x</em>, <em>cloudy_sky</em>, and <em>serene_dawn</em>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-blue-500" />
              3. Classic Blox & Studio Dev
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Paying homage to vintage Roblox roots (2008–2016 era) with studio pride: <em>BloxMaster</em>, <em>PixelForge</em>, and <em>RetroDev</em>. Perfect for developers, tycoons, and obby speedrunners.
            </p>
          </div>
        </div>

        <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-blue-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Pro Tip:</strong> Keep your official @username short and clean so friends can easily type <code>/w username</code> in Roblox chat. You can always make your in-game Display Name look more stylized without altering your login handle!
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPagesNav currentPageId="roblox-names-for-boys" />

      {/* FAQs */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
