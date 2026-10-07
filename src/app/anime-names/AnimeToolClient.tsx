'use client';

import React, { useState, useMemo } from 'react';
import { Copy, Check, Sparkles, Flame, Swords, Zap, Heart, Share2, RefreshCw, Layers } from 'lucide-react';
import { useClipboard } from '@/lib/hooks/useClipboard';
import { getUnicodeLength } from '@/lib/unicode/generator';
import { FONT_MAPS } from '@/lib/unicode/maps';

interface AnimeGeneratedStyle {
  id: string;
  name: string;
  category: 'all' | 'katana' | 'thunder' | 'curse' | 'aesthetic' | 'kanji';
  categoryLabel: string;
  charCount: number;
  fitsFF: boolean;
  fitsPubg: boolean;
}

const SAMPLE_PRESETS = [
  'Shadow',
  'Kakashi',
  'Gojo',
  'Sukuna',
  'Itachi',
  'Levi',
  'Tanjiro',
  'Zoro',
  'Eren',
  'King',
  'Ghost',
  'Dragon',
];

// Anime decorative frames for generator
const ANIME_GENERATOR_FRAMES = [
  // Ninja & Katana
  { prefix: '⚔️ ', suffix: ' ⚔️', category: 'katana' as const, categoryLabel: 'Katana Dual' },
  { prefix: '亗 ', suffix: ' 亗', category: 'katana' as const, categoryLabel: 'Crown Lord' },
  { prefix: '𖣘 ', suffix: ' 𖣘', category: 'katana' as const, categoryLabel: 'Ninja Shuriken' },
  { prefix: '刃 ', suffix: ' 刃', category: 'katana' as const, categoryLabel: 'Nichirin Blade' },
  { prefix: '〆 ', suffix: ' 〆', category: 'katana' as const, categoryLabel: 'Samurai Slash' },
  { prefix: '乂 ', suffix: ' 乂', category: 'katana' as const, categoryLabel: 'Katana Cross' },
  { prefix: '父 ', suffix: ' 父', category: 'katana' as const, categoryLabel: 'Father Kanji' },

  // Thunder & Power
  { prefix: '⚡ ', suffix: ' ⚡', category: 'thunder' as const, categoryLabel: 'Chidori Bolt' },
  { prefix: '꧁⚡ ', suffix: ' ⚡꧂', category: 'thunder' as const, categoryLabel: 'Thunder Wings' },
  { prefix: '☬ ', suffix: ' ☬', category: 'thunder' as const, categoryLabel: 'Chakra Vortex' },
  { prefix: '炎 ', suffix: ' 炎', category: 'thunder' as const, categoryLabel: 'Flame Breathing' },
  { prefix: '★彡 ', suffix: ' 彡★', category: 'thunder' as const, categoryLabel: 'Star Meteor' },
  { prefix: '彡 ', suffix: ' 彡', category: 'thunder' as const, categoryLabel: 'Wind Breathing' },
  { prefix: '⚡ᴳᵒᵈ ', suffix: ' ⚡', category: 'thunder' as const, categoryLabel: 'God Lightning' },

  // Dark & Curse
  { prefix: '† ', suffix: ' †', category: 'curse' as const, categoryLabel: 'Curse Dagger' },
  { prefix: '꧁༒ ', suffix: ' ༒꧂', category: 'curse' as const, categoryLabel: 'Shinigami Aura' },
  { prefix: '☠️ ', suffix: ' ☠️', category: 'curse' as const, categoryLabel: 'Ghoul Mask' },
  { prefix: '鬼 ', suffix: ' 鬼', category: 'curse' as const, categoryLabel: 'Upper Demon' },
  { prefix: '影 ', suffix: ' 影', category: 'curse' as const, categoryLabel: 'Shadow Monarch' },
  { prefix: '꧁☬ ', suffix: ' ☬꧂', category: 'curse' as const, categoryLabel: 'Sharingan Seal' },
  { prefix: '×͜× ', suffix: '', category: 'curse' as const, categoryLabel: 'Dead Eyes' },

  // Aesthetic & Floral
  { prefix: '✿ ', suffix: ' ✿', category: 'aesthetic' as const, categoryLabel: 'Floral Breath' },
  { prefix: '꧁✿ ', suffix: ' ✿꧂', category: 'aesthetic' as const, categoryLabel: 'Flower Blossom' },
  { prefix: '🌸 ', suffix: ' 🌸', category: 'aesthetic' as const, categoryLabel: 'Sakura Hashira' },
  { prefix: '☁️ ', suffix: ' ☁️', category: 'aesthetic' as const, categoryLabel: 'Soft Cloud' },
  { prefix: '♡ ', suffix: ' ♡', category: 'aesthetic' as const, categoryLabel: 'Pure Heart' },
  { prefix: 'ʚĭɞ ', suffix: ' ʚĭɞ', category: 'aesthetic' as const, categoryLabel: 'Butterfly Wings' },

  // Japanese Kanji & Brackets
  { prefix: '『 ', suffix: ' 』', category: 'kanji' as const, categoryLabel: 'Japanese Bracket' },
  { prefix: '【 ', suffix: ' 】', category: 'kanji' as const, categoryLabel: 'Black Bracket' },
  { prefix: '〖 ', suffix: ' 〗', category: 'kanji' as const, categoryLabel: 'Esports Bracket' },
  { prefix: '神・', suffix: '', category: 'kanji' as const, categoryLabel: 'Kami God' },
  { prefix: '々 ', suffix: ' 々', category: 'kanji' as const, categoryLabel: 'Kurikaeshi' },
  { prefix: '꧁༺ ', suffix: ' ༻꧂', category: 'kanji' as const, categoryLabel: 'Emperor Wings' },
];

