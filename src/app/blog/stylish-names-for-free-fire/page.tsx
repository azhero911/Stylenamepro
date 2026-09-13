import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  Flame,
  Swords,
  Crown,
  Sparkles,
  Shield,
  Zap,
  HelpCircle,
  CheckCircle2,
  ChevronRight,
  Share2,
} from "lucide-react";
import { BlogNameGrid } from "./BlogNameGrid";
import { InvisibleNameBox } from "./InvisibleNameBox";
import { AdSlot } from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "1000+ Stylish Names for Free Fire 2026 — Copy & Paste",
  description:
    "Get 1000+ stylish names for Free Fire 2026. Boys, girls, attitude, anime, guild, and invisible names — all copy and paste ready. Updated for the latest FF season.",
  keywords: [
    "stylish names for free fire",
    "free fire stylish name copy paste",
    "free fire name style 2026",
    "ff name for boys",
    "ff name for girls",
    "free fire attitude name",
    "free fire anime name",
    "free fire guild name",
    "invisible name free fire",
    "free fire nickname generator",
  ],
  alternates: {
    canonical: "https://namestylepro.online/blog/stylish-names-for-free-fire",
  },
  openGraph: {
    title: "1000+ Stylish Names for Free Fire 2026 — Copy & Paste",
    description:
      "Get 1000+ stylish names for Free Fire 2026. Boys, girls, attitude, anime, guild, and invisible names — all copy and paste ready. Updated for the latest FF season.",
    url: "https://namestylepro.online/blog/stylish-names-for-free-fire",
    type: "article",
    publishedTime: "2026-09-01T00:00:00.000Z",
    modifiedTime: "2026-09-13T00:00:00.000Z",
    authors: ["Arham Zahid"],
    images: [
      {
        url: "https://namestylepro.online/images/blog/ff-stylish-names-header-2026.jpg",
        width: 1200,
        height: 675,
        alt: "1000+ Best Stylish Names for Free Fire 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1000+ Stylish Names for Free Fire 2026 — Copy & Paste",
    description:
      "Get 1000+ stylish names for Free Fire 2026. Boys, girls, attitude, anime, guild, and invisible names — all copy and paste ready.",
    images: ["https://namestylepro.online/images/blog/ff-stylish-names-header-2026.jpg"],
  },
};

// Raw names data grouped by categories
const BOYS_NAMES = [
  "꧁☬ᴅᴀʀᴋ☬꧂", "亗ᴋɪʟʟᴇʀ亗", "★彡BEAST彡★", "꧁༒DEVIL༒꧂", "☬SAVAGE☬", "𝕯𝖆𝖗𝖐𝕭𝖔𝖞",
  "★DANGER★", "꧁⚡STORM⚡꧂", "亗HUNTER亗", "彡GHOST彡", "꧁☠REAPER☠꧂", "★𝕱𝖊𝖆𝖗★",
  "亗SHADOW亗", "꧁༒DEMON༒꧂", "☬WARRIOR☬", "𝕶𝖎𝖑𝖑𝖊𝖗", "★PREDATOR★", "꧁⚡BLAZE⚡꧂",
  "亗VENOM亗", "彡PHANTOM彡", "꧁☬SNIPER☬꧂", "★WARLORD★", "亗BULLET亗", "꧁༒SKULL༒꧂",
  "☬STRIKER☬", "𝕯𝖊𝖒𝖔𝖓", "★SLAYER★", "꧁⚡RAZOR⚡꧂", "亗VIPER亗", "彡WRAITH彡"
];

const GIRLS_NAMES = [
  "꧁✿QUEEN✿꧂", "★彡𝓢𝓪𝓻𝓪彡★", "꧁🌸ANGEL🌸꧂", "𝓟𝓻𝓲𝓷𝓬𝓮𝓼𝓼", "★GODDESS★", "꧁💎DIVA💎꧂",
  "彡𝓛𝓾𝓷𝓪彡", "꧁✨STAR✨꧂", "★𝓡𝓸𝓼𝓮★", "꧁🌙MOON🌙꧂", "𝓢𝓱𝓪𝓭𝓸𝔀", "★BEAUTY★",
  "꧁💫NOVA💫꧂", "彡𝓢𝓱𝓲𝓷𝓮彡", "꧁🌺BLOOM🌺꧂", "★𝓜𝔂𝓼𝓽𝓲𝓬★", "꧁✿GRACE✿꧂", "𝓥𝓮𝓷𝓾𝓼",
  "★DAWN★", "꧁🌟SPARK🌟꧂", "彡𝓙𝓮𝔀𝓮𝓵彡", "꧁💖HEART💖꧂", "★𝓕𝓪𝓲𝓻𝔂★", "꧁🌹ROSE🌹꧂",
  "𝓢𝓾𝓷𝓼𝓱𝓲𝓷𝓮", "★AURORA★", "꧁✨MAGIC✨꧂", "彡𝓢𝓸𝓵𝓪𝓻彡", "꧁🦋SILK🦋꧂", "★𝓛𝓸𝓽𝓾𝓼★"
];

const ATTITUDE_BOYS = [
  "꧁༒☬BADBOY☬༒꧂", "亗NO MERCY亗", "★FEARLESS★", "꧁⚡WILD⚡꧂", "彡RUTHLESS彡",
  "꧁☠DEADLY☠꧂", "★UNSTOP★", "亗TERROR亗", "꧁༒CHAOS༒꧂", "☬MADNESS☬",
  "𝕳𝖊𝖑𝖑𝖇𝖔𝖞", "★UNTAMED★", "꧁⚡REBEL⚡꧂", "亗OUTLAW亗", "彡PSYCHO彡",
  "꧁☬BRUTAL☬꧂", "★MENACE★", "亗TYRANT亗", "꧁༒ROGUE༒꧂", "☬HAVOC☬"
];

const ATTITUDE_GIRLS = [
  "꧁👑BOSSGIRL👑꧂", "★QUEENB★", "꧁⚡FIERCE⚡꧂", "𝓑𝓪𝓭𝓖𝓲𝓻𝓵", "彡SAVAGE彡",
  "꧁✦TOXIC✦꧂", "★REBEL★", "꧁💢WILD💢꧂", "𝓢𝓷𝓪𝓽𝓬𝓱𝔂", "彡RUTHLESS彡",
  "꧁🔥FLAME🔥꧂", "★DARING★", "亗LIONESS亗", "꧁💣BEAST💣꧂", "𝓕𝓮𝓪𝓻𝓵𝓮𝓼𝓼"
];

const ANIME_NAMES = [
  "꧁☬𝕴𝖙𝖆𝖈𝖍𝖎☬꧂", "★彡𝓢𝓪𝓼𝓾𝓴𝓮彡★", "亗𝕶𝖆𝖐𝖆𝖘𝖍𝖎亗", "꧁⚡𝓣𝓪𝓷𝓳𝓲𝓻𝓸⚡꧂", "彡𝔊𝔬𝔨𝔲彡",
  "꧁☠𝕵𝖔𝖐𝖊𝖗☠꧂", "★𝓩𝓮𝓷𝓲𝓽𝓼𝓾★", "亗𝕸𝖚𝖟𝖆𝖓亗", "꧁🌸𝓡𝓮𝓷𝓰𝓸𝓴𝓾🌸꧂", "彡𝕰𝖗𝖊𝖓彡",
  "꧁⚡𝓛𝓾𝓯𝓯𝔂⚡꧂", "★𝔙𝔢𝔤𝔢𝔱𝔞★", "亗𝓩𝓸𝓻𝓸亗", "꧁☬𝕶𝖆𝖓𝖊𝖐𝖎☬꧂", "彡𝓖𝓸𝓱𝓪𝓷彡"
];

const PRO_GAMER_NAMES = [
  "亗PRO×FF亗", "★CLUTCH★", "彡SNIPE彡", "꧁⚡ACE⚡꧂", "☬ELITE☬", "亗RANKED亗",
  "★GOAT★", "꧁🏆LEGEND꧂", "彡TOP1彡", "꧁☬KING☬꧂", "★FINALIST★", "亗CHAMPION亗",
  "彡HEADSHOT彡", "꧁⚡RUSH⚡꧂", "☬CARRY☬", "★MVPFF★", "亗APEX亗", "彡RANKED彡",
  "꧁👑CROWN꧂", "★WINNER★"
];

const ROYAL_NAMES = [
  "꧁👑KING👑꧂", "★彡ROYAL彡★", "꧁🏰EMPIRE꧂", "亗SOVEREIGN亗", "彡MONARCH彡",
  "꧁👑SULTAN꧂", "★EMPEROR★", "꧁🔱RAJPUT꧂", "亗NAWAB亗", "彡NOBLE彡",
  "꧁👑CROWN👑꧂", "★THRONE★", "꧁🏆ROYAL🏆꧂", "亗MAJESTIC亗", "彡DYNASTY彡"
];

const GOTHIC_NAMES = [
  "꧁☠DEATHLORD☠꧂", "亗𝕯𝖆𝖗𝖐𝕾𝖔𝖚𝖑亗", "★𝔊𝔥𝔬𝔰𝔱★", "꧁༒𝖁𝖔𝖎𝖉༒꧂", "彡𝕬𝖇𝖞𝖘彡",
  "꧁☬𝕷𝖔𝖘𝖙☬꧂", "★𝔑𝔦𝔤𝔥𝔱★", "亗𝕾𝖍𝖆𝖉𝖔𝖜亗", "꧁☠𝖁𝖆𝖒𝖕𝖎𝖗𝖊☠꧂", "彡𝔇𝔢𝔞𝔡彡",
  "꧁༒𝕮𝖔𝖗𝖙𝖊𝖝༒꧂", "★𝔖𝔥𝔞𝔡𝔢★", "亗𝕮𝖍𝖆𝖔𝖘亗", "꧁☬𝕽𝖚𝖎𝖓☬꧂", "彡𝔙𝔬𝔦𝔡彡"
];

const GUILD_NAMES = [
  "꧁☬LEGION☬꧂", "★彡SQUAD彡★", "꧁⚡WOLVES⚡꧂", "亗ALLIANCE亗", "彡EMPIRE彡",
  "꧁👑CLAN👑꧂", "★FORCES★", "꧁☠SKULLS☠꧂", "亗UPRISING亗", "彡BRIGADE彡",
  "꧁⚡HAWKS⚡꧂", "★UNITED★", "꧁☬RIVALS☬꧂", "亗LEGENDS亗", "彡DYNASTY彡",
  "꧁💀ELITE💀꧂", "★SUPREME★", "亗WARRIORS亗", "彡TITANS彡", "꧁🔥INFERNO꧂"
];

const PAKISTANI_NAMES = [
  "꧁☬SHAHEEN☬꧂", "★彡ARSLAAN彡★", "꧁⚡HAIDER⚡꧂", "亗ZAIN亗", "彡USMAN彡",
  "꧁👑SULTAN꧂", "★HASSAN★", "꧁☬REHMAN☬꧂", "亗WARRIOR亗", "彡BADSHAH彡",
  "꧁⚡JUNAID⚡꧂", "★PAKISTAN★", "꧁🔥KARACHI꧂", "亗LAHORE亗", "彡PINDI彡",
  "꧁☬AZAADI☬꧂"
];

const SHORT_NAMES = [
  "亗ACE亗", "★X★", "彡ZEN彡", "꧁OG꧂", "☬GOD☬", "亗EVO亗", "★MAX★",
  "彡PRO彡", "꧁GOD꧂", "★FF★", "亗1ST亗", "彡TOP彡", "꧁ACE꧂", "★WIN★", "亗KO亗"
];

export default function StylishNamesFreeFireBlog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "1000+ Best Stylish Names for Free Fire (2026) — Copy & Paste",
    "description":
      "Get 1000+ stylish names for Free Fire 2026. Boys, girls, attitude, anime, guild, and invisible names — all copy and paste ready.",
    "image": "https://namestylepro.online/images/blog/ff-stylish-names-header-2026.jpg",
    "author": {
      "@type": "Person",
      "name": "Arham Zahid",
    },
    "publisher": {
      "@type": "Organization",
      "name": "NameStylePro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://namestylepro.online/logo.png",
      },
    },
    "datePublished": "2026-09-01",
    "dateModified": "2026-09-13",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://namestylepro.online/blog/stylish-names-for-free-fire",
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-10 text-slate-800">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-semibold">
        <Link href="/" className="hover:text-brand-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/blog" className="hover:text-brand-600 transition-colors">
          Blog
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold truncate">Stylish Names for Free Fire</span>
      </nav>

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
          <span className="px-3 py-1 rounded-full bg-purple-50 text-brand-700 border border-purple-200">
            Free Fire
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-brand-600" />
            9 min read
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-brand-600" />
            September 2026 (Updated)
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          1000+ Best Stylish Names for Free Fire (2026) — Copy &amp; Paste
        </h1>

        {/* Author Byline */}
        <div className="flex items-center gap-3 pt-1 border-b border-slate-200 pb-5">
          <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
            AZ
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">Arham Zahid</div>
            <div className="text-xs text-slate-500">Esports Nickname Strategist &amp; Gaming Editor</div>
          </div>
        </div>
      </header>

      {/* TOP ENGAGING IMAGE BELOW TITLE */}
      <figure className="space-y-2">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border-2 border-slate-200/80 shadow-md bg-slate-950">
          <Image
            src="/images/blog/ff-stylish-names-header-2026.jpg"
            alt="1000+ Best Stylish Names for Free Fire 2026 — Copy & Paste"
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover hover:scale-102 transition-transform duration-500"
          />
        </div>
        <figcaption className="text-center text-xs text-slate-500 font-medium">
          1000+ Curated Free Fire Stylish Names (2026 Edition) — 1-Tap Copy &amp; Paste Ready for Boys, Girls, Guilds &amp; Ranked Matches.
        </figcaption>
      </figure>

      <AdSlot slotType="banner" />

      {/* INTRODUCTION */}
      <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-700">
        <p>
          Your Free Fire name appears on the kill feed, in the lobby, on leaderboards, and in every screenshot your opponents share after a match. A plain name disappears instantly. A stylish name with the right font and symbols stays in people&apos;s memory long after the match ends.
        </p>
        <p>
          This is the most complete list of Free Fire stylish names for 2026 — organized by category so you can find exactly what fits your personality, play style, and squad. Every name in this list is within the 12-character Free Fire limit unless a note says otherwise. All of them are copy and paste ready.
        </p>

        {/* Direct Tool Callout Banner */}
        <div className="p-5 rounded-2xl bg-purple-50 border-2 border-purple-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 my-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-black text-brand-900 text-base md:text-lg flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Want a Custom Name Built on Your Own Nickname?</span>
            </h4>
            <p className="text-xs sm:text-sm text-brand-800">
              Type your own name into our tool and get 500+ personalized font variations with real-time 12-char validation.
            </p>
          </div>
          <Link
            href="/free-fire-names"
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all active:scale-95 shrink-0"
          >
            Open Free Fire Name Generator
          </Link>
        </div>
      </div>

      {/* WHY YOUR FREE FIRE NAME MATTERS */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <Flame className="w-6 h-6 text-brand-600" />
          <span>Why Your Free Fire Name Actually Matters</span>
        </h2>
        <p>
          Before we get into the list, here is why this is worth thinking about carefully.
        </p>
        <p>
          Free Fire has over 100 million active players worldwide. The vast majority of them have generic, forgettable names. The moment you have a name that looks visually distinct — a gothic font, a crown frame, a blade symbol — you become someone players remember. They recognize you on the leaderboard. They mention you in squad chat. Opponents notice you before the match begins.
        </p>
        <p>
          A stylish name also signals that you care about your gaming identity. Players with effort in their profile — clean name, good avatar — are generally taken more seriously in ranked matches and when applying to join competitive guilds.
        </p>
        <p>
          Beyond that, your name is permanent unless you spend 390 diamonds or use a Name Change Card to update it. So it is worth spending five minutes choosing one that genuinely fits you.
        </p>
      </section>

      {/* FREE FIRE NAME RULES (2026) */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <Shield className="w-6 h-6 text-brand-600" />
          <span>Free Fire Name Rules (2026)</span>
        </h2>
        <p>
          Before copying any name from this list, keep these essential technical rules in mind:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-xs font-bold text-brand-600 uppercase">Character Limit</span>
            <p className="text-sm font-bold text-slate-900">Maximum 12 characters</p>
            <p className="text-xs text-slate-500">Including all symbols, numbers, frames, and spaces.</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-xs font-bold text-brand-600 uppercase">Unicode Support</span>
            <p className="text-sm font-bold text-slate-900">Full Unicode fonts &amp; symbols</p>
            <p className="text-xs text-slate-500">Free Fire accepts mathematical letters, crowns, wings, and kunai.</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-xs font-bold text-brand-600 uppercase">Name Change Cost</span>
            <p className="text-sm font-bold text-slate-900">390 Diamonds or 1 Name Card</p>
            <p className="text-xs text-slate-500">Guild store offers Name Change Cards for 39 diamonds + 200 guild tokens.</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-xs font-bold text-brand-600 uppercase">Device Compatibility</span>
            <p className="text-sm font-bold text-slate-900">Render Variations</p>
            <p className="text-xs text-slate-500">Some complex emojis or symbols display as boxes on older Android OS.</p>
          </div>
        </div>
      </section>

      {/* QUICK JUMP TABLE OF CONTENTS */}
      <nav aria-label="Table of Contents" className="bg-purple-50/60 rounded-3xl p-6 border border-purple-100 space-y-3">
        <h3 className="font-black text-slate-900 text-lg flex items-center gap-2">
          <span>⚡</span>
          <span>Jump Directly to Name Categories:</span>
        </h3>
        <div className="flex flex-wrap gap-2 text-xs font-bold">
          <a href="#boys-attitude" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Boys (Power)</a>
          <a href="#girls-aesthetic" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Girls (Aesthetic)</a>
          <a href="#attitude-boys" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Attitude Boys</a>
          <a href="#attitude-girls" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Attitude Girls</a>
          <a href="#anime-names" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Anime Styles</a>
          <a href="#pro-gamer" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Pro Gamer</a>
          <a href="#royal-king" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Royal &amp; King</a>
          <a href="#gothic-dark" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Gothic &amp; Dark</a>
          <a href="#invisible-name" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Invisible Name</a>
          <a href="#guild-clan" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Guild &amp; Clan</a>
          <a href="#pakistani-names" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Pakistani / Urdu</a>
          <a href="#short-clean" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">Short Names</a>
          <a href="#how-to-change" className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-brand-600 hover:border-brand-400">How to Change</a>
        </div>
      </nav>

      {/* CATEGORY 1: BOYS */}
      <section id="boys-attitude" className="space-y-3 pt-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Swords className="w-5 h-5 text-brand-600" />
            <span>Stylish Names for Free Fire — Boys (Attitude &amp; Power)</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">30 Names</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base">
          These names are designed for players who want a dominant, intimidating presence in every lobby. Tap any card to copy directly.
        </p>
        <BlogNameGrid names={BOYS_NAMES} category="Boys Power" />
      </section>

      {/* CATEGORY 2: GIRLS */}
      <section id="girls-aesthetic" className="space-y-3 pt-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-rose-500" />
            <span>Stylish Names for Free Fire — Girls (Cute &amp; Aesthetic)</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">30 Names</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base">
          These names work perfectly for female players who want a name that is beautiful, memorable, and still powerful.
        </p>
        <BlogNameGrid names={GIRLS_NAMES} category="Girls Aesthetic" />
      </section>

      {/* CATEGORY 3: ATTITUDE BOYS */}
      <section id="attitude-boys" className="space-y-3 pt-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            <span>Free Fire Attitude Names — Boys (Aggressive &amp; Confident)</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">20 Names</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base">
          Attitude names are the most popular category in South Asia. These are the names that make opponents pause when they see them in the kill feed.
        </p>
        <BlogNameGrid names={ATTITUDE_BOYS} category="Attitude Boys" />
      </section>

      {/* CATEGORY 4: ATTITUDE GIRLS */}
      <section id="attitude-girls" className="space-y-3 pt-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Crown className="w-5 h-5 text-purple-600" />
            <span>Free Fire Attitude Names — Girls (Boss Energy)</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">15 Names</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base">
          Fierce, independent, and commanding nicknames tailored with crowns, wild bolts, and gothic fonts for female squad leaders.
        </p>
        <BlogNameGrid names={ATTITUDE_GIRLS} category="Attitude Girls" />
      </section>

      {/* CATEGORY 5: ANIME-STYLE */}
      <section id="anime-names" className="space-y-3 pt-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Zap className="w-5 h-5 text-brand-600" />
            <span>Anime-Style Free Fire Names</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">15 Names</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base">
          Anime names are one of the fastest-growing trends in the South Asian Free Fire community. If you love Naruto, Demon Slayer, Dragon Ball, or One Piece, these styles are for you.
        </p>
        <BlogNameGrid names={ANIME_NAMES} category="Anime Style" />
        <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span>Looking for 800+ more curated anime nicknames with instant search?</span>
          <Link
            href="/anime-names"
            className="font-bold text-brand-700 hover:text-brand-900 underline underline-offset-2 shrink-0"
          >
            Visit the anime name generator on NameStylePro →
          </Link>
        </div>
      </section>

      {/* CATEGORY 6: PRO GAMER */}
      <section id="pro-gamer" className="space-y-3 pt-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-600" />
            <span>Pro Gamer &amp; Ranked Player Names</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">20 Names</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base">
          These names are designed for serious players. Short, clean, powerful — the kind of name you see at the top of leaderboards.
        </p>
        <BlogNameGrid names={PRO_GAMER_NAMES} category="Pro Gamer" />
      </section>

      {/* MIDDLE ENGAGING IMAGE */}
      <figure className="my-8 space-y-2">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border-2 border-slate-200/80 shadow-md bg-slate-950">
          <Image
            src="/images/blog/ff-names-categories-guide-2026.jpg"
            alt="Free Fire 2026 Nickname Customization Guide and Categories"
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover hover:scale-102 transition-transform duration-500"
          />
        </div>
        <figcaption className="text-center text-xs text-slate-500 font-medium">
          Visual Breakdown: Free Fire Name Customization Guide (2026) — 12-Character Limit, Symbolic Frames, Attitude Tags &amp; Guild Ranks.
        </figcaption>
      </figure>

      <AdSlot slotType="rectangle" />

      {/* CATEGORY 7: ROYAL & KING */}
      <section id="royal-king" className="space-y-3 pt-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-500" />
            <span>Royal &amp; King Names for Free Fire</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">15 Names</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base">
          Majestic names featuring crowns, sultan emblems, and regal typography that exude authority and prestige.
        </p>
        <BlogNameGrid names={ROYAL_NAMES} category="Royal & King" />
      </section>

      {/* CATEGORY 8: GOTHIC & DARK */}
      <section id="gothic-dark" className="space-y-3 pt-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Swords className="w-5 h-5 text-slate-700" />
            <span>Gothic &amp; Dark Names for Free Fire</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">15 Names</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base">
          Ominous fraktur lettering, skull borders, and shadow aesthetics for assassins, reapers, and stealth players.
        </p>
        <BlogNameGrid names={GOTHIC_NAMES} category="Gothic Dark" />
      </section>

      {/* CATEGORY 9: INVISIBLE / BLANK NAME (INTERACTIVE BOX) */}
      <section id="invisible-name" className="space-y-4 pt-6">
        <div className="border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>👻</span>
            <span>Invisible / Blank Name for Free Fire</span>
          </h2>
        </div>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed">
          The invisible name trick makes your nickname appear completely blank in the Free Fire lobby. It uses a special Unicode character called the Hangul Filler (<code className="font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">U+3164</code>) that the game accepts but displays as invisible pixels.
        </p>
        
        {/* Interactive Invisible Name Box */}
        <InvisibleNameBox />
      </section>

      {/* CATEGORY 10: GUILD & CLAN */}
      <section id="guild-clan" className="space-y-3 pt-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-600" />
            <span>Guild &amp; Clan Names for Free Fire</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">20 Names</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base">
          Guild names need to be impressive to attract skilled players and intimidating to opponents. These are designed for guild tags and team names.
        </p>
        <BlogNameGrid names={GUILD_NAMES} category="Guild & Clan" />
        <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span>Need coordinated squad names where every member shares matching tags?</span>
          <Link
            href="/clan-names"
            className="font-bold text-indigo-700 hover:text-indigo-900 underline underline-offset-2 shrink-0"
          >
            Visit the clan and guild name maker on NameStylePro →
          </Link>
        </div>
      </section>

      {/* CATEGORY 11: PAKISTANI PLAYERS */}
      <section id="pakistani-names" className="space-y-3 pt-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>🇵🇰</span>
            <span>Free Fire Names for Pakistani Players (Urdu &amp; Roman Urdu)</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">16 Names</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base">
          These names are specifically popular in the Pakistani Free Fire community and use names and words that resonate with Pakistani players.
        </p>
        <BlogNameGrid names={PAKISTANI_NAMES} category="Pakistani Urdu" />
      </section>

      {/* CATEGORY 12: SHORT & CLEAN */}
      <section id="short-clean" className="space-y-3 pt-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            <span>Short &amp; Clean Names (Best for Kill Feed)</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">15 Names</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base">
          Short names get read faster on the kill feed and leaderboard. These are one to four characters padded with a single frame — maximum impact in minimum space.
        </p>
        <BlogNameGrid names={SHORT_NAMES} category="Short & Clean" />
      </section>

      {/* HOW TO CHANGE YOUR FREE FIRE NAME (STEP BY STEP) */}
      <section id="how-to-change" className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-6 text-slate-700 leading-relaxed pt-6">
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            How to Change Your Free Fire Name (Step by Step)
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Changing your name in Free Fire takes less than two minutes once you have your stylish name ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">Step 1 — Copy your chosen name</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Copy your chosen name from this list or generate a custom one using the{" "}
              <Link
                href="/free-fire-names"
                className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
              >
                NameStylePro Free Fire name generator
              </Link>
              .
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base">Step 2 — Open your player profile</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Open Free Fire and go to your profile by tapping your avatar banner in the top left of the main lobby screen.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">Step 3 — Tap the edit pencil icon</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tap the yellow pencil or edit icon that appears right next to your current Free Fire nickname.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-base">Step 4 — Clear current nickname</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Select all of the text in the nickname input field and delete it completely so the field is empty.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
              5
            </div>
            <h3 className="font-bold text-slate-900 text-base">Step 5 — Paste stylish name</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Long press the field, tap Paste to insert your copied stylish name, and verify that the preview displays properly without broken question marks.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
              6
            </div>
            <h3 className="font-bold text-slate-900 text-base">Step 6 — Confirm change</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tap the confirm button. The game will prompt you to use a Name Change Card or pay 390 Garena diamonds to permanently save the new nickname.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
          <strong>Troubleshooting Note:</strong> If your stylish name appears as question marks (<code className="font-mono bg-white px-1 rounded">?</code>) or empty squares (<code className="font-mono bg-white px-1 rounded">□</code>) after pasting, it means your current Android/iOS version does not support that specific Unicode glyph. Simply choose another style from our list or test another font on our generator!
        </div>
      </section>

      {/* TIPS FOR CHOOSING THE BEST FREE FIRE NAME */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Tips for Choosing the Best Free Fire Name
        </h2>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>1. Keep it strictly within 12 characters</span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              This is the hard limit Free Fire enforces. The{" "}
              <Link
                href="/free-fire-names"
                className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
              >
                NameStylePro generator
              </Link>{" "}
              shows a live FF: 0/12 counter so you never go over while generating or styling.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>2. Match it to your play style</span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sniper? Use names with words like Ghost, Shadow, Phantom, or Silent. Rusher? Use Rage, Blaze, Storm, or Slash. Strategic player? Try Apex, Tactician, or Control. Your name should mirror how you move on Bermuda and Kalahari.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>3. Make it readable on the kill feed</span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A name packed with so many symbols that nobody can tell what it says is counterproductive. The best stylish names have one clear word or name in a fancy font with one or two surrounding framing symbols like crowns (<code className="bg-slate-100 px-1 rounded">亗</code>) or wings (<code className="bg-slate-100 px-1 rounded">꧁꧂</code>).
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>4. Consider your squad coordination</span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              If you play with the same group regularly, matching name styles with your squad makes you look organized and serious in the lobby. Our{" "}
              <Link
                href="/clan-names"
                className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
              >
                clan name generator
              </Link>{" "}
              creates coordinated styles for teams.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>5. Think long term before spending diamonds</span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You pay 390 diamonds every time you change your name unless you wait for guild tokens to refresh. Choose something you will be proud of for several months, not just what is trending for a single weekend.
            </p>
          </div>
        </div>
      </section>

      {/* GENERATE YOUR OWN CUSTOM STYLISH NAME */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-6 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Generate Your Own Custom Stylish Name
        </h2>
        <p className="text-base md:text-lg">
          The names in this list are great starting points, but the best Free Fire name is one built from your own nickname. When your actual name or gamertag is styled in a fancy font, it feels genuinely yours rather than borrowed.
        </p>
        <p className="text-base md:text-lg">
          Visit the{" "}
          <Link
            href="/free-fire-names"
            className="text-brand-600 hover:text-brand-700 font-bold underline underline-offset-2"
          >
            Free Fire name generator on NameStylePro
          </Link>{" "}
          to type in your own name and see hundreds of personalized stylish versions instantly. Every result shows the FF: 0/12 character counter so you always know what fits. Copy your favorite in one tap.
        </p>

        <div className="pt-2 space-y-3">
          <h3 className="text-lg font-black text-slate-900">Explore Styles for Other Platforms:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold">
            <li className="bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-brand-300 transition-colors">
              <Link href="/pubg-names" className="text-brand-700 hover:text-brand-900 flex items-center justify-between">
                <span>PUBG and BGMI stylish names (16 chars)</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </li>
            <li className="bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-brand-300 transition-colors">
              <Link href="/instagram-names" className="text-brand-700 hover:text-brand-900 flex items-center justify-between">
                <span>Instagram and TikTok bio fonts</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </li>
            <li className="bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-brand-300 transition-colors">
              <Link href="/anime-names" className="text-brand-700 hover:text-brand-900 flex items-center justify-between">
                <span>Anime name styles (Naruto, Demon Slayer)</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </li>
            <li className="bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-brand-300 transition-colors">
              <Link href="/invisible-name" className="text-brand-700 hover:text-brand-900 flex items-center justify-between">
                <span>Invisible name generator (blank name trick)</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* FINAL THOUGHT & CALL TO ACTION */}
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50/50 to-white rounded-3xl p-6 md:p-10 border border-purple-200 space-y-4 text-slate-700 leading-relaxed shadow-xs">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Final Thought
        </h2>
        <p className="text-base md:text-lg">
          Your Free Fire name is the first impression every player gets of you. With over 1,000 options across every style in this list — attitude, anime, gothic, royal, cute, pro gamer, guild, invisible, and more — there is no reason to keep a generic name another day.
        </p>
        <p className="text-base md:text-lg">
          Pick the one that feels right, copy it, and paste it into your profile. If you want something built specifically around your own name, the{" "}
          <Link
            href="/"
            className="text-brand-600 hover:text-brand-700 font-bold underline underline-offset-2"
          >
            NameStylePro generator
          </Link>{" "}
          does that in seconds.
        </p>
        <p className="text-base md:text-lg font-bold text-brand-900 pt-2">
          Good luck in the next match!
        </p>
      </section>

      {/* Back to guides link */}
      <div className="pt-4 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Esports &amp; Nickname Guides</span>
        </Link>
      </div>
    </article>
  );
}
