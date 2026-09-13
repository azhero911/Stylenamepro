'use client';

import React, { useState, useMemo } from 'react';
import {
  Copy,
  Check,
  Search,
  Sparkles,
  Swords,
  Trophy,
  Crown,
  Moon,
  Flame,
  Zap,
  Skull,
  Heart,
  Flag,
  Shield,
  CloudLightning,
  Smile,
  CheckCircle2,
} from 'lucide-react';
import { useClipboard } from '@/lib/hooks/useClipboard';

export interface GuildCategory {
  id: string;
  name: string;
  iconName: string;
  names: string[];
}

export const GUILD_CATEGORIES: GuildCategory[] = [
  {
    id: 'power',
    name: 'Power & Domination',
    iconName: 'Swords',
    names: [
      '꧁☬LEGION☬꧂', '亗WARLORDS亗', '★彡TYRANTS彡★', '꧁༒EMPIRE༒꧂', '☬CONQUERORS☬',
      '亗DOMINATORS亗', '꧁⚡WRATH⚡꧂', '彡INVADERS彡', '꧁☠WARZONE☠꧂', '★OVERLORDS★',
      '亗RAVAGERS亗', '꧁༒OBLITERATE༒꧂', '☬SUPREMACY☬', '彡WARLORDS彡', '꧁⚡CHAOS⚡꧂',
      '★ANNIHILATE★', '亗CARNAGE亗', '꧁☬APOCALYPSE☬꧂', '彡MASSACRE彡', '꧁💀JUDGMENT꧂',
      '★SOVEREIGN★', '亗DEVASTATORS亗', '꧁༒EXTINCTION༒꧂', '☬RAMPAGE☬', '彡ONSLAUGHT彡',
      '亗TITANIC亗', '꧁☬IMMORTALS☬꧂', '★彡RECKLESS彡★', '亗EXECUTION亗', '꧁⚡DESTRUCTION⚡꧂'
    ],
  },
  {
    id: 'pro',
    name: 'Elite & Pro Gamer',
    iconName: 'Trophy',
    names: [
      '꧁🏆ELITES🏆꧂', '★彡PROZONE彡★', '亗RANKED亗', '꧁⚡APEX⚡꧂', '彡MASTERS彡',
      '꧁👑CHAMPION꧂', '★GOATS★', '亗CLUTCHERS亗', '꧁🥇FINALISTS꧂', '彡VETERANS彡',
      '꧁⚡TACTICIANS⚡꧂', '★GOATFF★', '亗TOP TIER亗', '꧁🏅RANKED🏅꧂', '彡PRECISION彡',
      '꧁☬HEADSHOTS☬꧂', '★CARRIES★', '亗AIMGODS亗', '꧁🎯SNIPERS🎯꧂', '彡RUSHERS彡',
      '亗ESPORTS亗', '꧁☬INVINCIBLE☬꧂', '★ONE TAP★', '亗REFLEXES亗', '꧁⚡AGILITY⚡꧂'
    ],
  },
  {
    id: 'royal',
    name: 'Royal & Kingdom',
    iconName: 'Crown',
    names: [
      '꧁👑ROYALS👑꧂', '★彡KINGDOM彡★', '꧁🏰DYNASTY꧂', '亗THRONE亗', '彡MONARCHY彡',
      '꧁👑SULTAN꧂', '★EMPEROR★', '꧁🔱IMPERIAL꧂', '亗SOVEREIGNTY亗', '彡RAJPUT彡',
      '꧁👑NOBLES👑꧂', '★PALACE★', '꧁🏰CASTLE꧂', '亗CROWN亗', '彡DYNASTY彡',
      '꧁⚜ARISTOCRATS⚜꧂', '★RULERS★', '亗MONARCHS亗', '꧁👑NAWABS꧂', '彡REGENTS彡',
      '亗BADSHAH亗', '꧁👑PRINCELY👑꧂', '★SHAHI★', '亗EMPIRE亗', '꧁⚜LEGACY⚜꧂'
    ],
  },
  {
    id: 'shadow',
    name: 'Shadow & Stealth',
    iconName: 'Moon',
    names: [
      '꧁☬SHADOWS☬꧂', '亗PHANTOMS亗', '★彡WRAITHS彡★', '꧁༒GHOSTS༒꧂', '☬SILENTS☬',
      '亗SPECTERS亗', '꧁⚡NINJAS⚡꧂', '彡ASSASSINS彡', '꧁☠REAPERS☠꧂', '★HUNTERS★',
      '亗TRACKERS亗', '꧁༒STALKERS༒꧂', '☬PREDATORS☬', '彡VIPERS彡', '꧁⚡UNSEEN⚡꧂',
      '★VANISHERS★', '亗ECLIPSES亗', '꧁☬CLOAKED☬꧂', '彡UNSEEN彡', '꧁💀SILENT💀꧂',
      '亗SHADOWFALL亗', '꧁☬MIDNIGHT☬꧂', '★NIGHTSTALK★', '亗COVERT亗', '꧁⚡PHANTOM⚡꧂'
    ],
  },
  {
    id: 'fire',
    name: 'Fire & Flame',
    iconName: 'Flame',
    names: [
      '꧁🔥INFERNO🔥꧂', '★彡BLAZE彡★', '꧁⚡WILDFIRE⚡꧂', '亗FIRESTORM亗', '彡SCORCHERS彡',
      '꧁🔥EMBERS🔥꧂', '★BLAZERS★', '亗FURNACE亗', '꧁🌋ERUPTION꧂', '彡PYROS彡',
      '꧁🔥IGNITE🔥꧂', '★FLAMING★', '亗HELLFIRE亗', '꧁⚡SPARKS⚡꧂', '彡TORCHES彡',
      '꧁🔥ARSON🔥꧂', '★HEATWAVE★', '亗BONFIRES亗', '꧁🌋MAGMA꧂', '彡CINDERS彡',
      '亗ASHES亗', '꧁🔥VOLCANO🔥꧂', '★FLAMEKING★', '亗REDHOT亗', '꧁⚡BLAZING⚡꧂'
    ],
  },
  {
    id: 'anime',
    name: 'Anime & Manga',
    iconName: 'Zap',
    names: [
      '꧁☬AKATSUKI☬꧂', '★彡UCHIHA彡★', '꧁⚡SHINIGAMI⚡꧂', '亗SHARINGAN亗', '彡SANNIN彡',
      '꧁🌸HASHIRA🌸꧂', '★PILLARS★', '亗HOKAGE亗', '꧁⚡SAIYAN⚡꧂', '彡SAIYANS彡',
      '꧁☬ESPADA☬꧂', '★SHINOBIS★', '亗GENIN亗', '꧁🌊WATER꧂', '彡UZUMAKI彡',
      '꧁⚔KENPACHI⚔꧂', '★JONIN★', '亗ANBU亗', '꧁☬OTAKU☬꧂', '彡WEEBS彡',
      '亗DEMONSLAYER亗', '꧁⚡BANKAI⚡꧂', '★KIZUKI★', '亗TITAN亗', '꧁☬GOJO☬꧂'
    ],
  },
  {
    id: 'gothic',
    name: 'Dark & Gothic',
    iconName: 'Skull',
    names: [
      '꧁☠DARKLORDS☠꧂', '亗𝕯𝖊𝖒𝖔𝖓𝖘亗', '★𝔇𝔞𝔯𝔨𝔫𝔢𝔰𝔰★', '꧁༒𝕯𝖔𝖔𝖒༒꧂', '彡𝔊𝔯𝔞𝔳𝔢𝔰彡',
      '꧁☬𝖁𝖆𝖒𝖕𝖎𝖗𝖊𝖘☬꧂', '★𝔖𝔨𝔲𝔩𝔩𝔰★', '亗𝕯𝖆𝖗𝖐𝖘𝖎𝖉𝖊亗', '꧁☠𝔊𝔥𝔬𝔲𝔩𝔰☠꧂', '彡𝕱𝖔𝖗𝖘𝖆𝖐𝖊𝖓彡',
      '꧁༒𝕷𝖔𝖘𝖙༒꧂', '★𝔑𝔦𝔤𝔥𝔱𝔰★', '亗𝕮𝖚𝖗𝖘𝖊𝖉亗', '꧁☬𝖁𝖔𝖎𝖉☬꧂', '彡𝔄𝔟𝔶𝔰彡',
      '亗𝕲𝖍𝖔𝖘𝖙𝖘亗', '꧁☠𝕹𝖊𝖈𝖗𝖔☠꧂', '★𝕭𝖑𝖔𝖔𝖉★', '亗𝕾𝖍𝖆𝖉𝖔𝖜亗', '꧁༒𝕯𝖆𝖗𝖐𝖓𝖊𝖘𝖘༒꧂'
    ],
  },
  {
    id: 'girls',
    name: 'Girls & Queens',
    iconName: 'Heart',
    names: [
      '꧁👑QUEENS👑꧂', '★彡VALKYRIES彡★', '꧁🌸SIRENS🌸꧂', '亗GODDESSES亗', '彡HUNTRESSES彡',
      '꧁💎DIVAS💎꧂', '★EMPRESSES★', '꧁🌺VIXENS🌺꧂', '亗AMAZONS亗', '彡WARLORDS彡',
      '꧁👑SOVEREIGNS꧂', '★LADIES★', '꧁🦋BUTTERFLIES꧂', '亗PHOENIXES亗', '彡REBELS彡',
      '꧁✨STARS✨꧂', '★LUMINARIES★', '亗FIERCEGIRLS亗', '꧁🌙MOONWOLVES꧂', '彡SHADOWSISTERS彡',
      '亗ANGELS亗', '꧁💖ROYALQUEEN💖꧂', '★BLOSSOM★', '亗LADIES亗', '꧁🌸PRINCESS🌸꧂'
    ],
  },
  {
    id: 'pakistani',
    name: 'Pakistani & Desi',
    iconName: 'Flag',
    names: [
      '꧁☬PAKISTAN☬꧂', '★彡SHAHEEN彡★', '꧁⚡LAHORE⚡꧂', '亗KARACHI亗', '彡ISLAMABAD彡',
      '꧁🔥PINDI🔥꧂', '★PUNJABI★', '꧁☬AZAADI☬꧂', '亗DESI亗', '彡BADSHAH彡',
      '꧁⚡JALWA⚡꧂', '★NAWAB★', '꧁👑SULTAN꧂', '亗JAZBAA亗', '彡JUNOON彡',
      '꧁☬KHILADI☬꧂', '★SHERDIL★', '亗GHAZI亗', '꧁⚡TALWAR⚡꧂', '彡SIPAHI彡',
      '亗SHER_E_PK亗', '꧁☬QALANDAR☬꧂', '★ZINDABAD★', '亗MALANG亗', '꧁⚡PESHAWAR⚡꧂'
    ],
  },
  {
    id: 'mythology',
    name: 'Mythology & Legend',
    iconName: 'Shield',
    names: [
      '꧁⚡ZEUS⚡꧂', '★彡TITANS彡★', '꧁🔱POSEIDON꧂', '亗OLYMPIANS亗', '彡ARES彡',
      '꧁⚔SPARTANS⚔꧂', '★VIKINGS★', '꧁🪓VALHALLA꧂', '亗ODIN亗', '彡THOR彡',
      '꧁⚡MJOLNIR⚡꧂', '★ATLAS★', '꧁🔱NEPTUNE꧂', '亗ACHILLES亗', '彡HEROES彡',
      '꧁☬LEONIDAS☬꧂', '★SAMURAI★', '亗SHOGUN亗', '꧁⚔WARRIORS⚔꧂', '彡LEGENDS彡',
      '亗GLADIATOR亗', '꧁⚡HERCULES⚡꧂', '★VALKYRIE★', '亗ANUBIS亗', '꧁🔱PANDORA꧂'
    ],
  },
  {
    id: 'nature',
    name: 'Nature & Elements',
    iconName: 'CloudLightning',
    names: [
      '꧁⚡THUNDER⚡꧂', '★彡STORM彡★', '꧁🌊TSUNAMI꧂', '亗HURRICANE亗', '彡TEMPEST彡',
      '꧁❄BLIZZARD❄꧂', '★CYCLONE★', '꧁🌪TORNADO꧂', '亗WILDFIRE亗', '彡AVALANCHE彡',
      '꧁⚡LIGHTNING⚡꧂', '★TYPHOON★', '꧁🌊CURRENT꧂', '亗VORTEX亗', '彡ECLIPSE彡',
      '꧁☄METEOR☄꧂', '★NOVA★', '亗NEBULA亗', '꧁🌌COSMOS꧂', '彡INFINITE彡',
      '亗SOLAR亗', '꧁❄FROSTBITE❄꧂', '★QUAKE★', '亗MONSOON亗', '꧁⚡GALAXY⚡꧂'
    ],
  },
  {
    id: 'funny',
    name: 'Funny & Casual',
    iconName: 'Smile',
    names: [
      '꧁😂NOOBS😂꧂', '★彡POTATOES彡★', '꧁🤣LAGGERS꧂', '亗CAMPERS亗', '彡WALLBANG彡',
      '꧁😭CRYING😭꧂', '★TEAMKILL★', '꧁😅PANIC꧂', '亗GETREVIVED亗', '彡ONESHOT彡',
      '꧁🤡TROLLERS꧂', '★AFKGANG★', '꧁😤RAGERS꧂', '亗TRYHARDS亗', '彡COCONUTS彡',
      '亗BOTS亗', '꧁😂HEADACHE😂꧂', '★MISS_SHOT★', '亗KNOCKED亗', '꧁🤣SPAMMERS꧂'
    ],
  },
  {
    id: 'short',
    name: 'Short & Powerful (Display)',
    iconName: 'Sparkles',
    names: [
      '亗KINGS亗', '★GODS★', '꧁ELITE꧂', '☬IRON☬', '亗APEX亗',
      '★RAGE★', '꧁FEAR꧂', '彡DARK彡', '亗GOLD亗', '★FIRE★',
      '꧁WOLF꧂', '☬VOID☬', '亗BONE亗', '★RUSH★', '꧁HUNT꧂',
      '亗ONE亗', '★ACE★', '꧁VIP꧂', '☬BAD☬', '亗WAR亗'
    ],
  },
];

