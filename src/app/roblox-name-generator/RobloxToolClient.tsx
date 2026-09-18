'use client';

import React, { useState, useMemo } from 'react';
import { Copy, Check, Sparkles, Heart, Wand2, RefreshCw, ShieldCheck, Gamepad2 } from 'lucide-react';
import { useClipboard } from '@/lib/hooks/useClipboard';
import { useFavorites } from '@/lib/hooks/useFavorites';

interface GeneratedRobloxItem {
  name: string;
  category: string;
  tag: string;
  isUsernameValid: boolean; // true if 3-20 chars, alphanumeric + underscores only
  charCount: number;
}

const SMALL_CAPS_RECORD: Record<string, string> = {
  a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ',
  j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ',
  s: 'ꜱ', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ',
  A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ꜰ', G: 'ɢ', H: 'ʜ', I: 'ɪ',
  J: 'ᴊ', K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'ǫ', R: 'ʀ',
  S: 'ꜱ', T: 'ᴛ', U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ', Z: 'ᴢ',
};

function toSmallCaps(str: string): string {
  return str.split('').map((c) => SMALL_CAPS_RECORD[c] || c).join('');
}

function toSpaced(str: string): string {
  return str.split('').join(' ');
}

const PRESET_IDEAS = ['cloudy', 'angel', 'viper', 'lunar', 'hazel', 'velvet', 'reaper', 'honey', 'astral', 'cherry'];

