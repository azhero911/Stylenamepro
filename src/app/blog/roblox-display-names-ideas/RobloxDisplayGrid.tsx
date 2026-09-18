'use client';

import React, { useState, useMemo } from 'react';
import { Copy, Check, Search, Sparkles, Heart, Flame, Users, Laugh } from 'lucide-react';
import { useClipboard } from '@/lib/hooks/useClipboard';

export interface DisplayNameItem {
  name: string;
  category: 'aesthetic' | 'boys' | 'girls' | 'matching' | 'funny';
  tag: string;
}

const DISPLAY_NAMES: DisplayNameItem[] = [
  // Aesthetic & Spaced
  { name: 'c l o u d y', category: 'aesthetic', tag: 'Spaced' },
  { name: 's o l a r', category: 'aesthetic', tag: 'Minimal' },
  { name: 'ᴠ ᴇ ʟ ᴠ ᴇ ᴛ', category: 'aesthetic', tag: 'Small Caps' },
  { name: 'm i l k  t e a', category: 'aesthetic', tag: 'Cafe' },
  { name: 'l u c i d', category: 'aesthetic', tag: 'Chill' },
  { name: 'e t h e r e a l', category: 'aesthetic', tag: 'Dreamy' },
  { name: 's t a r g a z e', category: 'aesthetic', tag: 'Night' },
  { name: 'a u r o r a', category: 'aesthetic', tag: 'Celestial' },
  { name: 'm i s t y', category: 'aesthetic', tag: 'Atmospheric' },
  { name: 's e r e n i t y', category: 'aesthetic', tag: 'Peaceful' },
  { name: 'ᴢ ᴇ ɴ ɪ ᴛ ʜ', category: 'aesthetic', tag: 'Clean' },
  { name: 'ʟ ᴜ ᴍ ɪ ɴ ᴀ', category: 'aesthetic', tag: 'Light' },
  { name: 'c o z y  v i b e s', category: 'aesthetic', tag: 'Spaced' },
  { name: 'h a z e l', category: 'aesthetic', tag: 'Soft' },
  { name: 'f r o s t', category: 'aesthetic', tag: 'Clean' },

  // Boys Display Tags
  { name: 'V O R T E X', category: 'boys', tag: 'PvP' },
  { name: 'S I L E N T', category: 'boys', tag: 'Stealth' },
  { name: 'Z E N I T H', category: 'boys', tag: 'Da Hood' },
  { name: 'P H A N T O M', category: 'boys', tag: 'Tryhard' },
  { name: 'G R I M', category: 'boys', tag: 'Dark' },
  { name: 'A S T R A L', category: 'boys', tag: 'Cosmic' },
  { name: 'R E A P E R', category: 'boys', tag: 'Arsenal' },
  { name: 'K U R O', category: 'boys', tag: 'Anime' },
  { name: 'C I N D E R', category: 'boys', tag: 'Minimal' },
  { name: 'S O L I S', category: 'boys', tag: 'Clean' },
  { name: 'O N Y X', category: 'boys', tag: 'Shadow' },
  { name: 'E C L I P S E', category: 'boys', tag: 'Dark' },

  // Girls Display Tags
  { name: 'p e a c h y', category: 'girls', tag: 'Sweet' },
  { name: 'c h e r r i', category: 'girls', tag: 'Cute' },
  { name: 's o f t i e', category: 'girls', tag: 'Pastel' },
  { name: 'b o b a', category: 'girls', tag: 'Cafe' },
  { name: 'h o n e y', category: 'girls', tag: 'Soft' },
  { name: 'l a t t e', category: 'girls', tag: 'Cozy' },
  { name: 'd a i s y', category: 'girls', tag: 'Floral' },
  { name: 'f a i r y', category: 'girls', tag: 'Fairycore' },
  { name: 'v a n i l l a', category: 'girls', tag: 'Delicate' },
  { name: 'b l o s s o m', category: 'girls', tag: 'Spring' },
  { name: 'a n g e l', category: 'girls', tag: 'Heavenly' },
  { name: 'c l o u d', category: 'girls', tag: 'Dreamy' },

  // Duo & Matching
  { name: 'Sun & Moon', category: 'matching', tag: 'Celestial Duo' },
  { name: 'Angel & Demon', category: 'matching', tag: 'Opposites' },
  { name: 'Milk & Honey', category: 'matching', tag: 'Sweet Duo' },
  { name: 'Lost & Found', category: 'matching', tag: 'Pair' },
  { name: 'Yin & Yang', category: 'matching', tag: 'Balance' },
  { name: 'Coffee & Tea', category: 'matching', tag: 'Cafe Duo' },
  { name: 'Star & Sky', category: 'matching', tag: 'Space Duo' },
  { name: 'Fire & Ice', category: 'matching', tag: 'Elemental' },
  { name: 'Butter & Toast', category: 'matching', tag: 'Funny Duo' },
  { name: 'Peanut & Jelly', category: 'matching', tag: 'Classic Pair' },

  // Funny & Meme
  { name: 'LaggingIn4K', category: 'funny', tag: 'Ping Troll' },
  { name: 'DefinitelyNotNoob', category: 'funny', tag: 'Sarcastic' },
  { name: 'TaxEvader777', category: 'funny', tag: 'Satire' },
  { name: 'WifiWentOut', category: 'funny', tag: 'Relatable' },
  { name: 'Loading...', category: 'funny', tag: 'Status' },
  { name: 'CtrlAltDefeat', category: 'funny', tag: 'Gamer Joke' },
  { name: 'Error404Found', category: 'funny', tag: 'Tech Troll' },
  { name: 'PressAltF4', category: 'funny', tag: 'Old School' },
  { name: 'Ping999ms', category: 'funny', tag: 'Slow' },
  { name: 'AfkEatingPizza', category: 'funny', tag: 'Snack Break' },
];

