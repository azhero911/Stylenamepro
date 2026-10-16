import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Flame, Users, Sparkles, Ghost, Swords, Zap, HelpCircle } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import {
  FF_HUB_NAMES,
  FF_BOYS_NAMES,
  FF_GIRLS_NAMES,
  FF_ATTITUDE_NAMES,
} from '@/data/free-fire-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['free-fire-names'];

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

// Merge all Free Fire sub-page names into the main hub
const ALL_FF_NAMES = [
  ...FF_HUB_NAMES,
  ...FF_BOYS_NAMES.map((item) => ({ ...item, category: 'boys' })),
  ...FF_GIRLS_NAMES.map((item) => ({ ...item, category: 'girls' })),
  ...FF_ATTITUDE_NAMES.map((item) => ({ ...item, category: 'attitude' })),
];

const MERGED_FF_CATEGORIES = [
  { key: 'boss', label: 'Boss & Trending' },
  { key: 'boys', label: 'Boys & Kings' },
  { key: 'girls', label: 'Girls & Queens' },
  { key: 'attitude', label: 'Attitude & Savage' },
  { key: 'anime', label: 'Anime Themed' },
  { key: 'aesthetic', label: 'Aesthetic' },
];

const SUB_CATEGORIES = [
  {
    title: 'Gaming Symbols',
    href: '/free-fire-symbols',
    desc: 'Copy crowns (亗), wings (꧁༺), swords (⚔), and kanji (神).',
    icon: Swords,
    color: 'text-indigo-500 bg-indigo-50 border-indigo-100',
  },
  {
    title: 'Invisible Blank Name',
    href: '/invisible-name',
    desc: 'Verified Hangul Filler U+3164 method for blank lobby names.',
    icon: Ghost,
    color: 'text-slate-600 bg-slate-100 border-slate-200',
  },
  {
    title: 'Clan & Guild Tags',
    href: '/clan-names',
    desc: 'Esports squad titles, team prefixes, and tournament tags.',
    icon: Users,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    title: 'Anime FF Styles',
    href: '/anime-names',
    desc: 'Kakashi, Gojo, Sukuna & Naruto tags formatted under 12 characters.',
    icon: Swords,
    color: 'text-violet-600 bg-violet-50 border-violet-100',
  },
  {
    title: 'Pro Gaming Names',
    href: '/pro-gaming-names',
    desc: 'Competitive handles and esports tags used by tournament pros.',
    icon: Zap,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    title: 'PUBG & BGMI Names',
    href: '/pubg-names',
    desc: '16-character styled nicknames with OP tags and sniper marks.',
    icon: Flame,
    color: 'text-rose-500 bg-rose-50 border-rose-100',
  },
];

const FAQS = [
  {
    question: 'What is the character limit for Free Fire nicknames?',
    answer:
      'In current versions of Garena Free Fire and Free Fire MAX (OB45 patch, verified October 2026), player nicknames are restricted to between 3 and 12 characters. Because certain multi-byte Unicode symbols (such as 亗 or ꧁) count toward this limit, we recommend keeping your base text under 8 characters when combining symbols.',
  },
  {
    question: 'How do I add symbols like 亗 and ꧁༺ to my Free Fire name?',
    answer:
      'Simply browse our curated collections above and click the "Copy" button on any nickname or symbol card. Launch Free Fire, go to your Profile (top-left corner), tap the yellow edit icon next to your nickname, paste the copied text into the nickname box, and confirm.',
  },
  {
    question: 'How much does it cost to change your name in Free Fire?',
    answer:
      'A standard name change costs 390 Garena Diamonds. However, you can save 351 diamonds by purchasing a Name Change Card from the Guild Store for just 39 Diamonds plus 200 Guild Tokens (obtainable by completing daily guild missions).',
  },
  {
    question: 'What should I do if my Free Fire name is already taken?',
    answer:
      'If your desired nickname is taken, add an invisible Hangul Filler character (U+3164) or a subtle symbol like a dot or small cross. Free Fire treats the invisible character as unique, letting you claim your preferred visual name.',
  },
  {
    question: 'Can my Free Fire account get banned for using stylish symbols?',
    answer:
      'No. NameStylePro generates standard UTF-8 Unicode characters that are supported natively by mobile operating systems. They do not alter game memory, modify client files, or violate Garena Terms of Service.',
  },
];

