import React from 'react';
import type { Metadata } from 'next';
import { Sparkles, ShieldCheck, Moon, Heart, Feather, Coffee } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { AESTHETIC_USERNAMES_LIST, AESTHETIC_USERNAMES_CATEGORIES } from '@/data/social-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['aesthetic-usernames'];

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
    question: 'What makes a username "aesthetic"?',
    answer:
      'Aesthetic usernames focus on imagery, mood, and sensory associations. Instead of relying on random numbers or gamer clichés, aesthetic handles use nature words (willow, moss), celestial phenomena (lunar, twilight), soft textures (velvet, silk), or cozy food/drink items (milktea, peach).',
  },
  {
    question: 'Are these aesthetic usernames valid for Instagram and TikTok handles?',
    answer:
      'Yes. All names in this collection use clean, lowercase letters with standard periods (such as mossy.pebble or lunar.dust), which are 100% permitted by Instagram, TikTok, and Discord account handle validation rules.',
  },
  {
    question: 'What should I do if an aesthetic username is taken?',
    answer:
      'If your favorite handle is registered, add a delicate modifier like "the", "its", or an extra period (e.g. the.mossy.pebble, its.lunar.dust, or mossy..pebble).',
  },
];

export default function AestheticUsernamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Social', href: '/instagram-names' },
          { label: 'Aesthetic Usernames' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Curated Aesthetic Handles for IG, TikTok & Roblox</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Aesthetic Usernames
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Explore curated aesthetic username ideas across cottagecore, celestial, soft angel, and retro vaporwave.
          Clean, creative, and ready to copy for Instagram, TikTok, Roblox, and Discord.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Aesthetic Username Ideas</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={AESTHETIC_USERNAMES_LIST}
          categories={AESTHETIC_USERNAMES_CATEGORIES}
          placeholder="Search aesthetic usernames (willow, lunar, velvet)..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Style Your Username with Fancy Fonts & Symbols"
        description="Found your ideal username? Use NameStylePro to generate cursive scripts, small caps, stars, and floral borders for your bio."
        buttonText="Style Your Bio Name"
      />

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Choose Your Aesthetic Subculture
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Align your username with the aesthetic niche that matches your content:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Feather className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Cottagecore & Earthy</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Emphasizes greenery, foraging, and botanical warmth (e.g. <em>fern.and.flora</em>, <em>willow.whisper</em>). Perfect for art, book, and nature accounts.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Moon className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Celestial & Twilight</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Focuses on nocturnal mystery, starry galaxies, and twilight hues (e.g. <em>lunar.dust</em>, <em>starlit.echo</em>). Popular among poetry and lifestyle creators.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Coffee className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900">Soft & Cozy Pastel</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Delicate, gentle textures like <em>velvet.halo</em>, <em>silk.and.honey</em>, and <em>pearl.essence</em> create a calm, welcoming profile presence.
            </p>
          </div>
        </div>

        <div className="bg-purple-50/80 border border-purple-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-purple-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Handle Safety Tip:</strong> Avoid special characters like hyphens or
            multiple numbers in your primary handle so that friends and followers can tag you seamlessly in comments.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="aesthetic-usernames" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
