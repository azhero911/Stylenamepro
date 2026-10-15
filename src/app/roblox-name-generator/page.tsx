import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Gamepad2, Sparkles, ShieldCheck, Flame, Heart, BookOpen, Layers, Swords } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import {
  ROBLOX_HUB_NAMES,
  ROBLOX_BOYS_NAMES,
  ROBLOX_GIRLS_NAMES,
} from '@/data/roblox-content';
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
  twitter: {
    card: 'summary_large_image',
    title: pageData.title,
    description: pageData.description,
  },
};

// Merge all Roblox names into one comprehensive hub
const ALL_ROBLOX_NAMES = [
  ...ROBLOX_HUB_NAMES,
  ...ROBLOX_BOYS_NAMES.map((n) => ({ ...n, category: 'boys' })),
  ...ROBLOX_GIRLS_NAMES.map((n) => ({ ...n, category: 'girls' })),
];

const MERGED_ROBLOX_CATEGORIES = [
  { key: 'aesthetic', label: 'Soft & Dreamy' },
  { key: 'clean', label: 'Clean & Minimal' },
  { key: 'preppy', label: 'Preppy & Y2K' },
  { key: 'boys', label: 'Boys & Da Hood' },
  { key: 'girls', label: 'Girls & Pastel' },
  { key: 'pvp', label: 'Tryhard PvP' },
];

const ROBLOX_SUB_HUBS = [
  {
    title: 'Roblox Display Names Guide',
    href: '/blog/roblox-display-names-ideas',
    desc: 'Aesthetic spaced fonts, duo/matching tags, and how to change names for free.',
    icon: BookOpen,
    color: 'text-purple-500 bg-purple-50 border-purple-100',
  },
  {
    title: 'Aesthetic Usernames',
    href: '/aesthetic-usernames',
    desc: 'Generate small caps, spaced typography, and clean aesthetic bios in 1 click.',
    icon: Sparkles,
    color: 'text-amber-500 bg-amber-50 border-amber-100',
  },
  {
    title: 'Pro Gaming Names',
    href: '/pro-gaming-names',
    desc: 'Competitive esports handles, clan prefixes, and tournament tags.',
    icon: Layers,
    color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
  },
  {
    title: 'Anime Names',
    href: '/anime-names',
    desc: 'Katana frames, Japanese kanji, and anime character styles.',
    icon: Swords,
    color: 'text-violet-500 bg-violet-50 border-violet-100',
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
      'Your Roblox Username (@username) is your unique account ID used for logins and mentions; changing it costs 1,000 Robux and it must follow strict alphanumeric rules (letters, numbers, max 1 underscore). Your Display Name is the name shown to other players in games and above your avatar\'s head; it can be changed for FREE once every 7 days (letters and numbers). Crucially, Display Names do NOT have to be unique, meaning you can use clean one-word aesthetic names like "Cloudy" or "Velvet" for free!',
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
          { label: 'Home', href: '/' },
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
          Roblox Name Generator — Aesthetic Display Names
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Unlike battle royale games that rely heavily on aggressive wing symbols (꧁༺) and sharp weapon marks, Roblox player culture is centered around clean, minimalist aesthetics. From soft lowercase typography and spaced lettering to preppy Y2K tags, Da Hood PvP sweat handles, and cottagecore fairy themes, your Roblox name sets the tone for your virtual identity across Brookhaven, Adopt Me, Blox Fruits, and Da Hood. Understanding the difference between your official Roblox username and your display name is essential. Your account username (@handle) is permanent, unique across the entire 70-million-daily-player ecosystem, costs 1,000 Robux to change, and only accepts alphanumeric characters with a single underscore. In contrast, your display name is what other players see over your avatar in-game—it can be changed completely free once every 7 days (168-hour cooldown) and does not need to be unique! Explore our live generator and curated collections below to copy verified 3-to-20 character Roblox names in one tap.
        </p>
      </header>

      {/* Interactive Tool Client */}
      <RobloxToolClient />

      {/* Roblox Sub-Hub Navigation */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Explore Related Gaming & Aesthetic Guides</h2>
          <span className="text-xs text-slate-500 font-medium">Curated resources</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
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

      {/* Curated Copy Grid (Merged Categories) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Curated Aesthetic Roblox Names (3–20 Chars)</h2>
          <span className="text-xs text-slate-500">1-Tap Copy • Pre-Checked Length</span>
        </div>

        <CopyCardGrid
          items={ALL_ROBLOX_NAMES}
          categories={MERGED_ROBLOX_CATEGORIES}
          placeholder="Search soft, preppy, Da Hood, boys, or girls Roblox names..."
        />
      </section>

      {/* Unique Verified Section: Username vs Display Name Rules */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
            <span>Verified Rules • October 2026</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Roblox Username vs. Display Name: Key Differences
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Roblox gives every player two separate identities. Here is how they compare based on official Roblox Help Center guidelines:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">Official Username (@handle)</th>
                <th className="px-4 py-3">Display Name (In-Game Tag)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Cost to Change</td>
                <td className="px-4 py-3 text-rose-600 font-medium">1,000 Robux (~$12.50 USD)</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">100% Free</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Change Cooldown</td>
                <td className="px-4 py-3">Anytime (if Robux balance allows)</td>
                <td className="px-4 py-3">Once every 7 days (168 hours)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Uniqueness</td>
                <td className="px-4 py-3">Must be completely unique sitewide</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">Non-unique (multiple players can share it)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Length Constraint</td>
                <td className="px-4 py-3">3 to 20 characters</td>
                <td className="px-4 py-3">3 to 20 characters</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Allowed Characters</td>
                <td className="px-4 py-3">Letters (A-Z), numbers (0-9), max 1 underscore</td>
                <td className="px-4 py-3">Letters, numbers, aesthetic spacing (filtered)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Where Displayed</td>
                <td className="px-4 py-3">Profile URL, account login, @mentions</td>
                <td className="px-4 py-3">Over avatar head in-game, match leaderboards</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Generator CTA Card */}
      <GeneratorCtaCard
        title="Looking for Fancy Unicode Fonts for Your Display Name?"
        description="Try our full Unicode font studio to preview cursive scripts, small caps, spaced typography, and clean aesthetic bios."
        buttonText="Open Live Font Studio"
      />

      {/* In-Depth Educational Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            The Aesthetic Roblox Naming Formula
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Why seasoned Roblox players choose subtle aesthetics over chaotic symbols:
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
      </section>

      {/* Related Pages Cross-Linking */}
      <RelatedPagesNav currentPageId="roblox-name-generator" />

      {/* FAQs */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
