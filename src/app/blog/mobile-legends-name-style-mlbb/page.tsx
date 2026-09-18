import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Clock,
  Calendar,
  User,
  Shield,
  Crown,
  Swords,
  Sparkles,
  Zap,
  HelpCircle,
  CheckCircle2,
  ChevronRight,
  Share2,
  AlertTriangle,
  Award,
  Coins,
  Gem,
  Palette,
  Target,
  FileText,
  Flame,
} from 'lucide-react';
import { MlbbNameGrid } from './MlbbNameGrid';
import { AdSlot } from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Mobile Legends Name Style — 500+ MLBB Names | NameStylePro',
  description:
    'Get 500+ cool Mobile Legends name style ideas for 2026. Mythic glory, squad tags, hero mains, symbols & colored name codes. 1-tap copy & paste for MLBB.',
  keywords: [
    'mobile legends name style',
    'mlbb stylish name',
    'cool ml names copy paste',
    'mlbb name style 2026',
    'mobile legends squad names',
    'mlbb colored name code',
    'aesthetic mlbb names',
    'japanese mlbb names',
    'fanny main name style',
    'chou freestyle name style',
    'mythic glory names mlbb',
  ],
  alternates: {
    canonical: 'https://namestylepro.online/blog/mobile-legends-name-style-mlbb',
  },
  openGraph: {
    title: 'Mobile Legends Name Style — 500+ MLBB Names | NameStylePro',
    description:
      'Get 500+ cool Mobile Legends name style ideas for 2026. Mythic glory, squad tags, hero mains, symbols & colored name codes. 1-tap copy & paste for MLBB.',
    url: 'https://namestylepro.online/blog/mobile-legends-name-style-mlbb',
    type: 'article',
    publishedTime: '2026-03-10T00:00:00.000Z',
    modifiedTime: '2026-09-18T00:00:00.000Z',
    authors: ['Arham Zahid'],
    images: [
      {
        url: 'https://namestylepro.online/images/blog/mlbb-name-style-header-2026.jpg',
        width: 1200,
        height: 675,
        alt: 'Mobile Legends Name Style 500+ Best MLBB Nicknames 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Legends Name Style — 500+ MLBB Names | NameStylePro',
    description:
      'Get 500+ cool Mobile Legends name style ideas for 2026. Mythic glory, squad tags, hero mains, symbols & colored name codes. 1-tap copy & paste for MLBB.',
    images: ['https://namestylepro.online/images/blog/mlbb-name-style-header-2026.jpg'],
  },
};

export default function MobileLegendsNameStylePage() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Mobile Legends Name Style — 500+ Cool MLBB Names with Symbols (2026)',
    description:
      'Find 500+ stylish Mobile Legends name ideas for 2026. Mythic glory, squad tags, hero mains, Japanese kanji symbols, and colored name codes with 1-tap copy.',
    image: 'https://namestylepro.online/images/blog/mlbb-name-style-header-2026.jpg',
    author: {
      '@type': 'Person',
      name: 'Arham Zahid',
      jobTitle: 'Esports Gaming Analyst & Nickname Strategist',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NameStylePro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://namestylepro.online/logo.png',
      },
    },
    datePublished: '2026-03-10',
    dateModified: '2026-09-18',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://namestylepro.online/blog/mobile-legends-name-style-mlbb',
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many characters can a Mobile Legends (MLBB) name have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In Mobile Legends: Bang Bang, your in-game nickname (IGN) must be between 4 and 20 characters long. This includes letters, numbers, spaces, and supported Unicode symbols. Squad names allow up to 16 characters.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you get a colored name in Mobile Legends?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can create colored text in Mobile Legends by using the color code syntax [c][hexcode]YourName. For example, [c][ffd700]MYTHIC turns your text into brilliant metallic gold. While in-match IGN display may mask bracket codes in certain tournament builds, it renders vividly in player bios, status messages, chat channels, and squad mottos.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to change your name in MLBB?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your very first name change in Mobile Legends is 100% free of charge! Subsequent name changes require a Name Change Card, which costs 299 Diamonds in the in-game shop or can be obtained through seasonal recharge events and battle passes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I make a blank or invisible name in Mobile Legends?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To create an invisible nickname in Mobile Legends, copy the Hangul Filler unicode character (U+3164) and paste it into the rename field. Because MLBB interprets the character as valid glyph data without visible pixels, your profile appears completely blank.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you use Japanese Kanji and anime symbols in MLBB nicknames?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Mobile Legends has full native UTF-8 Unicode support for Japanese Kanji characters such as 侍 (Samurai), 鬼 (Demon), 神 (God), and 影 (Shadow), as well as Katakana, Hiragana, and decorative gaming symbols like crowns and lightning bolts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best name style for Chou or Fanny mains?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Popular styles for hero mains highlight the hero mechanics and pro swagger. For Chou, styles like "亗 CHOU FREESTYLE 亗" and "×͜× K.O.CHOU ×͜×" are trending. For Fanny, styles like "꧁⚡ғᴀɴɴʏ.ᴄᴀʙʟᴇ⚡꧂" and "★ CABLE GOD ★" are regional favorites in MPL circuits.',
        },
      },
    ],
  };

  const colorCodes = [
    { name: 'Metallic Gold', hex: 'ffd700', bg: '#ffd700', text: '#000000', tag: 'Mythic Glory Favorite' },
    { name: 'Crimson Blood', hex: 'ff0000', bg: '#ff0000', text: '#ffffff', tag: 'Aggressive Assassin' },
    { name: 'Electric Cyan', hex: '00ffff', bg: '#00ffff', text: '#000000', tag: 'Futuristic Glow' },
    { name: 'Neon Magenta', hex: 'ff00ff', bg: '#ff00ff', text: '#ffffff', tag: 'Aesthetic Pop' },
    { name: 'Acid Lime', hex: '00ff00', bg: '#00ff00', text: '#000000', tag: 'Toxic Viper' },
    { name: 'Magma Orange', hex: 'ff7f00', bg: '#ff7f00', text: '#ffffff', tag: 'Fire Burst' },
    { name: 'Deep Violet', hex: '9400d3', bg: '#9400d3', text: '#ffffff', tag: 'Abyssal Lord' },
    { name: 'Pure Snow White', hex: 'ffffff', bg: '#ffffff', text: '#000000', tag: 'Minimalist Clean' },
    { name: 'Dodger Ice Blue', hex: '1e90ff', bg: '#1e90ff', text: '#ffffff', tag: 'Frost Mage' },
    { name: 'Hot Blossom Pink', hex: 'ff1493', bg: '#ff1493', text: '#ffffff', tag: 'Cute & Deadly' },
    { name: 'Lightning Yellow', hex: 'ffff00', bg: '#ffff00', text: '#000000', tag: 'Speed & Burst' },
    { name: 'Toxic Chartreuse', hex: '7fff00', bg: '#7fff00', text: '#000000', tag: 'High-Tempo Carry' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-10">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm text-slate-500">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold truncate">
            Mobile Legends Name Style MLBB
          </span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-100 text-indigo-800 uppercase tracking-wider">
              <Swords className="w-3.5 h-3.5" />
              MLBB Season 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5" />
              500+ Copy & Paste
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
              Mythic Glory Verified
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Mobile Legends Name Style — 500+ Cool MLBB Names with Symbols (2026)
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Dominate the Land of Dawn with the ultimate collection of stylish Mobile Legends (MLBB) nicknames. Featuring Mythic Glory titles, hero mains (Fanny, Chou, Gusion), Japanese Kanji, squad tags, and colored hex codes.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs md:text-sm text-slate-500">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-indigo-600" />
                <span className="font-semibold text-slate-700">Arham Zahid</span>
                <span className="text-slate-400">(Esports Nickname Strategist)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <time dateTime="2026-09-18">Updated September 2026</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>9 min read</span>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
            >
              Open Live Font Generator →
            </Link>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-950">
          <Image
            src="/images/blog/mlbb-name-style-header-2026.jpg"
            alt="Mobile Legends Name Style 500+ Best MLBB Nicknames 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {/* Top Ad Slot */}
        <AdSlot slotType="banner" />

        {/* Table of Contents Box */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 font-black text-slate-900 text-base">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>Table of Contents — Quick Jump</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
            <a href="#mlbb-rules" className="hover:text-indigo-600 flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
              1. MLBB Official Naming Rules & Limits
            </a>
            <a href="#mlbb-names-explorer" className="hover:text-indigo-600 flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
              2. 500+ MLBB Stylish Name Library (Copy & Paste)
            </a>
            <a href="#colored-names-guide" className="hover:text-indigo-600 flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
              3. Secret MLBB Colored Name Codes ([c][hex])
            </a>
            <a href="#hero-mains-guide" className="hover:text-indigo-600 flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
              4. Hero Mains & Role Identity Styles
            </a>
            <a href="#how-to-rename" className="hover:text-indigo-600 flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
              5. Step-by-Step Guide: How to Change IGN
            </a>
            <a href="#squad-naming-guide" className="hover:text-indigo-600 flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
              6. Squad Names & Esports Clan Prefixes
            </a>
            <a href="#faqs" className="hover:text-indigo-600 flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
              7. Frequently Asked Questions (FAQs)
            </a>
            <a href="#related-tools" className="hover:text-indigo-600 flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
              8. Related Gaming Name Tools
            </a>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base md:text-lg leading-relaxed">
          <p>
            In the high-octane battle arena of <strong>Mobile Legends: Bang Bang (MLBB)</strong>, your in-game name (IGN) is your warrior badge. When you lock into draft pick, execute a flawless cable triple-kill with Fanny, or pull off an insane Chou flick kick, your name flashes across the top banner of every player&apos;s screen.
          </p>
          <p>
            A generic name like <em>Player12345</em> gets forgotten instantly. But an intimidating, beautifully styled handle framed with aesthetic Japanese Kanji (侍, 鬼, 神), esports wings (꧁༺ ༻꧂), or attitude symbols (亗, ×͜×, 〆) strikes psychological respect into opponents before the minions even spawn.
          </p>
          <p>
            Whether you are pushing for <strong>Mythic Glory</strong>, commanding your 5-man tournament squad, or flexing your signature hero main, this comprehensive guide gives you over 500 copy-and-paste ready names, official rule breakdowns, and the secret color hex formatting trick used by pro players across Indonesia, Philippines, Malaysia, and Pakistan.
          </p>
        </section>

        {/* Section 1: MLBB Official Naming Rules & Character Constraints */}
        <section id="mlbb-rules" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <Shield className="w-7 h-7 text-indigo-600" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                1. Mobile Legends Naming Rules You Must Know
              </h2>
              <p className="text-xs md:text-sm text-slate-500">
                Avoid wasting diamonds by verifying official Moonton character limits and formatting rules
              </p>
            </div>
          </div>

          {/* Infographic Image */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
            <Image
              src="/images/blog/mlbb-naming-rules-guide-2026.jpg"
              alt="Mobile Legends Naming Rules Infographic Character Limits and Card Costs"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-indigo-600" />
                Player IGN Length
              </div>
              <div className="text-2xl font-black text-indigo-700">4 — 20 Chars</div>
              <p className="text-xs text-slate-500 mt-2">
                Includes letters, numbers, spaces, and Unicode symbols.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-emerald-600" />
                1st Rename
              </div>
              <div className="text-2xl font-black text-emerald-600">100% Free</div>
              <p className="text-xs text-slate-500 mt-2">
                Every newly created MLBB account receives 1 free name change.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Gem className="w-4 h-4 text-cyan-600" />
                Name Change Card
              </div>
              <div className="text-2xl font-black text-cyan-600">299 Diamonds</div>
              <p className="text-xs text-slate-500 mt-2">
                Available in shop, recharge events, or Season Pass rewards.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-amber-600" />
                Squad Tag Limit
              </div>
              <div className="text-2xl font-black text-amber-600">Up to 16 Chars</div>
              <p className="text-xs text-slate-500 mt-2">
                Squad abbreviations (2-6 chars) appear before member names.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Pro Tip: How to Bypass &quot;Name Already Exists&quot; Errors</span>
            </div>
            <p>
              Because Mobile Legends has over 1 billion downloads, popular names like <em>King</em>, <em>Ghost</em>, or <em>Shadow</em> are heavily taken. You don&apos;t have to settle for ugly random numbers like <em>King99281</em>. Instead, insert subtle Unicode spaces (<code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">U+3164</code>), stylish brackets (<code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">×͜×</code>), or small dots (<code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">•</code>) to create an identical-looking unique handle!
            </p>
          </div>
        </section>

        {/* Section 2: Interactive MLBB Name Explorer */}
        <section id="mlbb-names-explorer" className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                2. 500+ MLBB Stylish Name Library (1-Tap Copy)
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-0.5">
                Browse by category or search your hero main. All handles are tested for Mobile Legends compatibility.
              </p>
            </div>
          </div>

          <MlbbNameGrid />
        </section>

        {/* Section 3: The Secret Colored Name Code Guide */}
        <section id="colored-names-guide" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <Palette className="w-7 h-7 text-indigo-600" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                3. The Secret MLBB Colored Name Guide ([c][hexcode])
              </h2>
              <p className="text-xs md:text-sm text-slate-500">
                Turn your profile bio, status, and squad slogans into vibrant glowing colors
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base leading-relaxed">
            <p>
              Have you ever inspected a top global player&apos;s profile and noticed their text rendered in glowing gold, electric cyan, or blood red? That is done using <strong>Hexadecimal Color Codes</strong> supported by Mobile Legends&apos; internal rich-text formatting parser.
            </p>
            <p>
              The syntax follows this exact formula:
            </p>
            <div className="bg-slate-950 text-white p-4 rounded-2xl font-mono text-sm sm:text-base flex items-center justify-between overflow-x-auto">
              <code>[c][hexcode]YourNickname</code>
              <span className="text-xs text-indigo-400 font-sans font-bold bg-indigo-950 px-2 py-1 rounded-md">
                Syntax Pattern
              </span>
            </div>
            <p>
              For example, if you want your name to show in <strong>Metallic Gold</strong>, you type:
            </p>
            <div className="bg-slate-900 text-amber-300 p-3.5 rounded-xl font-mono text-sm border border-amber-500/30">
              [c][ffd700]MYTHIC
            </div>
            <p className="text-sm text-slate-500">
              <strong>Where does this render?</strong> While Moonton occasionally sanitizes bracket codes inside ranked match loading screens, these color codes render vividly in your <strong>Player Bio</strong>, <strong>Profile Status</strong>, <strong>World & Clan Chat Channels</strong>, and <strong>Squad Motto / Announcements</strong>!
            </p>
          </div>

          {/* Color Code Palette Grid */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Top 12 Most Popular MLBB Color Codes</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {colorCodes.map((c) => (
                <div
                  key={c.hex}
                  className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 transition-all shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full border border-slate-300 shadow-inner shrink-0"
                      style={{ backgroundColor: c.bg }}
                    />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{c.name}</div>
                      <div className="font-mono text-xs text-slate-500">[c][{c.hex}]</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {c.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Signature Hero Mains & Role Identity */}
        <section id="hero-mains-guide" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <Target className="w-7 h-7 text-indigo-600" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                4. Hero Mains & Role Identity Styles
              </h2>
              <p className="text-xs md:text-sm text-slate-500">
                Signal your master mechanics and lane specialization in the draft pick phase
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-base">
                <Zap className="w-5 h-5" />
                <span>Assassin & Fast-Hand Specialists</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                If you main Fanny, Ling, Gusion, or Lancelot, your name should reflect speed, blade precision, and mechanical mastery.
              </p>
              <ul className="text-xs font-mono space-y-1.5 text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <li>• ꧁⚡ғᴀɴɴʏ.ᴄᴀʙʟᴇ⚡꧂ (Fanny Main)</li>
                <li>• ꧁🗡️ʟɪɴɢ.ᴡᴀʟʟ🗡️꧂ (Ling Main)</li>
                <li>• ×͜× ɢᴜsɪᴏɴ.ᴅᴀɢɢᴇʀ ×͜× (Gusion Main)</li>
                <li>• 亗 LANCELOT.BURST 亗 (Lancelot Main)</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-base">
                <Flame className="w-5 h-5" />
                <span>Fighter & Chou Freestyle Kings</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chou is the ultimate freestyle showstopper in MLBB history. Paired with Paquito, Yu Zhong, and Arlott, fighter handles radiate unstoppable aggression.
              </p>
              <ul className="text-xs font-mono space-y-1.5 text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <li>• 亗 CHOU FREESTYLE 亗 (Classic Freestyle)</li>
                <li>• 〆PAQUITO.K.O〆 (Boxing Dominance)</li>
                <li>• ꧁YU ZHONG.DRAGON꧂ (Black Dragon)</li>
                <li>• ★ ARLOTT.EYE ★ (Demon Hunter)</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-base">
                <Shield className="w-5 h-5" />
                <span>Roamers & Tank Setters</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Franco hook snipers, Tigreal flick-ult masters, and Khufra ball initiators carry their team through supreme macro control.
              </p>
              <ul className="text-xs font-mono space-y-1.5 text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <li>• ⚓ ғʀᴀɴᴄᴏ.ʜᴏᴏᴋ ⚓ (Iron Hook God)</li>
                <li>• 亗 TIGREAL.SET 亗 (5-Man Ultimate)</li>
                <li>• ꧁KHUFRA.BOUNCE꧂ (Bouncing Ball)</li>
                <li>• 🌸 ᴀɴɢᴇʟᴀ.ᴜʟᴛ 🌸 (Pocket Support)</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-cyan-600 font-bold text-base">
                <Crown className="w-5 h-5" />
                <span>Gold Lane Marksmen & Late Game DPS</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Late game belongs to the marksman. High-damage carriers playing Beatrix, Claude, Wanwan, or Lesley command late-game wipes.
              </p>
              <ul className="text-xs font-mono space-y-1.5 text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <li>• 〆ʙᴇᴀᴛʀɪx.sɴɪᴘᴇ〆 (Wesker & Renner)</li>
                <li>• ★ WANWAN.DANCE ★ (Crossbow Tiger)</li>
                <li>• 亗 CLAUDE.BURST 亗 (Blazing Duet)</li>
                <li>• ꧁⚡LESLEY.ONEHIT⚡꧂ (Critical Hit)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Step-by-Step Tutorial: How to Change Your Name */}
        <section id="how-to-rename" className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-indigo-600" />
            <span>5. How to Change Your Name in Mobile Legends (Step-by-Step)</span>
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                1
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Tap Your Avatar in the Top-Left Corner</h3>
                <p className="text-sm text-slate-600 mt-1">
                  From the MLBB main lobby screen, tap your avatar profile picture in the top-left corner to access your Player Information Card.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                2
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Tap Your Nickname or Pencil Icon</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Beside your current IGN, tap the small pencil edit icon or directly tap your name. A popup dialog titled <strong>Change Name</strong> will appear.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                3
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Paste Your Chosen Name</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Choose a stylish handle from our library above, tap <strong>Copy</strong>, then long-press inside the input box in Mobile Legends and tap <strong>Paste</strong>.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                4
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Confirm & Finalize</h3>
                <p className="text-sm text-slate-600 mt-1">
                  If this is your first rename, it will consume your <strong>Free Rename token</strong>. If you have previously renamed, it will prompt for 1 <strong>Name Change Card</strong> or 299 Diamonds. Confirm the action to lock in your handle!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Squad Naming & Tag Rules */}
        <section id="squad-naming-guide" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <Crown className="w-7 h-7 text-amber-500" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                6. Squad Naming & Esports Clan Prefixes
              </h2>
              <p className="text-xs md:text-sm text-slate-500">
                Build a unified brand for your 5-man ranked team inspired by international MPL giants
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base leading-relaxed">
            <p>
              Playing in a 5-man squad with matching tags instantly communicates coordination and discipline. Professional MPL organizations like <strong>EVOS</strong>, <strong>RRQ</strong>, <strong>ONIC</strong>, <strong>ECHO</strong>, and <strong>AP Bren</strong> utilize clean tag abbreviations that precede each player&apos;s personal moniker.
            </p>
            <p>
              When creating an MLBB squad:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Squad Name:</strong> Can be up to 16 characters long.</li>
              <li><strong>Squad Tag (Abbreviation):</strong> 2 to 6 characters that appear before member names in bracket formatting (e.g. <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">[EVOS]</code>).</li>
              <li><strong>Squad Creation Fee:</strong> Costs 199 Diamonds. Members can join upon leader approval.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-indigo-950 text-base">Need a custom clan or guild name?</h4>
              <p className="text-xs text-indigo-800 mt-0.5">
                Use our dedicated Clan Name Maker to generate matching tags for your entire 5-man roster.
              </p>
            </div>
            <Link
              href="/clan-names"
              className="shrink-0 px-4 py-2.5 rounded-xl font-bold text-xs bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-xs"
            >
              Open Clan Maker →
            </Link>
          </div>
        </section>

        {/* Middle Ad Slot */}
        <AdSlot slotType="responsive" />

        {/* Section 7: Frequently Asked Questions */}
        <section id="faqs" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <HelpCircle className="w-7 h-7 text-indigo-600" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                7. Frequently Asked Questions (MLBB Naming)
              </h2>
              <p className="text-xs md:text-sm text-slate-500">
                Direct answers to the most common questions regarding Mobile Legends name customization
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {jsonLdFaq.mainEntity.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2 shadow-xs"
              >
                <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                  <span className="text-indigo-600 font-mono text-sm shrink-0 mt-0.5">Q{idx + 1}.</span>
                  <span>{item.name}</span>
                </h3>
                <p className="text-sm text-slate-600 pl-6 leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Related Gaming Name Tools */}
        <section id="related-tools" className="space-y-6 pt-6 border-t border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Explore More Gaming Nickname Tools & Guides
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Check out our complete suite of gaming nickname generators across popular titles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link
              href="/"
              className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-bold text-slate-900 text-sm">Stylish Name Generator #1</div>
                <p className="text-xs text-slate-500 mt-1">
                  Convert any text into 1,000+ Unicode fonts and aesthetic styles.
                </p>
              </div>
              <span className="text-xs font-bold text-indigo-600 mt-3 inline-flex items-center gap-1">
                Open Generator →
              </span>
            </Link>

            <Link
              href="/free-fire-names"
              className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-bold text-slate-900 text-sm">Free Fire Names Generator</div>
                <p className="text-xs text-slate-500 mt-1">
                  12-character validated FF nicknames with crowns and wings.
                </p>
              </div>
              <span className="text-xs font-bold text-indigo-600 mt-3 inline-flex items-center gap-1">
                Free Fire Tool →
              </span>
            </Link>

            <Link
              href="/pubg-names"
              className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-bold text-slate-900 text-sm">PUBG & BGMI Names</div>
                <p className="text-xs text-slate-500 mt-1">
                  Conqueror tags, clan badges, and high-KD esports handles.
                </p>
              </div>
              <span className="text-xs font-bold text-indigo-600 mt-3 inline-flex items-center gap-1">
                PUBG Tool →
              </span>
            </Link>

            <Link
              href="/clan-names"
              className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-bold text-slate-900 text-sm">Clan & Guild Name Maker</div>
                <p className="text-xs text-slate-500 mt-1">
                  Create coordinated squad names and matching tournament tags.
                </p>
              </div>
              <span className="text-xs font-bold text-indigo-600 mt-3 inline-flex items-center gap-1">
                Clan Tool →
              </span>
            </Link>

            <Link
              href="/invisible-name"
              className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-bold text-slate-900 text-sm">Invisible Name Generator</div>
                <p className="text-xs text-slate-500 mt-1">
                  Generate blank and hidden Unicode characters for MLBB, FF, and PUBG.
                </p>
              </div>
              <span className="text-xs font-bold text-indigo-600 mt-3 inline-flex items-center gap-1">
                Invisible Tool →
              </span>
            </Link>

            <Link
              href="/anime-names"
              className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-bold text-slate-900 text-sm">Anime Names & Kanji</div>
                <p className="text-xs text-slate-500 mt-1">
                  Japanese Kanji, Katakana, and anime protagonist nickname designs.
                </p>
              </div>
              <span className="text-xs font-bold text-indigo-600 mt-3 inline-flex items-center gap-1">
                Anime Tool →
              </span>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
