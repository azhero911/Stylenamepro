import React from 'react';
import type { Metadata } from 'next';
import { Heart, Sparkles, Wand2, ShieldCheck, Coffee } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { ROBLOX_GIRLS_NAMES, ROBLOX_GIRLS_CATEGORIES } from '@/data/roblox-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['roblox-names-for-girls'];

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
    question: 'What makes a cute aesthetic Roblox name for girls?',
    answer:
      'The most popular aesthetic girl names in Roblox feature delicate, dreamy lowercase styling, gentle nature words (like "peaches", "honey", "cloudy", "lavender"), cozy bakery/cafe themes ("matcha", "latte", "boba"), or preppy Y2K prefixes ("itz.", "xox_").',
  },
  {
    question: 'How do preppy Roblox names work?',
    answer:
      'Preppy aesthetic names derive inspiration from coastal chic, TikTok trends, and pastel colorways. They often pair upbeat first names or beach vibes with trendy formatting, such as "itz.chloe", "vibes_emily", "glossy_sky", or "sunset_beach".',
  },
  {
    question: 'How can I get an aesthetic username without numbers?',
    answer:
      'Instead of adding generic digits like "1234", try doubling vowels ("softiie", "strawberrii"), adding an aesthetic suffix like "_co", "_xo", or "_tea", or surrounding the name in clean underscores like "_cloudy_".',
  },
  {
    question: 'Can I change my Roblox Display Name to match my girl aesthetic for free?',
    answer:
      'Yes! Roblox allows every player to change their Display Name for free every 7 days. You can use aesthetic spaced letters (e.g. "p e a c h y") or cute small capitals ("ᴠ ᴇ ʟ ᴠ ᴇ ᴛ") directly inside Roblox Account Settings.',
  },
];

export default function RobloxNamesForGirlsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Roblox', href: '/roblox-name-generator' },
          { label: 'Roblox Names for Girls' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-pink-50 text-pink-800 border border-pink-200">
          <Heart className="w-3.5 h-3.5 text-pink-600 fill-pink-500" />
          <span>Curated Aesthetic & Cute Girl Usernames for Roblox</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Roblox Names for Girls
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Discover cute, dreamy, and aesthetic Roblox names for girls.
          Explore soft pastel handles, preppy Y2K styles, whimsical cottagecore fairy tags, and baddie dark aesthetics.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Girl Roblox Names Collection</h2>
          <span className="text-xs text-slate-500">1-Tap Copy • 3-20 Chars</span>
        </div>

        <CopyCardGrid
          items={ROBLOX_GIRLS_NAMES}
          categories={ROBLOX_GIRLS_CATEGORIES}
          placeholder="Search girl Roblox names..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Create Custom Cute Roblox Names in Real Time"
        description="Try our interactive Roblox name generator! Type your nickname to generate softie lowercase, preppy dots, and cafe-themed Roblox usernames instantly."
        buttonText="Try Interactive Roblox Generator"
      />

      {/* Educational Guide for Girls */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Trending Aesthetic Styles for Roblox Girls in 2026
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Find the aesthetic vibe that best expresses your Roblox persona:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-500" />
              1. Soft Pastel & Cottagecore
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Focuses on comforting, organic, and gentle imagery: <em>cloudyhoney</em>, <em>peachy_angel</em>, <em>faerie_dust</em>, and <em>willow_breeze</em>. Often uses all-lowercase lettering and delicate double vowels.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Wand2 className="w-4 h-4 text-purple-500" />
              2. Preppy & Y2K Aesthetic
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Inspired by roller skates, sunset walks, and TikTok trends. Signature formatting includes prefixes like <em>itz.chloe</em>, <em>xox_bella</em>, and suffixes like <em>glossy_lipz</em> or <em>_vibes</em>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Coffee className="w-4 h-4 text-amber-500" />
              3. Cafe Treats & Boba Kawaii
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              A staple of Royal High, Bloxburg, and Brookhaven players. Delicious handles like <em>boba_pearls</em>, <em>matcha_frappe</em>, and <em>peach_iced_tea</em> stand out effortlessly.
            </p>
          </div>
        </div>

        <div className="bg-pink-50/80 border border-pink-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-pink-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Display Name Hack:</strong> In your Roblox Account Settings, you can enter spaces in your Display Name (e.g. <code>p e a c h y</code> or <code>s o f t i e</code>) even though official @usernames don&apos;t allow spaces. It looks ultra-aesthetic in all Roblox games!
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPagesNav currentPageId="roblox-names-for-girls" />

      {/* FAQs */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
