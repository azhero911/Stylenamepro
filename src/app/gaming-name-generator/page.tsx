import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Gamepad2, ShieldCheck, Trophy, Sparkles, Hash, Crosshair, Sword } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { GAMING_HUB_NAMES, GAMING_HUB_CATEGORIES } from '@/data/gaming-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';
import { FaqJsonLd } from '@/components/seo/JsonLd';

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
  twitter: {
    card: 'summary_large_image',
    title: pageData.title,
    description: pageData.description,
  },
};

const GAMING_SUB_LINKS = [
  {
    title: 'Pro Gaming Names',
    href: '/pro-gaming-names',
    desc: 'Tournament-ready tags and competitive esports gamertags.',
    icon: Trophy,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    title: '3-Letter Gaming Names',
    href: '/3-letter-gaming-names',
    desc: 'Ultra-rare 3-character tags and clean acronyms for Discord and Steam.',
    icon: Hash,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    title: 'PUBG & BGMI Names',
    href: '/pubg-names',
    desc: 'Under 16-character tags, sniper symbols, and KRAFTON rename rules.',
    icon: Crosshair,
    color: 'text-orange-600 bg-orange-50 border-orange-100',
  },
  {
    title: 'Roblox Name Generator',
    href: '/roblox-name-generator',
    desc: 'Aesthetic display names and username rules for boys and girls.',
    icon: Gamepad2,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  },
  {
    title: 'Anime Names Generator',
    href: '/anime-names',
    desc: 'Japanese kanji, katana symbols, and anime gaming handles.',
    icon: Sword,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
];

const PLATFORM_SPECS = [
  {
    platform: 'Steam',
    limit: '2 to 32 characters',
    rules: 'Full Unicode and special characters supported. Can be changed anytime for free.',
  },
  {
    platform: 'Discord',
    limit: '2 to 32 characters',
    rules: 'Unique global username (a–z, 0–9, periods, underscores). Display name supports emojis and fonts.',
  },
  {
    platform: 'Xbox Network',
    limit: '12 characters maximum',
    rules: 'Alphanumeric characters only. First gamertag change is free; subsequent changes cost $9.99 USD.',
  },
  {
    platform: 'PlayStation Network (PSN)',
    limit: '3 to 16 characters',
    rules: 'Must start with a letter. Hyphens and underscores allowed. First change is free ($9.99 USD after).',
  },
  {
    platform: 'Epic Games',
    limit: '3 to 16 characters',
    rules: 'No spaces or consecutive symbols. Free to change once every two weeks (14-day cooldown).',
  },
];

const FAQS = [
  {
    question: 'How do I choose a good gaming name?',
    answer:
      'A great gaming handle is easy to pronounce on Discord voice channels, has 1 to 2 syllables, and avoids outdated leetspeak or excessive numbers. Focus on a core word that reflects your playstyle (tactical, aggressive, strategic) and test its availability across your primary platforms.',
  },
  {
    question: 'Will these gaming names work across PC, console, and mobile games?',
    answer:
      'Yes. Our curated gaming names use clean alphanumeric characters and universal Unicode symbols that render reliably across Steam, Epic Games, Discord, Xbox, PlayStation, and mobile titles like Free Fire and PUBG Mobile.',
  },
  {
    question: 'What is the difference between a global username and a display name?',
    answer:
      'On platforms like Discord, Roblox, and Steam, your username is your unique account identifier used for logins and mentions, usually restricted to basic ASCII characters. Your display name is the public label seen by other gamers in lobbies, which frequently supports stylized fonts, emojis, and spaces.',
  },
  {
    question: 'Can I copy and paste these names directly into games?',
    answer:
      'Yes. Simply click or tap any name card on this page to copy it to your device clipboard. Open your game or platform profile settings, paste the text into the nickname field, and confirm.',
  },
  {
    question: 'How often can I change my gamertag without paying a fee?',
    answer:
      'On Steam and Discord, display name changes are completely free and unlimited. Epic Games allows one free change every 14 days. Xbox and PlayStation offer your first change for free, but charge a fee (typically $9.99 USD or $4.99 with PS Plus) for subsequent edits.',
  },
];

export default function GamingNameGeneratorHubPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      <FaqJsonLd faqs={FAQS} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Gaming Name Generator' }]} />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-brand-700 border border-purple-200">
          <Gamepad2 className="w-3.5 h-3.5 text-brand-600" />
          <span>Universal Gamertag & Gaming Nickname Directory</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Gaming Name Generator
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Your in-game identity is the foundation of your gaming profile. Whether you compete in fast-paced tactical FPS lobbies like Valorant and Counter-Strike 2, drop into battle royale survival matches in Free Fire and PUBG, or explore massive multiplayer worlds on Steam and Roblox, having a distinct gamertag commands instant respect from teammates and rivals.
        </p>

        <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Finding a clean, non-cliché handle can be difficult when common names are already claimed. Below, explore hundreds of curated gaming names organized by genre—from tactical shooter callouts and battle royale survivor tags to MOBA handles and fantasy RPG titles. Every name is formatted for seamless copying across PC, console, and mobile platforms.
        </p>
      </header>

      {/* Specialized Gaming Categories */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Explore Specialized Gaming Hubs</h2>
          <span className="text-xs text-slate-500 font-medium">Curated collections</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {GAMING_SUB_LINKS.map((sub) => {
            const Icon = sub.icon;
            return (
              <Link
                key={sub.href}
                href={sub.href}
                className="group p-4 bg-white rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all flex items-start gap-3.5"
              >
                <div className={`p-2.5 rounded-xl border shrink-0 ${sub.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{sub.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Curated Gaming Tags by Genre</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={GAMING_HUB_NAMES}
          categories={GAMING_HUB_CATEGORIES}
          placeholder="Search gaming tags (predator, sniper, clutch)..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Create Your Own Custom Gaming Font Style"
        description="Type any word or gamertag into NameStylePro to generate 1,000+ fancy fonts, gothic styles, and esports brackets with instant 1-tap copy."
        buttonText="Try Font Generator"
      />

      {/* Platform Guidelines Table */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-brand-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Platform Gamertag Rules (Verified October 2026)</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Major Gaming Platform Username & Length Limits
          </h2>
          <p className="text-sm text-slate-600">
            Before changing your gamertag, verify that your desired handle complies with your platform&apos;s character restrictions:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
              <tr>
                <th className="p-3 sm:p-4">Platform</th>
                <th className="p-3 sm:p-4">Length Limits</th>
                <th className="p-3 sm:p-4">Rules & Modification Policy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {PLATFORM_SPECS.map((spec) => (
                <tr key={spec.platform}>
                  <td className="p-3 sm:p-4 font-bold text-slate-900">{spec.platform}</td>
                  <td className="p-3 sm:p-4 font-semibold text-brand-700">{spec.limit}</td>
                  <td className="p-3 sm:p-4 leading-relaxed">{spec.rules}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="gaming-name-generator" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