export default function FreeFireNamesHubPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Free Fire Stylish Names' }]} />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
          <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
          <span>Free Fire & Free Fire MAX Nickname Hub</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Free Fire Stylish Names
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Garena Free Fire and Free Fire MAX feature one of the most competitive battle royale communities in mobile gaming. Your in-game nickname is your signature identity—it appears in the elimination kill feed, MVP podiums, and guild rosters. Choosing a stylish Free Fire name with symbols like crowns (亗), wings (꧁༺ ༻꧂), thunderbolts (⚡), and Japanese kanji makes an immediate statement before the drop begins. However, Free Fire strictly enforces a 12-character limit on all player nicknames. Because multi-byte Unicode glyphs count toward this maximum, picking the wrong combination can waste costly rename diamonds. Every Free Fire name preset below is pre-tested and verified to fit within the 12-character threshold. Browse our categorized collections for boys, girls, attitude, and anime styles, and copy your favorite layout in one tap.
        </p>
      </header>

      {/* Sub-Categories Silo Links */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Explore Free Fire Tools & Guides</h2>
          <span className="text-xs text-slate-500 font-medium">Verified resources</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {SUB_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className="group p-4 bg-white rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all flex items-start gap-3.5"
              >
                <div className={`p-2.5 rounded-xl border shrink-0 ${cat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Curated Copy Grid (Merged Categories) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Trending Free Fire Nicknames (≤12 Chars)</h2>
          <span className="text-xs text-slate-500">Tap any name to copy</span>
        </div>

        <CopyCardGrid
          items={ALL_FF_NAMES}
          categories={MERGED_FF_CATEGORIES}
          charLimitWarning={12}
          placeholder="Search boys, girls, attitude, anime, or boss names..."
        />
      </section>

      {/* Core Generator CTA Card */}
      <GeneratorCtaCard
        title="Want to Style Your Own Custom Free Fire Nickname?"
        description="Type any name into our free generator to preview 100+ custom font styles, wings, crowns, and live character counters tailored for Free Fire."
        buttonText="Create Custom Free Fire Name"
      />

      {/* Unique Verified Section: Rules & Rename Costs */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Verified Rules • October 2026</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Free Fire Nickname Rules & Rename Cost Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Before spending diamonds on a nickname change, review Garena&apos;s official parameters:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">12-Character Strict Limit</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Free Fire allows a maximum of 12 characters for player nicknames. Both standard Latin letters and Unicode decorative glyphs (such as 亗, ⚡, or ☬) count toward this limit. Names exceeding 12 characters are rejected by the in-game editor with the error message <em>&quot;Nickname is too long&quot;</em>.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">The 39-Diamond Guild Discount</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A standard nickname change costs <strong>390 Diamonds</strong> directly. However, members of any active Level 1+ Guild can visit <em>Store &gt; Redeem &gt; Guild Token</em> and buy a <strong>Name Change Card for 39 Diamonds + 200 Guild Tokens</strong>, saving 351 diamonds (source: Garena Support, verified Oct 2026).
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Duplicate Name Solution</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If your desired nickname is already registered by another player, you do not need to choose a different name. Add an invisible Hangul Filler space (<code>\u3164</code>) using our <Link href="/invisible-name" className="text-brand-600 font-semibold underline">Invisible Name Tool</Link> to generate an entirely unique identifier that appears identical in the match lobby.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Supported Unicode Symbols</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Free Fire supports Japanese Kanji (神, 悪, 死), crown marks (亗), wing frames (꧁༺), and star emblems. Emojis (such as 🔥 or 👑) are often blocked or rendered as black-and-white silhouettes; sticking to mathematical symbols ensures full cross-device compatibility.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Step-by-Step Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Change Your Nickname in Free Fire (Step-by-Step)
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Updating your in-game name in Free Fire or Free Fire MAX takes under a minute:
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs">
              1
            </span>
            <h3 className="font-bold text-slate-900">Copy Your Preferred Style</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Select any nickname or symbol from this page and tap <strong>Copy</strong> to copy it to your clipboard.
            </p>
          </li>

          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs">
              2
            </span>
            <h3 className="font-bold text-slate-900">Open Free Fire Profile</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Launch Free Fire or Free Fire MAX, tap your user avatar in the top-left banner to open the Profile screen.
            </p>
          </li>

          <li className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs">
              3
            </span>
            <h3 className="font-bold text-slate-900">Paste & Confirm</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Tap the edit icon next to your nickname, paste your clipboard text, and confirm using 390 Diamonds or a Name Change Card.
            </p>
          </li>
        </ol>
      </section>

      {/* Topical Internal Links */}
      <RelatedPagesNav currentPageId="free-fire-names" />

      {/* FAQ Section with JSON-LD */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