export function RobloxToolClient() {
  const [keyword, setKeyword] = useState('cloudy');
  const [activeTab, setActiveTab] = useState<string>('all');
  const { copyToClipboard, isCopied } = useClipboard();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const generatedItems = useMemo<GeneratedRobloxItem[]>(() => {
    const raw = keyword.trim() || 'cloudy';
    const clean = raw.toLowerCase().replace(/[^a-z0-9_]/g, '') || 'player';
    const cleanCap = clean.charAt(0).toUpperCase() + clean.slice(1);

    const items: GeneratedRobloxItem[] = [
      // Aesthetic & Soft (Lowercase, subtle underscores, chill)
      { name: clean, category: 'aesthetic', tag: 'Minimalist' },
      { name: `${clean}vibes`, category: 'aesthetic', tag: 'Aesthetic' },
      { name: `_${clean}_`, category: 'aesthetic', tag: 'Underscore' },
      { name: `${clean}moon`, category: 'aesthetic', tag: 'Dreamy' },
      { name: `ii_${clean}`, category: 'aesthetic', tag: 'Classic' },
      { name: `${clean}y`, category: 'aesthetic', tag: 'Soft Vowel' },
      { name: `lunari_${clean}`, category: 'aesthetic', tag: 'Atmospheric' },
      { name: `${clean}_glow`, category: 'aesthetic', tag: 'Aesthetic' },

      // Preppy & Y2K (itz, xox, trendy)
      { name: `itz.${clean}`, category: 'preppy', tag: 'Preppy' },
      { name: `xox_${clean}`, category: 'preppy', tag: 'Y2K' },
      { name: `vibes_${clean}`, category: 'preppy', tag: 'Trendy' },
      { name: `glossy_${clean}`, category: 'preppy', tag: 'Preppy' },
      { name: `not_${clean}`, category: 'preppy', tag: 'Clean' },
      { name: `preppy.${clean}`, category: 'preppy', tag: 'TikTok' },
      { name: `${clean}_rose`, category: 'preppy', tag: 'Chic' },

      // Cute & Pastel (Kawaii, bakery, cottagecore)
      { name: `soft_${clean}`, category: 'cute', tag: 'Softie' },
      { name: `${clean}bun`, category: 'cute', tag: 'Kawaii' },
      { name: `peachy_${clean}`, category: 'cute', tag: 'Pastel' },
      { name: `${clean}_tea`, category: 'cute', tag: 'Boba' },
      { name: `baby_${clean}`, category: 'cute', tag: 'Sweet' },
      { name: `matcha_${clean}`, category: 'cute', tag: 'Cottage' },
      { name: `${clean}latte`, category: 'cute', tag: 'Cafe' },

      // Sweat & PvP (Da Hood, Bedwars, Blox Fruits)
      { name: `vortex_${clean}`, category: 'pvp', tag: 'Da Hood' },
      { name: `silent_${clean}`, category: 'pvp', tag: 'Sweat' },
      { name: `pulse_${clean}`, category: 'pvp', tag: 'Tryhard' },
      { name: `${clean}_rx`, category: 'pvp', tag: 'PvP' },
      { name: `reaper_${clean}`, category: 'pvp', tag: 'Competitive' },
      { name: `dark_${clean}`, category: 'pvp', tag: 'Stealth' },
      { name: `fatal_${clean}`, category: 'pvp', tag: 'Aim Lock' },

      // Dark & Grunge (Emo, goth, cyber)
      { name: `v0id_${clean}`, category: 'grunge', tag: 'Emo' },
      { name: `gxthic_${clean}`, category: 'grunge', tag: 'Grunge' },
      { name: `venom_${clean}`, category: 'grunge', tag: 'Dark' },
      { name: `corrupt_${clean}`, category: 'grunge', tag: 'Goth' },
      { name: `abyss_${clean}`, category: 'grunge', tag: 'Cyber' },
      { name: `decayed_${clean}`, category: 'grunge', tag: 'Edgy' },

      // Classic Blox (Retro, studio, builder)
      { name: `Blox${cleanCap}`, category: 'blox', tag: 'Blox' },
      { name: `${cleanCap}Builder`, category: 'blox', tag: 'Classic' },
      { name: `Retro${cleanCap}`, category: 'blox', tag: 'Retro' },
      { name: `Dev${cleanCap}`, category: 'blox', tag: 'Studio' },

      // Display Name Formats (Spaced, small caps - for in-game display name)
      { name: toSpaced(clean.slice(0, 10)), category: 'display', tag: 'Spaced Display' },
      { name: toSmallCaps(clean.slice(0, 12)), category: 'display', tag: 'Small Caps Display' },
      { name: `• ${clean} •`, category: 'display', tag: 'Aesthetic Display' },
      { name: `[ ${clean} ]`, category: 'display', tag: 'Clean Display' },
      { name: `☁ ${clean} ☁`, category: 'display', tag: 'Symbol Display' },
    ];

    return items.map((it) => {
      const len = Array.from(it.name).length;
      // Roblox username valid: 3-20 chars, letters, numbers, underscores only (no spaces, dots, or non-ascii)
      const isUsernameValid = len >= 3 && len <= 20 && /^[a-zA-Z0-9_]+$/.test(it.name);
      return {
        ...it,
        isUsernameValid,
        charCount: len,
      };
    });
  }, [keyword]);

  const filteredItems = useMemo(() => {
    if (activeTab === 'all') return generatedItems;
    return generatedItems.filter((it) => it.category === activeTab);
  }, [generatedItems, activeTab]);

  const categories = [
    { key: 'all', label: 'All Styles' },
    { key: 'aesthetic', label: 'Aesthetic' },
    { key: 'preppy', label: 'Preppy Y2K' },
    { key: 'cute', label: 'Cute & Soft' },
    { key: 'pvp', label: 'Sweat & PvP' },
    { key: 'grunge', label: 'Dark Grunge' },
    { key: 'blox', label: 'Classic Blox' },
    { key: 'display', label: 'Display Names' },
  ];

  const handleRandomize = () => {
    const randomWord = PRESET_IDEAS[Math.floor(Math.random() * PRESET_IDEAS.length)];
    setKeyword(randomWord);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-8 space-y-6">
      {/* Input & Action Header */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider flex items-center gap-1.5">
              <Gamepad2 className="w-4 h-4" />
              Interactive Roblox Name Generator
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Type Your Keyword & Generate Aesthetic Roblox Names
            </h2>
          </div>
          <button
            type="button"
            onClick={handleRandomize}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all self-start sm:self-auto"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Random Idea</span>
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="relative">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Type any word (e.g. cloud, viper, angel, boba)..."
            maxLength={18}
            className="w-full px-4 py-3.5 text-base sm:text-lg font-medium text-slate-900 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => {
            const count =
              cat.key === 'all'
                ? generatedItems.length
                : generatedItems.filter((it) => it.category === cat.key).length;
            const active = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveTab(cat.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  active
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
        {filteredItems.map((item, idx) => {
          const copied = isCopied(item.name);
          const favorite = isFavorite(item.name);

          return (
            <div
              key={`${item.name}-${idx}`}
              className="group relative flex flex-col justify-between p-4 bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all"
            >
              {/* Card Header with Badges */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-purple-50 text-purple-700 border border-purple-100">
                  <Sparkles className="w-2.5 h-2.5" />
                  {item.tag}
                </span>

                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-[10px] font-mono font-medium px-1.5 py-0.5 rounded ${
                      item.isUsernameValid
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                    title={
                      item.isUsernameValid
                        ? 'Valid for official Roblox @username (3-20 chars, letters/numbers/_)'
                        : 'Recommended as in-game Roblox Display Name (up to 20 chars)'
                    }
                  >
                    {item.isUsernameValid ? 'Valid @User' : 'Display Tag'} • {item.charCount}c
                  </span>
                </div>
              </div>

              {/* Name Preview */}
              <div className="py-2.5 text-center overflow-x-auto select-all">
                <span className="font-bold text-slate-900 text-base sm:text-lg tracking-wide whitespace-nowrap">
                  {item.name}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(item.name, `Copied Roblox name "${item.name}"!`)
                  }
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white'
                  }`}
                  aria-label={`Copy ${item.name}`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    favorite ? removeFavorite(item.name) : addFavorite(item.name)
                  }
                  className={`p-1.5 rounded-xl border transition-all ${
                    favorite
                      ? 'bg-rose-50 border-rose-200 text-rose-600'
                      : 'border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                  }`}
                  title={favorite ? 'Remove from favorites' : 'Save to favorites'}
                  aria-label="Save to favorites"
                >
                  <Heart className={`w-4 h-4 ${favorite ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Roblox Guidelines Callout */}
      <div className="bg-purple-50/70 border border-purple-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-purple-950 leading-relaxed">
        <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold">Roblox Username Rules:</strong> Official Roblox usernames (@handles) must be
          3 to 20 characters long and can only include letters, numbers, and a single non-consecutive underscore.
          <strong> Display Names</strong> can be changed for free once every 7 days in your Account Settings and support
          spaces and aesthetic typography!
        </div>
      </div>
    </div>
  );
}
