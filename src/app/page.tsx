'use client';

import React, { useState, useMemo } from 'react';
import { Sparkles, Zap, HelpCircle, Check, ShieldCheck, Flame, Smartphone } from 'lucide-react';
import { ToolCategory } from '@/types';
import { generateAllStyles, computeCategoryTabs } from '@/lib/unicode/generator';
import { NameInput } from '@/components/ui/NameInput';
import { CategoryTabs } from '@/components/ui/CategoryTabs';
import { StyleGrid } from '@/components/ui/StyleGrid';
import { AdSlot } from '@/components/ui/AdSlot';
import { FaqJsonLd } from '@/components/seo/JsonLd';

const FAQ_ITEMS = [
  {
    question: 'How do I copy and use a stylish name in Free Fire or PUBG?',
    answer:
      'Simply type your name into NameStylePro, browse through the generated designs, and tap the "Copy" button. Open your game (Free Fire, PUBG Mobile, or BGMI), go to your profile, tap Edit Nickname, paste the copied text, and confirm.',
  },
  {
    question: 'Why do some symbols not show up in my game?',
    answer:
      'All our styles use Unicode characters supported by modern game engines. However, older game versions or specific character limits (Free Fire max 12 characters, PUBG max 16 characters) may truncate names. Use our built-in real-time FF and PUBG length indicators to ensure 100% compatibility.',
  },
  {
    question: 'Is NameStylePro completely free to use?',
    answer:
      'Yes, 100% free with no registration, no app download, and zero limits. All conversions happen directly in your browser using client-side JavaScript.',
  },
  {
    question: 'How does the invisible blank name trick work?',
    answer:
      'Our tool provides special invisible Unicode characters like Hangul Filler (U+3164) and Braille Blanks (U+2800). The game recognizes these as legitimate letters while rendering zero visible pixels, making your nickname completely invisible in match kill feeds.',
  },
  {
    question: 'Can I save my favorite stylish names?',
    answer:
      'Yes! Tap the heart icon next to any generated style to save it to your Favorites drawer. Your saved names are stored securely in your browser and automatically sync across open tabs.',
  },
];

export default function HomePage() {
  const [name, setName] = useState('YourName');
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory>('all');

  // Compute all styles instantaneously
  const allStyles = useMemo(() => {
    return generateAllStyles(name);
  }, [name]);

  // Compute category counts for tab badges
  const categoryTabs = useMemo(() => {
    return computeCategoryTabs(allStyles);
  }, [allStyles]);

  // Filter styles by selected category
  const filteredStyles = useMemo(() => {
    if (selectedCategory === 'all') return allStyles;
    return allStyles.filter((item) => item.category === selectedCategory);
  }, [allStyles, selectedCategory]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-8">
      {/* Hero Section Matching User's Mockup */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        {/* Instant generation pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-purple-50 text-brand-700 border border-purple-200/80 shadow-xs">
          <Zap className="w-4 h-4 text-brand-600 fill-brand-600 shrink-0" />
          <span>1000+ styles generated instantly</span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Stylish name generator for{' '}
          <span className="bg-gradient-to-r from-brand-600 to-purple-800 bg-clip-text text-transparent">
            Free Fire, PUBG
          </span>{' '}
          & socials
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-medium">
          Type your name — get 500+ Unicode styles, copy with one tap.
        </p>

        {/* Name Input Bar with Random & Clear buttons & Limits */}
        <div className="pt-2">
          <NameInput value={name} onChange={setName} />
        </div>
      </section>

      {/* CLS-Protected Ad Slot */}
      <AdSlot slotType="banner" />

      {/* Category Tabs Bar */}
      <section className="space-y-4">
        <CategoryTabs
          tabs={categoryTabs}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Generated Styles Grid with Zoom and Layout Controls */}
        <StyleGrid styles={filteredStyles} />
      </section>

      {/* Mid-Content Ad Slot */}
      <AdSlot slotType="rectangle" />

      {/* Educational & SEO Content Section */}
      <section className="pt-8 border-t border-slate-200 space-y-8 text-slate-700 leading-relaxed">
        <div className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            How to Use the Free Fire & PUBG Stylish Name Generator
          </h2>
          <p className="text-base text-slate-600">
            <strong>NameStylePro</strong> turns any standard username into hundreds of eye-catching
            Unicode font variations, esports clan tags, and aesthetic symbol borders. Our tool runs
            100% client-side in your mobile or desktop browser with zero latency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Type Your Name</h3>
              <p className="text-sm text-slate-600">
                Enter your nickname or tap <strong>Random</strong> to generate popular gaming handles like Shadow, Viper, or Badshah.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Check Game Limits</h3>
              <p className="text-sm text-slate-600">
                Monitor the real-time <strong>FF: 0/12</strong> and <strong>PUBG: 0/16</strong> pills to make sure your name fits in-game limits.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-lg">1-Tap Copy & Paste</h3>
              <p className="text-sm text-slate-600">
                Tap <strong>Copy</strong> to immediately put the styled text on your clipboard. Paste it directly into Free Fire, PUBG, or WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section with FAQPage Schema */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-brand-600 shrink-0" />
            <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl border border-slate-200 p-5 open:ring-2 open:ring-brand-200 transition-all cursor-pointer"
              >
                <summary className="flex items-center justify-between font-bold text-slate-900 text-base md:text-lg select-none list-none">
                  <span>{faq.question}</span>
                  <span className="text-brand-600 text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <FaqJsonLd faqs={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
}
