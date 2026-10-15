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
  twitter: {
    card: 'summary_large_image',
    title: pageData.title,
    description: pageData.description,
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
    question: 'Why does fancy font text break Instagram and TikTok search?',
    answer:
      'Instagram and TikTok search engines index standard ASCII characters. When you put Unicode Mathematical Alphanumeric fonts (like 𝒱𝑒𝓁𝓋𝑒𝓉) into your handle, search algorithms do not transliterate them to normal letters, meaning users searching for "velvet" will not find your profile. Always keep your handle clean and put fancy fonts in your Bio.',
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
          Aesthetic Usernames — Cute Bio Ideas & Fonts
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          An aesthetic username is more than just a login handle—it is the digital cornerstone of your aesthetic profile on Instagram, TikTok, Pinterest, Roblox, and Discord. While traditional gaming handles focus on aggressive combat symbols and tournament tags, aesthetic names lean into atmosphere, soft imagery, and sensory emotion. Popular niches like cottagecore, fairycore, celestial twilight, Y2K nostalgic, and dark academia use botanical nouns (moss, willow, fern), cosmic elements (lunar, starlight, solaris), or gentle textures (velvet, silk, honey) to build an inviting personal brand. However, choosing an aesthetic username requires knowing where Unicode styling works versus where it breaks search functionality. Account handles (@usernames) on Instagram and TikTok strictly require standard ASCII letters, numbers, periods, and underscores to remain searchable and taggable. In contrast, your display name and bio header support full mathematical alphanumeric fonts like cursive scripts (𝒱𝑒𝓁𝓋𝑒𝓉), small capitals (ᴠᴇʟᴠᴇᴛ), and delicate stars. Explore our categorized collections and Unicode compatibility guide below to craft an aesthetic profile in seconds.
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

      {/* Unique Verified Section: Unicode Search Impact & Platform Guidelines */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
            <span>Platform Guidelines • October 2026</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Handle vs. Bio Fonts: What Breaks Search?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Understand how Instagram, TikTok, and Discord process stylish characters:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">1. Primary Handles (@username)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Instagram handles allow only lowercase letters (a-z), numbers (0-9), periods, and underscores (max 30 characters). TikTok allows up to 24 characters with letters, numbers, underscores, and periods. Mathematical Unicode characters are rejected automatically.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">2. Search Indexing Warning</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If you put fancy fonts like cursive <code>𝒱𝑒𝓁𝓋𝑒𝓉</code> into your profile name field, users searching for &quot;velvet&quot; in Instagram Explore will often <strong>not find your profile</strong>. The search index treats mathematical code points as unique scientific symbols, not English letters.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">3. Best Practice: The Hybrid Formula</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Keep your account handle clean ASCII (e.g. <code>@velvet.moon</code>) so friends can tag you seamlessly in comments and stories, and place your stylized cursive or small caps typography in your <strong>Bio / Profile Name</strong>.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">4. Screen Reader Accessibility</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Screen readers read mathematical alphanumeric symbols literally (e.g. &quot;Mathematical Script Capital V&quot;). Using subtle aesthetic punctuation like periods and gentle frames maintains accessibility.
            </p>
          </div>
        </div>
      </section>

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
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="aesthetic-usernames" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
