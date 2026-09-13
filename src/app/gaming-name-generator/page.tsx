import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Gamepad2, Trophy, Sparkles, Zap, Hash, ShieldCheck, Flame, Layers } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { GAMING_HUB_NAMES, GAMING_HUB_CATEGORIES } from '@/data/gaming-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['gaming-name-generator'];

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

const GAMING_SUB_HUBS = [
  {
    title: 'Cool Gaming Names',
    href: '/cool-gaming-names',
    desc: 'Alphanumeric handles, cyber tech, and stealth shadow names.',
    icon: Flame,
    color: 'text-orange-500 bg-orange-50 border-orange-100',
  },
  {
    title: 'Unique Gamertags',
    href: '/unique-gaming-names',
    desc: 'Rare one-word names, Latin stems, and mythic character lore.',
    icon: Sparkles,
    color: 'text-indigo-500 bg-indigo-50 border-indigo-100',
  },
  {
    title: 'Short Gaming Names',
    href: '/short-gaming-names',
    desc: 'Clean 4-to-6 letter minimalist tags that look great on leaderboards.',
    icon: Layers,
    color: 'text-blue-500 bg-blue-50 border-blue-100',
  },
  {
    title: '3 Letter Gaming Names',
    href: '/3-letter-gaming-names',
    desc: 'Ultra-rare 3-char OG tags, acronyms, and phonetic IDs.',
    icon: Hash,
    color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
  },
  {
    title: 'Pro Gaming Names',
    href: '/pro-gaming-names',
    desc: 'Esports tournament styles, IGL tags, and sponsor-friendly handles.',
    icon: Trophy,
    color: 'text-amber-500 bg-amber-50 border-amber-100',
  },
  {
    title: 'Aesthetic Gaming Names',
    href: '/aesthetic-gaming-names',
    desc: 'Pastel, soft celestial, spaced letters, and vaporwave tags.',
    icon: Zap,
    color: 'text-purple-500 bg-purple-50 border-purple-100',
  },
];

const FAQS = [
  {
    question: 'How does the NameStylePro gaming name generator work?',
    answer:
      'NameStylePro converts ordinary text into hundreds of stylized alphanumeric formats and Unicode fonts in real-time. Simply type your preferred word or nickname into our core tool to instantly preview gothic, cursive, small caps, spaced, and symbol-decorated variants without installing any software.',
  },
  {
    question: 'What are the platform character limits for major gaming services?',
    answer:
      'Different gaming platforms enforce distinct naming policies: Xbox Gamertags customarily support up to 12 characters (plus a 4-digit auto-suffix if taken); PlayStation Network (PSN) permits 3 to 16 characters; Steam permits up to 32 display characters; and Discord usernames allow 2 to 32 characters. Always check the target platform\'s guidelines.',
  },
  {
    question: 'Can I use special Unicode symbols on Steam and Discord?',
    answer:
      'Yes, platforms like Steam and Discord offer broad support for UTF-8 Unicode symbols in display names. However, competitive games with proprietary text engines (like Valorant or CS2) may filter certain non-standard glyphs into placeholder boxes.',
  },
  {
    question: 'What makes a gamertag memorable?',
    answer:
      'Memorable gamertags are usually concise (1 to 2 syllables), phonetically clean (easy for teammates to say in voice chat), and avoid excessive random numbers or redundant underscores.',
  },
];

export default function GamingNameGeneratorHubPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Gaming', href: '/gaming-name-generator' }, { label: 'Gaming Name Generator' }]} />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-brand-800 border border-purple-200">
          <Gamepad2 className="w-3.5 h-3.5 text-brand-600" />
          <span>Multi-Platform Gamertag & Nickname Directory</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Gaming Name Generator
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Generate cool, unique, and professional gamertags for PC, console, and mobile gaming.
          Explore genre-tested names for Battle Royale, tactical shooters, MOBAs, and RPGs.
        </p>
      </header>

      {/* Sub-Clusters Hub Navigation */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Explore Gaming Nickname Collections</h2>
          <span className="text-xs text-slate-500 font-medium">Curated by style</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {GAMING_SUB_HUBS.map((hub) => {
            const Icon = hub.icon;
            return (
              <Link
                key={hub.href}
                href={hub.href}
                className="group p-4 bg-white rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all flex items-start gap-3.5"
              >
                <div className={`p-2.5 rounded-xl border shrink-0 ${hub.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                    {hub.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{hub.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Popular Gaming Names by Genre</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={GAMING_HUB_NAMES}
          categories={GAMING_HUB_CATEGORIES}
          placeholder="Search gaming names..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Want to Generate Custom Fonts for Your Gamertag?"
        description="Type any name into our live Unicode generator to preview 1,000+ fancy styles, bold letters, brackets, and character counters instantly."
        buttonText="Try Live Gamertag Generator"
      />

      {/* Educational Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Build a Legendary Gamertag
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Use these proven formulas to invent a unique player identity:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900">1. Action + Noun Formula</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Combine an energetic verb or adjective with an evocative noun (e.g. <em>StormRider</em>, <em>VortexDrop</em>, or <em>ApexPredator</em>). This gives your handle immediate narrative impact.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900">2. Phonetic 2-Syllable Rule</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              In fast-paced esports, callouts must be rapid. Names like <em>Viper</em>, <em>Kuro</em>, or <em>Apex</em> take under half a second to say during high-stakes clutch rounds.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900">3. Check Multi-Platform Availability</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Aim for a consistent handle across Steam, Discord, Twitch, and consoles so your audience and teammates can always locate your channels easily.
            </p>
          </div>
        </div>

        <div className="bg-purple-50/80 border border-purple-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-purple-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Platform Rules Reminder:</strong> Gamertag character limits vary by
            network (Xbox: customarily 12 chars; PSN: 3–16 chars; Steam: up to 32 chars). Check your target game
            specifications before finalizing.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="gaming-name-generator" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
