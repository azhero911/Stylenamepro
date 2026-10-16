import React from 'react';
import type { Metadata } from 'next';
import { Trophy, ShieldCheck, Target, Crosshair, Award } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { PRO_GAMING_NAMES, PRO_GAMING_CATEGORIES } from '@/data/gaming-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['pro-gaming-names'];

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
    question: 'What defines a professional esports gamer tag?',
    answer:
      'Professional gaming names prioritize clean capitalization, brandability, and sponsor-friendliness. Pro players like s1mple, Faker, Shroud, and TenZ use concise, easy-to-pronounce tags without offensive words or confusing clutter.',
  },
  {
    question: 'Should pro gaming names use all capital letters or lowercase?',
    answer:
      'Both styles are popular: all-caps (e.g. SHROUD, VALIANT) projects dominance and stands out on tournament jerseys, while clean lowercase (like s1mple or v1per) delivers a technical, understated look.',
  },
  {
    question: 'Can I add my clan or esports team tag to these pro names?',
    answer:
      'Yes. Pro players routinely prefix their personal tags with team abbreviations (e.g. NAVI s1mple, T1 Faker, or SEN TenZ). Keep your personal name short so the team prefix fits within game limits.',
  },
  {
    question: 'Do esports leagues enforce restrictions on player nicknames?',
    answer:
      'Yes. Tier-1 leagues like VCT (Valorant Champions Tour), ESL, and ALGS enforce strict rulebooks prohibiting profanity, hate speech, trademarked corporate brands, and misleading tags.',
  },
];

export default function ProGamingNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Gaming', href: '/gaming-name-generator' },
          { label: 'Pro Gaming Names' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
          <Trophy className="w-3.5 h-3.5 text-amber-600" />
          <span>Esports Tournament Handles & Competitive Player Tags</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Pro Gaming Names — Best Esports Gamertags
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Stepping into competitive ranked lobbies, collegiate tournaments, or professional esports scrims requires a player identity that commands respect. Unlike casual gaming handles cluttered with chaotic symbols and excessive numbers, tier-1 professional players (such as Faker, s1mple, TenZ, Shroud, and Scump) favor concise, sharp, and brandable handles. A great pro gaming name is easy for tournament casters to pronounce at high speeds, looks authoritative on a team jersey, and scales gracefully into team sponsorship contracts. Whether you compete in tactical shooters like Counter-Strike 2 and Valorant, battle royales like Apex Legends, PUBG Mobile, and Free Fire, or MOBAs like League of Legends, your gamertag is your long-term competitive signature. Below, we have gathered over 180 clean, tournament-compliant pro gamer tags across aggressive predator, cyber tactical, and stealth leader categories—all tested for maximum readability across Twitch broadcasts and in-game leaderboards.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Pro Gamer Tags Directory</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={PRO_GAMING_NAMES}
          categories={PRO_GAMING_CATEGORIES}
          placeholder="Search pro names (valiant, s1mple, apex)..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Build Your Custom Esports Tournament Tag"
        description="Combine your gamer tag with team brackets, esports badges, and small caps fonts using NameStylePro's live generator."
        buttonText="Generate Pro Gamer Tags"
      />

      {/* Unique Verified Section: Esports Naming Standards */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Verified Standards • October 2026</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            The 4 Rules of Professional Esports Naming
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            How world champions structure their identities for long-term career longevity:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">1. The 1-to-2 Syllable Rule</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Top esports players almost universally select names with 1 or 2 syllables (e.g. <em>NiKo</em>, <em>s1mple</em>, <em>Faker</em>, <em>ZywOo</em>). In high-pressure matches, quick communications take priority—teammates and shoutcasters need to say your name in under 0.3 seconds.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">2. Strategic Leet Restraint</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Novices overuse numbers (e.g. <code>$!mpL3_99</code>), whereas legends use at most one clean substitute (e.g. <em>s1mple</em>, <em>d3v1ce</em>). Restraint ensures your name looks intentional rather than accidental.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">3. Organization Prefix Space</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Always leave 4 to 6 characters of breathing room in games with tight character limits so your organization or clan tag (e.g. <code>SEN TenZ</code> or <code>NAVI b1t</code>) fits within official roster constraints.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">4. Avoid Overused Clichés</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Steer clear of tropes like <em>Xx_Sniper_xX</em>, <em>DarkKnight99</em>, or <em>NoobSlayer</em>. Clean, punchy nouns (e.g. <em>Viper</em>, <em>Ghost</em>, <em>Apex</em>, <em>Titan</em>) deliver far greater psychological weight.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Anatomy of a Tier-1 Esports Nickname
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Lessons from the world&apos;s most successful competitive players:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">1. Caster-Friendly Pronunciation</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Esports casters speak at over 150 words per minute during team fights. Names with clear phonetics ensure commentators can highlight your game-winning plays without stumbling.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">2. Brand & Sponsor Safety</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Esports organizations and brand sponsors look for clean, professional handles. Avoid controversial terms so your identity can scale into professional contracts.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Target className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">3. Subtle Stylization</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Notice how legends like <em>s1mple</em> use exactly one subtle number replacement rather than chaotic l33t speak. Restraint creates an iconic signature.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="pro-gaming-names" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
