import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Users, Trophy, Flag, Sparkles } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { FF_CLAN_NAMES, FF_CLAN_CATEGORIES } from '@/data/free-fire-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['free-fire-clan-names'];

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

const FAQS = [
  {
    question: 'What is the character limit for Free Fire guild and clan names?',
    answer:
      'Garena Free Fire requires guild names to be between 3 and 12 characters in length (including spaces and symbols). Because guild titles represent your entire squad in tournaments, keeping your title punchy and within the 12-character limit is essential.',
  },
  {
    question: 'How much does it cost to create or rename a Free Fire guild?',
    answer:
      'Creating a new guild in Free Fire costs 5,000 Gold or 1,000 Diamonds. If you wish to rename an existing guild later, it costs 500 Diamonds, and only the Guild Leader has permission to change the title (verified October 2026).',
  },
  {
    question: 'How do clan members coordinate their individual names with a squad tag?',
    answer:
      'Squad members often adopt a common 2-to-4 character prefix separated by a bullet, vertical bar, or bracket. For example, members of the HYDRA squad might use 『HD』VIPER, 『HD』SHADOW, and 『HD』SNIPER, leaving room within the individual 12-character limit.',
  },
  {
    question: 'Can clan names contain special symbols like 亗 and ☬?',
    answer:
      'Yes, Free Fire supports decorative Unicode symbols in guild names as long as the total length remains within the game\'s 12-character boundary.',
  },
];

export default function FreeFireClanNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Free Fire', href: '/free-fire-names' },
          { label: 'Free Fire Clan Names' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200">
          <Users className="w-3.5 h-3.5 text-purple-600" />
          <span>Esports Squad & Guild Name Ideas for Free Fire</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Free Fire Clan Names — Cool Guild Tags with Symbols
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Building a dominant squad in Garena Free Fire and Free Fire MAX starts with a legendary guild identity. Your guild name and squad tag represent your team across regional leaderboards, guild tournaments, and custom scrim lobbies. When your squad wipes an opposing team, having a unified clan prefix like 『HD』, 亗, or ⚡ creates instant intimidation. Casual guild names often get overlooked, but a sharp, esports-ready title combined with clean Unicode symbols cements your team&apos;s reputation. However, Garena enforces specific constraints on Free Fire guilds. Guild names are strictly limited to between 3 and 12 characters. In addition, individual squad members who wear the clan tag in their personal handle must balance their own name and the guild prefix within Free Fire&apos;s 12-character nickname ceiling. We have curated over 200 copy-ready clan names across aggressive, royal, esports, and dark themes below—every design is pre-measured to ensure it fits Garena&apos;s official rules without wasting Gold or Diamonds.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Clan & Guild Name Ideas (≤12 Chars)</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={FF_CLAN_NAMES}
          categories={FF_CLAN_CATEGORIES}
          charLimitWarning={12}
          placeholder="Search clan names (titans, hydra, apex)..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Want to Generate Custom Squad Tags?"
        description="Try NameStylePro's generator to create matching guild tags and player nicknames for your entire squad with unified brackets and fonts."
        buttonText="Generate Clan Tags"
      />

      {/* Unique Verified Section: Guild Tag Rules & Team Coordination */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
            <span>Verified Rules • October 2026</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Free Fire Guild Tag Rules & Coordination Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Important parameters to know before registering or rebranding your squad:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Registration & Rename Costs</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Registering a brand new guild in Free Fire costs <strong>5,000 Gold</strong> or <strong>1,000 Diamonds</strong>. Renaming an existing guild later costs <strong>500 Diamonds</strong>, and can only be executed by the designated Guild Leader (source: Garena Free Fire Guild FAQ, verified Oct 2026).
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Guild Name Length: 3 to 12 Characters</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Official guild titles must be between 3 and 12 characters long. All characters—including spaces, brackets (『 』, 【 】), and symbols (亗, ☬)—count toward this limit.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">The Clan Prefix Formula</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To look professional, squads choose a 2-to-4 character prefix. For instance, if your guild is <em>TITANS</em>, your team prefix could be <code>『TT』</code> (4 chars). When a squad member sets their individual nickname, they have 8 characters remaining (e.g. <code>『TT』VIPER</code> = 9/12 chars).
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Pro Tournament Best Practices</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Official esports tournaments (like FFWS) ban profane, offensive, or copyright-infringing names. Stick to original mythological titles (TITANS, VALKYRIE, HYDRA) or tactical symbols to ensure eligibility.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Pick the Perfect Free Fire Guild Name
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Consider these tips before spending Gold or Diamonds to register your squad:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Trophy className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">1. Keep It Short & Memorable</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Top tournament squads use 1 or 2 powerful words (like HYDRA, TITANS, or APEX). Short names
              look clean on leaderboards and are easy for tournament casters to shout.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Flag className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">2. Plan a 2–3 Letter Prefix</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Make sure your clan name has a recognizable acronym (such as 『HD』 or [TX]) that all members can
              comfortably fit in front of their individual nicknames.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">3. Check the 12-Char Limit</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Because guild creation costs 5,000 Gold or 1,000 Diamonds, double-check that your entire title
              fits neatly inside the customary 3–12 character boundary.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="free-fire-clan-names" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