export function RobloxDisplayGrid() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { copyToClipboard, isCopied } = useClipboard();

  const categories = [
    { key: 'all', label: 'All Displays', icon: Sparkles },
    { key: 'aesthetic', label: 'Aesthetic & Spaced', icon: Sparkles },
    { key: 'boys', label: 'Boys Display', icon: Flame },
    { key: 'girls', label: 'Girls Display', icon: Heart },
    { key: 'matching', label: 'Duo & Matching', icon: Users },
    { key: 'funny', label: 'Funny & Meme', icon: Laugh },
  ];

  const filteredItems = useMemo(() => {
    let result = DISPLAY_NAMES;
    if (activeCategory !== 'all') {
      result = result.filter((it) => it.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (it) =>
          it.name.toLowerCase().includes(q) ||
          it.tag.toLowerCase().includes(q) ||
          it.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, search]);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-7 space-y-6 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
            Interactive Roblox Display Names Directory
          </span>
          <h3 className="text-xl font-black text-slate-900">
            Browse & Copy 50+ Aesthetic Display Names
          </h3>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-60">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search display names..."
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {categories.map((cat) => {
          const count =
            cat.key === 'all'
              ? DISPLAY_NAMES.length
              : DISPLAY_NAMES.filter((it) => it.category === cat.key).length;
          const active = activeCategory === cat.key;
          const Icon = cat.icon;

          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                active
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>
                {cat.label} ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredItems.map((item, idx) => {
          const copied = isCopied(item.name);
          const charLen = Array.from(item.name).length;

          return (
            <div
              key={`${item.name}-${idx}`}
              className="group flex flex-col justify-between p-3.5 bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1.5">
                <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-semibold border border-purple-100">
                  {item.tag}
                </span>
                <span className="font-mono text-slate-400">{charLen}/20 chars</span>
              </div>

              <div className="py-2 text-center overflow-x-auto select-all">
                <span className="font-bold text-slate-900 text-base tracking-wide whitespace-nowrap">
                  {item.name}
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  copyToClipboard(item.name, `Copied display name "${item.name}"!`)
                }
                className={`mt-2 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white'
                }`}
                aria-label={`Copy display name ${item.name}`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Name</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
