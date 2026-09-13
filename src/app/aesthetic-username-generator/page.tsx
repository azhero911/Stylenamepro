import React from 'react';
import type { Metadata } from 'next';
import { Sparkles, ShieldCheck, Heart, Wand2, Type } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { AESTHETIC_GENERATOR_PRESETS, AESTHETIC_GENERATOR_CATEGORIES } from '@/data/social-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['aesthetic-username-generator'];

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
    question: 'How do I generate an aesthetic username for Instagram or TikTok?',
    answer:
      'Enter your favorite word or nickname into our generator. NameStylePro instantly applies dozens of aesthetic typography filters — such as small capitals (ᴠᴇʟᴠᴇᴛ), mathematical cursive (𝓅𝑒𝒶𝒸𝒽), and spaced characters (m i l k t e a) — ready for 1-tap copy.',
  },
  {
    question: 'Can I use aesthetic Unicode fonts in my Instagram handle (@username)?',
    answer:
      'Instagram and TikTok account handles (@username) only accept standard alphanumeric characters, periods, and underscores. However, your profile Display Name and Bio fully support all aesthetic Unicode fonts, cursive scripts, and decorative symbols.',
  },
  {
    question: 'Are aesthetic fonts free to copy and use?',
    answer:
      'Yes, 100% free with no app download or registration needed. All fonts use universal UTF-8 Unicode standards supported across iOS, Android, and desktop browsers.',
  },
];

export default function AestheticUsernameGeneratorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Social', href: '/instagram-names' },
          { label: 'Aesthetic Username Generator' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-pink-50 text-pink-800 border border-pink-200">
          <Wand2 className="w-3.5 h-3.5 text-pink-600" />
          <span>Instant Aesthetic Font & Bio Name Generator</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Aesthetic Username Generator
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Create cute, dreamy, and soft aesthetic usernames for Instagram, TikTok, Roblox, and Discord.
          Transform any name into delicate cursive, clean small caps, and spaced typography in 1 tap.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Aesthetic Font Presets</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={AESTHETIC_GENERATOR_PRESETS}
          categories={AESTHETIC_GENERATOR_CATEGORIES}
          placeholder="Search aesthetic styles..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Type Any Word to Generate 1,000+ Aesthetic Styles"
        description="Try NameStylePro's live generator! Type your nickname or brand name to preview instant cursive scripts, small caps, floral brackets, and bubbles."
        buttonText="Generate Aesthetic Usernames"
      />

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Style an Aesthetic Bio & Profile Name
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Combine typography and symbols to elevate your social profiles:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
              <Type className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">1. Small Capitals</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Small caps (ʟɪᴋᴇ ᴛʜɪs) deliver a clean, editorial look that elevates display names on Instagram and TikTok without looking cluttered.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">2. Delicate Spacing</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Adding subtle dots or spaces (such as <em>s . o . u . l</em>) brings a relaxed, vaporwave pacing that feels intentional and calm.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
              <Heart className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">3. Subtle Side Accents</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Pair your name with matching accents like ˚₊‧ NAME ‧₊˚ or ☾ NAME ☽ to frame your text like a high-end journal header.
            </p>
          </div>
        </div>

        <div className="bg-pink-50/80 border border-pink-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-pink-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Social Media Tip:</strong> For handles (@username), use periods or
            underscores (e.g. <em>velvet.hours</em>). For your profile Display Name, paste any fancy Unicode script!
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="aesthetic-username-generator" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