export function AnimeToolClient() {
  const [inputName, setInputName] = useState<string>('Shadow');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filterGame, setFilterGame] = useState<'all' | 'ff' | 'pubg'>('all');
  const [visibleCount, setVisibleCount] = useState<number>(30);

  const { copyToClipboard, isCopied, getWhatsAppShareUrl } = useClipboard();

  const handleRandomPreset = () => {
    const current = inputName.trim();
    const available = SAMPLE_PRESETS.filter((p) => p.toLowerCase() !== current.toLowerCase());
    const random = available[Math.floor(Math.random() * available.length)];
    setInputName(random);
    setVisibleCount(30);
  };

  // Generate real-time anime styles for whatever user types
  const allGenerated = useMemo<AnimeGeneratedStyle[]>(() => {
    const text = inputName.trim() || 'Shadow';
    const list: AnimeGeneratedStyle[] = [];

    // 1. Raw Anime Fonts (Fraktur, Bold Fraktur, Script, Bold Script, Small Caps, Math Bold)
    const keyFontIds = [
      { id: 'fraktur', label: 'Dark Fraktur' },
      { id: 'bold-fraktur', label: 'Gothic Bold' },
      { id: 'math-bold', label: 'Heroic Bold' },
      { id: 'script', label: 'Cursive Anime' },
      { id: 'bold-script', label: 'Bold Cursive' },
      { id: 'small-caps', label: 'Small Capitals' },
      { id: 'double-struck', label: 'Cyber Double' },
    ];

    keyFontIds.forEach((kf) => {
      const fontDef = FONT_MAPS.find((f) => f.id === kf.id);
      if (fontDef) {
        const transformed = fontDef.transform(text);
        const len = getUnicodeLength(transformed);
        list.push({
          id: `font-${kf.id}`,
          name: transformed,
          category: 'aesthetic',
          categoryLabel: kf.label,
          charCount: len,
          fitsFF: len <= 12,
          fitsPubg: len <= 16,
        });
      }
    });

    // 2. Framed Styles with Various Anime Fonts
    ANIME_GENERATOR_FRAMES.forEach((frame, idx) => {
      // Bold Fraktur Version
      const frakturFont = FONT_MAPS.find((f) => f.id === 'bold-fraktur');
      if (frakturFont) {
        const tFraktur = `${frame.prefix.trim()}${frakturFont.transform(text)}${frame.suffix.trim()}`;
        const len = getUnicodeLength(tFraktur);
        list.push({
          id: `frame-${idx}-fraktur`,
          name: tFraktur,
          category: frame.category,
          categoryLabel: `${frame.categoryLabel} (Gothic)`,
          charCount: len,
          fitsFF: len <= 12,
          fitsPubg: len <= 16,
        });
      }

      // Small Caps Version
      const smallCapsFont = FONT_MAPS.find((f) => f.id === 'small-caps');
      if (smallCapsFont) {
        const tCaps = `${frame.prefix.trim()} ${smallCapsFont.transform(text)} ${frame.suffix.trim()}`.trim();
        const len = getUnicodeLength(tCaps);
        list.push({
          id: `frame-${idx}-caps`,
          name: tCaps,
          category: frame.category,
          categoryLabel: `${frame.categoryLabel} (Clean)`,
          charCount: len,
          fitsFF: len <= 12,
          fitsPubg: len <= 16,
        });
      }

      // Script / Cursive Version (for aesthetic)
      if (frame.category === 'aesthetic' || frame.category === 'kanji') {
        const scriptFont = FONT_MAPS.find((f) => f.id === 'bold-script');
        if (scriptFont) {
          const tScript = `${frame.prefix.trim()}${scriptFont.transform(text)}${frame.suffix.trim()}`;
          const len = getUnicodeLength(tScript);
          list.push({
            id: `frame-${idx}-script`,
            name: tScript,
            category: frame.category,
            categoryLabel: `${frame.categoryLabel} (Script)`,
            charCount: len,
            fitsFF: len <= 12,
            fitsPubg: len <= 16,
          });
        }
      }

      // Plain Frame (Classic)
      const tPlain = `${frame.prefix.trim()}${text}${frame.suffix.trim()}`;
      const lenPlain = getUnicodeLength(tPlain);
      list.push({
        id: `frame-${idx}-plain`,
        name: tPlain,
        category: frame.category,
        categoryLabel: `${frame.categoryLabel} (Classic)`,
        charCount: lenPlain,
        fitsFF: lenPlain <= 12,
        fitsPubg: lenPlain <= 16,
      });
    });

    return list;
  }, [inputName]);

  // Filtering by category & game limit
  const filteredList = useMemo(() => {
    let result = allGenerated;
    if (activeCategory !== 'all') {
      result = result.filter((it) => it.category === activeCategory);
    }
    if (filterGame === 'ff') {
      result = result.filter((it) => it.fitsFF);
    } else if (filterGame === 'pubg') {
      result = result.filter((it) => it.fitsPubg);
    }
    return result;
  }, [allGenerated, activeCategory, filterGame]);

  const visibleList = useMemo(() => {
    return filteredList.slice(0, visibleCount);
  }, [filteredList, visibleCount]);

  const rawLength = getUnicodeLength(inputName.trim() || 'Shadow');

  const categories = [
    { key: 'all', label: 'All Styles', icon: Sparkles },
    { key: 'katana', label: 'Katana & Swords (⚔️)', icon: Swords },
    { key: 'thunder', label: 'Thunder & Bolts (⚡)', icon: Zap },
    { key: 'curse', label: 'Dark & Curses (†)', icon: Flame },
    { key: 'aesthetic', label: 'Aesthetic & Floral (🌸)', icon: Heart },
    { key: 'kanji', label: 'Kanji & Brackets (『』)', icon: Layers },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50/80 via-white to-indigo-50/60 rounded-3xl p-6 md:p-8 border-2 border-brand-200/90 shadow-md space-y-6">
      {/* Header Info & Live Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-brand-800 border border-purple-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Interactive Live Anime Generator</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Style Any Custom Name in Real-Time
          </h2>
        </div>

        {/* Live Gamer Limit Badges */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
              rawLength <= 12
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-rose-50 text-rose-700 border-rose-200'
            }`}
          >
            FF: {rawLength}/12 {rawLength <= 12 ? '✓' : '⚠️ Long'}
          </div>
          <div
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
              rawLength <= 16
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : 'bg-rose-50 text-rose-700 border-rose-200'
            }`}
          >
            PUBG: {rawLength}/16 {rawLength <= 16 ? '✓' : '⚠️ Long'}
          </div>
        </div>
      </div>

      {/* Input Box with Action Buttons */}
      <div className="space-y-3">
        <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
                setVisibleCount(30);
              }}
              placeholder="Type any nickname (e.g. Alex, Shadow, King, Dragon)..."
              maxLength={24}
              className="w-full h-14 pl-4 pr-10 text-base sm:text-lg font-bold text-slate-900 placeholder:text-slate-400 bg-white border-2 border-brand-300 focus:border-brand-600 rounded-2xl outline-none shadow-xs transition-all"
            />
            {inputName && (
              <button
                type="button"
                onClick={() => setInputName('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm font-bold"
                aria-label="Clear input"
              >
                ✕
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={handleRandomPreset}
            className="h-14 px-5 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xs shrink-0"
          >
            <RefreshCw className="w-4 h-4 text-brand-600" />
            <span>Random Idea</span>
          </button>
        </div>

        {/* Quick Click Inspiration Presets */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="font-bold text-slate-500 mr-1">Try Preset:</span>
          {SAMPLE_PRESETS.slice(0, 8).map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => {
                setInputName(preset);
                setVisibleCount(30);
              }}
              className={`px-2.5 py-1 rounded-full font-semibold transition-all border ${
                inputName.toLowerCase() === preset.toLowerCase()
                  ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-brand-400 hover:text-brand-600'
              }`}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Tabs and Game Limit Switcher */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2 border-t border-purple-100">
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key);
                  setVisibleCount(30);
                }}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Game filter pills */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs font-bold self-start md:self-auto shrink-0 shadow-2xs">
          <button
            type="button"
            onClick={() => setFilterGame('all')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              filterGame === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({allGenerated.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterGame('ff')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              filterGame === 'ff' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            FF (≤12)
          </button>
          <button
            type="button"
            onClick={() => setFilterGame('pubg')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              filterGame === 'pubg' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            PUBG (≤16)
          </button>
        </div>
      </div>

      {/* Generated Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
        {visibleList.map((item) => {
          const copied = isCopied(item.name);
          return (
            <div
              key={item.id}
              className="p-3.5 bg-white rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between gap-2.5 shadow-2xs"
            >
              <div className="flex items-center justify-between gap-1 text-[11px] font-semibold">
                <span className="text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                  {item.categoryLabel}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-md border ${
                    item.fitsFF
                      ? 'text-emerald-700 bg-emerald-50 border-emerald-100'
                      : item.fitsPubg
                      ? 'text-amber-700 bg-amber-50 border-amber-100'
                      : 'text-slate-500 bg-slate-50 border-slate-100'
                  }`}
                >
                  {item.charCount} chars {item.fitsFF ? '• FF ✓' : item.fitsPubg ? '• PUBG ✓' : ''}
                </span>
              </div>

              {/* Styled Output */}
              <div className="font-bold text-slate-900 text-lg py-1 text-center select-all tracking-wide break-all">
                {item.name}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 pt-1 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => copyToClipboard(item.name)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-brand-600 hover:bg-brand-700 text-white shadow-xs'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Style</span>
                    </>
                  )}
                </button>
                <a
                  href={getWhatsAppShareUrl(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share style on WhatsApp"
                  className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {filteredList.length > visibleCount && (
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 30)}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            Load More Styles ({filteredList.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
