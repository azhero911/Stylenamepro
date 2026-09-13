import React from 'react';
import type { Metadata } from 'next';
import { Sparkles, ShieldCheck, Heart, Moon, Cloud, Zap } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { AESTHETIC_GAMING_NAMES, AESTHETIC_GAMING_CATEGORIES } from '@/data/gaming-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['aesthetic-gaming-names'];

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
    question: 'What is an "aesthetic" gaming name?',
    answer:
      'Aesthetic gaming names prioritize sensory mood, artistic typography, and visual elegance. They often feature celestial motifs (moon, stars, clouds), spaced letters (e.g. v a p o r), soft pastel themes (milktea, honey), or delicate Unicode symbols (✿, ♡, ✧).',
  },
  {
    question: 'Do aesthetic spaced names work in games like Roblox and Minecraft?',
    answer:
      'Standard spaces are restricted in certain games (like Minecraft usernames or Roblox account handles). However, you can achieve the same aesthetic look using periods, underscores, or small caps letters (such as "v.a.p.o.r" or "ᴍᴏᴏɴʟɪɢʜᴛ").',
  },
  {
    question: 'Can I generate cute cursive or small caps fonts on NameStylePro?',
    answer:
      'Yes. Our generator offers dozens of aesthetic typography options including mathematical cursive, small capital letters, bubbles, and aesthetic side borders.',
  },
];

export default function AestheticGamingNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Gaming', href: '/gaming-name-generator' },
          { label: 'Aesthetic Gaming Names' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-pink-50 text-pink-800 border border-pink-200">
          <Sparkles className="w-3.5 h-3.5 text-pink-600 fill-pink-500" />
          <span>Soft, Vaporwave & Kawaii Gamer Tags</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Aesthetic Gaming Names
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Curated collection of soft, vaporwave, celestial, and cute gaming names.
          Perfect for Roblox, Minecraft, Twitch streamers, Discord, and aesthetic profile bios.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Aesthetic Gamer Tags Directory</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={AESTHETIC_GAMING_NAMES}
          categories={AESTHETIC_GAMING_CATEGORIES}
          placeholder="Search aesthetic names (moonlight, milktea, angel)..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Generate Your Own Aesthetic Gamer Name"
        description="Type your favorite nickname into NameStylePro to instantly preview soft cursive fonts, delicate stars, spaced letters, and pastel symbols."
        buttonText="Style Aesthetic Name"
      />

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Build an Aesthetic Gaming Persona
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Choose the aesthetic style that best matches your gaming mood:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
              <Moon className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Celestial & Twilight</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Incorporate midnight imagery such as <em>lunar</em>, <em>starlight</em>, <em>solaris</em>, and subtle crescent moons (☾) for a dreamy night-sky vibe.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
              <Cloud className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Soft Pastel & Spaced</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Use cozy beverage and nature terms like <em>milktea</em>, <em>matcha</em>, or <em>peach</em> styled with aesthetic full-width character spacing.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
              <Heart className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Kawaii & Cute Symbols</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Surround your tag with delicate floral symbols (✿) and soft hearts (♡) to create a warm, friendly gaming aesthetic.
            </p>
          </div>
        </div>

        <div className="bg-pink-50/80 border border-pink-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-pink-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Streamer Tip:</strong> Aesthetic names make gorgeous Twitch and YouTube
            channel titles and match pastel stream overlays effortlessly.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="aesthetic-gaming-names" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
