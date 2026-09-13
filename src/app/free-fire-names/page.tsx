import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Flame, Users, Sparkles, Ghost, Swords, Zap } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { FF_HUB_NAMES, FF_HUB_CATEGORIES } from '@/data/free-fire-content';
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

const SUB_CATEGORIES = [
  {
    title: 'Names for Boys',
    href: '/free-fire-names-for-boys',
    desc: 'Boss, shadow, and killer nicknames designed for male gamers.',
    icon: Flame,
    color: 'text-amber-500 bg-amber-50 border-amber-100',
  },
  {
    title: 'Names for Girls',
    href: '/free-fire-names-for-girls',
    desc: 'Queen, goddess, and aesthetic tags tailored for female players.',
    icon: Sparkles,
    color: 'text-pink-500 bg-pink-50 border-pink-100',
  },
  {
    title: 'Gaming Symbols',
    href: '/free-fire-symbols',
    desc: 'Copy crowns (亗), wings (꧁༺), swords (⚔), and kanji (神).',
    icon: Swords,
    color: 'text-indigo-500 bg-indigo-50 border-indigo-100',
  },
  {
    title: 'Invisible Blank Name',
    href: '/free-fire-invisible-name',
    desc: 'Verified Hangul Filler U+3164 method for blank lobby names.',
    icon: Ghost,
    color: 'text-slate-600 bg-slate-100 border-slate-200',
  },
  {
    title: 'Clan & Guild Tags',
    href: '/free-fire-clan-names',
    desc: 'Esports squad titles, team prefixes, and tournament tags.',
    icon: Users,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    title: 'Attitude Names',
    href: '/free-fire-attitude-names',
    desc: 'Intimidating, savage, and villain titles with fierce badges.',
    icon: Zap,
    color: 'text-rose-500 bg-rose-50 border-rose-100',
  },
];

const FAQS = [
  {
    question: 'What is the character limit for Free Fire nicknames?',
    answer:
      'In current versions of Garena Free Fire and Free Fire MAX, player nicknames are customarily restricted to between 3 and 12 characters. However, because certain complex Unicode symbols and decorative characters require multiple bytes or code units, some symbols may count as more than one character. We recommend keeping your base text around 8 to 10 characters when adding decorative flairs.',
  },
  {
    question: 'How do I add symbols like 亗 and ꧁༺ to my Free Fire name?',
    answer:
      'Simply browse our curated collections above and click the "Copy" button on any name or symbol card. Then launch Free Fire, go to your Profile (top-left corner), tap the yellow notebook/edit icon next to your nickname, paste the copied text into the nickname box, and confirm.',
  },
  {
    question: 'How much does it cost to change your name in Free Fire?',
    answer:
      'A standard name change costs 390 Garena Diamonds. However, you can also purchase a Name Change Card from the Guild Store for 39 Diamonds plus 200 Guild Tokens, or obtain free Name Change Cards during special seasonal top-up events.',
  },
  {
    question: 'Will these stylish names show up properly on all smartphones?',
    answer:
      'Yes, the vast majority of modern Android and iOS devices fully support standard Unicode alphanumeric scripts and common symbols. If a specific rare symbol renders as an empty rectangle (tofu box) on your particular device, try selecting a simpler style or classic brackets like 『 』 and ★.',
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
          Discover hundreds of popular Free Fire nicknames, boss titles, clan tags, and gaming symbols.
          Each name is 1-tap copy ready and optimized for the customary 12-character Free Fire profile limit.
        </p>
      </header>

      {/* Sub-Categories Silo Links */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Explore Free Fire Categories</h2>
          <span className="text-xs text-slate-500 font-medium">Specialized collections</span>
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

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Trending Free Fire Nicknames</h2>
          <span className="text-xs text-slate-500">Tap to copy instantly</span>
        </div>

        <CopyCardGrid
          items={FF_HUB_NAMES}
          categories={FF_HUB_CATEGORIES}
          charLimitWarning={12}
          placeholder="Search Free Fire names..."
        />
      </section>

      {/* Core Generator CTA Card */}
      <GeneratorCtaCard
        title="Want to Style Your Own Free Fire Nickname?"
        description="Type any name into our free generator to preview 1,000+ custom font styles, wings, crowns, and live character counters tailored for Free Fire."
        buttonText="Create Custom Free Fire Name"
      />

      {/* Practical Guide & Compatibility Notes */}
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

        {/* Compatibility Advisory */}
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Important Compatibility Note:</strong> Free Fire customarily limits
            nicknames to 12 characters. In-game character counts, multi-byte Unicode handling, and specific symbol
            rendering are subject to Garena patch updates and device operating system fonts. Always preview your
            name before finalizing payment.
          </div>
        </div>
      </section>

      {/* Topical Internal Links */}
      <RelatedPagesNav currentPageId="free-fire-names" />

      {/* FAQ Section with JSON-LD */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
