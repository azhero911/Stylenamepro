import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Gamepad2, Sparkles, ShieldCheck, Flame, Heart, BookOpen, Layers } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { ROBLOX_HUB_NAMES, ROBLOX_HUB_CATEGORIES } from '@/data/roblox-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';
import { RobloxToolClient } from './RobloxToolClient';

const pageData = SEO_REGISTRY['roblox-name-generator'];

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

const ROBLOX_SUB_HUBS = [
  {
    title: 'Roblox Names for Boys',
    href: '/roblox-names-for-boys',
    desc: 'Da Hood PvP sweat tags, chill aesthetic boys, grunge, and one-word tags.',
    icon: Flame,
    color: 'text-blue-500 bg-blue-50 border-blue-100',
  },
  {
    title: 'Roblox Names for Girls',
    href: '/roblox-names-for-girls',
    desc: 'Soft pastel, preppy Y2K, cottagecore fairy, baddie, and boba cafe tags.',
    icon: Heart,
    color: 'text-pink-500 bg-pink-50 border-pink-100',
  },
  {
    title: 'Roblox Display Names Guide',
    href: '/blog/roblox-display-names-ideas',
    desc: 'Aesthetic spaced fonts, duo/matching tags, and how to change names for free.',
    icon: BookOpen,
    color: 'text-purple-500 bg-purple-50 border-purple-100',
  },
  {
    title: 'Aesthetic Username Generator',
    href: '/aesthetic-username-generator',
    desc: 'Generate small caps, spaced typography, and cursive bios in 1 click.',
    icon: Sparkles,
    color: 'text-amber-500 bg-amber-50 border-amber-100',
  },
  {
    title: 'Cool Gaming Names',
    href: '/cool-gaming-names',
    desc: 'Cyber tech, stealth shadow, and leader titles for all gaming platforms.',
    icon: Layers,
    color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
  },
];

const FAQS = [
  {
    question: 'How are Roblox usernames different from other games like Free Fire or PUBG?',
    answer:
      'Unlike mobile battle royales that rely heavily on ornate decorative wing symbols (꧁༺ ༻꧂) and zalgo glitch text, Roblox player culture heavily favors clean, minimalist, and atmospheric "aesthetics". Furthermore, official Roblox account usernames strictly allow only letters, numbers, and underscores (3 to 20 characters), meaning complex Unicode symbols cannot be used for login handles.',
  },
  {
    question: 'What is the difference between a Roblox Username and a Display Name?',
    answer:
      'Your Roblox Username (@username) is your unique account ID used for logins and mentions; changing it costs 1,000 Robux and it must follow strict alphanumeric rules (letters, numbers, max 1 underscore). Your Display Name is the name shown to other players in games and above your avatar\'s head; it can be changed for FREE once every 7 days (letters and numbers). Crucially, Display Names do NOT have to be unique, meaning you can finally use clean one-word aesthetic names like "Cloudy" or "Velvet" for free!',
  },
  {
    question: 'How do I create an aesthetic Roblox username if my favorite name is taken?',
    answer:
      'Use popular Roblox aesthetic naming techniques: double the final vowel (e.g., "cloudyy" or "cozyy"), add a clean suffix like "solaris_x" or "velvet_co", or add aesthetic community prefixes like "itz_", "ii_", or "not_". Remember that Roblox permits only a single internal underscore and strictly forbids dots.',
  },
  {
    question: 'Can I get banned for using certain Roblox display names?',
    answer:
      'Roblox uses an automated community filtering system. Avoid using profanity, personal identifying information, hate speech, or terms that evade chat filters. If a display name violates terms, Roblox will automatically reset it back to your primary username.',
  },
  {
    question: 'How often can I change my Roblox Display Name for free?',
    answer:
      'You can update your Roblox Display Name once every 7 days (168 hours) completely free of charge. Simply go to Account Settings > Account Info > Display Name on mobile, PC, or console.',
  },
];

export default function RobloxNameGeneratorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Gaming', href: '/gaming-name-generator' },
          { label: 'Roblox Name Generator' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200">
          <Gamepad2 className="w-3.5 h-3.5 text-purple-600" />
          <span>Aesthetic Roblox Usernames & Display Names Hub</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Roblox Name Generator
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Generate clean, dreamy, and aesthetic Roblox usernames and display tags.
          Tailored specifically for Roblox culture — soft lowercase, preppy Y2K, Da Hood PvP sweat, and cute cottagecore.
        </p>
      </header>

      {/* Interactive Tool Client */}
      <RobloxToolClient />

      {/* Roblox Sub-Hub Navigation */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Explore Roblox Name Collections</h2>
          <span className="text-xs text-slate-500 font-medium">Curated by aesthetic</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {ROBLOX_SUB_HUBS.map((hub) => {
            const Icon = hub.icon;
            return (
              <Link
                key={hub.href}
                href={hub.href}
                className="group p-4 bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all flex items-start gap-3.5"
              >
                <div className={`p-2.5 rounded-xl border shrink-0 ${hub.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-purple-600 transition-colors">
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
          <h2 className="text-xl font-bold text-slate-900">Trending Aesthetic Roblox Names</h2>
          <span className="text-xs text-slate-500">1-Tap Copy • 3-20 Chars</span>
        </div>

        <CopyCardGrid
          items={ROBLOX_HUB_NAMES}
          categories={ROBLOX_HUB_CATEGORIES}
          placeholder="Search aesthetic Roblox names..."
        />
      </section>

      {/* Generator CTA Card */}
      <GeneratorCtaCard
        title="Looking for Fancy Unicode Fonts for Your Display Name?"
        description="Try our full Unicode font studio to preview 1,000+ cursive scripts, small caps, spaced typography, and clean aesthetic bios."
        buttonText="Open Live Font Studio"
      />

      {/* In-Depth Educational Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            The Aesthetic Roblox Naming Formula
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Why seasoned Roblox players choose subtle aesthetics over tacky symbols:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900">1. All-Lowercase & Soft Words</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Roblox aesthetics prioritize chill, dreamy lowercase handles like <em>cloudyvibes</em>, <em>solaris</em>, or <em>velvetmoon</em>. They look clean in leaderboards and chat logs without shouting.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900">2. Subtle Prefixes & Suffixes</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              When one-word handles are taken, Roblox creators rely on classic community prefixes like <em>itz_</em>, <em>ii_</em>, <em>not_</em>, or suffixes like <em>_xo</em>, <em>_rx</em>, and <em>_tea</em>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900">3. Vowel Stretching & Underscores</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Adding a second vowel (e.g. <em>cozyy</em>, <em>peachyhoney</em>) or single framing underscores keeps the name aesthetic while easily passing Roblox&apos;s username availability check.
            </p>
          </div>
        </div>

        <div className="bg-purple-50/80 border border-purple-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-purple-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Roblox Username Constraints:</strong> Official Roblox usernames must be
            between 3 and 20 characters and may only contain letters (a-z, A-Z), numbers (0-9), and at most one underscore.
            Display Names allow letters and numbers (no spaces or special symbols) with a 7-day free cooldown between edits.
          </div>
        </div>
      </section>

      {/* Related Pages Cross-Linking */}
      <RelatedPagesNav currentPageId="roblox-name-generator" />

      {/* FAQs */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