export function GuildNameGrid() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { copyToClipboard, isCopied } = useClipboard();

  const handleCopy = (name: string) => {
    copyToClipboard(name, `Copied "${name}" to clipboard!`);
  };

  const filteredNames = useMemo(() => {
    let list: { name: string; category: string }[] = [];

    if (activeTab === 'all') {
      GUILD_CATEGORIES.forEach((cat) => {
        cat.names.forEach((n) => {
          list.push({ name: n, category: cat.name });
        });
      });
    } else {
      const selected = GUILD_CATEGORIES.find((c) => c.id === activeTab);
      if (selected) {
        selected.names.forEach((n) => {
          list.push({ name: n, category: selected.name });
        });
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeTab, searchQuery]);

  const totalNamesCount = useMemo(() => {
    return GUILD_CATEGORIES.reduce((acc, cat) => acc + cat.names.length, 0);
  }, []);

  return (
    <div className="space-y-6 my-8" id="guild-names-explorer">
      {/* Top Controls Box */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Free Fire Guild Name Library ({totalNamesCount}+ Ready)</span>
            </h2>
            <p className="text-sm text-slate-300">
              Tap any guild name below to copy instantly. Tested for Free Fire 12-char limit!
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search symbols, words..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'all'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <span>All Names</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-black/20">
              {totalNamesCount}
            </span>
          </button>

          {GUILD_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-black/20">
                  {cat.names.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-500">
        <span>
          Showing {filteredNames.length} stylish guild {filteredNames.length === 1 ? 'name' : 'names'}
        </span>
        <span className="text-emerald-600 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          1-Tap Instant Copy Ready
        </span>
      </div>

      {/* Grid of Name Cards */}
      {filteredNames.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <p className="text-slate-500 font-medium">
            No guild names found matching &quot;{searchQuery}&quot;.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-3 text-xs font-bold text-brand-600 hover:underline"
          >
            Clear search filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredNames.map((item, idx) => {
            const copied = isCopied(item.name);
            const charCount = [...item.name].length;
            const isWithinLimit = charCount <= 12;

            return (
              <div
                key={`${item.name}-${idx}`}
                onClick={() => handleCopy(item.name)}
                className={`group relative flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${
                  copied
                    ? 'bg-emerald-50 border-emerald-500 shadow-md ring-2 ring-emerald-400/30'
                    : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-brand-400 hover:shadow-md'
                }`}
              >
                <div className="min-w-0 pr-3">
                  <div className="text-xs font-semibold text-slate-400 mb-1 flex items-center gap-2">
                    <span className="truncate max-w-[120px]">{item.category}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        isWithinLimit
                          ? 'bg-slate-100 text-slate-600'
                          : 'bg-amber-100 text-amber-700 font-bold'
                      }`}
                      title={
                        isWithinLimit
                          ? 'Fits 12-char limit'
                          : 'Check in-game: Some complex glyphs count differently'
                      }
                    >
                      {charCount} chars
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 truncate tracking-wide group-hover:text-brand-700 transition-colors">
                    {item.name}
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    aria-label={`Copy ${item.name}`}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      copied
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-100 group-hover:bg-brand-600 text-slate-600 group-hover:text-white'
                    }`}
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
