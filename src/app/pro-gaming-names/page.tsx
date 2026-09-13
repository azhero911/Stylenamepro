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
          Pro Gaming Names
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Upgrade your competitive gaming identity with pro esports handles. Clean, sponsor-friendly,
          and tournament-ready tags designed for ranked matchmaking, leagues, and scrims.
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

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Anatomy of a Tier-1 Esports Nickname
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Lessons from the world's most successful competitive players:
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

        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Esports Compliance:</strong> Major tournament leagues (like VCT, ESL,
            and ALGS) require player handles to match registered ID names. Clean, alphanumeric handles avoid
            rule violations during official roster submissions.
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
