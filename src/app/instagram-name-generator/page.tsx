import React from 'react';
import type { Metadata } from 'next';
import { Camera, ShieldCheck, Sparkles, Wand2, Instagram, CheckCircle2 } from 'lucide-react';
import { SEO_REGISTRY } from '@/data/seo-registry';
import { IG_GENERATOR_PRESETS, IG_GENERATOR_CATEGORIES } from '@/data/social-content';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CopyCardGrid } from '@/components/seo/CopyCardGrid';
import { GeneratorCtaCard } from '@/components/seo/GeneratorCtaCard';
import { RelatedPagesNav } from '@/components/seo/RelatedPagesNav';
import { FaqAccordion } from '@/components/seo/FaqAccordion';

const pageData = SEO_REGISTRY['instagram-name-generator'];

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
    question: 'How does the Instagram Name Generator work?',
    answer:
      'Our tool maps your letters into Unicode character blocks such as mathematical bold, cursive, double-struck, circled letters, and small capitals. Simply enter your text to generate hundreds of ready-to-paste styles instantly.',
  },
  {
    question: 'Can I copy these fancy fonts into my Instagram captions and comments?',
    answer:
      'Yes. The generated Unicode characters work across all areas of Instagram — including profile bios, story text overlays, captions, and comments.',
  },
  {
    question: 'Do I need to install any app or font keyboard on my phone?',
    answer:
      'No. Because NameStylePro uses standard Unicode symbols supported by all modern operating systems, you can generate and copy styles directly from your mobile browser without installing third-party keyboard apps.',
  },
];

export default function InstagramNameGeneratorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Social', href: '/instagram-names' },
          { label: 'Instagram Name Generator' },
        ]}
      />

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200">
          <Wand2 className="w-3.5 h-3.5 text-purple-600" />
          <span>Fancy Font & Bio Name Generator for Instagram</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Instagram Name Generator
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Generate stylish profile names, fancy bio text, and aesthetic handles with NameStylePro.
          Copy and paste beautiful fonts directly into your Instagram profile in one click.
        </p>
      </header>

      {/* Curated Copy Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Instagram Bio & Font Styles</h2>
          <span className="text-xs text-slate-500">1-Tap Copy</span>
        </div>

        <CopyCardGrid
          items={IG_GENERATOR_PRESETS}
          categories={IG_GENERATOR_CATEGORIES}
          placeholder="Search Instagram presets..."
        />
      </section>

      {/* Generator CTA */}
      <GeneratorCtaCard
        title="Generate Custom Instagram Bio Text in 1,000+ Styles"
        description="Type any name, quote, or bio tagline into NameStylePro to preview instant cursive, bold small caps, double-struck, and circled fonts."
        buttonText="Try Live Instagram Generator"
      />

      {/* Practical Guide */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            How to Update Your Instagram Name & Bio
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Follow these simple steps on iOS or Android:
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-sm">
          <li className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 font-bold flex items-center justify-center text-xs">
              1
            </span>
            <h3 className="font-bold text-slate-900">Select & Copy Style</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Choose your favorite font or bio preset from above and tap <strong>Copy</strong> to save it to your clipboard.
            </p>
          </li>

          <li className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 font-bold flex items-center justify-center text-xs">
              2
            </span>
            <h3 className="font-bold text-slate-900">Open Edit Profile</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Launch Instagram, navigate to your profile page, and tap the <strong>Edit profile</strong> button below your avatar.
            </p>
          </li>

          <li className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 font-bold flex items-center justify-center text-xs">
              3
            </span>
            <h3 className="font-bold text-slate-900">Paste & Save</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Paste your styled text into the <strong>Name</strong> or <strong>Bio</strong> field and tap the blue checkmark in the top-right corner.
            </p>
          </li>
        </ol>

        <div className="bg-purple-50/80 border border-purple-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-purple-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Mobile Optimization:</strong> Instagram on smartphones has a narrow bio
            viewport. Spacing your bio across 3 to 4 short lines with bullet symbols ensures all text remains visible
            without requiring followers to tap &ldquo;more&rdquo;.
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <RelatedPagesNav currentPageId="instagram-name-generator" />

      {/* FAQ */}
      <FaqAccordion faqs={FAQS} />
    </div>
  );
}
